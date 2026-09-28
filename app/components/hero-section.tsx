import { Search, Sparkles } from "lucide-react";
import SiteHeader from "./site-header";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#030164]">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#363199] opacity-40 blur-3xl" />
      <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#2D7495] opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-6 lg:px-8">
        <SiteHeader />

        <div className="mx-auto max-w-4xl pt-24 text-center lg:pt-28">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur">
            <Sparkles size={16} className="text-[#E8E085]" />
            Free tools for everyday problems
          </div>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Smart Tools.
            <br />
            <span className="bg-gradient-to-r from-[#E8E085] via-white to-[#2D7495] bg-clip-text text-transparent">
              Simple Answers.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
            Free online calculators and useful tools that help you calculate,
            plan, build, create, and make better decisions.
          </p>

          <div className="mx-auto mt-10 flex max-w-2xl items-center rounded-2xl bg-white p-2 shadow-2xl shadow-black/20">
            <Search size={22} className="ml-4 shrink-0 text-[#363199]" />
            <input
              type="text"
              placeholder="Search for a calculator or tool..."
              className="w-full bg-transparent px-4 py-3 text-sm text-[#030164] outline-none placeholder:text-gray-400 sm:text-base"
            />
            <button className="hidden rounded-xl bg-[#363199] px-6 py-3 font-semibold text-white transition hover:bg-[#2D7495] sm:block">
              Search
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-white/50">
            <span>✓ Free to use</span>
            <span>✓ No registration</span>
            <span>✓ Instant results</span>
          </div>
        </div>
      </div>
    </section>
  );
}