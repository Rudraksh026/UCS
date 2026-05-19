import mongoose from "mongoose";

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    venue: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      default: "",
    },
    attendees: {
      type: Number,
      default: 0,
    },
    eventType: {
      type: String,
      enum: ["upcoming", "past"],
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Event", eventSchema);
