import { LayoutDashboard, ShieldCheck } from "lucide-react";

import { useAuth } from "../../context/authContext";
import navigation from "../../config/navigation";
import { getRoleLabel } from "../../config/roles";
import StatCard from "../../components/dashboard/StatCard";
import ModuleCard from "../../components/dashboard/ModuleCard";

const OfficialDashboard = () => {
  const { user } = useAuth();

  const roleLabel = getRoleLabel(user?.role);
  const modules = navigation[user?.role]?.slice(1) || [];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome, {user?.firstName || "there"}!
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          {roleLabel} portal dashboard.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <StatCard
          icon={ShieldCheck}
          label="Access Level"
          value={roleLabel}
          hint="Role-based access control"
        />

        <StatCard
          icon={LayoutDashboard}
          label="Available Modules"
          value={modules.length}
          hint="Sections available in your portal"
        />
      </div>

      {modules.length > 0 && (
        <div>
          <h2 className="mb-4 text-lg font-semibold text-gray-800">
            Quick Access
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {modules.map((item) => (
              <ModuleCard
                key={item.path}
                to={item.path}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficialDashboard;
