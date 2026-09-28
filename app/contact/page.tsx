"use client";

import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Mail,
  MessageSquare,
  Send,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);
  }

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
                className="text-sm font-medium text-white/80 transition hover:text-[#E8E085]"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-sm font-medium text-[#E8E085]"
              >
                Contact
              </Link>
            </nav>
          </header>

          {/* HERO */}
          <div className="mx-auto max-w-3xl py-20 text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80">
              <MessageSquare size={16} className="text-[#E8E085]" />
              We'd love to hear from you
            </div>

            <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl">
              Get in <span className="text-[#E8E085]">Touch</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Have a question, suggestion, correction, or idea for a new tool?
              Send us a message and we'll take a look.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* INFO */}
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D7495]">
              Contact us
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Let's talk.
            </h2>

            <p className="mt-5 leading-7 text-gray-500 dark:text-white/55">
              Whether you've found an issue with one of our tools or have an
              idea that could make ToolSphere more useful, we'd love to hear
              from you.
            </p>

            <div className="mt-8 space-y-4">
              <ContactInfo
                icon={<Mail size={20} />}
                title="Email"
                value="hello@toolsphere.com"
              />

              <ContactInfo
                icon={<MessageSquare size={20} />}
                title="General questions"
                value="Questions, suggestions & feedback"
              />

              <ContactInfo
                icon={<CheckCircle2 size={20} />}
                title="Tool corrections"
                value="Found an incorrect calculation? Tell us."
              />
            </div>
          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl dark:border-white/10 dark:bg-[#0c0c45] sm:p-9">
            {submitted ? (
              <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E8E085] text-[#030164]">
                  <CheckCircle2 size={30} />
                </div>

                <h3 className="mt-6 text-2xl font-black">
                  Message ready!
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-gray-500 dark:text-white/55">
                  Your message has been prepared. Connect this form to your
                  email service or backend to receive submissions.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-7 rounded-xl bg-[#030164] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#363199]"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <FormField
                    label="Name"
                    name="name"
                    placeholder="Your name"
                    required
                  />

                  <FormField
                    label="Email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <FormField
                  label="Subject"
                  name="subject"
                  placeholder="How can we help?"
                  required
                />

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-bold"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Write your message..."
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#030164] outline-none transition placeholder:text-gray-400 focus:border-[#363199] focus:ring-2 focus:ring-[#363199]/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#030164] px-6 py-3.5 font-bold text-white transition hover:bg-[#363199]"
                >
                  Send Message
                  <Send size={17} />
                </button>

                <p className="text-center text-xs text-gray-400">
                  We appreciate your feedback and suggestions.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* SUGGESTION CTA */}
      <section className="bg-[#f8f9fc] px-6 py-20 dark:bg-[#08083a] lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#2D7495]">
            Have an idea?
          </p>

          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            What calculator should we build next?
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-gray-500 dark:text-white/55">
            We're always looking for useful tools to add. Send us your idea
            and tell us what problem it would solve.
          </p>

          <Link
            href="mailto:hello@toolsphere.com?subject=Tool%20Suggestion"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#E8E085] px-6 py-3.5 font-bold text-[#030164] transition hover:scale-105"
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

function ContactInfo({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-gray-100 p-4 dark:border-white/10">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#030164] text-[#E8E085]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-bold">{title}</p>
        <p className="mt-1 text-sm text-gray-500 dark:text-white/50">
          {value}
        </p>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-bold"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-[#030164] outline-none transition placeholder:text-gray-400 focus:border-[#363199] focus:ring-2 focus:ring-[#363199]/10 dark:border-white/10 dark:bg-white/5 dark:text-white"
      />
    </div>
  );
}