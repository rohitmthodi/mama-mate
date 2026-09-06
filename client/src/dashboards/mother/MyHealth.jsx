import { useEffect, useState } from "react";
import {
  HeartPulse,
  Scale,
  Activity,
  Droplets,
  CalendarDays,
} from "lucide-react";

import api from "../../services/api";

const MyHealth = () => {
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

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

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm text-gray-500">
          Loading your health information...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border bg-white p-8 text-center shadow-sm">
        <HeartPulse
          size={40}
          className="mx-auto text-[#00656B]"
        />

        <h2 className="mt-4 text-lg font-semibold text-gray-800">
          {error}
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Your health information will appear here once it is available.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">
          My Health
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          View your maternal health information.
        </p>
      </div>

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
              {health.isPregnant
                ? "Currently Pregnant"
                : "Not Pregnant"}
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
              <p className="text-sm text-gray-500">
                Blood Group
              </p>

              <Droplets
                size={20}
                className="text-[#00656B]"
              />
            </div>

            <h3 className="mt-3 text-2xl font-bold text-gray-800">
              {health.bloodGroup || "--"}
            </h3>
          </div>

          {/* Weight */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Weight
              </p>

              <Scale
                size={20}
                className="text-[#00656B]"
              />
            </div>

            <h3 className="mt-3 text-2xl font-bold text-gray-800">
              {health.weight
                ? `${health.weight} kg`
                : "--"}
            </h3>
          </div>

          {/* Blood Pressure */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Blood Pressure
              </p>

              <Activity
                size={20}
                className="text-[#00656B]"
              />
            </div>

            <h3 className="mt-3 text-2xl font-bold text-gray-800">
              {health.bloodPressure || "--"}
            </h3>
          </div>

          {/* Hemoglobin */}
          <div className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Hemoglobin
              </p>

              <HeartPulse
                size={20}
                className="text-[#00656B]"
              />
            </div>

            <h3 className="mt-3 text-2xl font-bold text-gray-800">
              {health.hemoglobin
                ? `${health.hemoglobin} g/dL`
                : "--"}
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
    </div>
  );
};

export default MyHealth;