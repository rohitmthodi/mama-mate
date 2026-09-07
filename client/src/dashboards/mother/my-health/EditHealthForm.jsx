import { X } from "lucide-react";

const EditHealthForm = ({
  formData,
  error,
  saving,
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
            Edit Health Information
          </h2>

          <p className="mt-1 font-medium text-sm text-gray-500">
            Update your current health information.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
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
        {/* Pregnancy */}
        <div className="sm:col-span-2">
          <label className="flex cursor-pointer items-center gap-3 rounded-xl bg-bg p-4">
            <input
              type="checkbox"
              name="isPregnant"
              checked={formData.isPregnant}
              onChange={handleChange}
              className="h-4 w-4 accent-[#00656B]"
            />

            <div>
              <p className="text-sm font-bold text-gray-800">
                Currently Pregnant
              </p>

              <p className="mt-1 text-xs font-medium text-gray-500">
                Check this if you are currently pregnant.
              </p>
            </div>
          </label>
        </div>

        {/* Pregnancy Week */}
        {formData.isPregnant && (
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Pregnancy Week
            </label>

            <input
              type="number"
              name="pregnancyWeek"
              min="1"
              max="45"
              value={formData.pregnancyWeek}
              onChange={handleChange}
              placeholder="e.g. 24"
              className="w-full rounded-xl px-4 py-3 text-sm font-medium outline-none bg-bg"
            />
          </div>
        )}

        {/* Expected Delivery */}
        {formData.isPregnant && (
          <div>
            <label className="mb-2 block text-sm font-bold text-gray-700">
              Expected Delivery Date
            </label>

            <input
              type="date"
              name="expectedDeliveryDate"
              value={formData.expectedDeliveryDate}
              onChange={handleChange}
              className="w-full rounded-xl px-4 py-3 text-sm font-medium outline-none bg-bg"
            />
          </div>
        )}

        {/* Blood Group */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Blood Group
          </label>

          <select
            name="bloodGroup"
            value={formData.bloodGroup}
            onChange={handleChange}
            className="w-full rounded-xl px-4 py-3 text-sm font-medium outline-none bg-bg"
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
            className="w-full rounded-xl px-4 py-3 text-sm font-medium outline-none bg-bg"
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
            className="w-full rounded-xl px-4 py-3 text-sm font-medium outline-none bg-bg"
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
            className="w-full rounded-xl px-4 py-3 text-sm font-medium outline-none bg-bg"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="rounded-xl border border-black/20 px-5 py-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 cursor-pointer"
        >
          Cancel
        </button>

        <button
          type="submit"
          disabled={saving}
          className="rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer"
        >
          {saving ? "Saving..." : "Save Changes"}
        </button>
      </div>
    </form>
  );
};

export default EditHealthForm;
