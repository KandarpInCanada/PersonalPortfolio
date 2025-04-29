"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Mail, Linkedin, Phone, FileText, Github } from "lucide-react";
import { AnimatedGradient } from "./ui/animated-gradient";
import Link from "next/link";

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Mail,
      text: "kandarp.canada@gmail.com",
      href: "mailto:kandarp.canada@gmail.com",
    },
    {
      icon: Linkedin,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/kandarp-patel",
    },
    { icon: Github, text: "GitHub", href: "https://github.com/kandarp-patel" },
    { icon: Phone, text: "+1 (902) 448-7485", href: "tel:+19024487485" },
  ];

  return (
    <section id="contact" className="py-20 bg-[#0A0A0A]">
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
              Get in Touch
            </h2>
          </AnimatedGradient>
        </motion.div>
        <div className="mx-auto">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              className="flex items-center justify-center mb-6 p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#252525] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-6 h-6 mr-4 text-blue-400" />
              <span className="text-white text-lg">{item.text}</span>
            </motion.a>
          ))}
          <Link href="/resume" className="w-full">
            <motion.div
              className="flex items-center justify-center p-4 bg-[#1E1E1E] rounded-lg hover:bg-[#252525] transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FileText className="w-6 h-6 mr-4 text-blue-400" />
              <span className="text-white text-lg">View Resume</span>
            </motion.div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
