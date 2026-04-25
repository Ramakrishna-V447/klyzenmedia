import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { logoBase64 } from '../assets/logo-b64';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none",
        scrolled ? "py-0" : "py-2"
      )}
    >
      {/* Background Blur Overlay with Gradient Mask */}
      <div 
        className={cn(
          "absolute inset-0 transition-all duration-300 -z-10",
          scrolled ? "backdrop-blur-md" : "backdrop-blur-none"
        )}
        style={{
          maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)'
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pointer-events-auto">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <motion.img 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              src={logoBase64} 
              alt="Klyzen Media Logo" 
              className="h-12 w-auto object-contain" 
            />
            <span className="font-display font-bold text-2xl tracking-tight text-inherit group-hover:text-brand-primary transition-colors">
              Klyzen
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link, idx) => {
              const isHash = link.path.includes('#');
              return isHash ? (
                <motion.a
                  key={link.path}
                  href={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (idx * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-sm font-medium transition-colors hover:text-brand-primary relative text-inherit"
                >
                  {link.name}
                </motion.a>
              ) : (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + (idx * 0.1) }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-brand-primary relative",
                      location.pathname === link.path ? "text-brand-primary" : "text-inherit"
                    )}
                  >
                    {link.name}
                    {location.pathname === link.path && (
                      <motion.div
                        layoutId="navbar-indicator"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-2xl"
                      />
                    )}
                  </Link>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-2xl bg-brand-primary hover:bg-brand-primary/90 text-white text-sm font-bold transition-all "
              >
                Get a Free Consultation
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-inherit hover:text-brand-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-card border-t border-white/20 pointer-events-auto"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => {
              const isHash = link.path.includes('#');
              return isHash ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-2xl text-base font-medium text-inherit hover:bg-gray-50 hover:text-brand-highlight"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-2xl text-base font-medium",
                    location.pathname === link.path
                      ? "bg-brand-primary/20 text-brand-primary"
                      : "text-inherit hover:bg-gray-50 hover:text-brand-highlight"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4">
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-5 py-3 rounded-2xl bg-brand-primary hover:bg-brand-primary/90 text-black font-bold"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
