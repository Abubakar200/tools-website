"use client";

import { useState } from "react";
import {
  CalculatorField,
  CalculatorFormActions,
} from "@/app/tools/_components/calculator-form-controls";

export default function MonthlyToHourlyMini() {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculateYearlySalary(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();
    setError("");

    const salary = Number(monthlySalary);

    if (!salary || salary <= 0) {
      setError("Please enter a valid monthly salary greater than 0.");
      return;
    }

    const yearlySalary = salary * 12;

    setResult(yearlySalary);

    setTimeout(() => {
      document
        .getElementById("monthly-yearly-result")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 50);
  }

  function resetCalculator() {
    setMonthlySalary("");
    setResult(null);
    setError("");
  }

  return (
    <div
      id="monthly-yearly-calculator"
      className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-white/[0.03] sm:p-8"
    >
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-wide text-[#363199]">
          Quick Calculator
        </p>

        <h2 className="mt-2 text-2xl font-extrabold text-[#030164] dark:text-white">
          Monthly Salary to Yearly Salary
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/60">
          Enter your monthly salary to quickly calculate your estimated yearly
          salary.
        </p>
      </div>

      <form onSubmit={calculateYearlySalary} className="space-y-5">
        <CalculatorField
          id="monthly-salary"
          label="Monthly salary"
          value={monthlySalary}
          onChange={setMonthlySalary}
          placeholder="Example: 5000"
          hint="Enter your gross monthly salary."
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
          submitLabel="Calculate Yearly Salary"
          onReset={resetCalculator}
        />
      </form>

      {result !== null && (
        <div
          id="monthly-yearly-result"
          className="mt-6 rounded-2xl bg-[#E8E085] p-5 text-[#030164]"
        >
          <p className="text-sm font-semibold">
            Estimated yearly salary
          </p>

          <p className="mt-1 text-3xl font-extrabold">
            {result.toFixed(2)}
          </p>

          <p className="mt-2 text-xs opacity-70">
            Monthly salary × 12 months
          </p>
        </div>
      )}
    </div>
  );
}