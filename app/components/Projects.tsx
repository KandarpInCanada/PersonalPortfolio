"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Share2, Video, Image } from "lucide-react";
import { AnimatedGradient } from "./ui/animated-gradient";

type ProjectMedia = {
  type: "image" | "video";
  url: string;
  alt: string;
  thumbnail?: string;
};

type Project = {
  title: string;
  description: string;
  link: string;
  technologies: string[];
  media: ProjectMedia[];
  features?: string[];
  demoLink?: string;
};

const projects: Project[] = [
  {
    title: "CommuneDrop - Cloud-Native Delivery Tracking Platform",
    description:
      "A comprehensive microservices-based delivery tracking system deployed on AWS EKS, featuring real-time location tracking, secure payments, and automated infrastructure. Architected with 6 specialized microservices handling authentication, orders, payments, and real-time location updates using Kafka and WebSockets.",
    link: "https://github.com/KandarpInCanada/Commune-Drop-Ride-Sharing-Platform",
    technologies: [
      "AWS EKS",
      "Kubernetes",
      "Terraform",
      ".NET Core",
      "Node.js",
      "TypeScript",
      "Kafka",
      "Stripe",
      "Redis",
      "MongoDB",
      "Socket.IO",
      "React",
      "TailwindCSS",
      "AWS Location",
      "Duende Identity",
      "OAuth2/OpenID",
    ],
    media: [
      {
        type: "image",
        url: "https://github.com/user-attachments/assets/2a1e43c2-4562-4842-9d44-c07ae39f351b",
        alt: "Microservices Architecture Diagram",
      },
      {
        type: "video",
        url: "https://github.com/user-attachments/assets/3206cf45-ed47-479b-aa5f-7d48ca64f0cc",
        thumbnail: "/thumbnails/communedrop-arch.jpg",
        alt: "Demo video showing real-time pothole detection",
      },
    ],
    features: [
      "Real-time driver tracking with WebSockets and Kafka",
      "PCI-compliant payments processing via Stripe",
      "JWT-based authentication with OAuth2/OpenID Connect",
      "Auto-scaling Kubernetes cluster on AWS EKS",
      "Infrastructure-as-Code with Terraform",
      "Geospatial routing with AWS Location Services",
      "Redis caching for low-latency location queries",
      "Event-driven architecture with Apache Kafka",
    ],
  },
  {
    title:
      "PhotoSense - AI-Powered Photo Management Platform (Serverless AWS Solution)",
    description: `Led full-stack development of a cloud-native photo management system leveraging AWS serverless technologies.
      Key achievements:
      • Reduced operational costs by 40% through serverless architecture
      • Achieved 95% accuracy in image recognition using AWS Rekognition
      • Enabled real-time processing of 1000+ images/hour through event-driven pipeline
      • Implemented infrastructure-as-code with Terraform for consistent deployments`,
    link: "https://github.com/KandarpInCanada/PhotoSense",
    technologies: [
      "AWS ECS Fargate",
      "Terraform",
      "AWS Lambda",
      "Amazon DynamoDB",
      "Next.js 14",
      "AWS Rekognition",
      "Amazon S3",
      "Amazon SQS",
      "Supabase Auth",
      "CI/CD Pipelines",
    ],
    media: [
      {
        type: "image",
        url: "https://github.com/user-attachments/assets/18c449d6-cbb5-43d0-bf8a-0a39b4d8e7de",
        alt: "Serverless Architecture Diagram",
      },
      {
        type: "video",
        url: "https://github.com/user-attachments/assets/1438a69b-9343-4ae8-a004-2009ced3a6c1",
        thumbnail: "/thumbnails/photosense-arch.jpg",
        alt: "PhotoSense workflow demo",
      },
    ],
    features: [
      "Automated image categorization using AI/ML",
      "Secure cloud storage with S3 bucket policies",
      "Real-time notifications via SQS message queue",
      "CI/CD pipeline with GitHub Actions",
      "JWT-based authentication with Supabase",
      "Infrastructure-as-Code with Terraform",
      "Responsive UI with dark/light themes",
      "Cost-effective serverless scaling",
    ],
  },
  {
    title: "PotholeX - AI-Powered Road Maintenance Platform",
    description: `Deployed community-driven solution reducing road repair response time by 40% through:
  • 94% accurate AI detection with YOLOv8 model (<500ms inference)
  • Cross-platform mobile app serving 500+ test users across 3 cities
  • TensorRT-optimized Flask API improving inference speed by 40%
  • Real-time mapping integration for efficient issue tracking`,
    link: "https://github.com/KandarpInCanada/PotholeX",
    technologies: [
      "React Native",
      "Expo",
      "YOLOv8",
      "TensorRT",
      "Flask API",
      "Supabase Auth",
      "Google Maps SDK",
      "React Native Reanimated",
      "Expo Notifications",
      "PostgreSQL",
    ],
    media: [
      {
        type: "image",
        url: "https://github.com/user-attachments/assets/e1656084-aee0-47dd-9531-33de746ada78",
        alt: "PotholeX Mobile Interface",
      },
      {
        type: "video",
        url: "https://github.com/user-attachments/assets/3733e129-37a5-41ef-aafc-c85f0f7a4447",
        thumbnail: "/thumbnails/potholex.jpg",
        alt: "Real-time detection demo",
      },
    ],
    features: [
      "AI-powered pothole validation with confidence scoring",
      "Severity classification system (1-5 scale)",
      "Community engagement features: likes/comments",
      "Admin dashboard with analytics & prioritization",
      "Real-time map clustering for hotspot identification",
      "Automated user notifications system",
      "Image preprocessing pipeline for ML optimization",
      "Role-based access control (RBAC) system",
    ],
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            <h2 className="text-3xl md:text-4xl font-bold text-white px-4 py-2">
              Projects
            </h2>
          </AnimatedGradient>
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

              <motion.p
                className="text-gray-400 mb-6"
                whileHover={{ color: "#9CA3AF" }}
                transition={{ duration: 0.3 }}
              >
                {project.description}
              </motion.p>

              {project.features && (
                <div className="mb-6">
                  <h4 className="text-blue-400 mb-3 font-semibold">
                    Key Features:
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        className="text-gray-300 text-sm pl-4 border-l-2 border-blue-800 hover:border-blue-400 transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {project.media.map((media, mediaIndex) => (
                  <motion.div
                    key={mediaIndex}
                    className="relative aspect-video bg-black rounded-lg overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    {media.type === "image" ? (
                      <img
                        src={media.url}
                        alt={media.alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <video
                        className="w-full h-full object-cover"
                        poster={media.thumbnail}
                        controls
                        preload="metadata"
                        autoPlay
                        muted
                        loop
                        playsInline
                      >
                        <source src={media.url} type="video/mp4" />
                      </video>
                    )}
                    <div className="absolute bottom-2 right-2 bg-black/50 px-2 py-1 rounded flex items-center text-xs text-white">
                      {media.type === "image" ? (
                        <Image className="w-3 h-3 mr-1" />
                      ) : (
                        <Video className="w-3 h-3 mr-1" />
                      )}
                      {media.type.toUpperCase()}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="text-blue-400 mb-3 font-semibold">
                  Technology Stack:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-[#252525] text-gray-300 rounded-full text-sm"
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#3B82F6",
                        color: "#FFFFFF",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              <motion.div className="space-y-2">
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  View GitHub Repository
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
