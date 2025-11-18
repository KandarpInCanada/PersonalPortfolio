"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedGradient } from "./ui/animated-gradient";

const stacks = [
  {
    title: "Backend & Cloud",
    highlight: "C#/.NET 8, Node.js/TypeScript, Spring Boot, Python",
    bullets: ["Event-driven microservices", "REST + GraphQL APIs", "Async messaging: Kafka, RabbitMQ"],
    footer: "IaC + platforms: Docker, Kubernetes, Terraform, GitHub Actions, AWS, Azure",
  },
  {
    title: "Data & Intelligence",
    highlight: "PostgreSQL, MongoDB, SQL Server, Redis, DynamoDB",
    bullets: ["Streaming with Kafka", "Search & analytics with Elasticsearch", "AI/ML + computer vision experiments"],
    footer: "Pipelines with Airflow, S3, SQS, Rekognition; telemetry-first instrumentation",
  },
  {
    title: "Product & Frontend",
    highlight: "React/Next.js, Tailwind, Framer Motion, Native mobile (React Native)",
    bullets: ["Design systems + accessibility", "Real-time UI with WebSockets", "Command palette/wizard UX patterns"],
    footer: "Obsessed with performance budgets, microcopy, and crisp motion",
  },
];

const toolbelt = [
  "GitHub Actions",
  "Jenkins",
  "Stripe/Payments",
  "OpenAPI/Swagger",
  "OAuth2/OpenID",
  "Feature flags",
  "Telemetry (logs/metrics/traces)",
  "CI/CD blue-green",
  "Testing: Jest, NUnit, Playwright",
];

const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="skills" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="px-4 py-2 text-3xl font-bold text-white md:text-4xl">Skillset snapshot</h2>
          </AnimatedGradient>
          <p className="mt-4 text-slate-300/80">
            Breadth to move fast, depth to keep systems healthy. Here&apos;s the stack I reach for.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {stacks.map((stack, idx) => (
            <motion.div
              key={stack.title}
              className="glow-ring relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              <div className="relative space-y-3">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{stack.title}</p>
                <h3 className="text-xl font-semibold text-white">{stack.highlight}</h3>
                <ul className="space-y-2 text-sm text-slate-200/80">
                  {stack.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-slate-300/70">{stack.footer}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-8 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-900/30 via-slate-900/70 to-slate-900/50 p-6 text-slate-200 shadow-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Toolbelt</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {toolbelt.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-white/90 transition hover:border-blue-400/40"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
