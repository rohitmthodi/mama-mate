import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ModuleCard = ({ to, icon: Icon, label }) => {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between rounded-2xl border border-cyan-500/15 bg-bg p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8F5F5] text-[#00656B]">
          <Icon size={19} />
        </div>

        <span className="text-sm font-semibold text-gray-800">{label}</span>
      </div>

      <ArrowRight
        size={17}
        className="text-gray-400 transition group-hover:translate-x-0.5 group-hover:text-[#00656B]"
      />
    </Link>
  );
};

export default ModuleCard;
