/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';

function MainLayout({ children }: { children: React.ReactNode }) {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 3000], [0, 400]);
  const y2 = useTransform(scrollY, [0, 3000], [0, -400]);
  const y3 = useTransform(scrollY, [0, 3000], [0, 300]);
  const y4 = useTransform(scrollY, [0, 3000], [0, -500]);
  const y5 = useTransform(scrollY, [0, 3000], [0, 200]);
  const y6 = useTransform(scrollY, [0, 3000], [0, -200]);
  
  // Extra scale animations on scroll
  const scale1 = useTransform(scrollY, [0, 3000], [1, 1.2]);
  const scale2 = useTransform(scrollY, [0, 3000], [1, 1.15]);
  const scale3 = useTransform(scrollY, [0, 3000], [1, 1.3]);
  const scale4 = useTransform(scrollY, [0, 3000], [1, 1.25]);

  return (
    <div className="relative min-h-screen flex flex-col text-slate-900 selection:bg-brand-primary/30">
      {/* Animated Parallax Background Photos */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[#F8FAFC] overflow-hidden">
        <motion.img 
          style={{ y: y1, scale: scale1 }}
          className="absolute top-[-10%] left-[-10%] w-1/2 md:w-1/3 opacity-[0.08] object-cover rounded-3xl blur-[1px]"
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
          alt=""
        />
        <motion.img 
          style={{ y: y2, scale: scale2 }}
          className="absolute top-[30%] right-[-5%] w-1/2 md:w-1/3 opacity-[0.05] object-cover rounded-3xl blur-[1px]"
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
          alt=""
        />
        <motion.img 
          style={{ y: y3, scale: scale3 }}
          className="absolute bottom-[-20%] left-[20%] w-1/2 md:w-1/4 opacity-[0.05] object-cover rounded-3xl blur-[1px]"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
          alt=""
        />
        <motion.img 
          style={{ y: y4, scale: scale4 }}
          className="absolute top-[60%] left-[-5%] w-1/2 md:w-1/4 opacity-[0.05] object-cover rounded-3xl blur-[2px]"
          src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=800&q=80"
          alt=""
        />
        <motion.img 
          style={{ y: y5, scale: scale1 }}
          className="absolute top-[80%] right-[10%] w-1/2 md:w-1/3 opacity-[0.05] object-cover rounded-3xl blur-[1px]"
          src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=800&q=80"
          alt=""
        />
        <motion.img 
          style={{ y: y6, scale: scale2 }}
          className="absolute top-[10%] right-[25%] w-1/3 md:w-1/5 opacity-[0.05] object-cover rounded-3xl blur-[2px]"
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
          alt=""
        />
        {/* Subtle gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-[#F8FAFC]/80 to-white/90" />
      </div>

      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
