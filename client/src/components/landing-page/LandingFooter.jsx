import React from "react";
import { HeartPulse, UsersRound, Baby } from "lucide-react";

const LandingFooter = () => {
  return (
    <>
      {/* ================= BOTTOM STATS ================= */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-gray-100 px-5 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-8 lg:px-12">
          {/* Maternal Care */}
          <div className="flex items-center gap-4 px-0 py-6 sm:px-6 lg:px-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F5F5]">
              <HeartPulse size={18} className="text-[#00656B]" />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-800">
                Maternal Care
              </p>

              <p className="text-xs font-medium text-gray-400">
                Supporting healthier journeys
              </p>
            </div>
          </div>

          {/* Child Wellness */}
          <div className="flex items-center gap-4 px-0 py-6 sm:px-6 lg:px-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F5F5]">
              <Baby size={18} className="text-[#00656B]" />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-800">
                Child Wellness
              </p>

              <p className="text-xs font-medium text-gray-400">
                Monitoring essential care
              </p>
            </div>
          </div>

          {/* Connected Teams */}
          <div className="flex items-center gap-4 px-0 py-6 sm:px-6 lg:px-10">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E8F5F5]">
              <UsersRound size={18} className="text-[#00656B]" />
            </div>

            <div>
              <p className="text-sm font-bold text-gray-800">
                Connected Teams
              </p>

              <p className="text-xs font-medium text-gray-400">
                One coordinated platform
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-gray-100 bg-[#F7FAFA]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 sm:flex-row sm:px-8 lg:px-12">
          <p className="text-center text-[11px] font-medium text-gray-400 sm:text-left">
            © {new Date().getFullYear()} Mama Mate. Government Healthcare
            Administration Portal.
          </p>

          <div className="flex items-center gap-4 text-[11px] font-semibold text-gray-400">
            <span className="cursor-pointer transition-colors hover:text-[#00656B]">
              Help Desk
            </span>

            <span>•</span>

            <span className="cursor-pointer transition-colors hover:text-[#00656B]">
              Privacy
            </span>

            <span>•</span>

            <span className="cursor-pointer transition-colors hover:text-[#00656B]">
              Terms
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingFooter;