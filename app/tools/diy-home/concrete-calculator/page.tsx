"use client";

import { useState } from "react";
import { Ruler, Package } from "lucide-react";
import CalculatorPageShell, {
  type CalculatorPageConfig,
} from "@/app/tools/_components/calculator-page-shell";
import ConcreteCalculatorForm, {
  type ConcreteShape,
  type ConcreteAreaUnit,
  type ConcreteThicknessUnit,
} from "./concrete-calculator-form";
import DownloadPdfButton from "@/app/components/calculator/DownloadPdfButton";

const pageConfig: CalculatorPageConfig = {
  title: "Concrete Calculator",
  description:
    "Calculate how much concrete you need for a slab, round column, or walkway based on size, thickness, and extra waste.",
  heroIcon: <Package size={32} />,
  heroActionLabel: "How to Measure",

  form: {
    title: "Enter your measurements",
    description:
      "Choose the shape, measure it, and enter the concrete thickness you need.",
  },

  quickGuide: {
    icon: <Ruler size={23} />,
    title: "Not sure how to measure?",
    description:
      "Measure the length and width of the area (or the column diameter), then choose how thick the concrete layer should be.",
    steps: [
      "Choose the concrete shape.",
      "Measure the length and width, or the column diameter.",
      "Choose the required concrete thickness.",
      "Add extra material for waste and uneven excavation.",
    ],
    buttonLabel: "Full measurement tutorial",
  },

  tutorial: {
    eyebrow: "Step-by-step guide",
    title: "How to measure for concrete",
    description:
      "Accurate measurements help you estimate the amount of concrete required and avoid ordering too much or too little.",
    steps: [
      {
        title: "Choose the shape",
        description:
          "Select slab for square and rectangular pads, round column / tube for posts and pier forms, or walkway for narrow paths. Each shape uses its own volume formula.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="flex items-center justify-center gap-6 text-xs font-bold">
              <span className="flex flex-col items-center gap-1">
                <span className="h-12 w-16 border-2 border-[#363199]" />
                Slab
              </span>
              <span className="flex flex-col items-center gap-1">
                <span className="h-12 w-8 rounded-full border-2 border-[#363199]" />
                Column
              </span>
              <span className="flex flex-col items-center gap-1">
                <span className="h-12 w-4 border-2 border-[#363199]" />
                Walkway
              </span>
            </div>
          </div>
        ),
      },
      {
        title: "Measure the size",
        description:
          "For slabs and walkways, measure the length and width in feet or meters. For round columns, measure the diameter of the form tube.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="mx-auto h-20 w-32 border-2 border-[#363199]">
              <div className="flex h-full items-center justify-center text-xs font-bold">
                10 × 10 ft
              </div>
            </div>

            <p className="mt-3 text-center text-xs text-gray-500 dark:text-white/50">
              Example slab: 10 ft × 10 ft
            </p>
          </div>
        ),
      },
      {
        title: "Choose the concrete thickness",
        description:
          "Decide how thick the concrete should be. A common thickness is around 4 inches for walkways and slabs, and deeper for driveways and load-bearing footings.",
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
              Example thickness: 4 inches
            </p>
          </div>
        ),
      },
      {
        title: "Add extra material",
        description:
          "Adding a small waste allowance can help account for spillage, uneven excavation, over-digging, and measurement differences during pouring.",
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
      "For irregular shapes, divide the space into smaller rectangles.",
      "Keep the same measurement unit for length and width.",
      "Concrete thickness should be entered separately in inches or centimeters.",
      "Check local building codes for the required slab or footing thickness.",
    ],
  },

  formula: {
    title: "Concrete calculator formula",

    rows: [
      {
        title: "1. Calculate area (slab / walkway)",
        formula: "Length × Width",
      },
      {
        title: "2. Calculate area (round column)",
        formula: "π × (Diameter ÷ 2)²",
      },
      {
        title: "3. Convert thickness",
        formula: "Thickness in inches ÷ 12 = Thickness in feet",
      },
      {
        title: "4. Calculate volume",
        formula: "Area × Thickness",
      },
      {
        title: "5. Add waste",
        formula: "Base Volume × (1 + Waste % ÷ 100)",
      },
    ],
  },

  faqs: [
    {
      question: "How thick should concrete be?",
      answer:
        "Walkways and patios are commonly poured around 4 inches thick, slabs that support heavier loads often use 5 to 6 inches, and structural footings can require more. Check local building codes for the required thickness for your project.",
    },
    {
      question: "How many bags of concrete do I need?",
      answer:
        "The result includes an estimated number of standard dry mix bags. In imperial mode the estimate uses 80 lb bags at about 45 bags per cubic yard; in metric mode it uses approximately 33 bags per cubic meter.",
    },
    {
      question: "Can I use meters and centimeters?",
      answer:
        "Yes. Select meters for the size measurements and centimeters for the concrete thickness.",
    },
    {
      question: "What does the waste percentage mean?",
      answer:
        "The waste allowance provides additional concrete for spillage, uneven excavation, over-digging, and measurement differences during pouring.",
    },
    {
      question: "How do I calculate concrete for a round column?",
      answer:
        "Choose the round column shape and enter the tube diameter and height. The calculator uses the cylinder volume formula π × radius² × height.",
    },
    {
      question: "Does this calculator include rebar or forms?",
      answer:
        "No. This calculator estimates concrete volume and bag counts only. Rebar, wire mesh, and formwork must be planned separately.",
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

// Yield of a standard 80 lb dry concrete mix: about 0.6 cubic feet per bag,
// i.e. roughly 45 bags per cubic yard. Metric equivalent: about 33 bags/m³.
const BAGS_PER_CUBIC_YARD = 45;
const BAGS_PER_CUBIC_METER = 33;

export default function ConcreteCalculatorPage() {
  const [shape, setShape] = useState<ConcreteShape>("slab");
  const [unit, setUnit] = useState<ConcreteAreaUnit>("ft");
  const [thicknessUnit, setThicknessUnit] =
    useState<ConcreteThicknessUnit>("in");

  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [diameter, setDiameter] = useState("");
  const [thickness, setThickness] = useState("");
  const [waste, setWaste] = useState("10");

  const [error, setError] = useState("");

  const [result, setResult] = useState<{
    area: number;
    baseVolume: number;
    volumeWithWaste: number;
    bags: number;
  } | null>(null);

  function calculateConcrete(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const sizeOne = shape === "column" ? Number(diameter) : Number(length);
    const sizeTwo = Number(width);
    const concreteThickness = Number(thickness);
    const wastePercent = Number(waste);

    if (
      !sizeOne ||
      sizeOne <= 0 ||
      concreteThickness <= 0 ||
      (shape !== "column" && (!sizeTwo || sizeTwo <= 0))
    ) {
      setError("Please enter valid measurements greater than 0.");
      return;
    }

    if (wastePercent < 0 || wastePercent > 50) {
      setError("Waste percentage should be between 0% and 50%.");
      return;
    }

    let area: number;
    let baseVolume: number;
    let bagsPerUnit: number;

    if (unit === "ft") {
      // Area is in square feet.
      // Convert thickness from inches to feet.
      const thicknessInFeet =
        thicknessUnit === "in"
          ? concreteThickness / 12
          : concreteThickness / 30.48;

      area =
        shape === "column"
          ? Math.PI * Math.pow(sizeOne / 2, 2)
          : sizeOne * sizeTwo;

      const cubicFeet = area * thicknessInFeet;

      // 1 cubic yard = 27 cubic feet
      baseVolume = cubicFeet / 27;
      bagsPerUnit = BAGS_PER_CUBIC_YARD;
    } else {
      // Area is in square meters.
      // Convert thickness to meters.
      const thicknessInMeters =
        thicknessUnit === "cm"
          ? concreteThickness / 100
          : concreteThickness * 0.0254;

      area =
        shape === "column"
          ? Math.PI * Math.pow(sizeOne / 2, 2)
          : sizeOne * sizeTwo;

      const cubicMeters = area * thicknessInMeters;

      baseVolume = cubicMeters;
      bagsPerUnit = BAGS_PER_CUBIC_METER;
    }

    const volumeWithWaste =
      baseVolume * (1 + wastePercent / 100);

    const bags = Math.ceil(volumeWithWaste * bagsPerUnit);

    setResult({
      area,
      baseVolume,
      volumeWithWaste,
      bags,
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
    setShape("slab");
    setLength("");
    setWidth("");
    setDiameter("");
    setThickness("");
    setWaste("10");
    setThicknessUnit(unit === "ft" ? "in" : "cm");
    setResult(null);
    setError("");
  }

  const volumeUnit =
    unit === "ft" ? "cubic yards" : "cubic meters";

  const bagsPerUnit =
    unit === "ft" ? BAGS_PER_CUBIC_YARD : BAGS_PER_CUBIC_METER;

  const bagsWeightLabel =
    unit === "ft" ? "80 lb" : "40 kg";

  const shapeLabel =
    shape === "slab"
      ? "Slab"
      : shape === "column"
        ? "Round column"
        : "Walkway";

  const calculatorResult = result
    ? {
        title: "Your concrete requirement",

        metrics: [
          {
            label:
              shape === "column"
                ? "Cross-section area"
                : "Coverage area",
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

          {
            label: `Estimated ${bagsWeightLabel} bags`,
            value: String(result.bags),
            detail: `based on ~${bagsPerUnit} bags per ${
              unit === "ft" ? "cubic yard" : "cubic meter"
            }`,
          },
        ],

        note:
          "These results are estimates. Actual concrete requirements can vary because of uneven excavation, over-digging, spillage, and site conditions. Always order slightly more than calculated.",

        action: (
          <DownloadPdfButton
            data={{
              title: "Concrete Calculator",
              inputs: [
                { label: "Concrete shape", value: shapeLabel },
                {
                  label: "Measurement unit",
                  value: unit === "ft" ? "Feet" : "Meters",
                },
                ...(shape === "column"
                  ? [
                      {
                        label: "Column diameter",
                        value: diameter,
                        detail: unit,
                      },
                    ]
                  : [
                      { label: "Length", value: length, detail: unit },
                      { label: "Width", value: width, detail: unit },
                    ]),
                {
                  label: "Concrete thickness",
                  value: thickness,
                  detail: thicknessUnit,
                },
                { label: "Waste allowance", value: waste, detail: "%" },
              ],
              results: [
                {
                  label:
                    shape === "column"
                      ? "Cross-section area"
                      : "Coverage area",
                  value: result.area.toFixed(2),
                  detail:
                    unit === "ft" ? "square feet" : "square meters",
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
                {
                  label: `Estimated ${bagsWeightLabel} bags`,
                  value: String(result.bags),
                  detail: `based on ~${bagsPerUnit} bags per ${
                    unit === "ft" ? "cubic yard" : "cubic meter"
                  }`,
                },
              ],
              tutorial: {
                title: "How to Calculate Concrete Requirements",
                description:
                  "Calculate the surface area (or column cross-section), convert the thickness to match the size unit, calculate the volume, and add an allowance for waste.",
                steps: [
                  {
                    title: "Choose the shape",
                    description:
                      "Select slab, round column / tube, or walkway. Each shape uses its own area formula.",
                  },
                  {
                    title: "Measure the size",
                    description:
                      "Measure the length and width in feet or meters, or the tube diameter for round columns.",
                  },
                  {
                    title: "Choose the thickness",
                    description:
                      "Enter the thickness in inches or centimeters. Around 4 inches is common for walkways and slabs.",
                  },
                  {
                    title: "Add waste",
                    description:
                      "Add extra material to account for spillage, uneven excavation, over-digging, and measurement differences.",
                  },
                ],
              },
              formula: {
                title: "Concrete Calculator Formula",
                rows: [
                  {
                    title: "Area (slab / walkway)",
                    formula: "Length × Width",
                  },
                  {
                    title: "Area (round column)",
                    formula: "π × (Diameter ÷ 2)²",
                  },
                  {
                    title: "Convert thickness",
                    formula:
                      "Inches ÷ 12 to feet; centimeters ÷ 100 to meters",
                  },
                  {
                    title: "Volume",
                    formula:
                      "Area × Thickness; convert cubic feet ÷ 27 to cubic yards",
                  },
                  {
                    title: "Volume with waste",
                    formula: "Base Volume × (1 + Waste % ÷ 100)",
                  },
                  {
                    title: "Bag estimate",
                    formula:
                      "ROUNDUP(Volume with waste × Bags per unit)",
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
      <ConcreteCalculatorForm
        shape={shape}
        onShapeChange={setShape}
        unit={unit}
        onUnitChange={setUnit}
        thicknessUnit={thicknessUnit}
        onThicknessUnitChange={setThicknessUnit}
        length={length}
        onLengthChange={setLength}
        width={width}
        onWidthChange={setWidth}
        diameter={diameter}
        onDiameterChange={setDiameter}
        thickness={thickness}
        onThicknessChange={setThickness}
        waste={waste}
        onWasteChange={setWaste}
        bagsPerUnit={bagsPerUnit}
        bagsWeightLabel={bagsWeightLabel}
        error={error}
        onSubmit={calculateConcrete}
        onReset={resetCalculator}
      />
    </CalculatorPageShell>
  );
}
