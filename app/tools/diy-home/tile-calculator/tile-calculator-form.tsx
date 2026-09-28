import { CalculatorField, CalculatorFormActions } from "@/app/tools/_components/calculator-form-controls";

export type TileUnit = "ft" | "m";

export default function TileCalculatorForm({
  unit,
  onUnitChange,
  roomLength,
  onRoomLengthChange,
  roomWidth,
  onRoomWidthChange,
  tileLength,
  onTileLengthChange,
  tileWidth,
  onTileWidthChange,
  waste,
  onWasteChange,
  error,
  onSubmit,
  onReset,
}: {
  unit: TileUnit;
  onUnitChange: (unit: TileUnit) => void;
  roomLength: string;
  onRoomLengthChange: (value: string) => void;
  roomWidth: string;
  onRoomWidthChange: (value: string) => void;
  tileLength: string;
  onTileLengthChange: (value: string) => void;
  tileWidth: string;
  onTileWidthChange: (value: string) => void;
  waste: string;
  onWasteChange: (value: string) => void;
  error: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
}) {
  return (
    <>
      <div className="mb-7">
        <label className="mb-2 block text-sm font-semibold">Measurement unit</label>
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
          id="room-length"
          label={`Room length (${unit})`}
          value={roomLength}
          onChange={onRoomLengthChange}
          placeholder={unit === "ft" ? "Example: 12" : "Example: 4"}
        />
        <CalculatorField
          id="room-width"
          label={`Room width (${unit})`}
          value={roomWidth}
          onChange={onRoomWidthChange}
          placeholder={unit === "ft" ? "Example: 10" : "Example: 3"}
        />

        <div className="border-t border-gray-100 pt-6 dark:border-white/10">
          <h3 className="mb-5 font-bold">Tile dimensions</h3>
          <div className="grid gap-5 sm:grid-cols-2">
            <CalculatorField
              id="tile-length"
              label={`Tile length (${unit})`}
              value={tileLength}
              onChange={onTileLengthChange}
              placeholder={unit === "ft" ? "Example: 2" : "Example: 0.6"}
            />
            <CalculatorField
              id="tile-width"
              label={`Tile width (${unit})`}
              value={tileWidth}
              onChange={onTileWidthChange}
              placeholder={unit === "ft" ? "Example: 2" : "Example: 0.6"}
            />
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
          hint="10% is a common starting point for normal layouts."
          required={false}
        />

        {error && (
          <div role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <CalculatorFormActions submitLabel="Calculate Tiles" onReset={onReset} />
      </form>
    </>
  );
}