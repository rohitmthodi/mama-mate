import Pregnancy from "../models/pregnancySchema.js";

export const getPrenatalTracking = async (req, res) => {
  try {
    const motherId = req.user.userId;

    if (req.user.role !== "mother") {
      return res.status(403).json({
        message: "Only mothers can access prenatal tracking",
      });
    }

    const pregnancy = await Pregnancy.findOne({
      mother: motherId,
      status: "active",
    });

    if (!pregnancy) {
      return res.status(404).json({
        message: "Active pregnancy record not found",
      });
    }

    const today = new Date();
    const lmp = new Date(pregnancy.lastMenstrualPeriod);

    const differenceInMilliseconds = today - lmp;

    const totalDays = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24),
    );

    const pregnancyWeek = Math.floor(totalDays / 7);

    const remainingDays = totalDays % 7;

    return res.status(200).json({
      message: "Prenatal tracking fetched successfully",

      prenatal: {
        pregnancyId: pregnancy._id,
        pregnancyWeek,
        remainingDays,
        lastMenstrualPeriod: pregnancy.lastMenstrualPeriod,
        expectedDeliveryDate: pregnancy.expectedDeliveryDate,
        pregnancyNumber: pregnancy.pregnancyNumber,
        previousBirths: pregnancy.previousBirths,
        status: pregnancy.status,
        notes: pregnancy.notes,
      },
    });
  } catch (error) {
    console.error("Get Prenatal Tracking Error:", error);

    return res.status(500).json({
      message: "Server error",
    });
  }
};