import express from "express";
import Event from "../models/Event.js";
import authenticateAdmin from "../middleware/auth.js";

const router = express.Router();

// Get all events
router.get("/", authenticateAdmin, async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error: error.message });
  }
});

// Get events by type (upcoming/past)
router.get("/:type", authenticateAdmin, async (req, res) => {
  try {
    const { type } = req.params;

    if (!["upcoming", "past"].includes(type)) {
      return res.status(400).json({ message: "Invalid event type" });
    }

    const events = await Event.find({ eventType: type }).sort({ date: -1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch events", error: error.message });
  }
});

// Create new event
router.post("/", authenticateAdmin, async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: "Failed to create event", error: error.message });
  }
});

// Update event
router.put("/:id", authenticateAdmin, async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: "Failed to update event", error: error.message });
  }
});

// Delete event
router.delete("/:id", authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const event = await Event.findByIdAndDelete(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete event", error: error.message });
  }
});

export default router;
