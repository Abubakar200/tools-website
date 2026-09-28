"use client";

import Link from "next/link";
import { ArrowDown, ArrowLeft, Calculator, CheckCircle2 } from "lucide-react";
import type { ReactNode } from "react";

export type CalculatorPageConfig = {
  title: string;
  description: string;
  heroIcon: ReactNode;
  heroActionLabel: string;
  form: {
    eyebrow?: string;
    title: string;
    description: string;
  };
  quickGuide: {
    icon: ReactNode;
    title: string;
    description: string;
    steps: string[];
    buttonLabel: string;
  };
  tutorial: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; description: string; visual?: ReactNode }[];
    tipsTitle: string;
    tips: string[];
  };
  formula: {
    title: string;
    rows: { title: string; formula: string }[];
  };
  faqs: { question: string; answer: string }[];
  cta: {
    title: string;
    description: string;
    href: string;
    label: string;
  };
};

export type CalculatorResult = {
  title: string;
  metrics: {
    label: string;
    value: ReactNode;
    detail?: string;
    highlight?: boolean;
  }[];
  note?: string;
};

export default function CalculatorPageShell({
  config,
  children,
  result,
}: {
  config: CalculatorPageConfig;
  children: ReactNode;
  result?: CalculatorResult | null;
}) {
  function scrollToGuide() {
    document.getElementById("measurement-guide")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-white text-[#030164] dark:bg-[#06062d] dark:text-white">
      <section className="bg-[#030164] text-white">
        <div className="mx-auto max-w-6xl px-5 py-5">
          <header className="flex items-center justify-between">
            <Link href="/tools" className="flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white">
              <ArrowLeft size={18} />
              All Tools
            </Link>
            <Link href="/" className="flex items-center gap-2 font-bold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#E8E085] text-[#030164]">
                <Calculator size={20} />
              </span>
              ToolSphere
            </Link>
          </header>

          <div className="mx-auto max-w-3xl py-16 text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
              {config.heroIcon}
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{config.title}</h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/75">{config.description}</p>
            <button
              type="button"
              onClick={scrollToGuide}
              className="mt-8 inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#E8E085] px-6 py-3 font-bold text-[#030164] transition hover:brightness-95"
            >
              {config.heroActionLabel}
              <ArrowDown size={18} />
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div id="calculator-form" className="rounded-3xl border border-[#030164]/10 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#0c0c45] sm:p-8">
            <div className="mb-8">
              <p className="text-sm font-bold uppercase tracking-wider text-[#363199] dark:text-[#E8E085]">
                {config.form.eyebrow ?? "Calculator"}
              </p>
              <h2 className="mt-2 text-2xl font-bold">{config.form.title}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-white/65">{config.form.description}</p>
            </div>
            {children}
          </div>

          <aside className="h-fit rounded-3xl bg-[#f7f7fb] p-6 dark:bg-[#0c0c45] sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8E085] text-[#030164]">
              {config.quickGuide.icon}
            </div>
            <h2 className="mt-5 text-2xl font-bold">{config.quickGuide.title}</h2>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-white/65">{config.quickGuide.description}</p>
            <ol className="mt-6 space-y-4">
              {config.quickGuide.steps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#363199] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-6 text-gray-700 dark:text-white/70">{step}</p>
                </li>
              ))}
            </ol>
            <button
              type="button"
              onClick={scrollToGuide}
              className="mt-7 flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-[#363199]/20 px-4 font-semibold text-[#363199] transition hover:bg-[#363199]/5 dark:border-white/10 dark:text-[#E8E085]"
            >
              {config.quickGuide.buttonLabel}
              <ArrowDown size={17} />
            </button>
          </aside>
        </div>
      </section>

      {result && (
        <section id="calculator-result" className="px-5 pb-14" aria-live="polite">
          <div className="mx-auto max-w-6xl rounded-3xl bg-[#030164] p-7 text-white sm:p-10">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-[#E8E085]" size={26} />
              <div>
                <p className="text-sm font-semibold text-white/60">Calculation complete</p>
                <h2 className="text-2xl font-bold">{result.title}</h2>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {result.metrics.map((metric) => (
                <div key={metric.label} className={`rounded-2xl p-5 ${metric.highlight ? "bg-[#E8E085] text-[#030164]" : "bg-white/10"}`}>
                  <p className={`text-sm ${metric.highlight ? "font-semibold opacity-70" : "text-white/60"}`}>{metric.label}</p>
                  <p className="mt-2 text-3xl font-extrabold">{metric.value}</p>
                  {metric.detail && (
                    <p className={`mt-1 text-sm ${metric.highlight ? "font-semibold opacity-70" : "text-white/60"}`}>
                      {metric.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
            {result.note && <p className="mt-6 text-sm leading-6 text-white/65">{result.note}</p>}
          </div>
        </section>
      )}

      <section id="measurement-guide" className="scroll-mt-10 border-y border-gray-100 bg-[#fafafa] px-5 py-16 dark:border-white/10 dark:bg-[#08083a]">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#363199] dark:text-[#E8E085]">{config.tutorial.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">{config.tutorial.title}</h2>
            <p className="mt-4 text-gray-600 dark:text-white/65">{config.tutorial.description}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {config.tutorial.steps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-[#0c0c45]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#363199] text-sm font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-5 text-xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-white/65">{step.description}</p>
                {step.visual}
              </article>
            ))}
          </div>

          {config.tutorial.tips.length > 0 && (
            <div className="mt-10 rounded-3xl bg-[#030164] p-7 text-white sm:p-9">
              <h3 className="text-xl font-bold">{config.tutorial.tipsTitle}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {config.tutorial.tips.map((tip) => (
                  <div key={tip} className="flex gap-3">
                    <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-[#E8E085]" />
                    <p className="text-sm leading-6 text-white/75">{tip}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#363199] dark:text-[#E8E085]">How it works</p>
            <h2 className="mt-3 text-3xl font-extrabold">{config.formula.title}</h2>
          </div>
          <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-7 dark:border-white/10 dark:bg-[#0c0c45] sm:p-9">
            <div className="space-y-7">
              {config.formula.rows.map((row) => (
                <div key={row.title}>
                  <h3 className="font-bold">{row.title}</h3>
                  <div className="mt-2 rounded-xl bg-[#f7f7fb] px-4 py-3 font-mono text-sm text-[#363199] dark:bg-white/5 dark:text-[#E8E085]">
                    {row.formula}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafafa] px-5 py-16 dark:bg-[#08083a]">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center text-3xl font-extrabold">Frequently asked questions</h2>
          <div className="mt-8 space-y-4">
            {config.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-[#0c0c45]">
                <summary className="cursor-pointer list-none font-bold">
                  <span className="flex items-center justify-between gap-4">
                    {faq.question}
                    <span className="text-xl transition group-open:rotate-45">+</span>
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-gray-600 dark:text-white/65">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#E8E085] px-6 py-12 text-center text-[#030164] sm:px-10">
          <h2 className="text-3xl font-extrabold">{config.cta.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 opacity-75">{config.cta.description}</p>
          <Link href={config.cta.href} className="mt-7 inline-flex min-h-11 items-center rounded-xl bg-[#030164] px-6 py-3 font-bold text-white transition hover:bg-[#363199]">
            {config.cta.label}
          </Link>
        </div>
      </section>

      <footer className="bg-[#030164] px-5 py-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ToolSphere. All rights reserved.</p>
          <nav className="flex gap-5">
            <Link href="/about" className="hover:text-white">About</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
            <Link href="/tools" className="hover:text-white">All Tools</Link>
          </nav>
        </div>
      </footer>
    </main>
  );
}