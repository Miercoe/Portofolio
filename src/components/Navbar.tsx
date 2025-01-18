import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold"
          >
            <Link to="home" smooth={true} className="cursor-pointer">
              DevName
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                className="hover:text-purple-500 transition-colors cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black/95 py-4"
        >
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {['Home', 'About', 'Projects', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                className="hover:text-purple-500 transition-colors cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;