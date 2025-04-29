"use client";

import { motion } from "framer-motion";
import { Spotlight } from "./ui/spotlight";

const Hero = () => {
  return (
    <Spotlight className="min-h-screen flex items-center justify-center bg-[#0A0A0A] overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center md:text-left max-w-3xl mx-auto"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
            Hi, I'm <span className="text-blue-400">Kandarp Patel</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 relative">
            Software Developer | Seeking Fall 2025 Co-op
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-400"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </h2>
          <p className="text-gray-400 mb-8 mx-auto">
            Master of Applied Computer Science candidate at Dalhousie University
            (Aug 2024 - Dec 2025) with 2.5+ years of professional experience
            building enterprise solutions. Skilled in full-stack development,
            cloud-native architectures (AWS/Azure), and AI integration. Seeking
            to leverage expertise in microservices, distributed systems, and
            DevOps automation to drive innovation during my co-op term.
          </p>
        </motion.div>
      </div>
    </Spotlight>
  );
};

export default Hero;
