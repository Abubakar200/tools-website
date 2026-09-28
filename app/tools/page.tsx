"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Gamepad2,
  Home,
  PawPrint,
  Search,
  Sparkles,
  Wrench,
} from "lucide-react";

type Category =
  | "All"
  | "DIY & Construction"
  | "Hobby & Maker"
  | "Pet & Aquarium"
  | "Gaming"
  | "Finance & Freelance";

type Tool = {
  title: string;
  description: string;
  category: Exclude<Category, "All">;
  href: string;
  icon: string;
  popular?: boolean;
};

const categories: {
  name: Category;
  icon: typeof Home;
  description: string;
}[] = [
  {
    name: "All",
    icon: Calculator,
    description: "Browse every tool",
  },
  {
    name: "DIY & Construction",
    icon: Home,
    description: "Build, measure & plan",
  },
  {
    name: "Hobby & Maker",
    icon: Wrench,
    description: "Create & calculate",
  },
  {
    name: "Pet & Aquarium",
    icon: PawPrint,
    description: "Pets & aquariums",
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    description: "Gaming utilities",
  },
  {
    name: "Finance & Freelance",
    icon: Calculator,
    description: "Money & work",
  },
];

const tools: Tool[] = [
  // DIY
  {
    title: "Mulch Calculator",
    description:
      "Calculate how much mulch you need based on area and desired depth.",
    category: "DIY & Construction",
    href: "/tools/diy-home/mulch-calculator",
    icon: "🌱",
    popular: true,
  },
  {
    title: "Soil Calculator",
    description:
      "Estimate the amount of soil or topsoil required for your project.",
    category: "DIY & Construction",
    href: "/tools/diy-home/soil-calculator",
    icon: "🌿",
  },
  {
    title: "Gravel Calculator",
    description:
      "Calculate gravel volume and estimate the amount needed for an area.",
    category: "DIY & Construction",
    href: "/tools/diy-home/gravel-calculator",
    icon: "🪨",
    popular: true,
  },
  {
    title: "Tile Calculator",
    description:
      "Calculate the number of tiles required for floors, walls, and rooms.",
    category: "DIY & Construction",
    href: "/tools/diy-home/tile-calculator",
    icon: "▦",
  },
  {
    title: "Concrete Calculator",
    description:
      "Calculate concrete volume and estimate material requirements.",
    category: "DIY & Construction",
    href: "/tools/diy-home/concrete-calculator",
    icon: "🏗️",
  },
  {
    title: "Wallpaper Calculator",
    description:
      "Estimate wallpaper rolls while accounting for pattern repeat and openings.",
    category: "DIY & Construction",
    href: "/tools/diy-home/wallpaper-calculator",
    icon: "🧱",
  },

  // Hobby
  {
    title: "3D Printing Filament Calculator",
    description:
      "Estimate filament length, weight, and printing cost.",
    category: "Hobby & Maker",
    href: "/tools/hobby-maker/3d-printing-filament-calculator",
    icon: "🖨️",
    popular: true,
  },
  {
    title: "Yarn Calculator",
    description:
      "Estimate how much yarn you need for your next project.",
    category: "Hobby & Maker",
    href: "/tools/hobby-maker/yarn-calculator",
    icon: "🧶",
  },
  {
    title: "Crochet Calculator",
    description:
      "Estimate yarn requirements based on project size and stitch type.",
    category: "Hobby & Maker",
    href: "/tools/hobby-maker/crochet-calculator",
    icon: "🧵",
  },
  {
    title: "Knitting Calculator",
    description:
      "Plan yarn requirements for knitting projects.",
    category: "Hobby & Maker",
    href: "/tools/hobby-maker/knitting-calculator",
    icon: "🧶",
  },
  {
    title: "Homebrew Calculator",
    description:
      "Calculate ABV, IBU, and other homebrewing measurements.",
    category: "Hobby & Maker",
    href: "/tools/hobby-maker/homebrew-calculator",
    icon: "🍺",
  },

  // Pet
  {
    title: "Aquarium Volume Calculator",
    description:
      "Calculate the water volume of your aquarium using its dimensions.",
    category: "Pet & Aquarium",
    href: "/tools/pet-aquarium/aquarium-volume-calculator",
    icon: "🐠",
    popular: true,
  },
  {
    title: "Aquarium Weight Calculator",
    description:
      "Estimate the total filled weight of an aquarium.",
    category: "Pet & Aquarium",
    href: "/tools/pet-aquarium/aquarium-weight-calculator",
    icon: "⚖️",
  },
  {
    title: "Aquarium Filter Calculator",
    description:
      "Estimate the filtration capacity needed for your aquarium.",
    category: "Pet & Aquarium",
    href: "/tools/pet-aquarium/aquarium-filter-calculator",
    icon: "💧",
  },
  {
    title: "Dog Calorie Calculator",
    description:
      "Estimate daily calorie requirements for dogs.",
    category: "Pet & Aquarium",
    href: "/tools/pet-aquarium/dog-calorie-calculator",
    icon: "🐕",
  },
  {
    title: "Cat Calorie Calculator",
    description:
      "Estimate daily calorie requirements for cats.",
    category: "Pet & Aquarium",
    href: "/tools/pet-aquarium/cat-calorie-calculator",
    icon: "🐈",
  },

  // Gaming
  {
    title: "Mouse Sensitivity Converter",
    description:
      "Convert mouse sensitivity between supported games.",
    category: "Gaming",
    href: "/tools/gaming/mouse-sensitivity-converter",
    icon: "🎮",
    popular: true,
  },
  {
    title: "eDPI Calculator",
    description:
      "Calculate your effective DPI from mouse DPI and sensitivity.",
    category: "Gaming",
    href: "/tools/gaming/edpi-calculator",
    icon: "🖱️",
  },
  {
    title: "Minecraft Stack Calculator",
    description:
      "Calculate how many stacks and chests you need for Minecraft items.",
    category: "Gaming",
    href: "/tools/gaming/minecraft-stack-calculator",
    icon: "⛏️",
  },
  {
    title: "Minecraft Chest Calculator",
    description:
      "Estimate how much storage space you need for your items.",
    category: "Gaming",
    href: "/tools/gaming/minecraft-chest-calculator",
    icon: "📦",
  },

  // Finance
  {
    title: "Freelance Rate Calculator",
    description:
      "Calculate the hourly rate you need to reach your desired income.",
    category: "Finance & Freelance",
    href: "/tools/finance-freelance/freelance-rate-calculator",
    icon: "💼",
    popular: true,
  },
  {
    title: "Hourly Rate Calculator",
    description:
      "Convert your annual salary or income goal into an hourly rate.",
    category: "Finance & Freelance",
    href: "/tools/finance-freelance/hourly-rate-calculator",
    icon: "⏱️",
  },
  {
    title: "FIRE Calculator",
    description:
      "Estimate savings and investment requirements for financial independence.",
    category: "Finance & Freelance",
    href: "/tools/finance-freelance/fire-calculator",
    icon: "🔥",
  },
  {
    title: "Staking Calculator",
    description:
      "Estimate potential staking rewards using your inputs.",
    category: "Finance & Freelance",
    href: "/tools/finance-freelance/staking-calculator",
    icon: "📈",
  },
];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [search, setSearch] = useState("");

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesCategory =
        activeCategory === "All" ||
        tool.category === activeCategory;

      const matchesSearch =
        !query ||
        tool.title.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const popularTools = tools.filter((tool) => tool.popular);

  return (
    <main className="min-h-screen bg-white text-[#030164] transition-colors dark:bg-[#05052d] dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#030164]">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#363199] opacity-40 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#2D7495] opacity-30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8">
          {/* NAVBAR */}
          <header className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-3 text-white"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8E085] text-[#030164]">
                <Calculator size={23} strokeWidth={2.5} />
              </div>

              <span className="text-xl font-bold">
                Tool<span className="text-[#E8E085]">Sphere</span>
              </span>
            </Link>

            <nav className="hidden items-center gap-8 md:flex">
              <Link
                href="/tools"
                className="text-sm font-medium text-[#E8E085]"
              >
                All Tools
              </Link>

              <Link
                href="/about"
                className="text-sm font-medium text-white/80 transition hover:text-[#E8E085]"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-white/80 transition hover:text-[#E8E085]"
              >
                Contact
              </Link>
            </nav>
          </header>

          {/* HERO CONTENT */}
          <div className="mx-auto max-w-3xl py-20 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80">
              <Sparkles size={16} className="text-[#E8E085]" />
              Explore our complete toolkit
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
              All <span className="text-[#E8E085]">Tools</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Browse our collection of free calculators and utilities for
              home projects, hobbies, pets, gaming, finance, and more.
            </p>

            {/* SEARCH */}
            <div className="mx-auto mt-9 flex max-w-2xl items-center rounded-2xl bg-white p-2 shadow-2xl">
              <Search
                size={21}
                className="ml-4 shrink-0 text-[#363199]"
              />

              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search calculators and tools..."
                className="w-full bg-transparent px-4 py-3 text-sm text-[#030164] outline-none placeholder:text-gray-400 sm:text-base"
              />

              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="mr-2 rounded-lg px-3 py-2 text-xs font-bold text-gray-500 hover:bg-gray-100"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="mt-5 text-sm text-white/45">
              {tools.length}+ tools available
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY FILTERS */}
      <section className="border-b border-gray-100 bg-white dark:border-white/10 dark:bg-[#070735]">
        <div className="mx-auto max-w-7xl overflow-x-auto px-6 lg:px-8">
          <div className="flex min-w-max gap-2 py-5">
            {categories.map((category) => {
              const Icon = category.icon;
              const active = activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  onClick={() => setActiveCategory(category.name)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                    active
                      ? "bg-[#030164] text-white shadow-md"
                      : "bg-gray-50 text-gray-500 hover:bg-[#E8E085]/40 hover:text-[#030164] dark:bg-white/5 dark:text-white/55 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  <Icon size={17} />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* POPULAR TOOLS */}
      {activeCategory === "All" && !search && (
        <section className="bg-[#f8f9fc] px-6 py-20 dark:bg-[#08083a] lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D7495]">
                  Start here
                </p>

                <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                  Popular tools
                </h2>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {popularTools.map((tool) => (
                <ToolCard key={tool.title} tool={tool} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ALL TOOLS */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D7495]">
                {activeCategory === "All"
                  ? "Complete collection"
                  : activeCategory}
              </p>

              <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                {search
                  ? `Search results`
                  : activeCategory === "All"
                    ? "All calculators & tools"
                    : activeCategory}
              </h2>
            </div>

            <div className="text-sm text-gray-500 dark:text-white/45">
              {filteredTools.length}{" "}
              {filteredTools.length === 1 ? "tool" : "tools"}
            </div>
          </div>

          {filteredTools.length > 0 ? (
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredTools.map((tool) => (
                <ToolCard key={tool.title} tool={tool} />
              ))}
            </div>
          ) : (
            <NoResults search={search} />
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8E085] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#030164] text-[#E8E085]">
            <Calculator size={25} />
          </div>

          <h2 className="mt-6 text-3xl font-black text-[#030164] sm:text-4xl">
            Can't find the tool you need?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-[#030164]/65">
            Tell us what calculator or utility would make your work easier.
            We're always looking for useful ideas to add.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#030164] px-6 py-3.5 font-bold text-white transition hover:bg-[#363199]"
          >
            Suggest a Tool
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#02014b] px-6 py-10 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 sm:flex-row">
          <div>
            <Link href="/" className="font-bold">
              Tool<span className="text-[#E8E085]">Sphere</span>
            </Link>

            <p className="mt-2 text-sm text-white/40">
              Smart tools. Simple answers.
            </p>
          </div>

          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/tools" className="hover:text-white">
              Tools
            </Link>

            <Link href="/about" className="hover:text-white">
              About
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* TOOL CARD */

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <Link
      href={tool.href}
      className="group relative rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#2D7495]/20 hover:shadow-xl dark:border-white/10 dark:bg-[#0c0c45]"
    >
      {tool.popular && (
        <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-[#E8E085]/60 px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-[#030164]">
          <Sparkles size={11} />
          Popular
        </div>
      )}

      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f3fb] text-2xl dark:bg-white/10">
        {tool.icon}
      </div>

      <p className="mt-5 text-xs font-bold uppercase tracking-wide text-[#2D7495]">
        {tool.category}
      </p>

      <h3 className="mt-2 pr-16 text-lg font-bold text-[#030164] dark:text-white">
        {tool.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-white/50">
        {tool.description}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#363199] dark:text-[#E8E085]">
        Open tool
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}

/* NO RESULTS */

function NoResults({ search }: { search: string }) {
  return (
    <div className="mt-10 rounded-3xl border border-dashed border-gray-200 px-6 py-20 text-center dark:border-white/10">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f3fb] text-[#363199] dark:bg-white/10 dark:text-[#E8E085]">
        <Search size={24} />
      </div>

      <h3 className="mt-5 text-xl font-bold">
        No tools found
      </h3>

      <p className="mx-auto mt-2 max-w-md text-sm text-gray-500 dark:text-white/50">
        We couldn't find a tool matching{" "}
        <span className="font-bold text-[#030164] dark:text-white">
          "{search}"
        </span>
        .
      </p>

      <p className="mt-4 text-sm text-gray-400">
        Try another search or browse a different category.
      </p>
    </div>
  );
}