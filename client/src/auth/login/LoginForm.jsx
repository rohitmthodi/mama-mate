import { useState } from "react";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full items-center justify-center bg-white px-6 py-10 sm:px-10 lg:w-1/2 lg:px-12 xl:px-20 cursor-default">
      <div className="w-full max-w-107.5">
        {/* Logo */}
        <div className="mb-8 text-center">
          <img
            src="/logo.png"
            alt="Mama Mate"
            className="mx-auto mb-4 h-12 w-12 object-contain"
          />

          <h2 className="text-2xl font-bold tracking-tight text-[#00656B]">
            Mama Mate
          </h2>

          <p className="text-sm font-bold text-gray-500">
            Government Administration Portal
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.06)] sm:p-6">
          {/* Authorized Access */}
          <div className="mb-6 flex items-center justify-center gap-2 rounded-md border border-red-100 bg-red-50 px-3 py-2 text-xs font-bold text-red-600">
            <ShieldCheck size={14} />
            Authorized access only
          </div>

          <form className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-xs font-bold text-gray-700"
              >
                Email or Username
              </label>

              <div className="relative">
                <Mail
                  size={17}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="admin@kerala.gov.in"
                  className="h-11 w-full rounded-md border border-gray-200 bg-white pl-10 pr-3 text-sm font-medium text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#00656B] focus:ring-2 focus:ring-[#00656B]/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-xs font-bold text-gray-700"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={17}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="h-11 w-full rounded-md border border-gray-200 bg-white pl-10 pr-11 text-sm font-medium text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-[#00656B] focus:ring-2 focus:ring-[#00656B]/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-[#00656B] cursor-pointer"
                >
                  {showPassword ? (
                    <EyeOff size={17} strokeWidth={1.8} />
                  ) : (
                    <Eye size={17} strokeWidth={1.8} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember / Forgot */}
            <div className="flex items-center justify-between gap-3">
              <label className="flex font-bold cursor-pointer items-center gap-2 text-xs text-gray-500">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-gray-300 accent-[#00656B] cursor-pointer"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-xs font-bold text-[#00656B] hover:underline cursor-pointer"
              >
                Forgot password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="group flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#00656B] text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#00555A] hover:shadow-md active:scale-[0.99]"
            >
              Login to Portal
              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center font-medium">
          <p className="text-xs text-gray-400">
            Protected by Govt. of Kerala IT Security
          </p>

          <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-400">
            <button className="hover:text-[#00656B] cursor-pointer">
              Help Desk
            </button>

            <span>•</span>

            <button className="hover:text-[#00656B] cursor-pointer">
              Terms of Use
            </button>

            <span>•</span>

            <button className="hover:text-[#00656B] cursor-pointer">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
