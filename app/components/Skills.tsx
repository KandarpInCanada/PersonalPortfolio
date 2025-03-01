"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { AnimatedGradient } from "./ui/animated-gradient";

const skillGroups = [
  {
    category: "Programming Languages",
    skills: [
      {
        name: "C#",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
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
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "SQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
    ],
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      {
        name: ".NET Core",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dotnetcore/dotnetcore-original.svg",
      },
      {
        name: "Entity Framework",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg",
      },
      {
        name: "Angular",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "React.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
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
        name: "MySQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
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
    category: "Development Tools",
    skills: [
      {
        name: "Git",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
      },
      {
        name: "GitHub",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
      },
      {
        name: "Visual Studio",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/visualstudio/visualstudio-plain.svg",
      },
      {
        name: "Jira",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/jira/jira-original.svg",
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Swagger",
        icon: "https://raw.githubusercontent.com/swagger-api/swagger.io/wordpress/images/assets/SW-logo-clr.png",
      },
      {
        name: "Figma",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg",
      },
    ],
  },
  {
    category: "APIs & Integrations",
    skills: [
      {
        name: "REST APIs",
        icon: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
      },
      {
        name: "GraphQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
      },
      {
        name: "OData",
        icon: "https://www.odata.org/assets/OData-logo-e1393393068350.png",
      },
      {
        name: "RabbitMQ",
        icon: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
      },
      {
        name: "MassTransit",
        icon: "https://raw.githubusercontent.com/MassTransit/MassTransit/develop/doc/source/mt-logo-color.png",
      },
    ],
  },
];

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">
              Skills
            </h2>
          </AnimatedGradient>
          <p className="text-gray-400">
            The skills, tools and technologies I am really good at:
          </p>
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
              {group.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-[#1A1A1A] rounded-lg transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: "#252525" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-12 h-12 mb-3 relative"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image
                      src={skill.icon || "/placeholder.svg"}
                      alt={skill.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-contain filter brightness-100 hover:brightness-110 transition-all"
                    />
                  </motion.div>
                  <span className="text-sm text-gray-300 text-center">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
