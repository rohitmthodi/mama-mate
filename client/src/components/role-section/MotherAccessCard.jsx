import React from "react";
import { Link } from "react-router-dom";
import { Baby, ArrowRight } from "lucide-react";

const MotherAccessCard = () => {
  return (
    <Link
      to="/login?role=mother"
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#00656B]/20 hover:shadow-[0_15px_40px_rgba(0,101,107,0.12)] sm:p-7"
    >
      {/* Background Accent */}
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#E8F5F5] opacity-60 transition-transform duration-500 group-hover:scale-150" />

      <div className="relative">
        {/* Icon */}
        <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E8F5F5] transition-colors duration-300 group-hover:bg-primary">
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
          Access your maternal health information, pregnancy care, and child
          wellness services.
        </p>

        {/* Bottom */}
        <div className="mt-7 flex items-center justify-between border-t border-gray-100 pt-5">
          <span className="text-xs font-bold text-gray-400 transition-colors group-hover:text-primary">
            Continue as Mother
          </span>

          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50 transition-all duration-300 group-hover:bg-primary">
            <ArrowRight
              size={15}
              className="text-gray-400 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-white"
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MotherAccessCard;
