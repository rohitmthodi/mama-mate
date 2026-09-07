import { useEffect, useState } from "react";
import {
  Ghost,
  HeartPulse,
  Scale,
  Activity,
  Droplets,
  Pencil,
} from "lucide-react";

import api from "../../../services/api";
import EditHealthForm from "./EditHealthForm";

const MyHealth = () => {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
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
        <p className="font-medium text-gray-500">
          Loading your health information...
        </p>
      </div>
    );
  }

  if (error && !isEditing) {
    return (
      <div className="rounded-2xl bg-bg p-8 text-center shadow-sm">
        <Ghost size={40} className="mx-auto text-[#00656B]" />

        <h2 className="mt-4 text-lg font-bold text-gray-800">{error}</h2>

        <p className="mt-1 font-medium text-gray-500">
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

          <p className="mt-1 text-sm font-medium text-gray-500">
            View and manage your maternal health information.
          </p>
        </div>

        {!isEditing && (
          <button
            type="button"
            onClick={handleEdit}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition hover:bg-secondary sm:w-auto"
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
        <EditHealthForm
          formData={formData}
          error={error}
          saving={saving}
          handleChange={handleChange}
          handleUpdate={handleUpdate}
          setIsEditing={setIsEditing}
        />
      ) : (
        <>

          {/* Health Overview */}
          <div>
            <h2 className="mb-4 text-lg font-bold text-gray-800">
              Health Overview
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Blood Group */}
              <div className="rounded-2xl bg-bg p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-500">
                    Blood Group
                  </p>

                  <Droplets size={20} className="text-[#00656B]" />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-primary">
                  {health.bloodGroup || "--"}
                </h3>
              </div>

              {/* Weight */}
              <div className="rounded-2xl bg-bg p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-500">Weight</p>

                  <Scale size={20} className="text-[#00656B]" />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-primary">
                  {health.weight ? `${health.weight} kg` : "--"}
                </h3>
              </div>

              {/* Blood Pressure */}
              <div className="rounded-2xl bg-bg p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-500">
                    Blood Pressure
                  </p>

                  <Activity size={20} className="text-[#00656B]" />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-primary">
                  {health.bloodPressure || "--"}
                </h3>
              </div>

              {/* Hemoglobin */}
              <div className="rounded-2xl bg-bg p-5 shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-gray-500">
                    Hemoglobin
                  </p>

                  <HeartPulse size={20} className="text-[#00656B]" />
                </div>

                <h3 className="mt-3 text-2xl font-bold text-primary">
                  {health.hemoglobin ? `${health.hemoglobin} g/dL` : "--"}
                </h3>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default MyHealth;
