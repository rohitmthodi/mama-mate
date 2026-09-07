import mongoose from "mongoose";

const pregnancySchema = new mongoose.Schema(
  {
    mother: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    lastMenstrualPeriod: {
      type: Date,
      required: true,
    },

    expectedDeliveryDate: {
      type: Date,
      required: true,
    },

    pregnancyNumber: {
      type: Number,
      required: true,
      min: 1,
    },

    previousBirths: {
      type: Number,
      default: 0,
      min: 0,
    },

    status: {
      type: String,
      enum: ["active", "completed", "cancelled"],
      default: "active",
    },

    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Pregnancy = mongoose.model("Pregnancy", pregnancySchema);

export default Pregnancy;