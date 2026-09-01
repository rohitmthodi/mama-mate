import React from "react";
import { HeartPulse } from "lucide-react";

import MotherAccessCard from "./MotherAccessCard";
import OfficialAccessCard from "./OfficialAccessCard";

const RoleSelectionPage = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F5FAFA] px-5 py-10">
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#DDF2F2] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-[#EAF7F7] blur-3xl"
      />

      {/* Main Content */}
      <div className="relative w-full max-w-4xl">
        {/* Brand */}
        <header className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,70,75,0.10)]">
            <img
              src="/logo.png"
              alt="Mama Mate logo"
              className="h-10 w-10 object-contain"
            />
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#00656B] sm:text-3xl">
            Welcome to Mama Mate
          </h1>

          <p className="mt-2 text-sm font-medium text-gray-500">
            Maternal & Child Healthcare Platform
          </p>
        </header>

        {/* Role Selection */}
        <section
          aria-labelledby="role-selection-title"
          className="rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_25px_80px_rgba(0,70,75,0.10)] sm:p-8 md:p-10"
        >
          {/* Section Heading */}
          <div className="mb-8 text-center">
            <div
              aria-hidden="true"
              className="mx-auto mb-3 flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8F5F5]"
            >
              <HeartPulse size={18} className="text-[#00656B]" />
            </div>

            <h2
              id="role-selection-title"
              className="text-xl font-bold tracking-tight text-gray-900"
            >
              How would you like to continue?
            </h2>

            <p className="mt-2 text-xs font-medium text-gray-400 sm:text-sm">
              Select your account type to continue
            </p>
          </div>

          {/* Role Options */}
          <div className="grid gap-5 sm:grid-cols-2">
            <MotherAccessCard />
            <OfficialAccessCard />
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-6 text-center">
          <p className="text-[11px] font-medium text-gray-400">
            © {new Date().getFullYear()} Mama Mate · Government Healthcare
            Administration Portal
          </p>
        </footer>
      </div>
    </main>
  );
};

export default RoleSelectionPage;
