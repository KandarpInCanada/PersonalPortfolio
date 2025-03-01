"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-20">
      <div className="container mx-auto px-4">
        <Link
          href="/#contact"
          className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-6 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Contact
        </Link>
        <div className="w-full bg-[#1A1A1A] rounded-lg p-4 shadow-lg">
          <div className="w-full h-[800px] md:h-[1000px] overflow-y-auto p-4 text-white">
            <h1 className="text-3xl font-bold mb-4">Kandarp Patel</h1>
            <p className="mb-2">
              +1 (902) 448-7485 | kandarp.canada@gmail.com |{" "}
              <a href="https://www.linkedin.com/in/kandarp-patel" className="text-blue-400">
                LinkedIn
              </a>{" "}
              |{" "}
              <a href="https://github.com/kandarp-patel" className="text-blue-400">
                GitHub
              </a>
            </p>
            <p className="mb-6">
              Software Developer with 3 years of experience, seeking a co-op opportunity to apply and expand my skills.
            </p>

            <h2 className="text-2xl font-bold mb-2">TECHNICAL SKILLS</h2>
            <ul className="list-disc pl-5 mb-6">
              <li>
                <strong>Programming Languages:</strong> C#, SQL, JavaScript, TypeScript, Python
              </li>
              <li>
                <strong>Frameworks & Libraries:</strong> .NET Core, .NET Framework, Entity Framework, Angular, React.js,
                Node.js
              </li>
              <li>
                <strong>Databases:</strong> Microsoft SQL Server, MySQL, PostgreSQL, MongoDB
              </li>
              <li>
                <strong>Development Tools:</strong> Git, GitHub, Visual Studio, Jira, Confluence, Postman, Swagger,
                Figma, Debugging Tools
              </li>
              <li>
                <strong>Cloud & DevOps:</strong> AWS, Docker, Kubernetes, CI/CD Pipelines, Terraform, Jenkins
              </li>
              <li>
                <strong>APIs & Integrations:</strong> REST APIs, GraphQL, OData APIs, RabbitMQ, MassTransit
              </li>
              <li>
                <strong>Core Concepts:</strong> Object-Oriented Programming (OOP), Relational Database Design,
                Microservices Architecture, Software Development Life Cycle (SDLC), Agile, Scrum, SOLID Principles
              </li>
              <li>
                <strong>Soft Skills:</strong> Effective Communication, Problem-Solving, Team Collaboration, Agile
                Project Management, Time Management, Adaptability, Mentorship
              </li>
            </ul>

            <h2 className="text-2xl font-bold mb-2">PROFESSIONAL EXPERIENCE</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">Software Developer</h3>
              <p className="italic">Maruti Techlabs, Ahmedabad, India (June 2023 - August 2024)</p>
              <ul className="list-disc pl-5">
                <li>
                  Engineered and deployed enterprise applications leveraging .NET Core, C#, and Microsoft SQL Server,
                  optimizing system performance and scalability.
                </li>
                <li>
                  Architected and fine-tuned RESTful APIs and OData APIs using ASP.NET Core and Entity Framework,
                  accelerating data transactions by 40%.
                </li>
                <li>
                  Enhanced database efficiency by 50% through meticulous query tuning, indexing strategies, and SQL
                  Server performance profiling.
                </li>
                <li>
                  Spearheaded the development of a modular Angular front-end, elevating user interactivity and reducing
                  load times by 30%.
                </li>
                <li>
                  Automated software release cycles by integrating CI/CD pipelines, diminishing deployment failures by
                  60%.
                </li>
                <li>
                  Championed peer code reviews and collaborated within Agile sprints, strengthening code maintainability
                  and boosting team output by 25%.
                </li>
                <li>
                  Devised a Salesforce-Airtable integration, enhancing data synchronisation accuracy by 50% and
                  minimising inconsistencies.
                </li>
                <li>
                  Developed a RabbitMQ monitoring tool, fortifying queue reliability and reducing message processing
                  lags by 80%.
                </li>
                <li>
                  Orchestrated a Gmail push notification system via Pub/Sub and Gmail APIs, expediting email handling
                  efficiency by 40%.
                </li>
                <li>
                  Innovated API client automation with Stoplight and Source Code Generator, slashing manual API
                  maintenance by 30%.
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Associate Software Developer</h3>
              <p className="italic">Maruti Techlabs, Ahmedabad, India (August 2021 - May 2023)</p>
              <ul className="list-disc pl-5">
                <li>
                  Formulated a .NET Core synchronization service with Salesforce integration, reinforcing data integrity
                  and reducing sync failures by 99.9%.
                </li>
                <li>
                  Revamped legacy C# applications by transitioning to .NET Core, amplifying maintainability and
                  curtailing memory footprint by 40%.
                </li>
                <li>
                  Optimized API interactions using GraphQL and REST, compressing response latency by 50% while improving
                  data exchange speed.
                </li>
                <li>
                  Developed scalable React UI components and a Next.js analytics dashboard, expediting front-end
                  performance by 50%.
                </li>
                <li>
                  Automated business-critical data pipelines with Apache Airflow, streamlining workflow execution and
                  cutting manual intervention by 60%.
                </li>
                <li>
                  Constructed an OpenSearch-to-S3 pipeline utilizing multipart uploads, amplifying data processing
                  throughput by 70%.
                </li>
                <li>
                  Pioneered proof-of-concept (PoC) initiatives in cloud automation and event-driven architectures,
                  influencing firm-wide technology adoption.
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold mb-2">PROJECTS</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold">SecretStuffs</h3>
              <p className="italic">Tech Stack: React, Next.js, Spring Boot, Node.js, PostgreSQL, AWS, Docker</p>
              <p>
                Implemented a React, Next.js, and Spring Boot-based donation platform, enhancing user engagement by 30%.
                Implemented JWT authentication, reducing unauthorized access by 95%, and optimized PostgreSQL queries,
                decreasing database latency by 40% while improving API response time by 25%. Automated microservices
                deployment on AWS EC2 using Docker and CI/CD, cutting deployment time by 60%. Integrated AWS S3 for
                storage, SNS/SQS for message queuing, and CloudWatch for real-time monitoring, ensuring 99.9% system
                uptime.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">Kubernetes Microservice Architecture</h3>
              <p className="italic">Tech Stack: Kubernetes, Docker, Cloud Build, GKE, Terraform</p>
              <p>
                Deployed two microservices on Google Kubernetes Engine (GKE) using Terraform for automated provisioning
                and scaling. Implemented a CI/CD pipeline with Cloud Build, automating deployments with Docker images
                from Artifact Registry. Configured a Persistent Volume (PV) in GKE to enable seamless file sharing and
                data persistence between microservices, ensuring scalability and reliability.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold">PotholeX</h3>
              <p className="italic">
                Tech Stack: React Native Expo, .NET Core, Flask, YOLO Model, MongoDB, AWS, Docker
              </p>
              <p>
                Developed a React Native mobile application for real-time pothole detection using a YOLO-based machine
                learning model. The Flask backend processes camera feed data, achieving 92% detection accuracy and
                classifying over 1,000 images per second. Integrated MongoDB for scalable data storage, efficiently
                managing 1M+ records. Deployed the system on AWS EC2 with Docker, ensuring 99.9% uptime while reducing
                infrastructure costs by 30%.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-2">EDUCATION</h2>
            <div>
              <h3 className="text-xl font-semibold">Dalhousie University, Halifax, Nova Scotia, Canada</h3>
              <p>Master of Applied Computer Science (August 2024 - Present)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

