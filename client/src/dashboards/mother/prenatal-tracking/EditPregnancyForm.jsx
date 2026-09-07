import { X } from "lucide-react";

const EditPregnancyForm = ({
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
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-800">
            Edit Pregnancy Information
          </h2>

          <p className="mt-1 text-sm font-medium text-gray-500">
            Update your pregnancy information.
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

      {/* Error */}
      {error && (
        <div className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          {error}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {/* Last Menstrual Period */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Last Menstrual Period
          </label>

          <input
            type="date"
            name="lastMenstrualPeriod"
            value={formData.lastMenstrualPeriod}
            onChange={handleChange}
            className="w-full rounded-xl bg-bg px-4 py-3 text-sm font-medium outline-none"
          />
        </div>

        {/* Pregnancy Number */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Pregnancy Number
          </label>

          <input
            type="number"
            name="pregnancyNumber"
            min="1"
            value={formData.pregnancyNumber}
            onChange={handleChange}
            placeholder="e.g. 1"
            className="w-full rounded-xl bg-bg px-4 py-3 text-sm font-medium outline-none"
          />
        </div>

        {/* Previous Births */}
        <div>
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Previous Births
          </label>

          <input
            type="number"
            name="previousBirths"
            min="0"
            value={formData.previousBirths}
            onChange={handleChange}
            placeholder="e.g. 0"
            className="w-full rounded-xl bg-bg px-4 py-3 text-sm font-medium outline-none"
          />
        </div>

        {/* Notes */}
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-bold text-gray-700">
            Notes
          </label>

          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="4"
            placeholder="Add any pregnancy-related notes..."
            className="w-full resize-none rounded-xl bg-bg px-4 py-3 text-sm font-medium outline-none"
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

export default EditPregnancyForm;