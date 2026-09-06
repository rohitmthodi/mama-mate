import MotherHealth from "../models/motherHealthSchema.js";

export const createMotherHealth = async (req, res) => {
  try {
    const motherId = req.user.userId;

    // Make sure only mothers can create health records
    if (req.user.role !== "mother") {
      return res.status(403).json({
        message: "Only mothers can create health records",
      });
    }

    // Prevent duplicate health records
    const existingHealth = await MotherHealth.findOne({
      mother: motherId,
    });

    if (existingHealth) {
      return res.status(409).json({
        message: "Health record already exists",
      });
    }

    const {
      isPregnant,
      pregnancyWeek,
      expectedDeliveryDate,
      bloodGroup,
      weight,
      bloodPressure,
      hemoglobin,
    } = req.body;

    const health = await MotherHealth.create({
      mother: motherId,
      isPregnant,
      pregnancyWeek,
      expectedDeliveryDate,
      bloodGroup,
      weight,
      bloodPressure,
      hemoglobin,
    });

    return res.status(201).json({
      message: "Health record created successfully",
      health,
    });
  } catch (error) {
    console.error("Create Mother Health Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};

export const getMotherHealth = async (req, res) => {
  try {
    const motherId = req.user.userId;

    if (req.user.role !== "mother") {
      return res.status(403).json({
        message: "Only mothers can access health records",
      });
    }

    const health = await MotherHealth.findOne({
      mother: motherId,
    });

    if (!health) {
      return res.status(404).json({
        message: "Health record not found",
      });
    }

    return res.status(200).json({
      message: "Health record fetched successfully",
      health,
    });
  } catch (error) {
    console.error("Get Mother Health Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};