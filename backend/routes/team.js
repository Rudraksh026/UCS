import express from "express";
import TeamMember from "../models/TeamMember.js";
import StaffCounsellor from "../models/StaffCounsellor.js";
import authenticateAdmin from "../middleware/auth.js";

const router = express.Router();

// ===== PUBLIC ROUTES (No Authentication) =====

// Get all committee members (public)
router.get("/committee-public", async (req, res) => {
  try {
    const members = await TeamMember.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch members", error: error.message });
  }
});

// Get staff counsellor (public)
router.get("/counsellor-public", async (req, res) => {
  try {
    const counsellor = await StaffCounsellor.findOne();
    res.json(counsellor || null);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch counsellor", error: error.message });
  }
});

// ===== CORE COMMITTEE ROUTES =====

// Get all committee members
router.get("/committee", authenticateAdmin, async (req, res) => {
  try {
    const members = await TeamMember.find().sort({ createdAt: -1 });
    res.json(members);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch members", error: error.message });
  }
});

// Create new committee member
router.post("/committee", authenticateAdmin, async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: "Failed to add member", error: error.message });
  }
});

// Update committee member
router.put("/committee/:id", authenticateAdmin, async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: "Failed to update member", error: error.message });
  }
});

// Delete committee member
router.delete("/committee/:id", authenticateAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const member = await TeamMember.findByIdAndDelete(id);

    if (!member) {
      return res.status(404).json({ message: "Member not found" });
    }

    res.json({ message: "Member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete member", error: error.message });
  }
});

// ===== STAFF COUNSELLOR ROUTES =====

// Get staff counsellor
router.get("/counsellor", authenticateAdmin, async (req, res) => {
  try {
    const counsellor = await StaffCounsellor.findOne();
    res.json(counsellor || null);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch counsellor", error: error.message });
  }
});

// Create or update staff counsellor
router.post("/counsellor", authenticateAdmin, async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: "Failed to save counsellor", error: error.message });
  }
});

// Update staff counsellor
router.put("/counsellor/:id", authenticateAdmin, async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ message: "Failed to update counsellor", error: error.message });
  }
});

export default router;
