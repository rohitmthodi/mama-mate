import Pregnancy from "../models/pregnancySchema.js";

export const createPregnancy = async (req, res) => {
  try {
    const motherId = req.user.userId;

    if (req.user.role !== "mother") {
      return res.status(403).json({
        message: "Only mothers can create pregnancy records",
      });
    }

    const existingPregnancy = await Pregnancy.findOne({
      mother: motherId,
      status: "active",
    });

    if (existingPregnancy) {
      return res.status(409).json({
        message: "Active pregnancy record already exists",
      });
    }

    const {
      lastMenstrualPeriod,
      expectedDeliveryDate,
      pregnancyNumber,
      previousBirths,
      notes,
    } = req.body;

    if (
      !lastMenstrualPeriod ||
      !expectedDeliveryDate ||
      !pregnancyNumber
    ) {
      return res.status(400).json({
        message:
          "Last menstrual period, expected delivery date and pregnancy number are required",
      });
    }

    const pregnancy = await Pregnancy.create({
      mother: motherId,
      lastMenstrualPeriod,
      expectedDeliveryDate,
      pregnancyNumber,
      previousBirths,
      notes,
    });

    return res.status(201).json({
      message: "Pregnancy record created successfully",
      pregnancy,
    });
  } catch (error) {
    console.error("Create Pregnancy Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};


export const getPregnancy = async (req, res) => {
  try {
    const motherId = req.user.userId;

    if (req.user.role !== "mother") {
      return res.status(403).json({
        message: "Only mothers can access pregnancy records",
      });
    }

    const pregnancy = await Pregnancy.findOne({
      mother: motherId,
      status: "active",
    });

    if (!pregnancy) {
      return res.status(404).json({
        message: "Pregnancy record not found",
      });
    }

    return res.status(200).json({
      message: "Pregnancy record fetched successfully",
      pregnancy,
    });
  } catch (error) {
    console.error("Get Pregnancy Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};