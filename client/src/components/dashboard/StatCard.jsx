const StatCard = ({ icon: Icon, label, value, hint }) => {
  return (
    <div className="rounded-2xl border border-cyan-500/15 bg-bg p-6 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>

          <h2 className="mt-3 text-2xl font-bold text-gray-800">{value}</h2>
        </div>

        {Icon && (
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8F5F5] text-[#00656B]">
            <Icon size={22} />
          </div>
        )}
      </div>

      {hint && <p className="mt-4 text-xs text-gray-400">{hint}</p>}
    </div>
  );
};

export default StatCard;
