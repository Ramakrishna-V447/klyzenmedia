import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Zap, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Services } from './Services';
import { Pricing } from './Pricing';

export function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              <span className="text-sm font-medium text-slate-700">Turning Ideas into Impact</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6 leading-tight text-slate-900"
            >
              Grow Your Brand With <br className="hidden md:block" />
              <span className="text-gradient">Purpose & Performance</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
            >
              We specialize in creating powerful digital experiences through website design, social media marketing, video editing, SEO, and creative content.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-primary text-white font-semibold text-lg hover:bg-brand-secondary hover:shadow-lg hover:shadow-brand-primary/20 transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Get a Free Consultation
                <ArrowRight size={20} />
              </Link>
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-slate-900 font-semibold text-lg hover:bg-slate-50 transition-all text-center"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">
                We Turn Ideas Into <span className="text-gradient">Impact</span>
              </h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                At Klyzen Media, our goal is simple — to help your brand stand out, connect with the right audience, and grow online with purpose.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Every strategy we craft is focused on performance and brand growth, not just trends. We don't just create content; we build digital ecosystems that convert.
              </p>
              
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="Client" className="w-12 h-12 rounded-full border-2 border-white" />
                  ))}
                </div>
                <div className="text-sm text-slate-600">
                  <strong className="text-slate-900 text-lg block">50+</strong>
                  Happy Clients
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/10 to-brand-secondary/10 rounded-3xl blur-2xl" />
              <div className="glass-card p-8 rounded-3xl relative">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Team collaboration" 
                  className="rounded-2xl w-full h-auto object-cover"
                />
                
                <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border border-slate-200 shadow-xl shadow-brand-primary/5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary">
                      <TrendingUp size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-slate-900">200%</div>
                      <div className="text-sm text-slate-600">Average ROI</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">Why Choose <span className="text-gradient">Klyzen Media</span></h2>
            <p className="text-slate-600 text-lg">We don't just deliver services; we deliver results. Here's why brands trust us with their digital growth.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="text-brand-primary" size={32} />,
                title: "Performance Focused",
                desc: "Every strategy is built around your bottom line. We focus on metrics that matter: leads, sales, and growth."
              },
              {
                icon: <Zap className="text-brand-accent" size={32} />,
                title: "Creative Excellence",
                desc: "Stand out in a crowded feed with premium design, engaging video editing, and compelling copy."
              },
              {
                icon: <CheckCircle2 className="text-brand-highlight" size={32} />,
                title: "All-in-One Solution",
                desc: "From website design to Meta ads, get a cohesive digital strategy managed by one dedicated team."
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Services />
      <Pricing />

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-primary/5" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-slate-900">Ready to Scale Your Brand?</h2>
          <p className="text-xl text-slate-600 mb-10">Stop blending in. Let's create a digital presence that demands attention and drives revenue.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-primary text-white font-bold text-lg hover:bg-brand-secondary hover:shadow-lg hover:shadow-brand-primary/20 transition-all hover:-translate-y-1"
          >
            Get Your Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
