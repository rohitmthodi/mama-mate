import { useEffect, useState } from "react";
import { Baby, CalendarDays, HeartPulse, Clock3, Pencil } from "lucide-react";

import api from "../../../services/api.js";
import EditPregnancyForm from "./EditPregnancyForm";

const PrenatalTracking = () => {
  const [prenatal, setPrenatal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    lastMenstrualPeriod: "",
    pregnancyNumber: "",
    previousBirths: "",
    notes: "",
  });

  const fetchPrenatalTracking = async () => {
    try {
      const response = await api.get("/prenatal");

      console.log("Prenatal API Response:", response.data);

      setPrenatal(response.data.prenatal);
      setError("");
    } catch (error) {
      console.error("Fetch Prenatal Error:", error);

      if (error.response?.status === 404) {
        setError("No active pregnancy record found.");
      } else {
        setError("Unable to load your prenatal information.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrenatalTracking();
  }, []);

  const handleEdit = () => {
    setError("");

    setFormData({
      lastMenstrualPeriod: prenatal.lastMenstrualPeriod
        ? prenatal.lastMenstrualPeriod.split("T")[0]
        : "",
      pregnancyNumber: prenatal.pregnancyNumber || "",
      previousBirths: prenatal.previousBirths ?? "",
      notes: prenatal.notes || "",
    });

    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const response = await api.put("/pregnancy", {
        lastMenstrualPeriod: formData.lastMenstrualPeriod,

        pregnancyNumber: Number(formData.pregnancyNumber),

        previousBirths: formData.previousBirths
          ? Number(formData.previousBirths)
          : 0,

        notes: formData.notes,
      });

      console.log("Pregnancy Update Response:", response.data);

      const updatedPregnancy = response.data.pregnancy;

      setPrenatal((prev) => ({
        ...prev,

        lastMenstrualPeriod: updatedPregnancy.lastMenstrualPeriod,

        expectedDeliveryDate: updatedPregnancy.expectedDeliveryDate,

        pregnancyNumber: updatedPregnancy.pregnancyNumber,

        previousBirths: updatedPregnancy.previousBirths,

        notes: updatedPregnancy.notes,
      }));

      setIsEditing(false);
    } catch (error) {
      console.error("Update Pregnancy Error:", error);

      setError(
        error.response?.data?.message ||
          "Unable to update your pregnancy information.",
      );
    } finally {
      setSaving(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setError("");

      const response = await api.post("/pregnancy", {
        lastMenstrualPeriod: formData.lastMenstrualPeriod,
        pregnancyNumber: Number(formData.pregnancyNumber),
        previousBirths: formData.previousBirths
          ? Number(formData.previousBirths)
          : 0,
        notes: formData.notes,
      });

      console.log("Pregnancy Create Response:", response.data);

      await fetchPrenatalTracking();

      setIsEditing(false);
    } catch (error) {
      console.error("Create Pregnancy Error:", error);

      setError(
        error.response?.data?.message ||
          "Unable to create your pregnancy record.",
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm font-medium text-gray-500">
          Loading your prenatal information...
        </p>
      </div>
    );
  }

  if (error && !isEditing) {
    return (
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Prenatal Tracking
          </h1>

          <p className="mt-2 text-sm font-medium text-gray-500">
            Start tracking your pregnancy by adding your pregnancy information.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm sm:p-8">
          <div className="mx-auto max-w-xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#E8F5F5] text-[#00656B]">
              <Baby size={32} />
            </div>

            <h2 className="mt-5 text-xl font-bold text-gray-800">
              No Active Pregnancy
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
              Add your pregnancy information to start tracking your pregnancy
              progress, important dates, and other details.
            </p>

            <button
              type="button"
              onClick={() => {
                setError("");
                setFormData({
                  lastMenstrualPeriod: "",
                  pregnancyNumber: "",
                  previousBirths: "",
                  notes: "",
                });
                setIsEditing(true);
              }}
              className="mt-6 cursor-pointer rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:bg-secondary"
            >
              Add Pregnancy
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (isEditing) {
    return (
      <EditPregnancyForm
        formData={formData}
        error={error}
        saving={saving}
        handleChange={handleChange}
        handleUpdate={prenatal ? handleUpdate : handleCreate}
        setIsEditing={setIsEditing}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            Prenatal Tracking
          </h1>

          <p className="mt-2 text-sm font-medium text-gray-500">
            Track your pregnancy progress and important dates.
          </p>
        </div>

        <button
          type="button"
          onClick={handleEdit}
          className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-secondary sm:w-auto"
        >
          <Pencil size={17} />
          Edit Pregnancy
        </button>
      </div>

      {/* Pregnancy Progress */}
      <div className="rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#E8F5F5] text-[#00656B]">
            <Baby size={32} />
          </div>

          <div className="flex-1">
            <p className="text-sm font-medium text-gray-500">
              Current Pregnancy
            </p>

            <h2 className="mt-1 text-3xl font-bold text-gray-800">
              {prenatal.pregnancyWeek} weeks {prenatal.remainingDays} days
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Pregnancy progress toward 40 weeks
            </p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="rounded-2xl bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-700">
              Pregnancy Progress
            </h3>

            <span className="rounded-full bg-[#E8F5F5] px-3 py-1 text-sm font-bold text-[#00656B]">
              {Math.min(
                ((prenatal.pregnancyWeek + prenatal.remainingDays / 7) / 40) *
                  100,
                100,
              ).toFixed(1)}
              %
            </span>
          </div>

          <div className="mt-5">
            <div className="h-3 overflow-hidden rounded-full bg-gray-100">
              <div
                className="h-full rounded-full bg-[#00656B] transition-all duration-500"
                style={{
                  width: `${Math.min(
                    ((prenatal.pregnancyWeek + prenatal.remainingDays / 7) /
                      40) *
                      100,
                    100,
                  )}%`,
                }}
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-xs font-medium text-gray-400">
              <span>Week 1</span>
              <span>Week 40</span>
            </div>
          </div>
        </div>
      </div>

      {/* Pregnancy Information */}
      <div>
        <h2 className="mb-4 text-lg font-semibold text-gray-800">
          Pregnancy Information
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* LMP */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Last Menstrual Period
              </p>

              <CalendarDays size={20} className="text-[#00656B]" />
            </div>

            <h3 className="mt-3 text-lg font-bold text-gray-800">
              {new Date(prenatal.lastMenstrualPeriod).toLocaleDateString(
                "en-IN",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                },
              )}
            </h3>
          </div>

          {/* EDD */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Expected Delivery
              </p>

              <HeartPulse size={20} className="text-[#00656B]" />
            </div>

            <h3 className="mt-3 text-lg font-bold text-gray-800">
              {new Date(prenatal.expectedDeliveryDate).toLocaleDateString(
                "en-IN",
                {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                },
              )}
            </h3>
          </div>

          {/* Pregnancy Number */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-gray-500">
                Pregnancy Number
              </p>

              <Clock3 size={20} className="text-[#00656B]" />
            </div>

            <h3 className="mt-3 text-lg font-bold text-gray-800">
              Pregnancy {prenatal.pregnancyNumber}
            </h3>
          </div>
        </div>
      </div>

      {/* Previous Births */}
      <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center gap-4">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F5F5] text-[#00656B]">
            <HeartPulse size={21} />
          </div>

          <div>
            <p className="text-sm font-medium text-gray-500">Previous Births</p>

            <p className="mt-1 text-lg font-bold text-gray-800">
              {prenatal.previousBirths}
            </p>
          </div>
        </div>
      </div>

      {/* Notes */}
      {prenatal.notes && (
        <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
          <h2 className="text-lg font-semibold text-gray-800">Notes</h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            {prenatal.notes}
          </p>
        </div>
      )}
    </div>
  );
};

export default PrenatalTracking;
