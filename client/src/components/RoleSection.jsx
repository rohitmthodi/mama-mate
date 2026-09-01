import React from "react";
import { Link } from "react-router-dom";
import {
  Baby,
  Building2,
  ArrowRight,
  ShieldCheck,
  HeartPulse,
} from "lucide-react";

const RoleSelection = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F5FAFA] px-5 py-10">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#DDF2F2] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#EAF7F7] blur-3xl" />

      {/* Main Card */}
      <div className="relative w-full max-w-4xl">
        {/* Brand */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,70,75,0.10)]">
            <img
              src="/logo.png"
              alt="Mama Mate"
              className="h-10 w-10 object-contain"
            />
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#00656B] sm:text-3xl">
            Welcome to Mama Mate
          </h1>

          <p className="mt-2 text-sm font-medium text-gray-500">
            Maternal & Child Healthcare Platform
          </p>
        </div>

        {/* Selection Container */}
        <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_25px_80px_rgba(0,70,75,0.10)] sm:p-8 md:p-10">
          {/* Heading */}
          <div className="mb-8 text-center">
            <h2 className="text-xl font-bold tracking-tight text-gray-900">
              How would you like to continue?
            </h2>

            <p className="mt-2 text-xs font-medium text-gray-400 sm:text-sm">
              Select your account type to continue
            </p>
          </div>

          {/* Role Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {/* ================= MOTHER ================= */}
            <Link
              to="/login?role=mother"
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#00656B]/20 hover:shadow-[0_15px_40px_rgba(0,101,107,0.12)] sm:p-7"
            >
              {/* Background Accent */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#E8F5F5] opacity-60 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5F5] transition-colors duration-300 group-hover:bg-[#00656B]">
                  <Baby
                    size={25}
                    strokeWidth={1.8}
                    className="text-[#00656B] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Text */}
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00656B]">
                  Personal Access
                </p>

                <h3 className="text-xl font-bold text-gray-900">Mother</h3>

                <p className="mt-2 max-w-xs text-sm font-medium leading-6 text-gray-500">
                  Access your maternal health information, pregnancy care, and
                  child wellness services.
                </p>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-xs font-bold text-gray-400 transition-colors group-hover:text-[#00656B]">
                    Continue as Mother
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 transition-all duration-300 group-hover:bg-[#00656B]">
                    <ArrowRight
                      size={15}
                      className="text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </div>
                </div>
              </div>
            </Link>

            {/* ================= OFFICIAL ================= */}
            <Link
              to="/login?role=official"
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#00656B]/20 hover:shadow-[0_15px_40px_rgba(0,101,107,0.12)] sm:p-7"
            >
              {/* Background Accent */}
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#E8F5F5] opacity-60 transition-transform duration-500 group-hover:scale-150" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5F5] transition-colors duration-300 group-hover:bg-[#00656B]">
                  <Building2
                    size={25}
                    strokeWidth={1.8}
                    className="text-[#00656B] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                {/* Text */}
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#00656B]">
                  Authorized Access
                </p>

                <h3 className="text-xl font-bold text-gray-900">Official</h3>

                <p className="mt-2 max-w-xs text-sm font-medium leading-6 text-gray-500">
                  Access the administration portal for government and healthcare
                  professionals.
                </p>

                {/* Bottom */}
                <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
                  <span className="text-xs font-bold text-gray-400 transition-colors group-hover:text-[#00656B]">
                    Continue as Official
                  </span>

                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 transition-all duration-300 group-hover:bg-[#00656B]">
                    <ArrowRight
                      size={15}
                      className="text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-[11px] font-medium text-gray-400">
          © {new Date().getFullYear()} Mama Mate · Government Healthcare
          Administration Portal
        </p>
      </div>
    </div>
  );
};

export default RoleSelection;
