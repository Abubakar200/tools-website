"use client";

import { useState } from "react";
import { Clock, Calculator } from "lucide-react";
import CalculatorPageShell, {
  type CalculatorPageConfig,
} from "@/app/tools/_components/calculator-page-shell";
import HourlyRateCalculatorForm from "./hourly-rate-calculator-form";
import DownloadPdfButton from "@/app/components/calculator/DownloadPdfButton";

const pageConfig: CalculatorPageConfig = {
  title: "Hourly Rate Calculator",
  description:
    "Calculate your hourly rate from your annual income, weekly working hours, and number of working weeks per year.",
  heroIcon: <Clock size={32} />,
  heroActionLabel: "How to Calculate",

  form: {
    title: "Enter your work details",
    description:
      "Enter your annual income and working schedule to estimate your effective hourly rate.",
  },

  quickGuide: {
    icon: <Calculator size={23} />,
    title: "Not sure how to calculate your hourly rate?",
    description:
      "Start with your yearly income, then divide it by the total number of hours you expect to work during the year.",
    steps: [
      "Enter your annual income.",
      "Enter your average working hours per week.",
      "Enter how many weeks you work each year.",
      "Review your hourly, weekly, and monthly figures.",
    ],
    buttonLabel: "Full calculation guide",
  },

  tutorial: {
    eyebrow: "Step-by-step guide",
    title: "How to calculate an hourly rate",
    description:
      "Your hourly rate depends on both your income and the total number of hours you work during the year.",

    steps: [
      {
        title: "Enter your annual income",
        description:
          "Enter the amount you earn during a full year before dividing it into hourly earnings. Use the same currency throughout the calculation.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <p className="text-sm font-semibold">Example annual income</p>

            <p className="mt-2 text-3xl font-extrabold text-[#363199]">
              60,000
            </p>

            <p className="mt-1 text-xs text-gray-500 dark:text-white/50">
              Example only
            </p>
          </div>
        ),
      },

      {
        title: "Enter weekly working hours",
        description:
          "Enter the number of hours you normally work each week. A standard full-time example is 40 hours.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="flex items-center justify-center">
              <div className="rounded-2xl border-2 border-[#363199] px-8 py-5">
                <p className="text-center text-3xl font-extrabold">40</p>
                <p className="mt-1 text-center text-xs text-gray-500 dark:text-white/50">
                  hours / week
                </p>
              </div>
            </div>
          </div>
        ),
      },

      {
        title: "Enter working weeks per year",
        description:
          "Use 52 if you work throughout the year. Reduce this number when you have unpaid vacation, seasonal work, or other weeks when you do not earn income.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="mx-auto grid max-w-xs grid-cols-4 gap-2">
              {Array.from({ length: 12 }).map((_, index) => (
                <div key={index} className="h-8 rounded-lg bg-[#363199]/10" />
              ))}
            </div>

            <p className="mt-3 text-center text-xs text-gray-500 dark:text-white/50">
              Example: 52 working weeks
            </p>
          </div>
        ),
      },

      {
        title: "Review your hourly rate",
        description:
          "The calculator divides your annual income by your estimated annual working hours to determine the equivalent hourly rate.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#E8E085] p-5 text-[#030164]">
            <p className="text-sm font-semibold">Example calculation</p>

            <p className="mt-2 text-3xl font-extrabold">60,000 ÷ 2,080</p>

            <p className="mt-1 text-xs opacity-70">= 28.85 per hour</p>
          </div>
        ),
      },
    ],

    tipsTitle: "Hourly rate tips",

    tips: [
      "Use your actual working schedule rather than assuming 52 weeks.",
      "Reduce the number of working weeks when you have unpaid time off.",
      "For freelancers, consider adding business expenses and non-billable time.",
      "Use the result as an estimate because taxes, benefits, bonuses, and other compensation can affect your effective rate.",
    ],
  },

  formula: {
    title: "Hourly rate calculator formula",

    rows: [
      {
        title: "1. Calculate annual working hours",
        formula: "Hours per Week × Weeks per Year",
      },
      {
        title: "2. Calculate hourly rate",
        formula: "Annual Income ÷ Annual Working Hours",
      },
      {
        title: "3. Calculate weekly income",
        formula: "Hourly Rate × Hours per Week",
      },
      {
        title: "4. Calculate monthly income",
        formula: "Annual Income ÷ 12",
      },
    ],
  },

  faqs: [
    {
      question: "How do I calculate my hourly rate from an annual salary?",
      answer:
        "Divide your annual income by the total number of hours you expect to work during the year. Annual working hours are calculated by multiplying weekly hours by working weeks per year.",
    },

    {
      question: "What hourly rate is $60,000 a year?",
      answer:
        "At 40 hours per week for 52 weeks, $60,000 per year is approximately $28.85 per hour.",
    },

    {
      question: "Should I use 52 weeks?",
      answer:
        "Use 52 when you expect to work and earn income throughout the entire year. If you have unpaid vacation, seasonal work, or other unpaid periods, enter a lower number.",
    },

    {
      question: "Does this calculator include taxes?",
      answer:
        "No. The calculator uses the income amount you enter and does not automatically account for income taxes, payroll taxes, deductions, or benefits.",
    },

    {
      question: "Can freelancers use this calculator?",
      answer:
        "Yes. Freelancers can use it as a basic conversion tool. However, a freelance rate should also consider business expenses, taxes, unpaid administrative work, marketing, and other non-billable time.",
    },

    {
      question: "Is hourly rate the same as take-home pay?",
      answer:
        "Not necessarily. An hourly rate based on gross income does not represent your final take-home amount after taxes, deductions, or other expenses.",
    },
  ],

  cta: {
    title: "Need a freelance rate instead?",
    description:
      "Estimate the hourly rate you should charge by considering your income goals, expenses, taxes, and billable hours.",
    href: "/tools/finance-freelance/freelance-rate-calculator",
    label: "Freelance Rate Calculator",
  },
};

export default function HourlyRateCalculatorPage() {
  const [annualIncome, setAnnualIncome] = useState("");
  const [hoursPerWeek, setHoursPerWeek] = useState("40");
  const [weeksPerYear, setWeeksPerYear] = useState("52");

  const [error, setError] = useState("");

  const [result, setResult] = useState<{
    hourlyRate: number;
    weeklyIncome: number;
    monthlyIncome: number;
    annualIncome: number;
    annualHours: number;
  } | null>(null);

  function calculateHourlyRate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const income = Number(annualIncome);
    const hours = Number(hoursPerWeek);
    const weeks = Number(weeksPerYear);

    if (
      !income ||
      !hours ||
      !weeks ||
      income <= 0 ||
      hours <= 0 ||
      weeks <= 0
    ) {
      setError("Please enter valid values greater than 0.");
      return;
    }

    if (hours > 168) {
      setError("Hours per week cannot be greater than 168.");
      return;
    }

    if (weeks > 52) {
      setError("Weeks per year cannot be greater than 52.");
      return;
    }

    const annualHours = hours * weeks;

    const hourlyRate = income / annualHours;

    const weeklyIncome = hourlyRate * hours;

    const monthlyIncome = income / 12;

    setResult({
      hourlyRate,
      weeklyIncome,
      monthlyIncome,
      annualIncome: income,
      annualHours,
    });

    setTimeout(() => {
      document.getElementById("calculator-result")?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 50);
  }

  function resetCalculator() {
    setAnnualIncome("");
    setHoursPerWeek("40");
    setWeeksPerYear("52");
    setResult(null);
    setError("");
  }

  const calculatorResult = result
    ? {
        title: "Your hourly rate",

        metrics: [
          {
            label: "Hourly rate",
            value: result.hourlyRate.toFixed(2),
            detail: "per hour",
            highlight: true,
          },
          {
            label: "Weekly income",
            value: result.weeklyIncome.toFixed(2),
            detail: "per week",
          },
          {
            label: "Monthly income",
            value: result.monthlyIncome.toFixed(2),
            detail: "average per month",
          },
          {
            label: "Annual working hours",
            value: result.annualHours.toFixed(0),
            detail: "hours per year",
          },
        ],

        note: "This is an estimated gross hourly equivalent based on the income and working schedule you entered. Taxes, benefits, bonuses, deductions, and business expenses are not included.",

        action: (
          <DownloadPdfButton
            data={{
              title: "Hourly Rate Calculator",

              inputs: [
                {
                  label: "Annual income",
                  value: annualIncome,
                },
                {
                  label: "Hours worked per week",
                  value: hoursPerWeek,
                  detail: "hours",
                },
                {
                  label: "Weeks worked per year",
                  value: weeksPerYear,
                  detail: "weeks",
                },
              ],

              results: [
                {
                  label: "Hourly rate",
                  value: result.hourlyRate.toFixed(2),
                  detail: "per hour",
                },
                {
                  label: "Weekly income",
                  value: result.weeklyIncome.toFixed(2),
                  detail: "per week",
                },
                {
                  label: "Monthly income",
                  value: result.monthlyIncome.toFixed(2),
                  detail: "per month",
                },
                {
                  label: "Annual working hours",
                  value: result.annualHours.toFixed(0),
                  detail: "hours",
                },
              ],

              tutorial: {
                title: "How to Calculate an Hourly Rate",
                description:
                  "Your hourly rate can be estimated by dividing annual income by total annual working hours.",

                steps: [
                  {
                    title: "Enter your annual income",
                    description:
                      "Enter the total income you receive during one year.",
                  },
                  {
                    title: "Enter weekly working hours",
                    description:
                      "Enter the number of hours you normally work each week.",
                  },
                  {
                    title: "Enter working weeks",
                    description:
                      "Enter how many weeks you work during the year.",
                  },
                  {
                    title: "Calculate the hourly rate",
                    description:
                      "Annual income is divided by your estimated annual working hours.",
                  },
                ],
              },

              formula: {
                title: "Formula",
                rows: [
                  {
                    title: "Annual working hours",
                    formula: "Hours per Week x Weeks per Year",
                  },
                  {
                    title: "Hourly rate",
                    formula: "Annual Income / Annual Working Hours",
                  },
                ],
              },
            }}
          />
        ),
      }
    : null;
  return (
    <>
      <CalculatorPageShell config={pageConfig} result={calculatorResult}>
        <HourlyRateCalculatorForm
          annualIncome={annualIncome}
          onAnnualIncomeChange={setAnnualIncome}
          hoursPerWeek={hoursPerWeek}
          onHoursPerWeekChange={setHoursPerWeek}
          weeksPerYear={weeksPerYear}
          onWeeksPerYearChange={setWeeksPerYear}
          error={error}
          onSubmit={calculateHourlyRate}
          onReset={resetCalculator}
        />
      </CalculatorPageShell>
    </>
  );
}
