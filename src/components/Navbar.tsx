import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

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
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b-0 border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">K</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">
              Klyzen<span className="text-brand-cyan">Media</span>
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
                  className="text-sm font-medium transition-colors hover:text-brand-cyan relative text-slate-400"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-cyan relative",
                    location.pathname === link.path ? "text-white" : "text-slate-400"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-brand-cyan rounded-full"
                    />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm font-medium transition-all hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:border-brand-cyan/50"
            >
              Get a Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-400 hover:text-white transition-colors"
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
          className="md:hidden glass-card border-t border-white/10"
        >
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => {
              const isHash = link.path.includes('#');
              return isHash ? (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-slate-400 hover:bg-white/5 hover:text-white"
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
                      ? "bg-white/10 text-white"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
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
                className="block w-full text-center px-5 py-3 rounded-lg bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-medium"
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
