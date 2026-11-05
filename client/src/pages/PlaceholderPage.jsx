const PlaceholderPage = ({ title, description }) => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 sm:text-3xl">{title}</h1>

        <p className="mt-1 text-sm font-medium text-gray-500">{description}</p>
      </div>

      <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-cyan-500/15 bg-bg px-6 text-center shadow-sm">
        <h2 className="text-lg font-bold text-gray-800">{title}</h2>

        <p className="mt-2 max-w-sm text-sm font-medium text-gray-500">
          This section is under development and will be available soon.
        </p>
      </div>
    </div>
  );
};

export default PlaceholderPage;
