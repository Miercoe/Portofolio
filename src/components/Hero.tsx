import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="text-purple-500">Your Name</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 mb-8"
        >
          Full Stack Developer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center space-x-6"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="hover:text-purple-500 transition-colors">
            <Github size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="hover:text-purple-500 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="mailto:your.email@example.com"
             className="hover:text-purple-500 transition-colors">
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;