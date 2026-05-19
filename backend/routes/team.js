import express from "express";
import TeamMember from "../models/TeamMember.js";
import StaffCounsellor from "../models/StaffCounsellor.js";
import authenticateAdmin from "../middleware/auth.js";
import asyncHandler from "../utils/asyncHandler.js";

const router = express.Router();

// ===== PUBLIC ROUTES (No Authentication) =====

// Get all committee members (public)
router.get("/committee-public", asyncHandler(async (req, res) => {
  const members = await TeamMember.find().sort({ createdAt: -1 });
  res.json(members);
}));

// Get staff counsellor (public)
router.get("/counsellor-public", asyncHandler(async (req, res) => {
  const counsellor = await StaffCounsellor.findOne();
  res.json(counsellor || null);
}));

// ===== CORE COMMITTEE ROUTES =====

// Get all committee members
router.get("/committee", authenticateAdmin, asyncHandler(async (req, res) => {
  const members = await TeamMember.find().sort({ createdAt: -1 });
  res.json(members);
}));

// Create new committee member
router.post("/committee", authenticateAdmin, asyncHandler(async (req, res) => {
  const { name, role, college, imageUrl } = req.body;

  // Validation
  if (!name || !role || !college) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const member = new TeamMember({
    name,
    role,
    college,
    imageUrl,
  });

  await member.save();
  res.status(201).json({ message: "Member added successfully", member });
}));

// Update committee member
router.put("/committee/:id", authenticateAdmin, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, role, college, imageUrl } = req.body;

  // Validation
  if (!name || !role || !college) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const member = await TeamMember.findByIdAndUpdate(
    id,
    { name, role, college, imageUrl },
    { new: true }
  );

  if (!member) {
    return res.status(404).json({ message: "Member not found" });
  }

  res.json({ message: "Member updated successfully", member });
}));

// Delete committee member
router.delete("/committee/:id", authenticateAdmin, asyncHandler(async (req, res) => {
  const { id } = req.params;

  const member = await TeamMember.findByIdAndDelete(id);

  if (!member) {
    return res.status(404).json({ message: "Member not found" });
  }

  res.json({ message: "Member deleted successfully" });
}));

// ===== STAFF COUNSELLOR ROUTES =====

// Get staff counsellor
router.get("/counsellor", authenticateAdmin, asyncHandler(async (req, res) => {
  const counsellor = await StaffCounsellor.findOne();
  res.json(counsellor || null);
}));

// Create or update staff counsellor
router.post("/counsellor", authenticateAdmin, asyncHandler(async (req, res) => {
  const { name, designation, department, college, email, phone, imageUrl } = req.body;

  // Validation
  if (!name || !department || !college || !email || !phone) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Check if counsellor already exists
  let counsellor = await StaffCounsellor.findOne();

  if (counsellor) {
    // Update existing
    counsellor = await StaffCounsellor.findByIdAndUpdate(
      counsellor._id,
      { name, designation, department, college, email, phone, imageUrl },
      { new: true }
    );
  } else {
    // Create new
    counsellor = new StaffCounsellor({
      name,
      designation: designation || "Staff Counsellor",
      department,
      college,
      email,
      phone,
      imageUrl,
    });
    await counsellor.save();
  }

  res.status(201).json({ message: "Counsellor saved successfully", counsellor });
}));

// Update staff counsellor
router.put("/counsellor/:id", authenticateAdmin, asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, designation, department, college, email, phone, imageUrl } = req.body;

  // Validation
  if (!name || !department || !college || !email || !phone) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const counsellor = await StaffCounsellor.findByIdAndUpdate(
    id,
    { name, designation, department, college, email, phone, imageUrl },
    { new: true }
  );

  if (!counsellor) {
    return res.status(404).json({ message: "Counsellor not found" });
  }

  res.json({ message: "Counsellor updated successfully", counsellor });
}));

export default router;