import { NavLink } from "react-router-dom";
import { LayoutDashboard, CalendarDays, Users, FileText } from "lucide-react";

import { useAuth } from "../context/AuthContext";
import navigation from "../config/navigation";

const iconMap = {
  Dashboard: LayoutDashboard,
  Appointments: CalendarDays,
  Users: Users,
  Reports: FileText,
  Mothers: Users,
  Patients: Users,
  Visits: CalendarDays,
};

const Sidebar = () => {
  const { user } = useAuth();

  const navItems = navigation[user?.role] || [];

  return (
    <aside className="fixed left-0 top-0 z-50 flex h-screen w-64 flex-col border-r bg-white">
      {/* Logo */}

      <div className="border-b px-6 py-6">
        <h1 className="text-2xl font-bold text-[#00656B]">Mama Mate</h1>

        <p className="mt-1 text-xs capitalize text-gray-500">
          {user?.role} Portal
        </p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <p className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
          Navigation
        </p>

        <div className="space-y-1">
          {navItems.map((item) => {
            const Icon = iconMap[item.label] || LayoutDashboard;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-[#00656B] text-white shadow-sm"
                      : "text-gray-600 hover:bg-[#F0F7F7] hover:text-[#00656B]"
                  }`
                }
              >
                <Icon size={18} />

                <span>{item.label}</span>
              </NavLink>
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
