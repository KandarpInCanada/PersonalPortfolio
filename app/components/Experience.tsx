"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedGradient } from "./ui/animated-gradient";

const experiences = [
  {
    title: "Software Developer",
    company: "Maruti Techlabs",
    location: "Ahmedabad, India",
    period: "July 2023 – July 2024",
    description: [
      "Conducted peer code reviews across 10+ Agile sprints, enforcing SOLID principles and TDD, reducing production bugs by 35%",
      "Optimized REST/OData API performance by 40% using .NET and Entity Framework in high-throughput systems",
      "Orchestrated IaC with Terraform and AWS EKS, achieving 50% faster deployments and 90% SLA adherence",
      "Engineered fault-tolerant payment system using MassTransit state machines and RabbitMQ, reducing payment failures by 40%",
      "Presented sprint outcomes with release notes and architecture diagrams to stakeholders",
      "Developed Terraform module documentation and deployment playbooks for DevOps teams",
    ],
    tools:
      ".NET, C#, Terraform, AWS EKS, Kubernetes, RabbitMQ, MassTransit, Entity Framework, New Relic, PCI-DSS",
  },
  {
    title: "Associate Software Developer",
    company: "Maruti Techlabs",
    location: "Ahmedabad, India",
    period: "July 2022 - May 2023",
    description: [
      "Architected fault-tolerant microservice using RabbitMQ/.NET to sync 10+ services with Salesforce (99.9% data consistency)",
      "Automated Apache Airflow schedulers for mission-critical workflows including RabbitMQ monitoring system",
      "Designed Airflow DAGs triggering Slack/email alerts for >10K pending messages, reducing processing lag by 80%",
      "Built Elasticsearch-to-S3 data pipeline achieving 70% faster upload throughput with Python/boto3",
      "Pioneered Gmail push notification POC using Google Pub/Sub/Gmail API, cutting cloud costs by 70%",
      "Developed OpenAPI-based C# source code generator reducing SDK development efforts by 30%",
    ],
    tools:
      ".NET, RabbitMQ, Apache Airflow, Python, AWS S3, Elasticsearch, Google Pub/Sub, OpenAPI, Salesforce",
  },
  {
    title: "Software Developer Intern",
    company: "Maruti Techlabs",
    location: "Ahmedabad, India",
    period: "December 2021 - May 2022",
    description: [
      "Modernized legacy microservices to latest .NET with Docker/Kubernetes, reducing security vulnerabilities by 60%",
      "Improved API response times by 25% through containerization and orchestration",
      "Participated in Agile Scrum ceremonies, improving sprint completion rates by 20%",
      "Implemented CI/CD pipelines for microservices deployment",
      "Conducted performance profiling and optimization of SQL Server databases",
    ],
    tools: ".NET, Docker, Kubernetes, SQL Server, Azure DevOps, Git, Postman",
  },
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">
              Professional Experience
            </h2>
          </AnimatedGradient>
        </motion.div>

        <div className="mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="group bg-[#111111] rounded-xl p-6 border border-transparent hover:border-blue-900 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <motion.h3
                  className="text-xl font-semibold text-blue-400 mb-2"
                  whileHover={{ color: "#60A5FA" }}
                >
                  {exp.title}
                </motion.h3>
                <motion.span
                  className="text-sm text-gray-400"
                  whileHover={{ color: "#D1D5DB" }}
                >
                  {exp.period}
                </motion.span>
              </div>

              <motion.div className="mb-4">
                <p className="text-gray-300 font-medium">{exp.company}</p>
                <p className="text-sm text-gray-400">{exp.location}</p>
              </motion.div>

              <ul className="space-y-3 mb-6">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="text-gray-300 pl-4 border-l-2 border-blue-800 hover:border-blue-400 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="flex flex-wrap gap-2"
                whileHover={{ opacity: 1 }}
              >
                {exp.tools.split(", ").map((tool, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-[#252525] text-gray-300 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
