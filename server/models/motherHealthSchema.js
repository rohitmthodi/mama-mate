import mongoose from "mongoose";

const motherHealthSchema = new mongoose.Schema(
  {
    mother: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    isPregnant: {
      type: Boolean,
      default: false,
    },

    pregnancyWeek: {
      type: Number,
      min: 1,
      max: 45,
      default: null,
    },

    expectedDeliveryDate: {
      type: Date,
      default: null,
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