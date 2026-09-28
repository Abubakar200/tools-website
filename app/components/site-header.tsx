import Link from "next/link";
import { Calculator } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="flex items-center justify-between">
      <Link href="/" className="flex items-center gap-3 text-white">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E8E085] text-[#030164]">
          <Calculator size={23} strokeWidth={2.5} />
        </div>
        <span className="text-xl font-bold tracking-tight">
          Tool<span className="text-[#E8E085]">Sphere</span>
        </span>
      </Link>

      <nav className="hidden items-center gap-8 md:flex">
        <Link href="/tools" className="text-sm font-medium text-white/80 transition hover:text-[#E8E085]">
          All Tools
        </Link>
        <Link href="/about" className="text-sm font-medium text-white/80 transition hover:text-[#E8E085]">
          About
        </Link>
        <Link href="/contact" className="text-sm font-medium text-white/80 transition hover:text-[#E8E085]">
          Contact
        </Link>
      </nav>

      <Link
        href="/tools"
        className="hidden rounded-full bg-[#E8E085] px-5 py-2.5 text-sm font-bold text-[#030164] transition hover:scale-105 md:block"
      >
        Explore Tools
      </Link>
    </header>
  );
}