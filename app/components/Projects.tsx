"use client";

import { ExternalLink, Github, PlayCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedGradient } from "./ui/animated-gradient";

type Project = {
  title: string;
  summary: string;
  impact: string[];
  stack: string[];
  links: { label: string; href: string; icon: "github" | "demo" | "link" }[];
};

const projects: Project[] = [
  {
    title: "CommuneDrop · Cloud-native delivery tracking",
    summary:
      "A production-style delivery platform with 6 microservices on AWS EKS, low-latency location streaming, and PCI-ready payments.",
    impact: [
      "Kafka + WebSockets for real-time driver and order updates",
      "Stripe checkout with hardened payment workflows",
      "IaC end to end: Terraform, GitHub Actions, autoscaling EKS",
    ],
    stack: [".NET", "Node.js", "TypeScript", "Kafka", "Stripe", "Redis", "MongoDB", "AWS EKS", "Kubernetes"],
    links: [
      { label: "GitHub", href: "https://github.com/KandarpInCanada/Commune-Drop-Ride-Sharing-Platform", icon: "github" },
      { label: "Architecture", href: "https://github.com/user-attachments/assets/2a1e43c2-4562-4842-9d44-c07ae39f351b", icon: "link" },
    ],
  },
  {
    title: "PhotoSense · Serverless AI photo intelligence",
    summary:
      "Event-driven photo management built with AWS serverless. Uses Rekognition for labeling, S3 for storage, and Supabase auth.",
    impact: [
      "95% accurate image recognition, processing 1K+ images/hour",
      "40% cost reduction through serverless-first design",
      "Terraform modules for repeatable environments and CI/CD",
    ],
    stack: ["Next.js", "AWS Lambda", "ECS Fargate", "Terraform", "SQS", "Rekognition", "Supabase"],
    links: [
      { label: "GitHub", href: "https://github.com/KandarpInCanada/PhotoSense", icon: "github" },
      { label: "Demo", href: "https://github.com/user-attachments/assets/1438a69b-9343-4ae8-a004-2009ced3a6c1", icon: "demo" },
    ],
  },
  {
    title: "PotholeX · AI-powered road maintenance",
    summary:
      "Community reporting platform detecting potholes with YOLOv8 and routing crews in real time with geospatial analytics.",
    impact: [
      "94% detection accuracy with TensorRT-optimized inference",
      "Mobile app for 500+ pilot users across three cities",
      "Elastic + Redis pipelines for fast querying and exports",
    ],
    stack: ["YOLOv8", "Python", "Flask", "Kafka", "React Native", "Redis", "PostgreSQL", "Docker"],
    links: [
      { label: "GitHub", href: "https://github.com/KandarpInCanada/PotholeX", icon: "github" },
      { label: "Demo", href: "https://github.com/user-attachments/assets/f41a9b5e-468b-4d73-99f6-ca450fc27700", icon: "demo" },
    ],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="projects" className="relative py-20">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="px-4 py-2 text-3xl font-bold text-white md:text-4xl">Featured work</h2>
          </AnimatedGradient>
          <p className="mt-4 text-slate-300/80">Systems that shipped, scaled, and taught me something along the way.</p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur glow-ring transition hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
              <div className="relative flex flex-1 flex-col gap-3">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm text-slate-200/80">{project.summary}</p>

                <ul className="space-y-2 text-sm text-slate-200/90">
                  {project.impact.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3 pt-2">
                  {project.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-white/90 transition hover:border-white/30 hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.icon === "github" && <Github className="h-4 w-4" />}
                      {link.icon === "demo" && <PlayCircle className="h-4 w-4" />}
                      {link.icon === "link" && <ExternalLink className="h-4 w-4" />}
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
