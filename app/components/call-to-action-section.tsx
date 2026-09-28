import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="bg-[#E8E085] px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-black tracking-tight text-[#030164] sm:text-5xl">Find the tool you need.</h2>
        <p className="mx-auto mt-5 max-w-xl text-[#030164]/70">
          Browse our collection of calculators and utilities designed to make everyday calculations easier.
        </p>
        <Link
          href="/tools"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#030164] px-7 py-4 font-bold text-white transition hover:bg-[#363199]"
        >
          Browse all tools
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}