import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  LockKeyhole,
  Eye,
  ChevronDown,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { registerMother } from "../../services/authService"; 

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    panchayat: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

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
  setSuccess("");

  try {
    setLoading(true);

    const response = await registerMother(formData);

    setSuccess(response.message);

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      panchayat: "",
      password: "",
      confirmPassword: "",
    });
  } catch (error) {
    setError(
      error.response?.data?.message || "Registration failed",
    );
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="overflow-y-auto px-6 py-5 sm:px-10 sm:py-6">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-bg">
              <User size={13} className="text-primary" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
              Personal Information
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {/* NAME */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-700">
                First Name
              </label>

              <div className="relative">
                <User
                  size={16}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-sm font-medium text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-3 focus:ring-secondary/10"
                />
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-700">
                Last Name
              </label>

              <div className="relative">
                <User
                  size={16}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter last name"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-sm font-medium text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-3 focus:ring-secondary/10"
                />
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-700">
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={16}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-3 text-sm font-medium text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-3 focus:ring-secondary/10"
                />
              </div>
            </div>

            {/* MOBILE */}
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-700">
                Mobile Number
              </label>

              <div className="flex h-11 overflow-hidden rounded-lg border border-gray-200 focus-within:border-primary focus-within:ring-3 focus-within:ring-secondary/10">
                <div className="flex w-14 items-center justify-center border-r border-gray-200 bg-gray-50 text-xs font-bold text-gray-500">
                  +91
                </div>

                <div className="relative flex-1">
                  <Phone
                    size={16}
                    strokeWidth={1.8}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="h-full w-full bg-white pl-10 pr-3 text-sm font-medium text-gray-700 outline-none placeholder:text-gray-400"
                  />
                </div>
              </div>
            </div>

            {/* PANCHAYAT */}
            <div className="sm:col-span-2">
              <label className="mb-1.5 block text-xs font-bold text-gray-700">
                Grama Panchayat
              </label>

              <div className="relative">
                <MapPin
                  size={16}
                  strokeWidth={1.8}
                  className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <select
                  name="panchayat"
                  value={formData.panchayat}
                  onChange={handleChange}
                  className="h-11 w-full appearance-none rounded-lg border border-gray-200 bg-white pl-10 pr-10 text-sm font-medium text-gray-500 outline-none transition-all focus:border-primary focus:ring-3 focus:ring-secondary/10"
                >
                  <option value="" disabled>
                    Select your Grama Panchayat
                  </option>

                  <option>Example Panchayat</option>
                  <option>Another Panchayat</option>
                  <option>Sample Grama Panchayat</option>
                </select>

                <ChevronDown
                  size={17}
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ACCOUNT SECURITY */}
        <div>
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-bg">
              <ShieldCheck size={13} className="text-primary" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-gray-600">
              Account Security
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-700">
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={16}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-11 text-sm font-medium text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-3 focus:ring-secondary/10"
                />

                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary outline-none cursor-pointer"
                >
                  <Eye size={16} />
                </button>
              </div>
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-bold text-gray-700">
                Confirm Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={16}
                  strokeWidth={1.8}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="h-11 w-full rounded-lg border border-gray-200 bg-white pl-10 pr-11 text-sm font-medium text-gray-700 outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-3 focus:ring-secondary/10"
                />

                <button
  type="button"
  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary outline-none cursor-pointer"
>
  <Eye size={16} />
</button>
              </div>
            </div>
          </div>
        </div>

        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-100 bg-[#f8fbfb] px-3.5 py-3">
          <input
            type="checkbox"
            className="mt-1 h-3.5 w-3.5 cursor-pointer accent-primary"
          />

          <span className="text-xs font-medium leading-5 text-gray-500">
            I agree to Mama Mate's{" "}
            <button
              type="button"
              className="font-bold text-primary hover:underline"
            >
              Terms of Use
            </button>{" "}
            and{" "}
            <button
              type="button"
              className="font-bold text-primary hover:underline"
            >
              Privacy Policy
            </button>
            .
          </span>
        </label>

        {/* Create Account */}
        {error && (
          <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-lg border border-green-100 bg-green-50 px-4 py-3 text-sm font-medium text-green-600">
            {success}
          </div>
        )}
        <button
          type="submit"
          disabled={loading}
          className="group flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary text-sm font-bold text-white shadow-[0_5px_15px_rgba(0,109,119,0.18)] transition-all duration-200 hover:bg-secondary hover:shadow-[0_7px_20px_rgba(0,109,119,0.25)] active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Creating Account..." : "Create My Account"}

          {!loading && (
            <ArrowRight
              size={17}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          )}
        </button>

        {/* Login */}
        <div className="pt-1 text-center">
          <span className="text-xs font-medium text-gray-400">
            Already have an account?{" "}
          </span>

          <Link
            to="/login?role=mother"
            className="text-xs font-bold text-primary hover:underline"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
