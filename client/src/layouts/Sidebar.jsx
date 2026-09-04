import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import navigation from "../config/navigation";

const Sidebar = () => {
  const { user } = useAuth();

  const navItems = navigation[user?.role] || [];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 border-r bg-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-[#00656B]">
          Mama Mate
        </h1>

        <p className="mt-1 text-sm capitalize text-gray-500">
          {user?.role}
        </p>
      </div>

      <nav className="px-4">
        <p className="mb-3 px-2 text-xs font-semibold uppercase text-gray-400">
          Navigation
        </p>

        <div className="space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block rounded-lg px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-[#00656B] text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;