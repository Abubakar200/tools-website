import {
  CalculatorField,
  CalculatorFormActions,
} from "@/app/tools/_components/calculator-form-controls";

export type MulchAreaUnit = "ft" | "m";
export type MulchDepthUnit = "in" | "cm";

export default function MulchCalculatorForm({
  unit,
  onUnitChange,
  areaLength,
  onAreaLengthChange,
  areaWidth,
  onAreaWidthChange,
  depth,
  onDepthChange,
  depthUnit,
  onDepthUnitChange,
  waste,
  onWasteChange,
  error,
  onSubmit,
  onReset,
}: {
  unit: MulchAreaUnit;
  onUnitChange: (unit: MulchAreaUnit) => void;
  areaLength: string;
  onAreaLengthChange: (value: string) => void;
  areaWidth: string;
  onAreaWidthChange: (value: string) => void;
  depth: string;
  onDepthChange: (value: string) => void;
  depthUnit: MulchDepthUnit;
  onDepthUnitChange: (unit: MulchDepthUnit) => void;
  waste: string;
  onWasteChange: (value: string) => void;
  error: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
}) {
  return (
    <>
      {/* MEASUREMENT UNIT */}
      <div className="mb-7">
        <label className="mb-2 block text-sm font-semibold">
          Measurement unit
        </label>

        <div className="grid grid-cols-2 gap-3">
          {(["ft", "m"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onUnitChange(option)}
              aria-pressed={unit === option}
              className={`min-h-11 rounded-xl border px-4 font-semibold transition ${
                unit === option
                  ? "border-[#363199] bg-[#363199] text-white"
                  : "border-gray-200 bg-gray-50 text-[#030164] dark:border-white/10 dark:bg-white/5 dark:text-white"
              }`}
            >
              {option === "ft" ? "Feet (ft)" : "Meters (m)"}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={onSubmit} className="space-y-6">
        {/* AREA LENGTH */}
        <CalculatorField
          id="area-length"
          label={`Area length (${unit})`}
          value={areaLength}
          onChange={onAreaLengthChange}
          placeholder={
            unit === "ft" ? "Example: 20" : "Example: 6"
          }
        />

        {/* AREA WIDTH */}
        <CalculatorField
          id="area-width"
          label={`Area width (${unit})`}
          value={areaWidth}
          onChange={onAreaWidthChange}
          placeholder={
            unit === "ft" ? "Example: 15" : "Example: 4.5"
          }
        />

        {/* MULCH DEPTH */}
        <div className="grid grid-cols-2 gap-3">
          {(["in", "cm"] as const).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onDepthUnitChange(option)}
              aria-pressed={depthUnit === option}
              className={`min-h-11 rounded-xl border px-4 font-semibold transition ${
                depthUnit === option
                  ? "border-[#363199] bg-[#363199] text-white"
                  : "border-gray-200 bg-gray-50 text-[#030164] dark:border-white/10 dark:bg-white/5 dark:text-white"
              }`}
            >
              {option === "in" ? "Inches (in)" : "Centimeters (cm)"}
            </button>
          ))}
        </div>
        <CalculatorField
          id="mulch-depth"
          label={`Mulch depth (${depthUnit})`}
          value={depth}
          onChange={onDepthChange}
          placeholder={depthUnit === "in" ? "Example: 3" : "Example: 8"}
          hint={
            depthUnit === "in"
              ? "Enter depth in inches, such as 2, 3, or 4."
              : "Enter depth in centimeters, such as 5, 8, or 10."
          }
        />

        {/* WASTE */}
        <CalculatorField
          id="waste"
          label="Extra waste (%)"
          value={waste}
          onChange={onWasteChange}
          min="0"
          max="50"
          step="1"
          hint="Adding 5–10% can help account for settling, uneven areas, and measurement differences."
          required={false}
        />

        {/* ERROR */}
        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        {/* ACTIONS */}
        <CalculatorFormActions
          submitLabel="Calculate Mulch"
          onReset={onReset}
        />
      </form>
    </>
  );
}
