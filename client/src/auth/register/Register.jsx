import React from "react";
import { X, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Register = () => {
  return (
    <div className="fixed inset-0 z-50 flex min-h-screen items-center justify-center  px-4 py-6 backdrop-blur-sm sm:px-6 cursor-default">
      <div className="relative flex max-h-[94vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/70 bg-white shadow-[0_25px_70px_rgba(0,80,85,0.20)]">
        {/* Close */}
        <Link
          to="/login?role=mother"
          className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-gray-100 bg-white text-gray-400 shadow-sm transition-all hover:bg-bg hover:text-primary outline-none cursor-pointer"
        >
          <X size={18} strokeWidth={2} />
        </Link>

        {/* Header */}
        <div className="px-6 pb-5 pt-7 text-center sm:px-10 sm:pt-8">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-bg">
            <img
              src="/logo.png"
              alt="Mama Mate"
              className="h-9 w-9 object-contain"
            />
          </div>

          <h1 className="text-2xl font-extrabold text-primary sm:text-3xl">
            Join Mama Mate
          </h1>

          <p className="mx-auto mt-1.5 max-w-md text-xs font-medium leading-5 text-gray-500 sm:text-sm">
            Start your journey toward personalized maternal and child healthcare
            support.
          </p>
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-gray-100 sm:mx-10" />

        {/* Registration Form */}
        <RegisterForm />

        {/* Footer */}
        <div className="border-t border-gray-100 bg-[#fbfdfd] px-6 py-3 text-center sm:px-10">
          <div className="flex items-center justify-center gap-1.5 text-[10px] font-medium text-gray-400">
            <ShieldCheck size={12} className="text-primary" />
            Your information is securely protected by Mama Mate
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;