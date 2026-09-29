"use client";

import { useState } from "react";
import { Ruler, Shovel } from "lucide-react";
import CalculatorPageShell, {
  type CalculatorPageConfig,
} from "@/app/tools/_components/calculator-page-shell";
import MulchCalculatorForm, {
  type MulchAreaUnit,
  type MulchDepthUnit,
} from "./mulch-calculator-form";
import DownloadPdfButton from "@/app/components/calculator/DownloadPdfButton";

const pageConfig: CalculatorPageConfig = {
  title: "Mulch Calculator",
  description:
    "Calculate how much mulch you need for your garden, flower bed, or landscaping project based on area, depth, and extra waste.",
  heroIcon: <Shovel size={32} />,
  heroActionLabel: "How to Measure",
  form: {
    title: "Enter your measurements",
    description:
      "Measure the area you want to cover and enter your desired mulch depth.",
  },
  quickGuide: {
    icon: <Ruler size={23} />,
    title: "Not sure how to measure?",
    description:
      "Measure the length and width of the area, then choose how deep you want the mulch layer to be.",
    steps: [
      "Measure the length of the area.",
      "Measure the width of the area.",
      "Choose your desired mulch depth.",
      "Add extra material for waste and settling.",
    ],
    buttonLabel: "Full measurement tutorial",
  },
  tutorial: {
    eyebrow: "Step-by-step guide",
    title: "How to measure for mulch",
    description:
      "Accurate measurements help you estimate the amount of mulch needed and avoid buying too much or too little.",
    steps: [
      {
        title: "Measure the area length",
        description:
          "Use a measuring tape to measure the longest straight distance across the area you want to cover.",
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
          "Measure the distance from one side of the area to the other side. Keep your measuring tape straight for the most accurate result.",
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
        title: "Choose the mulch depth",
        description:
          "Decide how deep you want your mulch layer. A common landscaping depth is around 2 to 4 inches, depending on the application.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="mx-auto flex max-w-xs items-end gap-3">
              <div className="h-20 w-full rounded-t-xl border-2 border-[#363199] bg-[#E8E085]">
                <div className="flex h-full items-center justify-center text-sm font-bold text-[#030164]">
                  3 inches
                </div>
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-gray-500 dark:text-white/50">
              Example mulch depth: 3 inches
            </p>
          </div>
        ),
      },
      {
        title: "Add extra material",
        description:
          "Adding a small waste allowance can help account for uneven ground, settling, measurement differences, and material loss during installation.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#E8E085] p-5 text-[#030164]">
            <p className="text-sm font-semibold">Typical starting point</p>
            <p className="mt-1 text-3xl font-extrabold">10%</p>
            <p className="mt-1 text-xs opacity-70">
              Adjust the allowance depending on your project.
            </p>
          </div>
        ),
      },
    ],
    tipsTitle: "Measurement tips",
    tips: [
      "Measure the area twice before entering your numbers.",
      "For irregular areas, divide the space into smaller rectangles.",
      "Keep the same measurement unit for length and width.",
      "Mulch depth should be entered separately in inches or centimeters.",
      "Consider extra material for settling and uneven ground.",
    ],
  },
  formula: {
    title: "Mulch calculator formula",
    rows: [
      {
        title: "1. Calculate area",
        formula: "Length × Width",
      },
      {
        title: "2. Convert mulch depth",
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
      question: "How deep should mulch be?",
      answer:
        "A mulch layer of around 2 to 4 inches is commonly used for many landscaping applications. The appropriate depth can vary depending on the type of mulch and where it is being used.",
    },
    {
      question: "How much mulch do I need for a 20 × 10 ft area?",
      answer:
        "The amount depends on the mulch depth. For example, a 20 × 10 ft area covered at 3 inches deep requires about 1.85 cubic yards before adding any waste allowance.",
    },
    {
      question: "Can I use meters and centimeters?",
      answer:
        "Yes. Select meters for the area measurements and centimeters for the mulch depth.",
    },
    {
      question: "What does the waste percentage mean?",
      answer:
        "The waste allowance provides additional material for uneven areas, settling, measurement differences, and material lost during installation.",
    },
    {
      question: "Can this calculator tell me how many bags of mulch I need?",
      answer:
        "This calculator estimates the required volume. To calculate bags, you also need the volume contained in each bag, such as 2 cubic feet per bag.",
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

export default function MulchCalculatorPage() {
  const [unit, setUnit] = useState<MulchAreaUnit>("ft");
  const [depthUnit, setDepthUnit] = useState<MulchDepthUnit>("in");

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

  function calculateMulch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const length = Number(areaLength);
    const width = Number(areaWidth);
    const mulchDepth = Number(depth);
    const wastePercent = Number(waste);

    if (
      !length ||
      !width ||
      !mulchDepth ||
      length <= 0 ||
      width <= 0 ||
      mulchDepth <= 0
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
      // Area is in square feet.
      // Convert mulch depth from inches to feet.
      const depthInFeet =
        depthUnit === "in"
          ? mulchDepth / 12
          : mulchDepth / 30.48;

      const cubicFeet = area * depthInFeet;

      // 1 cubic yard = 27 cubic feet
      baseVolume = cubicFeet / 27;
    } else {
      // Area is in square meters.
      // Convert mulch depth to meters.
      const depthInMeters =
        depthUnit === "cm"
          ? mulchDepth / 100
          : mulchDepth * 0.0254;

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
        title: "Your mulch requirement",
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
          "These results are estimates. Actual mulch requirements can vary because of uneven ground, settling, material density, and installation conditions.",
        action: (
          <DownloadPdfButton
            data={{
              title: "Mulch Calculator",
              inputs: [
                {
                  label: "Area measurement unit",
                  value: unit === "ft" ? "Feet" : "Meters",
                },
                { label: "Area length", value: areaLength, detail: unit },
                { label: "Area width", value: areaWidth, detail: unit },
                {
                  label: "Mulch depth",
                  value: depth,
                  detail: depthUnit,
                },
                { label: "Waste allowance", value: waste, detail: "%" },
              ],
              results: [
                {
                  label: "Coverage area",
                  value: result.area.toFixed(2),
                  detail: unit === "ft" ? "square feet" : "square meters",
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
                },
              ],
              tutorial: {
                title: "How to Calculate Mulch Requirements",
                description:
                  "Calculate the coverage area, convert the mulch depth to match the area unit, calculate the volume, and add an allowance for waste.",
                steps: [
                  {
                    title: "Measure the area length",
                    description:
                      "Measure the longest straight distance across the area you want to cover.",
                  },
                  {
                    title: "Measure the area width",
                    description:
                      "Measure the distance from one side of the area to the other using the same unit as the length.",
                  },
                  {
                    title: "Choose the mulch depth",
                    description:
                      "Enter the depth in inches or centimeters. A depth of around 2 to 4 inches is common for many landscaping applications.",
                  },
                  {
                    title: "Add waste",
                    description:
                      "Add extra material to account for uneven ground, settling, measurement differences, and material loss.",
                  },
                ],
              },
              formula: {
                title: "Mulch Calculator Formula",
                rows: [
                  { title: "Area", formula: "Length × Width" },
                  {
                    title: "Convert depth",
                    formula: "Inches ÷ 12 to feet; centimeters ÷ 100 to meters",
                  },
                  {
                    title: "Volume",
                    formula:
                      "Area × Depth; convert cubic feet ÷ 27 to cubic yards",
                  },
                  {
                    title: "Volume with waste",
                    formula: "Base Volume × (1 + Waste % ÷ 100)",
                  },
                ],
              },
            }}
          />
        ),
      }
    : null;

  return (
    <CalculatorPageShell
      config={pageConfig}
      result={calculatorResult}
    >
      <MulchCalculatorForm
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
        onSubmit={calculateMulch}
        onReset={resetCalculator}
      />
    </CalculatorPageShell>
  );
}