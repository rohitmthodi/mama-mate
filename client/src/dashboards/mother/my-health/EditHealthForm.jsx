import { X } from "lucide-react";

const EditHealthForm = ({
  formData,
  error,
  saving,
  isCreating,
  handleChange,
  handleUpdate,
  setIsEditing,
}) => {
  return (
    <form
      onSubmit={handleUpdate}
      className="rounded-2xl bg-white p-5 shadow-sm sm:p-6"
    >
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            {isCreating ? "Add Health Information" : "Edit Health Information"}
          </h2>

          <p className="mt-1 text-sm font-medium text-gray-500">
            {isCreating
              ? "Add your current health information."
              : "Update your current health information."}
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          aria-label="Close edit form"
        >
          <X size={20} />
        </button>
      </div>

      {error && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Blood Group */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Blood Group
          </label>

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full rounded-xl bg-bg px-4 py-3 text-sm font-medium outline-none"
          >
            <option value="">Select blood group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>

        {/* Weight */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Weight (kg)
          </label>

          <input
            type="number"
            name="weight"
            min="0"
            step="0.1"
            value={formData.weight}
            onChange={handleChange}
            placeholder="e.g. 62"
            className="w-full rounded-xl bg-bg px-4 py-3 text-sm font-medium outline-none"
          />
        </div>

        {/* Blood Pressure */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Blood Pressure
          </label>

          <input
            type="text"
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleChange}
            placeholder="e.g. 120/80"
            className="w-full rounded-xl bg-bg px-4 py-3 text-sm font-medium outline-none"
          />
        </div>

        {/* Hemoglobin */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Hemoglobin (g/dL)
          </label>

          <input
            type="number"
            name="hemoglobin"
            min="0"
            step="0.1"
            value={formData.hemoglobin}
            onChange={handleChange}
            placeholder="e.g. 11.5"
            className="w-full rounded-xl bg-bg px-4 py-3 text-sm font-medium outline-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="cursor-pointer rounded-xl border border-black/20 px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={saving}
          className="cursor-pointer rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default EditHealthForm;