"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AnimatedGradient } from "./ui/animated-gradient";
import { ReactNode } from "react";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Type-safe highlight parser
  const parseHighlight = (text: string): ReactNode[] => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part: string, i: number) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <span key={i} className="text-blue-400 font-semibold">
            {part.slice(2, -2)}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section id="about" className="py-20 bg-[#0A0A0A]">
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
              About Me
            </h2>
          </AnimatedGradient>
        </motion.div>
        <motion.div
          className="mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="space-y-6 text-left">
            {[
              "As a Full-Stack Software Developer with 2.5+ years of experience, I specialize in building scalable, event-driven systems using modern stacks like .NET, Java, and cloud-native tools. Currently pursuing a Master of Applied Computer Science at Dalhousie University, I blend academic rigor with hands-on expertise in microservices, DevOps automation, and AI-driven solutions.",
              "At Maruti Techlabs, I modernized legacy systems to reduce security risks by 60% and improved API performance by 40% using .NET Core and Entity Framework. My work includes designing fault-tolerant microservices with RabbitMQ and Terraform-driven AWS/Azure deployments, ensuring 99.9% data consistency for mission-critical applications. I also pioneered cost-saving innovations, like replacing legacy polling with real-time Gmail notifications using Google Pub/Sub, slashing cloud costs by 70%.",
              "I thrive in Agile environments, leading cross-functional teams to streamline CI/CD pipelines with Kubernetes, GitHub Actions, and Apache Airflow. My projects, such as a serverless AI photo analyzer (AWS Rekognition) and a real-time delivery tracking platform (Kafka, Stripe), highlight my ability to merge scalability with cutting-edge tech like AI/ML and geospatial analytics.",
              "Beyond code, I prioritize clean architecture (SOLID, TDD) and regulatory compliance (PCI-DSS), ensuring solutions are both robust and audit-ready. Let’s connect if you’re seeking a developer who transforms complex challenges into efficient, scalable systems!",
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className="text-gray-300 leading-relaxed"
                whileHover={{ scale: 1.02, color: "#60A5FA" }}
                transition={{ duration: 0.2 }}
              >
                {parseHighlight(paragraph)}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
