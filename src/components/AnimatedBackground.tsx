import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const { scrollY } = useScroll();
  
  // Parallax elements with smooth springs for better feel
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  const y1 = useSpring(useTransform(scrollY, [0, 2000], [0, -300]), springConfig);
  const y2 = useSpring(useTransform(scrollY, [0, 2000], [0, 250]), springConfig);
  const y3 = useSpring(useTransform(scrollY, [0, 2000], [0, -400]), springConfig);
  
  const rotate1 = useTransform(scrollY, [0, 2000], [0, 45]);
  const rotate2 = useTransform(scrollY, [0, 2000], [0, -30]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if ('touches' in e) {
        setMousePosition({
          x: e.touches[0].clientX - window.innerWidth / 2,
          y: e.touches[0].clientY - window.innerHeight / 2
        });
      } else {
        setMousePosition({
          x: e.clientX - window.innerWidth / 2,
          y: e.clientY - window.innerHeight / 2
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-slate-50">
      {/* Interactive gradient mesh background */}
      <motion.div 
        className="absolute inset-0 opacity-40 transition-transform duration-1000 ease-out"
        animate={{
          x: mousePosition.x * 0.05,
          y: mousePosition.y * 0.05,
        }}
      >
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-400 blur-[120px] mix-blend-multiply opacity-50 animate-blob" />
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-pink-400 blur-[120px] mix-blend-multiply opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-400 blur-[120px] mix-blend-multiply opacity-50 animate-blob animation-delay-4000" />
      </motion.div>

      {/* Floating images/shapes reacting to scroll and mouse */}
      <motion.div 
        style={{ y: y1, rotate: rotate1 }}
        animate={{
          x: mousePosition.x * 0.1,
          y: mousePosition.y * 0.1,
        }}
        className="absolute top-[10%] right-[10%] w-64 h-64 rounded-3xl bg-gradient-to-br from-indigo-200 to-purple-200 opacity-30 blur-2xl"
      />
      
      <motion.div 
        style={{ y: y2, rotate: rotate2 }}
        animate={{
          x: mousePosition.x * -0.05,
          y: mousePosition.y * -0.05,
        }}
        className="absolute top-[40%] left-[5%] w-48 h-48 rounded-full bg-gradient-to-tr from-pink-200 to-orange-200 opacity-20 blur-2xl"
      />

      <motion.div 
        style={{ y: y3 }}
        animate={{
          x: mousePosition.x * 0.08,
          y: mousePosition.y * 0.08,
        }}
        className="absolute bottom-[20%] right-[20%] w-80 h-80 rounded-full bg-gradient-to-t from-cyan-200 to-emerald-200 opacity-25 blur-[100px]"
      />
      
      {/* Abstract floating image cutouts */}
      <motion.div
        style={{ y: y1 }}
        animate={{
          x: mousePosition.x * 0.02,
          y: mousePosition.y * 0.02,
        }}
        className="absolute top-[15%] right-[5%] w-48 h-64 opacity-20 rotate-12 rounded-[3rem] overflow-hidden drop-shadow-2xl grayscale"
      >
        <img src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?auto=format&fit=crop&w=800&q=80" alt="" className="w-full h-full object-cover" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        animate={{
          x: mousePosition.x * -0.03,
          y: mousePosition.y * -0.03,
        }}
        className="absolute top-[60%] left-[3%] w-56 h-56 opacity-15 -rotate-12 rounded-full overflow-hidden drop-shadow-2xl grayscale"
      >
        <img src="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=800&q=80" alt="" className="w-full h-full object-cover" />
      </motion.div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 pattern-dots pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
    </div>
  );
}
