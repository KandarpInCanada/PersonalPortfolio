"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedGradient } from "./ui/animated-gradient"

const experiences = [
  {
    title: "Software Developer",
    company: "Maruti Techlabs",
    location: "Ahmedabad, India",
    period: "June 2023 – August 2024",
    description: [
      "Engineered and deployed enterprise applications leveraging .NET Core, C#, and Microsoft SQL Server, optimizing system performance and scalability.",
      "Architected and fine-tuned RESTful APIs and OData APIs using ASP.NET Core and Entity Framework, accelerating data transactions by 40%.",
      "Enhanced database efficiency by 50% through meticulous query tuning, indexing strategies, and SQL Server performance profiling.",
      "Spearheaded the development of a modular Angular front-end, elevating user interactivity and reducing load times by 30%.",
      "Automated software release cycles by integrating CI/CD pipelines, diminishing deployment failures by 60%.",
      "Championed peer code reviews and collaborated within Agile sprints, strengthening code maintainability and boosting team output by 25%.",
      "Devised a Salesforce-Airtable integration, enhancing data synchronisation accuracy by 50% and minimising inconsistencies.",
      "Developed a RabbitMQ monitoring tool, fortifying queue reliability and reducing message processing lags by 80%.",
      "Orchestrated a Gmail push notification system via Pub/Sub and Gmail APIs, expediting email handling efficiency by 40%.",
      "Innovated API client automation with Stoplight and Source Code Generator, slashing manual API maintenance by 30%.",
    ],
    tools:
      ".NET Core, C#, Microsoft SQL Server, ASP.NET Core, Entity Framework, Angular, CI/CD, Agile, Salesforce, RabbitMQ, Gmail APIs",
  },
  {
    title: "Associate Software Developer",
    company: "Maruti Techlabs",
    location: "Ahmedabad, India",
    period: "August 2021 - May 2023",
    description: [
      "Formulated a .NET Core synchronization service with Salesforce integration, reinforcing data integrity and reducing sync failures by 99.9%.",
      "Revamped legacy C# applications by transitioning to .NET Core, amplifying maintainability and curtailing memory footprint by 40%.",
      "Optimized API interactions using GraphQL and REST, compressing response latency by 50% while improving data exchange speed.",
      "Developed scalable React UI components and a Next.js analytics dashboard, expediting front-end performance by 50%.",
      "Automated business-critical data pipelines with Apache Airflow, streamlining workflow execution and cutting manual intervention by 60%.",
      "Constructed an OpenSearch-to-S3 pipeline utilizing multipart uploads, amplifying data processing throughput by 70%.",
      "Pioneered proof-of-concept (PoC) initiatives in cloud automation and event-driven architectures, influencing firm-wide technology adoption.",
    ],
    tools: ".NET Core, C#, Salesforce, GraphQL, REST, React, Next.js, Apache Airflow, OpenSearch, AWS S3",
  },
]

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Work Experience</h2>
          </AnimatedGradient>
        </motion.div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              className="mb-8 bg-[#111111] rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.h3
                className="text-xl font-semibold text-blue-400 mb-4"
                whileHover={{ color: "#60A5FA" }}
                transition={{ duration: 0.3 }}
              >
                {exp.title}
              </motion.h3>
              <motion.p className="text-gray-300 mb-1" whileHover={{ color: "#9CA3AF" }} transition={{ duration: 0.3 }}>
                {exp.company}
              </motion.p>
              <motion.p
                className="text-sm text-gray-400 mb-4"
                whileHover={{ color: "#D1D5DB" }}
                transition={{ duration: 0.3 }}
              >
                {exp.location} | {exp.period}
              </motion.p>
              <ul className="list-disc pl-5 text-gray-300 mb-4">
                {exp.description.map((item, i) => (
                  <motion.li
                    key={i}
                    className="mb-2"
                    whileHover={{ color: "#60A5FA", x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
              <motion.p
                className="text-sm text-gray-400"
                whileHover={{ color: "#9CA3AF" }}
                transition={{ duration: 0.3 }}
              >
                Tools: {exp.tools}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

