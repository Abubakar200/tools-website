"use client";

import {
  CalculatorField,
  CalculatorFormActions,
} from "@/app/tools/_components/calculator-form-controls";

export type GravelAreaUnit = "ft" | "m";
export type GravelDepthUnit = "in" | "cm";

export default function GravelCalculatorForm({
  unit,
  onUnitChange,
  depthUnit,
  onDepthUnitChange,
  areaLength,
  onAreaLengthChange,
  areaWidth,
  onAreaWidthChange,
  depth,
  onDepthChange,
  waste,
  onWasteChange,
  error,
  onSubmit,
  onReset,
}: {
  unit: GravelAreaUnit;
  onUnitChange: (unit: GravelAreaUnit) => void;
  depthUnit: GravelDepthUnit;
  onDepthUnitChange: (unit: GravelDepthUnit) => void;
  areaLength: string;
  onAreaLengthChange: (value: string) => void;
  areaWidth: string;
  onAreaWidthChange: (value: string) => void;
  depth: string;
  onDepthChange: (value: string) => void;
  waste: string;
  onWasteChange: (value: string) => void;
  error: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
}) {
  return (
    <>
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
        <CalculatorField
          id="area-length"
          label={`Area length (${unit})`}
          value={areaLength}
          onChange={onAreaLengthChange}
          placeholder={unit === "ft" ? "Example: 20" : "Example: 6"}
        />

        <CalculatorField
          id="area-width"
          label={`Area width (${unit})`}
          value={areaWidth}
          onChange={onAreaWidthChange}
          placeholder={unit === "ft" ? "Example: 10" : "Example: 4"}
        />

        <div className="border-t border-gray-100 pt-6 dark:border-white/10">
          <h3 className="mb-5 font-bold">Gravel depth</h3>

          <div className="grid gap-5 sm:grid-cols-[1fr_160px]">
            <CalculatorField
              id="depth"
              label={`Gravel depth (${depthUnit})`}
              value={depth}
              onChange={onDepthChange}
              placeholder={
                depthUnit === "in" ? "Example: 4" : "Example: 10"
              }
              hint={
                depthUnit === "in"
                  ? "Example: 4 inches"
                  : "Example: 10 centimeters"
              }
            />

            <div>
              <label
                htmlFor="depth-unit"
                className="mb-2 block text-sm font-semibold"
              >
                Depth unit
              </label>

              <select
                id="depth-unit"
                value={depthUnit}
                onChange={(event) =>
                  onDepthUnitChange(
                    event.target.value as GravelDepthUnit
                  )
                }
                className="min-h-11 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm font-semibold text-[#030164] outline-none transition focus:border-[#363199] focus:ring-2 focus:ring-[#363199]/20 dark:border-white/10 dark:bg-white/5 dark:text-white"
              >
                <option value="in">Inches (in)</option>
                <option value="cm">Centimeters (cm)</option>
              </select>
            </div>
          </div>
        </div>

        <CalculatorField
          id="waste"
          label="Extra waste (%)"
          value={waste}
          onChange={onWasteChange}
          min="0"
          max="50"
          step="1"
          hint="10% is a useful starting point for many gravel projects."
          required={false}
        />

        {error && (
          <div
            role="alert"
            className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            {error}
          </div>
        )}

        <CalculatorFormActions
          submitLabel="Calculate Gravel"
          onReset={onReset}
        />
      </form>
    </>
  );
}