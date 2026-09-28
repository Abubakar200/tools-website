"use client";

import { useState } from "react";
import { Ruler, Square } from "lucide-react";
import CalculatorPageShell, {
  type CalculatorPageConfig,
} from "@/app/tools/_components/calculator-page-shell";
import TileCalculatorForm, { type TileUnit } from "./tile-calculator-form";

const pageConfig: CalculatorPageConfig = {
  title: "Tile Calculator",
  description:
    "Calculate how many tiles you need for your floor or wall, including an extra percentage for cuts, breakage, and waste.",
  heroIcon: <Square size={32} />,
  heroActionLabel: "How to Measure",
  form: {
    title: "Enter your measurements",
    description: "Measure the room and one tile, then enter the numbers below.",
  },
  quickGuide: {
    icon: <Ruler size={23} />,
    title: "Not sure how to measure?",
    description:
      "Don't worry. Measure the room from wall to wall, then measure one tile from edge to edge.",
    steps: [
      "Measure the longest wall-to-wall distance.",
      "Measure the width from the opposite walls.",
      "Measure one tile's length and width.",
      "Add around 10% extra for waste.",
    ],
    buttonLabel: "Full measurement tutorial",
  },
  tutorial: {
    eyebrow: "Step-by-step guide",
    title: "How to measure for tiles",
    description:
      "Accurate measurements help you estimate the right number of tiles and reduce unnecessary waste.",
    steps: [
      {
        title: "Measure the room length",
        description:
          "Use a measuring tape and measure the distance from one wall to the opposite wall. For a rectangular room, use the longest straight measurement as the room length.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="flex items-center justify-between text-sm font-semibold">
              <span>Wall</span><span>12 ft</span><span>Wall</span>
            </div>
            <div className="mt-3 h-1 rounded-full bg-[#363199]" />
            <p className="mt-3 text-center text-xs text-gray-500 dark:text-white/50">Example: 12 ft</p>
          </div>
        ),
      },
      {
        title: "Measure the room width",
        description:
          "Measure the distance between the other two walls. Keep your measuring tape straight and measure at floor level.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="mx-auto h-20 w-20 border-2 border-[#363199]">
              <div className="flex h-full items-center justify-center text-xs font-bold">10 ft</div>
            </div>
            <p className="mt-3 text-center text-xs text-gray-500 dark:text-white/50">Example room width: 10 ft</p>
          </div>
        ),
      },
      {
        title: "Measure one tile",
        description:
          "Measure the tile from edge to edge. Record both the tile length and tile width using the same unit as your room measurements.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#f7f7fb] p-5 dark:bg-white/5">
            <div className="mx-auto aspect-square w-28 border-2 border-[#363199]">
              <div className="flex h-full items-center justify-center text-center text-xs font-bold">2 ft × 2 ft</div>
            </div>
          </div>
        ),
      },
      {
        title: "Add extra tiles for waste",
        description:
          "Tiles often need to be cut around walls, corners, doors, or unusual shapes. Some tiles may also break during installation. Adding extra tiles helps cover these situations.",
        visual: (
          <div className="mt-5 rounded-2xl bg-[#E8E085] p-5 text-[#030164]">
            <p className="text-sm font-semibold">Typical starting point</p>
            <p className="mt-1 text-3xl font-extrabold">10%</p>
            <p className="mt-1 text-xs opacity-70">Adjust this depending on the layout and tile pattern.</p>
          </div>
        ),
      },
    ],
    tipsTitle: "Measurement tips",
    tips: [
      "Measure twice before entering your numbers.",
      "Use the same measurement unit for room and tile.",
      "For irregular rooms, divide the area into smaller rectangles.",
      "Keep extra tiles from the same batch when possible.",
    ],
  },
  formula: {
    title: "Tile calculator formula",
    rows: [
      { title: "1. Calculate room area", formula: "Room Length × Room Width" },
      { title: "2. Calculate tile area", formula: "Tile Length × Tile Width" },
      { title: "3. Calculate tiles needed", formula: "Room Area ÷ Tile Area" },
      { title: "4. Add waste", formula: "Tiles Needed × (1 + Waste % ÷ 100)" },
    ],
  },
  faqs: [
    {
      question: "How much extra tile should I buy?",
      answer:
        "A 10% allowance is a useful starting point for many straightforward installations. More may be appropriate for complicated layouts, diagonal patterns, or areas with many cuts.",
    },
    {
      question: "Can I use this calculator for wall tiles?",
      answer:
        "Yes. The same basic area calculation can be used for walls. Measure the wall height and width and enter the tile dimensions.",
    },
    {
      question: "What if my room is not rectangular?",
      answer:
        "Divide the room into smaller rectangular sections, calculate each section separately, and add the areas together.",
    },
    {
      question: "Should I round up the number of tiles?",
      answer:
        "Yes. Tiles are normally purchased as whole pieces or boxes, so the calculator rounds the required tile count upward.",
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

export default function TileCalculatorPage() {
  const [unit, setUnit] = useState<TileUnit>("ft");
  const [roomLength, setRoomLength] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const [tileLength, setTileLength] = useState("");
  const [tileWidth, setTileWidth] = useState("");
  const [waste, setWaste] = useState("10");
  const [error, setError] = useState("");
  const [result, setResult] = useState<{
    roomArea: number;
    tilesNeeded: number;
    tilesWithWaste: number;
  } | null>(null);

  function calculateTiles(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");

    const length = Number(roomLength);
    const width = Number(roomWidth);
    const currentTileLength = Number(tileLength);
    const currentTileWidth = Number(tileWidth);
    const wastePercent = Number(waste);

    if (
      !length || !width || !currentTileLength || !currentTileWidth ||
      length <= 0 || width <= 0 || currentTileLength <= 0 || currentTileWidth <= 0
    ) {
      setError("Please enter valid measurements greater than 0.");
      return;
    }

    if (wastePercent < 0 || wastePercent > 50) {
      setError("Waste percentage should be between 0% and 50%.");
      return;
    }

    const roomArea = length * width;
    const tileArea = currentTileLength * currentTileWidth;
    const tilesNeeded = Math.ceil(roomArea / tileArea);
    const tilesWithWaste = Math.ceil(tilesNeeded * (1 + wastePercent / 100));

    setResult({ roomArea, tilesNeeded, tilesWithWaste });
    setTimeout(() => {
      document.getElementById("calculator-result")?.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 50);
  }

  function resetCalculator() {
    setRoomLength("");
    setRoomWidth("");
    setTileLength("");
    setTileWidth("");
    setWaste("10");
    setResult(null);
    setError("");
  }

  const calculatorResult = result
    ? {
        title: "Your tile requirement",
        metrics: [
          {
            label: "Room area",
            value: result.roomArea.toFixed(2),
            detail: `square ${unit === "ft" ? "feet" : "meters"}`,
          },
          { label: "Without waste", value: result.tilesNeeded, detail: "tiles" },
          {
            label: "Recommended quantity",
            value: result.tilesWithWaste,
            detail: `tiles including ${waste}% waste`,
            highlight: true,
          },
        ],
        note: "These results are estimates. Always consider your tile layout, cuts, pattern matching, and the condition of the installation area before purchasing materials.",
      }
    : null;

  return (
    <CalculatorPageShell config={pageConfig} result={calculatorResult}>
      <TileCalculatorForm
        unit={unit}
        onUnitChange={setUnit}
        roomLength={roomLength}
        onRoomLengthChange={setRoomLength}
        roomWidth={roomWidth}
        onRoomWidthChange={setRoomWidth}
        tileLength={tileLength}
        onTileLengthChange={setTileLength}
        tileWidth={tileWidth}
        onTileWidthChange={setTileWidth}
        waste={waste}
        onWasteChange={setWaste}
        error={error}
        onSubmit={calculateTiles}
        onReset={resetCalculator}
      />
    </CalculatorPageShell>
  );
}