import express from "express";
import Event from "../models/Event.js";
import authenticateAdmin from "../middleware/auth.js";
import asyncHandler from "../utils/asyncHandler.js";

const router = express.Router();

// ===== PUBLIC ROUTES (No Authentication) =====

// Get events by type (public) - upcoming/past
// Must come before the general routes to avoid conflicts
router.get("/type/:type", asyncHandler(async (req, res) => {
  const { type } = req.params;

  if (!["upcoming", "past"].includes(type)) {
    return res.status(400).json({ message: "Invalid event type" });
  }

  const events = await Event.find({ eventType: type }).sort({ date: -1 });
  res.json(events);
}));

// Get all events (public)
router.get("/", asyncHandler(async (req, res) => {
  const events = await Event.find().sort({ date: -1 });
  res.json(events);
}));

// ===== ADMIN ROUTES (Authentication Required) =====

// Create new event (admin)
router.post("/", authenticateAdmin, asyncHandler(async (req, res) => {
  const { title, category, date, time, venue, description, image, attendees, eventType } = req.body;

  // Validation
  if (!title || !category || !date || !time || !venue || !description || !eventType) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const event = new Event({
    title,
    category,
    date,
    time,
    venue,
    description,
    image,
    attendees: attendees || 0,
    eventType,
  });

  await event.save();
  res.status(201).json({ message: "Event created successfully", event });
}));

// Update event (admin)
router.put("/:id", authenticateAdmin, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { title, category, date, time, venue, description, image, attendees, eventType } = req.body;

  // Validation
  if (!title || !category || !date || !time || !venue || !description || !eventType) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const event = await Event.findByIdAndUpdate(
    id,
    { title, category, date, time, venue, description, image, attendees, eventType },
    { new: true }
  );

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json({ message: "Event updated successfully", event });
}));

// Delete event (admin)
router.delete("/:id", authenticateAdmin, asyncHandler(async (req, res) => {
  const { id } = req.params;

  const event = await Event.findByIdAndDelete(id);

  if (!event) {
    return res.status(404).json({ message: "Event not found" });
  }

  res.json({ message: "Event deleted successfully" });
}));

export default router;