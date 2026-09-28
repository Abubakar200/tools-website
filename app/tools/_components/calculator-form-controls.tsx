export function CalculatorField({
  id,
  label,
  value,
  onChange,
  placeholder,
  min = "0",
  max,
  step = "any",
  hint,
  required = true,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  min?: string;
  max?: string;
  step?: string;
  hint?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold">{label}</label>
      <input
        id={id}
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-base outline-none transition focus:border-[#363199] focus:ring-2 focus:ring-[#363199]/15 dark:border-white/10 dark:bg-[#08083a]"
        required={required}
      />
      {hint && <p className="mt-2 text-xs text-gray-500 dark:text-white/50">{hint}</p>}
    </div>
  );
}

export function CalculatorFormActions({
  submitLabel,
  onReset,
}: {
  submitLabel: string;
  onReset: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button type="submit" className="min-h-12 flex-1 rounded-xl bg-[#030164] px-5 font-bold text-white transition hover:bg-[#363199]">
        {submitLabel}
      </button>
      <button
        type="button"
        onClick={onReset}
        className="min-h-12 rounded-xl border border-gray-200 px-5 font-semibold transition hover:bg-gray-50 dark:border-white/10 dark:hover:bg-white/5"
      >
        Reset
      </button>
    </div>
  );
}