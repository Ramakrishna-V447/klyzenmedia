import { motion } from 'motion/react';
import { Monitor, Share2, Video, Search, Megaphone, PenTool, Lightbulb, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Services() {
  const services = [
    {
      icon: <Monitor size={32} />,
      title: "Website Design",
      desc: "Custom, high-converting websites that look stunning and perform flawlessly across all devices.",
      benefits: ["Mobile-responsive", "SEO-optimized structure", "Fast loading speeds"]
    },
    {
      icon: <Share2 size={32} />,
      title: "Social Media Marketing",
      desc: "Strategic content and community management to build brand loyalty and drive engagement.",
      benefits: ["Consistent posting", "Community engagement", "Growth strategies"]
    },
    {
      icon: <Video size={32} />,
      title: "Video Editing",
      desc: "Engaging reels, TikToks, and promotional videos designed to capture attention in the first 3 seconds.",
      benefits: ["Trend-focused editing", "High retention rates", "Platform-specific formats"]
    },
    {
      icon: <Search size={32} />,
      title: "SEO (Search Engine Optimization)",
      desc: "Data-driven strategies to rank higher on Google and drive organic, high-intent traffic to your site.",
      benefits: ["Keyword research", "On-page optimization", "Technical SEO"]
    },
    {
      icon: <Megaphone size={32} />,
      title: "Meta Ads & Google Ads",
      desc: "Highly targeted ad campaigns that maximize your ROI and turn clicks into loyal customers.",
      benefits: ["Precise targeting", "A/B testing", "Conversion tracking"]
    },
    {
      icon: <PenTool size={32} />,
      title: "Graphic Design",
      desc: "Premium visual assets that communicate your brand's value and stand out in crowded feeds.",
      benefits: ["Brand consistency", "Custom illustrations", "Ad creatives"]
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Creative Content Creation",
      desc: "Compelling copywriting and visual storytelling that resonates with your target audience.",
      benefits: ["Brand voice development", "Engaging copy", "Story-driven content"]
    }
  ];

  return (
    <section id="services" className="py-24 border-t border-white/20 glass-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600"
          >
            Comprehensive digital solutions designed to elevate your brand and drive measurable growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover="hover"
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, type: "spring", bounce: 0.2 }}
              className="glass-card p-8 rounded-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/15 hover:border-brand-primary/30 transition-all duration-300 group"
            >
              <motion.div 
                variants={{
                  hover: {
                    scale: [1, 1.15, 1.05],
                    y: [0, -5, 0],
                    transition: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }
                }}
                className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300"
              >
                {service.icon}
              </motion.div>
              <h3 className="text-2xl font-display font-bold mb-4 text-slate-900">{service.title}</h3>
              <p className="text-slate-600 mb-6 line-clamp-3">{service.desc}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, bIdx) => (
                  <li key={bIdx} className="flex items-center gap-2 text-sm text-slate-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/5 to-brand-secondary/5" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-6 text-slate-900">Not sure what you need?</h2>
            <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
              Let's hop on a call. We'll audit your current digital presence and recommend the exact services you need to hit your goals.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-primary text-white font-bold text-lg hover:bg-brand-secondary shadow-lg hover:shadow-brand-primary/20 hover:shadow-xl transition-all group"
            >
              Get a Free Strategy Call
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
