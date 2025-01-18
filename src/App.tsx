import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Github, Linkedin, Mail, Menu, X, Code2, Briefcase, User, FileText } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-8 text-center text-gray-400">
        <p>© 2024 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;