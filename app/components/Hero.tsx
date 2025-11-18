"use client";

import { ArrowDownRight, Mail, Rocket, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <Spotlight className="relative overflow-hidden">
      <section className="relative isolate min-h-screen pt-32 pb-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="container mx-auto px-6">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 backdrop-blur">
                <Sparkles className="h-4 w-4 text-blue-400" />
                Cloud-native software engineer crafting reliable products
              </div>

              <h1 className="text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                  Kandarp Patel
                </span>
                <br />I build resilient systems and memorable experiences.
              </h1>

              <p className="max-w-2xl text-lg text-slate-200/80">
                Master of Applied Computer Science @ Dalhousie (Aug 2024 - Dec 2025) with 3+ years delivering
                microservices, event-driven data pipelines, and polished front-ends. I love turning ambiguous ideas into
                cloud-ready products with measurable impact.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="mailto:kandarp.canada@gmail.com"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-900/40 transition hover:-translate-y-0.5"
                >
                  <Mail className="h-4 w-4" />
                  Say hello
                </Link>
                <Link
                  href="/resume"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/30 hover:text-white"
                >
                  <Rocket className="h-4 w-4 text-blue-300" />
                  View resume
                </Link>
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:translate-x-1"
                >
                  Explore the work
                  <ArrowDownRight className="h-4 w-4 transition group-hover:translate-y-1 group-hover:translate-x-1" />
                </button>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Professional experience", value: "3+ yrs" },
                  { label: "Cloud & platform", value: "AWS, Azure, Terraform" },
                  { label: "What I deliver", value: "Microservices, real-time, AI" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="glow-ring rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 backdrop-blur"
                  >
                    <p className="text-2xl font-semibold text-white">{item.value}</p>
                    <p className="text-xs text-slate-300/80">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-blue-900/20 p-6 shadow-2xl backdrop-blur glow-ring"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-500/20 blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="relative space-y-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Currently</p>
                  <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-semibold text-green-200">
                    Open for Fall 2025 co-op
                  </span>
                </div>
                <div className="space-y-3 text-sm text-slate-200/80">
                  <p>
                    Building cloud-native systems that are observable by design — think instrumented microservices, IaC,
                    and automated rollout/rollback strategies.
                  </p>
                  <p>
                    Recent wins: 40% faster APIs with .NET & EF tuning, 70% cloud-cost reduction replacing polling with
                    Pub/Sub, and resilient payment flows with Kafka + Stripe.
                  </p>
                  <p>
                    Outside of work, I keep experimenting with AI-assisted developer experience and geospatial analytics
                    for live logistics.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Spotlight>
  );
};

export default Hero;
