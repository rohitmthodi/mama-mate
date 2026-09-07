import mongoose from "mongoose";

const motherHealthSchema = new mongoose.Schema(
  {
    mother: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    bloodGroup: {
      type: String,
      default: "",
      trim: true,
    },

    weight: {
      type: Number,
      default: null,
    },

    bloodPressure: {
      type: String,
      default: "",
      trim: true,
    },

    hemoglobin: {
      type: Number,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const MotherHealth = mongoose.model("MotherHealth", motherHealthSchema);

export default MotherHealth;