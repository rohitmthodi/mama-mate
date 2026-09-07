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
      pregnancyNumber,
      previousBirths,
      notes,
    } = req.body;

    if (!lastMenstrualPeriod || !pregnancyNumber) {
      return res.status(400).json({
        message:
          "Last menstrual period and pregnancy number are required",
      });
    }

    const lmpDate = new Date(lastMenstrualPeriod);

    if (Number.isNaN(lmpDate.getTime())) {
      return res.status(400).json({
        message: "Invalid last menstrual period date",
      });
    }

    const expectedDeliveryDate = new Date(lmpDate);

    expectedDeliveryDate.setDate(
      expectedDeliveryDate.getDate() + 280,
    );

    const pregnancy = await Pregnancy.create({
      mother: motherId,
      lastMenstrualPeriod: lmpDate,
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

export const updatePregnancy = async (req, res) => {
  try {
    const motherId = req.user.userId;

    if (req.user.role !== "mother") {
      return res.status(403).json({
        message: "Only mothers can update pregnancy records",
      });
    }

    const {
      lastMenstrualPeriod,
      pregnancyNumber,
      previousBirths,
      notes,
    } = req.body;

    if (!lastMenstrualPeriod || !pregnancyNumber) {
      return res.status(400).json({
        message:
          "Last menstrual period and pregnancy number are required",
      });
    }

    const lmpDate = new Date(lastMenstrualPeriod);

    if (Number.isNaN(lmpDate.getTime())) {
      return res.status(400).json({
        message: "Invalid last menstrual period date",
      });
    }

    const expectedDeliveryDate = new Date(lmpDate);

    expectedDeliveryDate.setDate(
      expectedDeliveryDate.getDate() + 280,
    );

    const pregnancy = await Pregnancy.findOneAndUpdate(
      {
        mother: motherId,
        status: "active",
      },
      {
        lastMenstrualPeriod: lmpDate,
        expectedDeliveryDate,
        pregnancyNumber,
        previousBirths,
        notes,
      },
      {
        returnDocument: "after",
        runValidators: true,
      },
    );

    if (!pregnancy) {
      return res.status(404).json({
        message: "Active pregnancy record not found",
      });
    }

    return res.status(200).json({
      message: "Pregnancy record updated successfully",
      pregnancy,
    });
  } catch (error) {
    console.error("Update Pregnancy Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};