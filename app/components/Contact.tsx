"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Phone, Linkedin, FileText, Github, Send } from "lucide-react";
import Link from "next/link";
import { AnimatedGradient } from "./ui/animated-gradient";

const contactLinks = [
  { icon: Mail, label: "kandarp.canada@gmail.com", href: "mailto:kandarp.canada@gmail.com" },
  { icon: Phone, label: "+1 (902) 448-7485", href: "tel:+19024487485" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kandarp-patel" },
  { icon: Github, label: "GitHub", href: "https://github.com/kandarp-patel" },
];

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="contact" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="px-4 py-2 text-3xl font-bold text-white md:text-4xl">Let&apos;s build together</h2>
          </AnimatedGradient>
          <p className="mt-4 text-slate-300/80">
            I&apos;m open to Fall 2025 co-op roles and collaboration on cloud-native, AI-driven, or real-time products.
          </p>
        </motion.div>

        <motion.div
          className="glow-ring grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur md:grid-cols-[1.1fr_0.9fr]"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="space-y-3 text-slate-200/85">
            <p className="text-lg font-semibold text-white">Tell me about the challenge you&apos;re solving.</p>
            <p className="text-sm">
              Whether it&apos;s instrumenting microservices, crafting an elegant front-end, or scaling infra with IaC, I
              can help ship a reliable experience. Drop a note and I&apos;ll respond within a day.
            </p>
            <Link
              href="/resume"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-white/30"
            >
              <FileText className="h-4 w-4 text-blue-300" />
              View resume
            </Link>
          </div>

          <div className="grid gap-3">
            {contactLinks.map((item, idx) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-slate-100 transition hover:border-white/30"
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.05 * idx }}
              >
                <item.icon className="h-5 w-5 text-blue-300" />
                <span className="text-sm font-medium">{item.label}</span>
              </motion.a>
            ))}
            <Link
              href="mailto:kandarp.canada@gmail.com?subject=Let%27s%20work%20together"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              Send an email
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
