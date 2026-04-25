import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Services } from './Services';
import { Pricing } from './Pricing';
import { Contact } from './Contact';
import { FAQ } from '../components/FAQ';

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects removed */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-12 sm:mt-24 lg:mt-32 pb-20 lg:pb-32">
            
            {/* Left Column: Text */}
            <div className="text-left w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-2xl glass-card mb-8 relative border border-black/10"
              >
                <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
                <span className="text-xs sm:text-sm font-medium text-inherit whitespace-nowrap">Turning Ideas into Impact 🚀</span>
              </motion.div>
              
              <div className="relative inline-block w-full">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight mb-6 leading-tight text-inherit text-left"
                >
                  <span className="whitespace-nowrap">Grow Your Brand With ✨</span><br />
                  <span className="text-gradient drop- relative inline-block text-left mt-2">
                    Purpose & Performance
                    <motion.span 
                      className="absolute -top-4 -right-4 md:-right-8 text-brand-accent text-3xl md:text-4xl"
                      animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      ✧
                    </motion.span>
                  </span>
                </motion.h1>
              </div>
              
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                className="text-base sm:text-lg md:text-xl text-inherit mb-12 max-w-2xl leading-relaxed border-l-2 border-brand-primary/50 pl-6 text-left"
              >
                We specialize in creating powerful digital experiences through website design 💻, social media marketing 📱, video editing 🎬, SEO 🔍, and creative content 🎨.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
                className="flex flex-row flex-wrap items-center justify-start gap-4"
              >
                <Link
                  to="/contact"
                  className="w-auto px-6 py-3 sm:px-8 sm:py-4 bg-brand-primary text-black font-bold shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  Get a Free Consultation 💬
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-2xl glass-card text-inherit font-semibold text-lg hover:bg-gray-50 hover:border-black/10 border transition-all text-center group whitespace-nowrap"
                >
                  Explore Services 🚀
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Stacked Card Images */}
            <div className="hidden lg:block relative w-full h-[600px] ml-4 lg:translate-x-12 xl:translate-x-20">
              <motion.div
                className="absolute right-[45%] top-8 w-60 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 glass-card z-0"
                animate={{ y: [0, -5, 0], rotate: [-6, -4, -6] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay z-10" />
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80" alt="Web Development" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                className="absolute right-[30%] top-24 w-60 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 glass-card z-10"
                animate={{ y: [0, 8, 0], rotate: [2, 4, 2] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="absolute inset-0 bg-brand-secondary/10 mix-blend-overlay z-10" />
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80" alt="Team Strategy" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                className="absolute right-[15%] top-16 w-60 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 glass-card z-20"
                animate={{ y: [0, -8, 0], rotate: [8, 10, 8] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay z-10" />
                <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=500&q=80" alt="Content Creation" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                className="absolute right-0 top-36 w-60 h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10 glass-card z-30"
                animate={{ y: [0, 5, 0], rotate: [-4, -2, -4] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-brand-highlight/10 mix-blend-overlay z-10" />
                <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=500&q=80" alt="Design UI" className="w-full h-full object-cover" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-inherit">
                We Turn Ideas Into <span className="text-gradient">Impact</span> 💥
              </h2>
              <p className="text-inherit text-lg mb-6 leading-relaxed">
                At Klyzen Media, our goal is simple — to help your brand stand out ⭐, connect with the right audience 🎯, and grow online with purpose 🌱.
              </p>
              <p className="text-inherit text-lg mb-8 leading-relaxed">
                Every strategy we craft is focused on performance and brand growth, not just trends 📈. We don't just create content; we build digital ecosystems that convert 💰.
              </p>
              
              <motion.div 
                className="flex items-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i, idx) => (
                    <motion.img 
                      key={i} 
                      src={`https://i.pravatar.cc/100?img=${i}`} 
                      alt="Client" 
                      className="w-12 h-12 rounded-2xl border-2 border-white"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + (idx * 0.1), type: "spring" }}
                    />
                  ))}
                </div>
                <div className="text-sm text-inherit">
                  <strong className="text-inherit text-lg block">50+</strong>
                  Happy Clients 😍
                </div>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50, scale: 0.9, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/10 rounded-2xl blur-2xl" />
              <div className="glass-card p-8 rounded-2xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Team collaboration" 
                  className="rounded-2xl w-full h-auto object-cover"
                />
                
                <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border border-black/10  ">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-inherit">200%</div>
                      <div className="text-sm text-inherit">Average ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 border-y border-black/10 border glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-inherit">Why Choose <span className="text-gradient">Klyzen Media</span> 👑</h2>
            <p className="text-inherit text-lg">We don't just deliver services; we deliver results. Here's why brands trust us with their digital growth 🚀.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-brand-primary" size={32} />,
                title: "Performance Focused 🎯",
                desc: "Every strategy is built around your bottom line. We focus on metrics that matter: leads, sales, and growth."
              },
              {
                icon: <Zap className="text-brand-accent" size={32} />,
                title: "Creative Excellence 🎨",
                desc: "Stand out in a crowded feed with premium design, engaging video editing, and compelling copy."
              },
              {
                icon: <CheckCircle2 className="text-brand-highlight" size={32} />,
                title: "All-in-One Solution 🌟",
                desc: "From website design to Meta ads, get a cohesive digital strategy managed by one dedicated team."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 20 }}
                whileInView={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, type: "spring", bounce: 0.2 }}
                className="glass-card p-8 rounded-2xl hover:-translate-y-2  transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center mb-6   border border-black/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-inherit">{feature.title}</h3>
                <p className="text-inherit leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <FAQ />
      <Pricing />
      <Contact />
    </div>
  );
}
