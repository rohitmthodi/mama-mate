import { NavLink } from "react-router-dom";
import { X } from "lucide-react";

import { useAuth } from "../context/AuthContext";
import navigation from "../config/navigation";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const { user } = useAuth();

  const navItems = navigation[user?.role] || [];

  return (
    <>
      {/* Mobile Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`fixed left-0 top-0 z-50 flex h-screen w-72 flex-col border-r-4 border-black/10 shadow-black shadow-sm bg-white transition-transform duration-300 lg:w-64 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        {/* Logo + Brand */}

        <div className="flex items-center justify-between px-6 py-6">
          <div className="flex cursor-default items-center gap-2">
            <img
              src="/logo.png"
              alt="Mama Mate Logo"
              className="h-12 w-12 object-contain"
            />

            <div>
              <h1 className="text-2xl font-extrabold text-[#00656B]">
                Mama Mate
              </h1>

              <p className="text-xs font-extrabold text-gray-500 uppercase tracking-[1px]">
                {user.role} PORTAL
              </p>
            </div>
          </div>

          {/* Mobile Close Button */}

          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400 cursor-default">
            Navigation
          </p>

          <div className="space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition ${
                      isActive
                        ? "bg-[#00656B] text-white shadow-sm"
                        : "text-gray-600 hover:bg-[#F0F7F7] hover:text-[#00656B]"
                    }`
                  }
                >
                  <Icon size={19} strokeWidth={2} className="shrink-0" />

                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
