import Link from "next/link";
import { ArrowRight, Calculator, Gamepad2, Home, PawPrint, Wrench } from "lucide-react";

const categories = [
  {
    title: "DIY & Construction",
    description: "Calculate materials, costs, measurements, and quantities for your next project.",
    icon: Home,
    tools: "6+ Tools",
    href: "/tools/diy-home",
  },
  {
    title: "Hobby & Maker",
    description: "Useful calculators for 3D printing, yarn, crochet, knitting, and more.",
    icon: Wrench,
    tools: "6+ Tools",
    href: "/tools/hobby-maker",
  },
  {
    title: "Pet & Aquarium",
    description: "Calculate aquarium volume, pet calories, tank weight, and more.",
    icon: PawPrint,
    tools: "5+ Tools",
    href: "/tools/pet-aquarium",
  },
  {
    title: "Gaming",
    description: "Gaming utilities, sensitivity converters, stack calculators, and more.",
    icon: Gamepad2,
    tools: "5+ Tools",
    href: "/tools/gaming",
  },
  {
    title: "Finance & Freelance",
    description: "Calculate freelance rates, FIRE targets, income goals, and more.",
    icon: Calculator,
    tools: "5+ Tools",
    href: "/tools/finance-freelance",
  },
];

export default function CategoriesSection() {
  return (
    <section className="bg-[#f8f9fc] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D7495]">EXPLORE CATEGORIES</p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-[#030164] sm:text-4xl">
            Tools for every kind of project
          </h2>
          <p className="mt-4 leading-7 text-gray-500">
            From home improvement to gaming, find the tool you need without complicated forms or unnecessary steps.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.title}
                href={category.href}
                className={`group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index === 0 ? "lg:col-span-2" : ""}`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#030164] text-white transition group-hover:bg-[#363199]">
                    <Icon size={26} />
                  </div>
                  <span className="rounded-full bg-[#E8E085]/40 px-3 py-1 text-xs font-bold text-[#030164]">
                    {category.tools}
                  </span>
                </div>
                <h3 className="mt-7 text-xl font-bold text-[#030164]">{category.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-gray-500">{category.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-[#363199]">
                  Explore category
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}