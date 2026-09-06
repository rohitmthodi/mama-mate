import { useEffect, useState } from "react";
import {
  HeartPulse,
  Scale,
  Activity,
  Droplets,
  CalendarDays,
  Pencil,
  X,
} from "lucide-react";

import api from "../../services/api";

const MyHealth = () => {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    isPregnant: false,
    pregnancyWeek: "",
    expectedDeliveryDate: "",
    bloodGroup: "",
    weight: "",
    bloodPressure: "",
    hemoglobin: "",
  });

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const response = await api.get("/mother-health");

        console.log("Mother Health API Response:", response.data);

        setHealth(response.data.health);
      } catch (error) {
        console.error("Fetch Health Error:", error);

        if (error.response?.status === 404) {
          setError("No health record found.");
        } else {
          setError("Unable to load your health information.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHealth();
  }, []);

  const handleEdit = () => {
    setSuccess("");
    setError("");

    setFormData({
      isPregnant: health.isPregnant || false,
      pregnancyWeek: health.pregnancyWeek || "",
      expectedDeliveryDate: health.expectedDeliveryDate
        ? health.expectedDeliveryDate.split("T")[0]
        : "",
      bloodGroup: health.bloodGroup || "",
      weight: health.weight || "",
      bloodPressure: health.bloodPressure || "",
      hemoglobin: health.hemoglobin || "",
    });

    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setSaving(true);
      setSuccess("");
      setError("");

      const response = await api.put("/mother-health", {
        isPregnant: formData.isPregnant,
        pregnancyWeek: formData.pregnancyWeek
          ? Number(formData.pregnancyWeek)
          : null,
        expectedDeliveryDate: formData.expectedDeliveryDate || null,
        bloodGroup: formData.bloodGroup,
        weight: formData.weight ? Number(formData.weight) : null,
        bloodPressure: formData.bloodPressure,
        hemoglobin: formData.hemoglobin ? Number(formData.hemoglobin) : null,
      });

      setHealth(response.data.health);

      setSuccess("Health information updated successfully.");

      setIsEditing(false);
    } catch (error) {
      console.error("Update Health Error:", error);

      setError(
        error.response?.data?.message ||
          "Unable to update your health information.",
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-gray-500">
          Loading your health information...
        </p>
      </div>
    );
  }

  if (error && !isEditing) {
    return (
      <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">
        <HeartPulse size={40} className="mx-auto text-[#00656B]" />

        <h2 className="mt-4 text-lg font-semibold text-gray-800">{error}</h2>

        <p className="mt-2 text-sm text-gray-500">
          Your health information will appear here once it is available.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
            My Health
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View and manage your maternal health information.
          </p>
        </div>

        {!isEditing && (
          <button
            type="button"
            onClick={handleEdit}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#00656B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#00565B] sm:w-auto"
          >
            <Pencil size={17} />
            Edit Health
          </button>
        )}
      </div>

      {/* Success Message */}
      {success && !isEditing && (
        <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
          {success}
        </div>
      )}

      {/* Edit Form */}
      {isEditing ? (
        <form
          onSubmit={handleUpdate}
          className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6"
        >
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Edit Health Information
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Update your current health information.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close edit form"
            >
              <X size={20} />
            </button>
          </div>

          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Pregnancy */}
            <div className="sm:col-span-2">
              <label className="flex cursor-pointer items-center gap-3 rounded-xl border p-4">
                <input
                  type="checkbox"
                  name="isPregnant"
                  checked={formData.isPregnant}
                  onChange={handleChange}
                  className="h-4 w-4 accent-[#00656B]"
                />

                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    Currently Pregnant
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Check this if you are currently pregnant.
                  </p>
                </div>
              </label>
            </div>

            {/* Pregnancy Week */}
            {formData.isPregnant && (
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Pregnancy Week
                </label>

                <input
                  type="number"
                  name="pregnancyWeek"
                  min="1"
                  max="45"
                  value={formData.pregnancyWeek}
                  onChange={handleChange}
                  placeholder="e.g. 24"
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-[#00656B] focus:ring-2 focus:ring-[#00656B]/10"
                />
              </div>
            )}

            {/* Expected Delivery */}
            {formData.isPregnant && (
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Expected Delivery Date
                </label>

                <input
                  type="date"
                  name="expectedDeliveryDate"
                  value={formData.expectedDeliveryDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-[#00656B] focus:ring-2 focus:ring-[#00656B]/10"
                />
              </div>
            )}

            {/* Blood Group */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Blood Group
              </label>

              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[#00656B] focus:ring-2 focus:ring-[#00656B]/10"
              >
                <option value="">Select blood group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            {/* Weight */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Weight (kg)
              </label>

              <input
                type="number"
                name="weight"
                min="0"
                step="0.1"
                value={formData.weight}
                onChange={handleChange}
                placeholder="e.g. 62"
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-[#00656B] focus:ring-2 focus:ring-[#00656B]/10"
              />
            </div>

            {/* Blood Pressure */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Blood Pressure
              </label>

              <input
                type="text"
                name="bloodPressure"
                value={formData.bloodPressure}
                onChange={handleChange}
                placeholder="e.g. 120/80"
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-[#00656B] focus:ring-2 focus:ring-[#00656B]/10"
              />
            </div>

            {/* Hemoglobin */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Hemoglobin (g/dL)
              </label>

              <input
                type="number"
                name="hemoglobin"
                min="0"
                step="0.1"
                value={formData.hemoglobin}
                onChange={handleChange}
                placeholder="e.g. 11.5"
                className="w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:border-[#00656B] focus:ring-2 focus:ring-[#00656B]/10"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="rounded-xl border px-5 py-3 text-sm font-semibold text-gray-600 transition hover:bg-gray-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={saving}
              className="rounded-xl bg-[#00656B] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00565B] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>
      ) : (
        <>
          {/* Pregnancy Status */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E8F5F5] text-[#00656B]">
                <HeartPulse size={23} />
              </div>

              <div>
                <p className="text-sm font-medium text-gray-500">
                  Pregnancy Status
                </p>

                <h2 className="mt-1 text-xl font-bold text-gray-800">
                  {health.isPregnant ? "Currently Pregnant" : "Not Pregnant"}
                </h2>

                {health.isPregnant && health.pregnancyWeek && (
                  <p className="mt-1 text-sm text-gray-500">
                    Pregnancy Week:{" "}
                    <span className="font-semibold text-[#00656B]">
                      {health.pregnancyWeek}
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Health Overview */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-800">
              Health Overview
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Blood Group */}
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Blood Group</p>

                  <Droplets size={20} className="text-[#00656B]" />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-gray-800">
                  {health.bloodGroup || "--"}
                </h3>
              </div>

              {/* Weight */}
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Weight</p>

                  <Scale size={20} className="text-[#00656B]" />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-gray-800">
                  {health.weight ? `${health.weight} kg` : "--"}
                </h3>
              </div>

              {/* Blood Pressure */}
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Blood Pressure</p>

                  <Activity size={20} className="text-[#00656B]" />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-gray-800">
                  {health.bloodPressure || "--"}
                </h3>
              </div>

              {/* Hemoglobin */}
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">Hemoglobin</p>

                  <HeartPulse size={20} className="text-[#00656B]" />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-gray-800">
                  {health.hemoglobin ? `${health.hemoglobin} g/dL` : "--"}
                </h3>
              </div>
            </div>
          </div>

          {/* Expected Delivery */}
          {health.isPregnant && (
            <div className="rounded-2xl border bg-white p-5 shadow-sm sm:p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E8F5F5] text-[#00656B]">
                  <CalendarDays size={21} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Expected Delivery Date
                  </p>

                  <p className="mt-1 font-semibold text-gray-800">
                    {health.expectedDeliveryDate
                      ? new Date(
                          health.expectedDeliveryDate,
                        ).toLocaleDateString("en-IN", {
                          day: "2-digit",
                          month: "long",
                          year: "numeric",
                        })
                      : "--"}
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default MyHealth;
