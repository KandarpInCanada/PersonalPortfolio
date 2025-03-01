"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Share2 } from "lucide-react"
import { AnimatedGradient } from "./ui/animated-gradient"

const projects = [
  {
    title: "SecretStuffs",
    description:
      "Implemented a React, Next.js, and Spring Boot-based donation platform, enhancing user engagement by 30%. Implemented JWT authentication, reducing unauthorized access by 95%, and optimized PostgreSQL queries, decreasing database latency by 40% while improving API response time by 25%. Automated microservices deployment on AWS EC2 using Docker and CI/CD, cutting deployment time by 60%.",
    link: "https://github.com/kandarp-patel",
    technologies: ["React", "Next.js", "Spring Boot", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    title: "Kubernetes Microservice Architecture",
    description:
      "Deployed two microservices on Google Kubernetes Engine (GKE) using Terraform for automated provisioning and scaling. Implemented a CI/CD pipeline with Cloud Build, automating deployments with Docker images from Artifact Registry. Configured a Persistent Volume (PV) in GKE to enable seamless file sharing and data persistence between microservices, ensuring scalability and reliability.",
    link: "https://github.com/kandarp-patel",
    technologies: ["Kubernetes", "Docker", "Cloud Build", "GKE", "Terraform"],
  },
  {
    title: "PotholeX",
    description:
      "Developed a React Native mobile application for real-time pothole detection using a YOLO-based machine learning model. The Flask backend processes camera feed data, achieving 92% detection accuracy and classifying over 1,000 images per second. Integrated MongoDB for scalable data storage, efficiently managing 1M+ records. Deployed the system on AWS EC2 with Docker, ensuring 99.9% uptime while reducing infrastructure costs by 30%.",
    link: "https://github.com/kandarp-patel",
    technologies: ["React Native Expo", ".NET Core", "Flask", "YOLO Model", "MongoDB", "AWS", "Docker"],
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">Projects</h2>
          </AnimatedGradient>
          <p className="text-gray-400">Some of the notable projects I've built:</p>
        </motion.div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-[#1A1A1A] rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.h3
                className="text-2xl font-bold text-white mb-4"
                whileHover={{ color: "#60A5FA" }}
                transition={{ duration: 0.3 }}
              >
                {project.title}
              </motion.h3>
              <motion.p className="text-gray-400 mb-6" whileHover={{ color: "#9CA3AF" }} transition={{ duration: 0.3 }}>
                {project.description}
              </motion.p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-sm"
                    whileHover={{ scale: 1.1, backgroundColor: "#3B82F6", color: "#FFFFFF" }}
                    transition={{ duration: 0.3 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Share2 className="w-4 h-4 mr-2" />
                View Project
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

