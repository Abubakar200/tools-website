import Link from "next/link";
import { ArrowRight, Calculator, Heart, ShieldCheck, Zap } from "lucide-react";
import type { ReactNode } from "react";

const features = [
  { icon: <Zap size={22} />, title: "Instant Results", text: "Enter your numbers and get results immediately." },
  { icon: <ShieldCheck size={22} />, title: "Simple & Clear", text: "No confusing interfaces or unnecessary steps." },
  { icon: <Calculator size={22} />, title: "Built for Accuracy", text: "Calculations are designed around clear formulas and units." },
  { icon: <Heart size={22} />, title: "Free to Use", text: "Use our tools without creating an account." },
];

export default function WhySection() {
  return (
    <section className="bg-[#030164] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E8E085]">Why ToolSphere?</p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-white sm:text-5xl">
              Useful tools without the unnecessary complexity.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
              Every tool is designed around one goal: give you the answer you need quickly and clearly.
            </p>
            <Link
              href="/tools"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#E8E085] px-6 py-3.5 font-bold text-[#030164] transition hover:scale-105"
            >
              Explore all tools
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <Feature key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, text }: { icon: ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#363199] text-[#E8E085]">{icon}</div>
      <h3 className="mt-5 font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/50">{text}</p>
    </div>
  );
}