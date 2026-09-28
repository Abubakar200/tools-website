"use client";

import {
  CalculatorField,
  CalculatorFormActions,
} from "@/app/tools/_components/calculator-form-controls";
import MonthlyToHourlyMini from "./monthly-to-yearly-mini";
import DownloadPdfButton from "@/app/components/calculator/DownloadPdfButton";
export default function HourlyRateCalculatorForm({
  annualIncome,
  onAnnualIncomeChange,
  hoursPerWeek,
  onHoursPerWeekChange,
  weeksPerYear,
  onWeeksPerYearChange,
  error,
  onSubmit,
  onReset,
}: {
  annualIncome: string;
  onAnnualIncomeChange: (value: string) => void;
  hoursPerWeek: string;
  onHoursPerWeekChange: (value: string) => void;
  weeksPerYear: string;
  onWeeksPerYearChange: (value: string) => void;
  error: string;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onReset: () => void;
}) {
  function scrollToMonthlyCalculator() {
    document
      .getElementById("monthly-yearly-calculator")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
  }

  return (
    <>
      <form onSubmit={onSubmit} className="space-y-6">
        <div>
          <CalculatorField
            id="annual-income"
            label="Annual income"
            value={annualIncome}
            onChange={onAnnualIncomeChange}
            placeholder="Example: 60000"
            hint="Enter your total income for one year."
          />

          <button
            type="button"
            onClick={scrollToMonthlyCalculator}
            className="mt-2 text-sm font-semibold text-[#363199] underline underline-offset-4 transition hover:opacity-80 dark:text-[#E8E085]"
          >
            Don't know your yearly salary? Click here to calculate it from
            your monthly salary.
          </button>
        </div>

        <CalculatorField
          id="hours-per-week"
          label="Hours worked per week"
          value={hoursPerWeek}
          onChange={onHoursPerWeekChange}
          placeholder="Example: 40"
          min="1"
          max="168"
          step="0.5"
          hint="Example: 40 hours per week."
        />

        <CalculatorField
          id="weeks-per-year"
          label="Weeks worked per year"
          value={weeksPerYear}
          onChange={onWeeksPerYearChange}
          placeholder="Example: 52"
          min="1"
          max="52"
          step="1"
          hint="Use 52 for a full working year, or reduce this for vacation or unpaid weeks."
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
          submitLabel="Calculate Hourly Rate"
          onReset={onReset}
        />
      </form>

      <div className="mt-10">
        <MonthlyToHourlyMini />
      </div>
    </>
  );
}