import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Mail, ShieldCheck, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const { login } = useAuth();

  const [showPassword, setShowPassword] = useState(false);
  const [searchParams] = useSearchParams();
  const role = searchParams.get("role");
  const isMother = role === "mother";
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:2000/api/auth/login",
        formData,
      );

      login(
        response.data.user,
        response.data.token
      )

      console.log("Login response:", response.data);
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

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

          <form onSubmit={handleSubmit} className="space-y-5">
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
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email or username"
                  className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-3 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
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
                {/* Lock Icon */}
                <LockKeyhole
                  size={17}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                {/* Password Input */}
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-gray-200 py-3 pl-10 pr-10 text-sm outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
                />

                {/* Show / Hide Password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 outline-none transition-colors hover:text-primary"
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
                  className="h-3.5 w-3.5 rounded border-gray-300 accent-primary cursor-pointer outline-none"
                />
                Remember me
              </label>

              <button
                type="button"
                className="text-xs font-bold text-primary hover:underline cursor-pointer outline-none"
              >
                Forgot password?
              </button>
            </div>

            {error && (
              <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex h-11 w-full items-center justify-center gap-2 rounded-md bg-[#00656B] text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-secondary hover:shadow-md active:scale-[0.99] outline-none"
            >
              {loading ? "Loging in..." : "Log In"}
              <ArrowRight
                size={17}
                strokeWidth={2}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </button>
            {isMother && (
              <div className="pt-2 text-center">
                <span className="text-xs font-medium text-gray-400">
                  New to Mama Mate?{" "}
                </span>

                <Link
                  to="/register"
                  className="text-xs font-bold text-primary hover:underline outline-none"
                >
                  Register
                </Link>
              </div>
            )}
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center font-medium">
          <p className="text-xs text-gray-400">
            Protected by Govt. of Kerala IT Security
          </p>

          <div className="mt-2 flex items-center justify-center gap-2 text-xs text-gray-400">
            <button className="hover:text-primary cursor-pointer outline-none">
              Help Desk
            </button>

            <span>•</span>

            <button className="hover:text-primary cursor-pointer outline-none">
              Terms of Use
            </button>

            <span>•</span>

            <button className="hover:text-primary cursor-pointer outline-none">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
