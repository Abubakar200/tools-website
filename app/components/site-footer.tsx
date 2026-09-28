import Link from "next/link";
import { Calculator } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="bg-[#02014b] px-6 py-12 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E8E085] text-[#030164]">
              <Calculator size={20} />
            </div>
            <span className="text-lg font-bold">
              Tool<span className="text-[#E8E085]">Sphere</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-white/50">
            Free online calculators and useful tools for everyday life, work, hobbies, and projects.
          </p>
        </div>

        <div className="flex gap-12 text-sm">
          <div>
            <p className="font-bold">Explore</p>
            <div className="mt-4 space-y-3 text-white/50">
              <Link className="block hover:text-white" href="/tools">All Tools</Link>
              <Link className="block hover:text-white" href="/about">About</Link>
            </div>
          </div>
          <div>
            <p className="font-bold">Company</p>
            <div className="mt-4 space-y-3 text-white/50">
              <Link className="block hover:text-white" href="/contact">Contact</Link>
              <Link className="block hover:text-white" href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/40">
        © {new Date().getFullYear()} ToolSphere. All rights reserved.
      </div>
    </footer>
  );
}