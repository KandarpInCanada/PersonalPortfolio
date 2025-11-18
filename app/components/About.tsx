"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedGradient } from "./ui/animated-gradient";
import { Lightbulb, ShieldCheck, Sparkle } from "lucide-react";

const pillars = [
  {
    title: "Architecture-first",
    description:
      "I start with observability, data contracts, and failure modes before pushing code. The result: systems that scale and stay reliable.",
    icon: ShieldCheck,
  },
  {
    title: "Impact you can measure",
    description:
      "From shaving 40% off API latency to cutting cloud spend by 70% with Pub/Sub, I track wins in performance, resiliency, and cost.",
    icon: Lightbulb,
  },
  {
    title: "Product polish",
    description:
      "I care about the last mile — crisp UX, accessible interfaces, and thoughtful microcopy that make complex tools feel effortless.",
    icon: Sparkle,
  },
];

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="about" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="px-4 py-2 text-3xl font-bold text-white md:text-4xl">About me</h2>
          </AnimatedGradient>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur glow-ring"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-slate-200/90">
              I&apos;m a systems-minded software engineer blending backend depth with polished front-end craft. My happy
              place is where microservices, data streaming, and sleek interfaces intersect. I iterate fast, measure
              results, and ship with guardrails like IaC, feature flags, and strong CI/CD.
            </p>
            <p className="text-slate-300/80">
              I&apos;ve shipped across healthcare, logistics, and AI-heavy products — observability dashboards, payment
              flows, serverless photo intelligence, and real-time tracking. I thrive in collaborative, bias-for-action
              teams that value clarity and documentation as much as code.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-slate-200">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Based in Halifax 🇨🇦</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Master of Applied CS @ Dalhousie
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Co-op: Fall 2025</span>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 md:grid-cols-3 lg:grid-cols-2 lg:gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {pillars.map((item, idx) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/40 to-blue-900/20 p-4 transition hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                <item.icon className="h-6 w-6 text-blue-300" />
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200/80">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
