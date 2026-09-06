import { CalendarDays, HeartPulse, FileText, ArrowRight } from "lucide-react";

import { useAuth } from "../../context/AuthContext";

const MotherDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}

      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.firstName || "there"}!👩🏼‍🦰
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Here's an overview of your maternal care.
        </p>
      </div>

      {/* Overview Cards */}

      <div className="grid gap-5 md:grid-cols-3">
        {/* Appointments */}

        <div className="rounded-2xl bg-bg border border-cyan-500/15 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Appointments</p>

              <h2 className="mt-3 text-3xl font-bold text-gray-800">0</h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5F5] text-[#00656B]">
              <CalendarDays size={22} />
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">Upcoming appointments</p>
        </div>

        {/* Health Status */}

        <div className="rounded-2xl bg-bg border border-cyan-500/15 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Health Status</p>

              <h2 className="mt-3 text-2xl font-bold text-[#00656B]">Good</h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5F5] text-[#00656B]">
              <HeartPulse size={22} />
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Based on your latest records
          </p>
        </div>

        {/* Records */}

        <div className="rounded-2xl bg-bg border border-cyan-500/15 p-6 shadow-sm">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Health Records
              </p>

              <h2 className="mt-3 text-3xl font-bold text-gray-800">0</h2>
            </div>

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5F5] text-[#00656B]">
              <FileText size={22} />
            </div>
          </div>

          <p className="mt-4 text-xs text-gray-400">
            Your available health records
          </p>
        </div>
      </div>

      {/* Upcoming Appointments */}
      <div className="rounded-2xl border border-cyan-500/15 bg-bg shadow-sm">
        <div className="flex items-center justify-between border-b border-black/40 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Upcoming Appointments
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Keep track of your upcoming visits.
            </p>
          </div>

          <button
            type="button"
            className="flex items-center gap-2 text-sm font-medium text-[#00656B] transition hover:gap-3"
          >
            View All
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Empty State */}
        <div className="flex min-h-52 flex-col items-center justify-center px-6 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F5F5] text-[#00656B]">
            <CalendarDays size={25} />
          </div>

          <h3 className="mt-4 text-sm font-semibold text-gray-800">
            No upcoming appointments
          </h3>

          <p className="mt-1 max-w-sm text-sm text-gray-500">
            Your upcoming appointments will appear here once they are scheduled.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MotherDashboard;
