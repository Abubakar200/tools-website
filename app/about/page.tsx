import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Lightbulb,
  Target,
  Users,
  Zap,
} from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Simple by Design",
    description:
      "We believe useful tools should be easy to understand. Our calculators are designed to give you clear results without unnecessary complexity.",
  },
  {
    icon: Target,
    title: "Built for Real Problems",
    description:
      "Every tool is designed around practical questions people face in everyday projects, hobbies, work, and planning.",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description:
      "Our tools are built to provide results quickly, so you can spend less time calculating and more time getting things done.",
  },
  {
    icon: Users,
    title: "Made for Everyone",
    description:
      "Whether you're a homeowner, freelancer, gamer, maker, pet owner, or hobbyist, our tools are designed to be accessible to everyone.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-[#030164] transition-colors dark:bg-[#05052d] dark:text-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#030164]">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#363199] opacity-40 blur-3xl" />
        <div className="absolute -right-32 top-20 h-96 w-96 rounded-full bg-[#2D7495] opacity-30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-6 lg:px-8">
          {/* NAVBAR */}
          <header className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-white">
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
                className="text-sm font-medium text-white/80 transition hover:text-[#E8E085]"
              >
                All Tools
              </Link>

              <Link
                href="/about"
                className="text-sm font-medium text-[#E8E085]"
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
              <CheckCircle2 size={16} className="text-[#E8E085]" />
              Useful tools, made simple
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
              About{" "}
              <span className="text-[#E8E085]">ToolSphere</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
              We create simple, practical online tools that help people
              calculate, plan, build, create, and make everyday decisions
              with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D7495]">
              What we do
            </p>

            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
              Tools that solve everyday calculations.
            </h2>

            <div className="mt-6 space-y-5 text-base leading-7 text-gray-600 dark:text-white/60">
              <p>
                ToolSphere is an online collection of calculators and useful
                utilities built to make everyday calculations easier.
              </p>

              <p>
                From figuring out how much material you need for a home
                project to calculating a freelance rate, aquarium volume, or
                gaming sensitivity, our goal is to provide a straightforward
                tool for the job.
              </p>

              <p>
                We focus on practical tools that are easy to use, work quickly,
                and explain how the result was calculated.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-[#030164] p-8 shadow-xl sm:p-10">
              <div className="grid grid-cols-2 gap-4">
                <AboutStat number="25+" label="Tools" />
                <AboutStat number="5" label="Categories" />
                <AboutStat number="100%" label="Free Access" />
                <AboutStat number="∞" label="Calculations" />
              </div>

              <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm leading-6 text-white/60">
                  "Our goal is simple: make useful calculations accessible to
                  everyone."
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-[#E8E085] -z-10" />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#f8f9fc] px-6 py-24 dark:bg-[#08083a] lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D7495]">
              Our approach
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              What we believe in
            </h2>

            <p className="mt-4 leading-7 text-gray-500 dark:text-white/55">
              Every ToolSphere tool follows the same basic principles.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm dark:border-white/10 dark:bg-[#0c0c45]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#030164] text-[#E8E085]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 font-bold">{value.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-white/55">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D7495]">
            What you'll find
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            One place for many useful tools
          </h2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {[
              "DIY & Construction",
              "Hobby & Maker",
              "Pet & Aquarium",
              "Gaming",
              "Finance & Freelance",
            ].map((category) => (
              <div
                key={category}
                className="rounded-2xl border border-gray-100 bg-white p-5 text-sm font-bold shadow-sm dark:border-white/10 dark:bg-[#0c0c45]"
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#E8E085] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-black text-[#030164] sm:text-4xl">
            Have a calculation to make?
          </h2>

          <p className="mt-4 text-[#030164]/65">
            Explore our collection of free tools and find the one you need.
          </p>

          <Link
            href="/tools"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#030164] px-6 py-3.5 font-bold text-white transition hover:bg-[#363199]"
          >
            Explore Tools
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </main>
  );
}

function AboutStat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
      <div className="text-2xl font-black text-[#E8E085]">{number}</div>
      <div className="mt-1 text-xs text-white/50">{label}</div>
    </div>
  );
}

function Footer() {
  return (
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
  );
}