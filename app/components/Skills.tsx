"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { AnimatedGradient } from "./ui/animated-gradient"

const skillGroups = [
  {
    category: "Programming Languages",
    skills: ["C#", "JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: [".NET Core", ".NET Framework", "Entity Framework", "Angular", "React.js", "Node.js"],
  },
  {
    category: "Databases",
    skills: ["Microsoft SQL Server", "MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD Pipelines"],
  },
  {
    category: "Development Tools",
    skills: ["Git", "GitHub", "Visual Studio", "Jira", "Confluence", "Postman", "Swagger", "Figma"],
  },
  {
    category: "APIs & Integrations",
    skills: ["REST APIs", "GraphQL", "OData APIs", "RabbitMQ", "MassTransit"],
  },
]

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="skills" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Skills</h2>
          </AnimatedGradient>
          <p className="text-gray-400">The skills, tools and technologies I am really good at:</p>
        </motion.div>

        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">{group.category}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {group.skills.map((skill) => (
                <motion.div
                  key={skill}
                  className="flex items-center justify-center p-4 bg-[#1A1A1A] rounded-lg transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: "#252525" }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-sm text-gray-300 text-center">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills

