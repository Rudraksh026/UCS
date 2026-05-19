import express from "express";
import jwt from "jsonwebtoken";

const router = express.Router();

// Admin login route
router.post("/login", (req, res) => {
  try {
    const { password } = req.body;

    if (!password) {
      return res.status(400).json({ message: "Password required" });
    }

    // Compare password with the one in .env
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

    if (password !== adminPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { role: "admin", timestamp: Date.now() },
      process.env.JWT_SECRET || "your_secret_key_here",
      { expiresIn: "24h" }
    );

    res.json({ token, message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
