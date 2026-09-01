import React from "react";
import {
  ArrowRight,
  ShieldCheck,
  HeartPulse,
  UsersRound,
  Building2,
  Baby,
} from "lucide-react";
import { Link } from "react-router-dom";

const LandingHero = () => {
  return (
    <>
      {/* NAVBAR */}
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
            <img
              src="/logo.png"
              alt="Mama Mate"
              className="h-7 w-7 object-contain"
            />
          </div>

          <div>
            <h1 className="text-base font-bold tracking-tight text-[#00656B]">
              Mama Mate
            </h1>

            <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] text-gray-400">
              Maternal & Child Care
            </p>
          </div>
        </div>

        <div className="hidden items-center gap-1 text-sm font-semibold text-gray-500 sm:flex">
          <ShieldCheck size={18} className="text-[#00656B]" />
          Secure Government Platform
        </div>
      </nav>

      {/* HERO */}
      <main>
        <section className="relative overflow-hidden">
          {/* BACKGROUND */}
          <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#DDF2F2] blur-3xl" />

          <div className="pointer-events-none absolute -left-40 top-60 h-80 w-80 rounded-full bg-[#EDF8F8] blur-3xl" />

          <div className="relative mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-20">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-extrabold leading-[1.08] tracking-[-0.035em] text-gray-900 sm:text-5xl md:text-6xl lg:text-[4.2rem]">
                One platform.
                <span className="block text-[#00656B]">
                  Better maternal care.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-gray-500 sm:text-base sm:leading-8">
                Mama Mate connects mothers, ASHA workers, hospitals, and local
                administration through a secure digital platform designed to
                make maternal and child healthcare more connected, accessible,
                and organized.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                to="/role"
                  type="button"
                  className="group flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-7 text-sm font-bold text-white shadow-[0_8px_25px_rgba(0,101,107,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_12px_30px_rgba(0,101,107,0.22)] active:translate-y-0 cursor-pointer outline-none"
                >
                  Get Started
                  <ArrowRight
                    size={17}
                    strokeWidth={2.2}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>

              <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <ShieldCheck size={16} className="text-[#00656B]" />
                  Secure Access
                </div>

                <div className="h-4 w-px bg-gray-200" />

                <div className="flex items-center gap-2 text-xs font-semibold text-gray-400">
                  <HeartPulse size={16} className="text-[#00656B]" />
                  Healthcare Focused
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md lg:ml-auto">
              <div className="relative rounded-3xl border border-gray-100 bg-white p-5 shadow-[0_25px_70px_rgba(0,70,75,0.10)] sm:p-6">
                <div className="flex items-center justify-between border-b border-gray-100 pb-5">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00656B]">
                      Connected Care
                    </p>

                    <h3 className="mt-1.5 text-lg font-bold text-gray-900">
                      One healthcare ecosystem
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F5F5]">
                    <HeartPulse size={19} className="text-[#00656B]" />
                  </div>
                </div>

                <div className="relative py-7">
                  <div className="absolute bottom-7 left-7.25 top-7 w-px bg-[#D9EDED]" />

                  <div className="relative mb-4 flex items-center gap-4">
                    <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D9EDED] bg-[#F5FAFA]">
                      <UsersRound size={21} className="text-[#00656B]" />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-800">
                        ASHA Workers
                      </h4>

                      <p className="mt-1 text-xs font-medium text-gray-400">
                        Community-level support
                      </p>
                    </div>
                  </div>

                  <div className="relative mb-4 flex items-center gap-4">
                    <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D9EDED] bg-[#F5FAFA]">
                      <Building2 size={21} className="text-[#00656B]" />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-800">
                        Hospitals & Panchayats
                      </h4>

                      <p className="mt-1 text-xs font-medium text-gray-400">
                        Coordinated healthcare
                      </p>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-4">
                    <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#D9EDED] bg-[#F5FAFA]">
                      <Baby size={21} className="text-[#00656B]" />
                    </div>

                    <div>
                      <h4 className="text-sm font-bold text-gray-800">
                        Mothers & Children
                      </h4>

                      <p className="mt-1 text-xs font-medium text-gray-400">
                        Continuous care & monitoring
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 -left-8 hidden items-center gap-3 rounded-xl bg-[#00656B]/10 px-4 py-3 shadow-xl backdrop-blur-xl sm:flex">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E8F5F5]">
                  <ShieldCheck size={17} className="text-[#00656B]" />
                </div>
                <div>
                  <p className="text-[12px] font-extrabold uppercase tracking-wide text-gray-800">
                    Security
                  </p>

                  <p className="text-xs font-semibold text-gray-700">
                    Authorized Access
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingHero;