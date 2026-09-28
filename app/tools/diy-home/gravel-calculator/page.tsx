"use client";

import { useState } from "react";
import { Ruler, Mountain } from "lucide-react";
import CalculatorPageShell, {
  type CalculatorPageConfig,
} from "@/app/tools/_components/calculator-page-shell";
import GravelCalculatorForm, {
  type GravelAreaUnit,
  type GravelDepthUnit,
} from "./gravel-calculator-form";

const pageConfig: CalculatorPageConfig = {
  title: "Gravel Calculator",
  description:
    "Calculate how much gravel you need for a driveway, walkway, patio, garden bed, or landscaping project based on area, depth, and extra waste.",
  heroIcon: <Mountain size={32} />,
  heroActionLabel: "How to Measure",

  form: {
    title: "Enter your measurements",
    description:
      "Measure the area you want to cover and enter your desired gravel depth.",
  },

  quickGuide: {
    icon: <Ruler size={23} />,
    title: "Not sure how to measure?",
    description:
      "Measure the length and width of the area, then determine how deep you want the gravel layer to be.",
    steps: [
      "Measure the length of the area.",
      "Measure the width of the area.",
      "Choose the required gravel depth.",
      "Add extra material for waste and uneven areas.",
    ],
    buttonLabel: "Full measurement tutorial",
  },

  tutorial: {
    eyebrow: "Step-by-step guide",
    title: "How to measure for gravel",
    description:
      "Accurate measurements help you estimate the amount of gravel required for your project.",
    steps: [
      {
        title: "Measure the area length",
        description:
          "Use a measuring tape to measure the longest distance across the area you want to cover.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>Start</span>
              <span>20 ft</span>
              <span>End</span>
            </div>

            <div className="mt-3 h-1 rounded-full bg-[#363199]" />

            <p className="mt-3 text-center text-xs text-gray-500 dark:text-white/50">
              Example: 20 ft
            </p>
          </div>
        ),
      },

      {
        title: "Measure the area width",
        description:
          "Measure the distance from one side of the area to the other. Keep the tape straight and measure at the points where the gravel will actually be installed.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="mx-auto h-20 w-32 border-2 border-[#363199]">
              <div className="flex h-full items-center justify-center text-xs font-bold">
                10 ft
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-gray-500 dark:text-white/50">
              Example width: 10 ft
            </p>
          </div>
        ),
      },

      {
        title: "Choose the gravel depth",
        description:
          "Determine how deep you want your gravel layer. The required depth depends on the type of project, the existing surface, and the intended use of the area.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="mx-auto flex max-w-xs items-end gap-3">
              <div className="h-20 w-full rounded-t-xl border-2 border-[#363199] bg-[#E8E085]">
                <div className="flex h-full items-center justify-center text-sm font-bold text-[#030164]">
                  4 inches
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-gray-500 dark:text-white/50">
              Example gravel depth: 4 inches
            </p>
          </div>
        ),
      },

      {
        title: "Add extra material",
        description:
          "An extra allowance can help account for uneven ground, small measurement differences, settling, and material lost during handling.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#E8E085] p-5 text-[#030164]">
            <p className="text-sm font-semibold">Example allowance</p>
            <p className="mt-1 text-3xl font-extrabold">10%</p>
            <p className="mt-1 text-xs opacity-70">
              Adjust this depending on your project and site conditions.
            </p>
          </div>
        ),
      },
    ],

    tipsTitle: "Measurement tips",

    tips: [
      "Measure the area twice before calculating.",
      "For irregular spaces, divide the area into smaller rectangles.",
      "Use the same unit for length and width.",
      "Measure the gravel depth at several points if the ground is uneven.",
      "Keep the waste allowance realistic for the project.",
    ],
  },

  formula: {
    title: "Gravel calculator formula",

    rows: [
      {
        title: "1. Calculate area",
        formula: "Length × Width",
      },
      {
        title: "2. Convert depth",
        formula: "Depth in inches ÷ 12 = Depth in feet",
      },
      {
        title: "3. Calculate volume",
        formula: "Area × Depth",
      },
      {
        title: "4. Add waste",
        formula: "Base Volume × (1 + Waste % ÷ 100)",
      },
    ],
  },

  faqs: [
    {
      question: "How deep should gravel be?",
      answer:
        "The required depth depends on the project. Driveways, paths, decorative areas, and drainage applications can require different gravel depths, so use the depth appropriate for your specific installation.",
    },

    {
      question: "How much gravel do I need for a 20 × 10 ft area?",
      answer:
        "The amount depends on the gravel depth. For example, a 20 × 10 ft area at 4 inches deep requires about 2.47 cubic yards before adding a waste allowance.",
    },

    {
      question: "Can I use meters and centimeters?",
      answer:
        "Yes. Select meters for the area measurements and centimeters for the gravel depth.",
    },

    {
      question: "What does the waste percentage mean?",
      answer:
        "The waste allowance provides additional material for uneven ground, settling, measurement differences, and material lost during installation.",
    },

    {
      question: "Does this calculator tell me how many tons of gravel I need?",
      answer:
        "This calculator estimates gravel volume. Converting volume to tons requires the gravel's bulk density, which can vary by material, stone size, moisture, and supplier. Check the product specification from your gravel supplier for an accurate weight estimate.",
    },

    {
      question: "Can I use this calculator for an irregular area?",
      answer:
        "Yes. Divide the area into smaller rectangular or square sections, calculate each section separately, and add the volumes together.",
    },
  ],

  cta: {
    title: "Need another DIY calculator?",
    description:
      "Calculate materials for your next home improvement project with our collection of free tools.",
    href: "/tools/diy-home",
    label: "Explore DIY Tools",
  },
};

export default function GravelCalculatorPage() {
  const [unit, setUnit] = useState<GravelAreaUnit>("ft");
  const [depthUnit, setDepthUnit] = useState<GravelDepthUnit>("in");

  const [areaLength, setAreaLength] = useState("");
  const [areaWidth, setAreaWidth] = useState("");
  const [depth, setDepth] = useState("");
  const [waste, setWaste] = useState("10");

  const [error, setError] = useState("");

  const [result, setResult] = useState<{
    area: number;
    baseVolume: number;
    volumeWithWaste: number;
  } | null>(null);

  function calculateGravel(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const length = Number(areaLength);
    const width = Number(areaWidth);
    const gravelDepth = Number(depth);
    const wastePercent = Number(waste);

    if (
      !length ||
      !width ||
      !gravelDepth ||
      length <= 0 ||
      width <= 0 ||
      gravelDepth <= 0
    ) {
      setError("Please enter valid measurements greater than 0.");
      return;
    }

    if (wastePercent < 0 || wastePercent > 50) {
      setError("Waste percentage should be between 0% and 50%.");
      return;
    }

    const area = length * width;

    let baseVolume: number;

    if (unit === "ft") {
      // Area = square feet.
      // Convert depth to feet.
      const depthInFeet =
        depthUnit === "in"
          ? gravelDepth / 12
          : gravelDepth / 30.48;

      const cubicFeet = area * depthInFeet;

      // 1 cubic yard = 27 cubic feet
      baseVolume = cubicFeet / 27;
    } else {
      // Area = square meters.
      // Convert depth to meters.
      const depthInMeters =
        depthUnit === "cm"
          ? gravelDepth / 100
          : gravelDepth * 0.0254;

      const cubicMeters = area * depthInMeters;

      baseVolume = cubicMeters;
    }

    const volumeWithWaste =
      baseVolume * (1 + wastePercent / 100);

    setResult({
      area,
      baseVolume,
      volumeWithWaste,
    });

    setTimeout(() => {
      document
        .getElementById("calculator-result")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 50);
  }

  function resetCalculator() {
    setAreaLength("");
    setAreaWidth("");
    setDepth("");
    setWaste("10");
    setDepthUnit(unit === "ft" ? "in" : "cm");
    setResult(null);
    setError("");
  }

  const volumeUnit =
    unit === "ft" ? "cubic yards" : "cubic meters";

  const calculatorResult = result
    ? {
        title: "Your gravel requirement",

        metrics: [
          {
            label: "Coverage area",
            value: result.area.toFixed(2),
            detail:
              unit === "ft"
                ? "square feet"
                : "square meters",
          },

          {
            label: "Base volume",
            value: result.baseVolume.toFixed(2),
            detail: volumeUnit,
          },

          {
            label: "Recommended quantity",
            value: result.volumeWithWaste.toFixed(2),
            detail: `${volumeUnit} including ${waste}% waste`,
            highlight: true,
          },
        ],

        note:
          "These results are estimates. Actual gravel requirements can vary because of uneven ground, settling, gravel type, stone size, moisture, and installation conditions.",
      }
    : null;

  return (
    <CalculatorPageShell
      config={pageConfig}
      result={calculatorResult}
    >
      <GravelCalculatorForm
        unit={unit}
        onUnitChange={setUnit}
        depthUnit={depthUnit}
        onDepthUnitChange={setDepthUnit}
        areaLength={areaLength}
        onAreaLengthChange={setAreaLength}
        areaWidth={areaWidth}
        onAreaWidthChange={setAreaWidth}
        depth={depth}
        onDepthChange={setDepth}
        waste={waste}
        onWasteChange={setWaste}
        error={error}
        onSubmit={calculateGravel}
        onReset={resetCalculator}
      />
    </CalculatorPageShell>
  );
}