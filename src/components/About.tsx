import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Briefcase, User } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'React', 'Node.js',
    'Python', 'SQL', 'AWS', 'Docker'
  ];

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-400">
              I'm a passionate developer with X years of experience in building web applications.
              I love creating elegant solutions to complex problems.
            </p>
            
            <div className="flex items-center space-x-2">
              <Code2 className="text-purple-500" />
              <span>Full Stack Development</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <Briefcase className="text-purple-500" />
              <span>X Years Experience</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <User className="text-purple-500" />
              <span>Available for Freelance</span>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-purple-500/10 text-purple-500 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;