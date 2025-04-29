"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { AnimatedGradient } from "./ui/animated-gradient";

type Skill = {
  name: string;
  icon?: string;
};

const skillGroups: { category: string; skills: Skill[] }[] = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "C#",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      },
      {
        name: "Java",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "SQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        name: ".NET",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "Spring Boot",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg",
      },
      {
        name: "React.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "React Native",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Express",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        name: "SQL Server",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "Elasticsearch",
        icon: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
      },
      {
        name: "Redis",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
      {
        name: "DynamoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: [
      {
        name: "AWS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg",
      },
      {
        name: "Azure",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
      },
      {
        name: "Docker",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Terraform",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/terraform/terraform-original.svg",
      },
      {
        name: "Jenkins",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jenkins/jenkins-original.svg",
      },
    ],
  },
  {
    category: "APIs & Integrations",
    skills: [
      {
        name: "REST APIs",
        icon: "https://www.vectorlogo.zone/logos/openapis/openapis-icon.svg",
      },
      {
        name: "OData APIs",
        icon: "https://www.odata.org/assets/ODataLogo-24.png",
      },
      {
        name: "GraphQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
      },
      {
        name: "RabbitMQ",
        icon: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
      },
      {
        name: "MassTransit",
        icon: "https://avatars.githubusercontent.com/u/317796?s=200&v=4",
      },
      {
        name: "Apache Kafka",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/apachekafka/apachekafka-original.svg",
      },
    ],
  },
  {
    category: "Core Concepts",
    skills: [
      { name: "Microservices Architecture" },
      { name: "Event-Driven Design" },
      { name: "OOP" },
      { name: "SOLID Principles" },
      { name: "Agile/Scrum" },
      { name: "SDLC" },
      { name: "Regulatory Compliance" },
      { name: "Machine Learning" },
      { name: "RAG Concepts" },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/skills-bg.png')",
          filter: "brightness(0.15) saturate(1.2)",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <AnimatedGradient className="inline-block">
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">
              Technical Expertise
            </h2>
          </AnimatedGradient>
        </motion.div>

        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-6 text-blue-400">
              {group.category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {group.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  delay={skillIndex * 0.05}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// Extract skill card to a separate component for better organization
const SkillCard = ({ skill, delay }: { skill: Skill; delay: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center justify-center p-4 ${
        skill.icon ? "bg-[#1A1A1A]/80" : "bg-[#252525]/80"
      } backdrop-blur-sm rounded-lg transition-colors perspective-card group`}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.3, delay }}
      whileHover={{
        scale: 1.05,
        backgroundColor: "#1F1F1F",
        rotateX: 5,
        rotateY: 5,
        boxShadow: "0 10px 30px -15px rgba(0, 0, 255, 0.2)",
      }}
    >
      {skill.icon && (
        <motion.div
          className="w-12 h-12 mb-3 relative transition-all duration-300 group-hover:scale-110"
          animate={{ rotateY: inView ? 360 : 0 }}
          transition={{ duration: 0.8, delay: delay + 0.2 }}
        >
          <Image
            src={skill.icon || "/placeholder.svg"}
            alt={skill.name}
            width={48}
            height={48}
            className="w-full h-full object-contain filter brightness-100 hover:brightness-110 transition-all"
          />
        </motion.div>
      )}
      <span className="text-sm text-gray-300 text-center">{skill.name}</span>
    </motion.div>
  );
};

export default Skills;
