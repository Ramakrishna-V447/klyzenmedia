import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { logoBase64 } from '../assets/logo-b64';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#services' },
    { name: 'Pricing', path: '/#pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            {/* The company logo will be loaded from the public folder */}
            <img src={logoBase64} alt="Klyzen Media Logo" className="h-12 w-auto object-contain" />
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
              Klyzen<span className="text-brand-primary">Media</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => {
              const isHash = link.path.includes('#');
              return isHash ? (
                <a
                  key={link.path}
                  href={link.path}
                  className="text-sm font-medium transition-colors hover:text-brand-primary relative text-slate-600"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-primary relative",
                    location.pathname === link.path ? "text-brand-primary" : "text-slate-600"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-primary rounded-full"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-brand-primary hover:bg-brand-secondary text-white text-sm font-medium transition-all hover:shadow-md"
            >
              Get a Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-brand-primary transition-colors"
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
          className="md:hidden bg-white border-t border-slate-200"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => {
              const isHash = link.path.includes('#');
              return isHash ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 rounded-md text-base font-medium",
                    location.pathname === link.path
                      ? "bg-brand-primary/10 text-brand-primary"
                      : "text-slate-600 hover:bg-slate-50 hover:text-brand-primary"
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
                className="block w-full text-center px-5 py-3 rounded-lg bg-brand-primary text-white font-bold"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
