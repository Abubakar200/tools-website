"use client";

import {
  CalculatorField,
  CalculatorFormActions,
} from "@/app/tools/_components/calculator-form-controls";

export type ConcreteShape = "slab" | "column" | "walkway";
export type ConcreteAreaUnit = "ft" | "m";
export type ConcreteThicknessUnit = "in" | "cm";

const shapeLabels: Record<ConcreteShape, string> = {
  slab: "Slab",
  column: "Round column / tube",
  walkway: "Walkway",
};

export default function ConcreteCalculatorForm({
  shape,
  onShapeChange,
  unit,
  onUnitChange,
  thicknessUnit,
  onThicknessUnitChange,
  length,
  onLengthChange,
  width,
  onWidthChange,
  diameter,
  onDiameterChange,
  thickness,
  onThicknessChange,
  waste,
  onWasteChange,
  bagsPerUnit,
  bagsWeightLabel,
  error,
  onSubmit,
  onReset,
}: {
  shape: ConcreteShape;
  onShapeChange: (shape: ConcreteShape) => void;
  unit: ConcreteAreaUnit;
  onUnitChange: (unit: ConcreteAreaUnit) => void;
  thicknessUnit: ConcreteThicknessUnit;
  onThicknessUnitChange: (unit: ConcreteThicknessUnit) => void;
  length: string;
  onLengthChange: (value: string) => void;
  width: string;
  onWidthChange: (value: string) => void;
  diameter: string;
  onDiameterChange: (value: string) => void;
  thickness: string;
  onThicknessChange: (value: string) => void;
  waste: string;
  onWasteChange: (value: string) => void;
  bagsPerUnit: number;
  bagsWeightLabel: string;
  error: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
}) {
  return (
    <>
      {/* CONCRETE SHAPE */}
      <div className="mb-7">
        <label className="mb-2 block text-sm font-semibold">
          Concrete shape
        </label>

        <div className="grid grid-cols-3 gap-3">
          {(Object.keys(shapeLabels) as ConcreteShape[]).map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => onShapeChange(option)}
              aria-pressed={shape === option}
              className={`min-h-11 rounded-xl border px-4 font-semibold transition ${
                shape === option
                  ? "border-[#363199] bg-[#363199] text-white"
                  : "border-gray-200 bg-gray-50 text-[#030164] dark:border-white/10 dark:bg-white/5 dark:text-white"
              }`}
            >
              {shapeLabels[option]}
            </button>
          ))}
        </div>
      </div>

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
        {shape === "column" ? (
          /* ROUND COLUMN DIAMETER */
          <CalculatorField
            id="column-diameter"
            label={`Column diameter (${unit})`}
            value={diameter}
            onChange={onDiameterChange}
            placeholder={unit === "ft" ? "Example: 1" : "Example: 0.3"}
            hint="The diameter of the round column or sonotube."
          />
        ) : (
          <>
            {/* LENGTH */}
            <CalculatorField
              id="concrete-length"
              label={`${shape === "slab" ? "Slab" : "Walkway"} length (${unit})`}
              value={length}
              onChange={onLengthChange}
              placeholder={unit === "ft" ? "Example: 10" : "Example: 3"}
            />

            {/* WIDTH */}
            <CalculatorField
              id="concrete-width"
              label={`${shape === "slab" ? "Slab" : "Walkway"} width (${unit})`}
              value={width}
              onChange={onWidthChange}
              placeholder={unit === "ft" ? "Example: 10" : "Example: 1"}
            />
          </>
        )}

        {/* THICKNESS / DEPTH */}
        <div className="border-t border-gray-100 pt-6 dark:border-white/10">
          <h3 className="mb-5 font-bold">Concrete thickness</h3>

          <div className="grid gap-5 sm:grid-cols-[1fr_160px]">
            <CalculatorField
              id="thickness"
              label={`Thickness (${thicknessUnit})`}
              value={thickness}
              onChange={onThicknessChange}
              placeholder={
                thicknessUnit === "in" ? "Example: 4" : "Example: 10"
              }
              hint={
                thicknessUnit === "in"
                  ? "Typical slabs and walkways are 4 inches thick."
                  : "Typical slabs and walkways are around 10 centimeters thick."
              }
            />

            <div>
              <label
                htmlFor="thickness-unit"
                className="mb-2 block text-sm font-semibold"
              >
                Thickness unit
              </label>

              <select
                id="thickness-unit"
                value={thicknessUnit}
                onChange={(event) =>
                  onThicknessUnitChange(
                    event.target.value as ConcreteThicknessUnit
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

        {/* WASTE */}
        <CalculatorField
          id="waste"
          label="Extra waste (%)"
          value={waste}
          onChange={onWasteChange}
          min="0"
          max="50"
          step="1"
          hint="Adding 5–10% helps account for spillage, uneven excavation, and over-digging."
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

        {/* BAG ESTIMATE NOTE */}
        <p className="text-xs text-gray-500 dark:text-white/50">
          Bag estimates are based on standard {bagsWeightLabel} dry concrete mix
          ({bagsPerUnit} bags per {unit === "ft" ? "cubic yard" : "cubic meter"}).
        </p>

        {/* ACTIONS */}
        <CalculatorFormActions
          submitLabel="Calculate Concrete"
          onReset={onReset}
        />
      </form>
    </>
  );
}
