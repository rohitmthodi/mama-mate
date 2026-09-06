import {
  Bell,
  ChevronDown,
  UserRound,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/AuthContext";

const Navbar = ({ setSidebarOpen }) => {
  const { user, logout } = useAuth();

  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    setShowProfileMenu(false);

    navigate("/login");
  };

  const goToProfile = () => {
    setShowProfileMenu(false);

    navigate("/profile");
  };

  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between bg-white/50 backdrop-blur-xl px-4 sm:px-6">
      {/* Mobile Menu + Brand */}

      <div className="flex items-center gap-3">
        {/* Mobile Menu Button */}

        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-600 transition hover:bg-gray-100 hover:text-[#00656B] lg:hidden"
          aria-label="Open navigation menu"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* Right Side */}

      <div className="flex items-center gap-2 sm:gap-4">
        {/* Notifications */}

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowNotifications((prev) => !prev)}
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition hover:bg-gray-100"
            aria-label="Notifications"
          >
            <Bell size={20} />

            {/* Notification Indicator */}

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </button>

          {/* Notification Dropdown */}

          {showNotifications && (
            <div className="absolute right-0 top-14 w-[calc(100vw-2rem)] max-w-80 rounded-2xl border bg-white p-4 shadow-xl">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="text-sm font-semibold text-gray-800">
                  Notifications
                </h3>

                <span className="text-xs text-gray-400">1 new</span>
              </div>

              <div className="py-4">
                <div className="rounded-xl bg-[#F5FAFA] p-3">
                  <p className="text-sm font-medium text-gray-800">
                    Welcome to Mama Mate
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    Your account is ready to use.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}

        <div className="relative">
          <button
            type="button"
            onClick={() => setShowProfileMenu((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl px-1.5 py-1.5 transition hover:bg-gray-100 sm:gap-3 sm:px-2"
          >
            {/* Avatar */}

            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-[#00656B] text-sm font-semibold text-white">
              {user?.firstName?.charAt(0)?.toUpperCase() || "U"}
            </div>

            {/* User Information */}

            <div className="hidden text-left sm:block">
              <p className="max-w-40 truncate text-sm font-semibold text-gray-800">
                {user?.firstName} {user?.lastName}
              </p>

              <p className="text-xs capitalize text-gray-500">{user?.role}</p>
            </div>

            <ChevronDown
              size={16}
              className={`hidden text-gray-500 transition sm:block ${
                showProfileMenu ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Profile Dropdown */}

          {showProfileMenu && (
            <div className="absolute right-0 top-14 w-56 rounded-2xl border bg-white p-2 shadow-xl">
              {/* User Header */}

              <div className="border-b px-3 py-3">
                <p className="text-sm font-semibold text-gray-800">
                  {user?.firstName} {user?.lastName}
                </p>

                <p className="mt-1 truncate text-xs text-gray-500">
                  {user?.email}
                </p>
              </div>

              {/* Profile */}

              <button
                type="button"
                onClick={goToProfile}
                className="mt-2 flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-700 transition hover:bg-gray-100"
              >
                <UserRound size={17} />

                <span>Profile</span>
              </button>

              {/* Settings */}

              <button
                type="button"
                onClick={() => setShowProfileMenu(false)}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-gray-700 transition hover:bg-gray-100"
              >
                <Settings size={17} />

                <span>Settings</span>
              </button>

              {/* Logout */}

              <div className="my-2 border-t" />

              <button
                type="button"
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm text-red-600 transition hover:bg-red-50"
              >
                <LogOut size={17} />

                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;