"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedGradient } from "./ui/animated-gradient";

const experiences = [
  {
    title: "Software Developer",
    company: "Maruti Techlabs",
    location: "Ahmedabad, India",
    period: "Jul 2023 – Jul 2024",
    highlights: [
      "Optimized REST/OData services with .NET + Entity Framework to cut latency by 40% in high-throughput systems.",
      "Hardened payment flows with MassTransit state machines and RabbitMQ, reducing failed transactions by 40%.",
      "Codified infrastructure with Terraform and deployed to AWS EKS, trimming release times by ~50% and keeping SLAs above 90%.",
      "Rounded out each sprint with release notes, architecture diagrams, and stakeholder demos to keep teams aligned.",
    ],
    stack: ".NET, C#, Terraform, AWS EKS, Kubernetes, RabbitMQ, MassTransit, EF Core, New Relic, PCI-DSS",
  },
  {
    title: "Associate Software Developer",
    company: "Maruti Techlabs",
    location: "Ahmedabad, India",
    period: "Jul 2022 – May 2023",
    highlights: [
      "Built resilient Salesforce sync microservice (RabbitMQ/.NET) achieving 99.9% data consistency across 10+ services.",
      "Automated Apache Airflow DAGs for mission-critical monitoring; reduced queue backlogs by 80% for 10K+ messages.",
      "Designed Elasticsearch → S3 export pipeline with Python/boto3 for 70% faster throughput and predictable costs.",
      "Shipped Gmail push-notification POC (Google Pub/Sub) replacing polling and slashing cloud spend by 70%.",
    ],
    stack: ".NET, RabbitMQ, Apache Airflow, Python, AWS S3, Elasticsearch, Google Pub/Sub, OpenAPI, Salesforce",
  },
  {
    title: "Software Developer Intern",
    company: "Maruti Techlabs",
    location: "Ahmedabad, India",
    period: "Dec 2021 – May 2022",
    highlights: [
      "Modernized legacy microservices to .NET containers on Kubernetes, shrinking vulnerability surface by 60%.",
      "Boosted API response times by ~25% through containerization, profiling, and database query tuning.",
      "Implemented CI/CD pipelines and test gating for microservices to improve release reliability.",
      "Collaborated across Agile ceremonies, improving sprint predictability while learning fast from senior devs.",
    ],
    stack: ".NET, Docker, Kubernetes, SQL Server, Azure DevOps, Git, Postman",
  },
];

const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="experience" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="px-4 py-2 text-3xl font-bold text-white md:text-4xl">Professional experience</h2>
          </AnimatedGradient>
          <p className="mt-4 text-slate-300/80">
            Shipping production features, leading release playbooks, and keeping systems observable.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent md:left-1/2" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.title}
                className={`relative rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur glow-ring ${
                  idx % 2 === 0 ? "md:ml-auto md:w-[48%]" : "md:mr-auto md:w-[48%]"
                }`}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="absolute left-[14px] top-8 h-3 w-3 rounded-full bg-gradient-to-br from-blue-300 to-cyan-400 md:left-[-11px]" />
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                    <p className="text-slate-300/90">{exp.company}</p>
                  </div>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{exp.location}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-200/90">
                  {exp.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-blue-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.stack.split(", ").map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
