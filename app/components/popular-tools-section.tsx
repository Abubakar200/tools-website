import Link from "next/link";
import { ArrowRight } from "lucide-react";

const popularTools = [
  {
    title: "Mulch Calculator",
    category: "DIY & Construction",
    description: "Calculate exactly how much mulch your project needs.",
    href: "/tools/diy-home/mulch-calculator",
    icon: "🌱",
  },
  {
    title: "Aquarium Volume Calculator",
    category: "Pet & Aquarium",
    description: "Calculate aquarium volume and water capacity.",
    href: "/tools/pet-aquarium/aquarium-volume-calculator",
    icon: "🐠",
  },
  {
    title: "Freelance Rate Calculator",
    category: "Finance & Freelance",
    description: "Find the hourly rate you need to reach your income goal.",
    href: "/tools/finance-freelance/freelance-rate-calculator",
    icon: "💼",
  },
  {
    title: "Mouse Sensitivity Converter",
    category: "Gaming",
    description: "Convert your sensitivity between popular games.",
    href: "/tools/gaming/mouse-sensitivity-converter",
    icon: "🎮",
  },
];

export default function PopularToolsSection() {
  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D7495]">Popular Tools</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#030164] sm:text-4xl">Start calculating</h2>
          </div>
          <Link href="/tools" className="flex items-center gap-2 text-sm font-bold text-[#363199]">
            View all tools
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {popularTools.map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#2D7495]/20 hover:shadow-xl"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f3fb] text-2xl">{tool.icon}</div>
              <p className="mt-5 text-xs font-bold uppercase tracking-wide text-[#2D7495]">{tool.category}</p>
              <h3 className="mt-2 font-bold text-[#030164]">{tool.title}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-500">{tool.description}</p>
              <div className="mt-5 flex items-center gap-2 text-sm font-bold text-[#363199]">
                Open tool
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}