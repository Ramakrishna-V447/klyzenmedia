import { motion } from 'motion/react';
import { Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Pricing() {
  const plans = [
    {
      name: "meta and & adds 📈",
      price: "₹7,999",
      period: "/month",
      features: [
        "Social Media Management (2 platforms)",
        "8 Posts/month",
        "2 Reels",
        "Basic SEO",
        "Monthly Report",
        "WhatsApp/Email Support"
      ],
      popular: false
    },
    {
      name: "social media marketing 📱",
      price: "₹14,999",
      period: "/month",
      features: [
        "Social Media (3 platforms)",
        "15 Posts + 4 Reels",
        "Advanced SEO",
        "1 Ad Campaign",
        "Website Maintenance",
        "Graphic Design Support",
        "Strategy Calls"
      ],
      popular: true
    },
    {
      name: "website devolopment 💻",
      price: "₹29,999",
      period: "/month",
      features: [
        "Full Social Media Management",
        "25+ Posts + 8 Reels",
        "Complete SEO",
        "Multiple Ads Campaigns",
        "Website / Landing Pages",
        "Advanced Video Editing",
        "Dedicated Manager"
      ],
      popular: false
    },
    {
      name: "videos and reels editing 🎬",
      price: "₹1500",
      period: "/month",
      features: [
        "upto 4 ad campaigns",
        "30 days management",
        "strategy recommendations",
        "content creation",
        "monthly analysis report"
      ],
      popular: false
    }
  ];

  const addons = [
    { name: "Website Design 🎨", price: "₹10,000 – ₹25,000" },
    { name: "Logo & Branding ✨", price: "₹3,000 – ₹8,000" },
    { name: "Extra Videos 🎥", price: "₹500 – ₹1,500" }
  ];

  return (
    <div className="pt-20">
      <section id="pricing" className="py-16 md:py-24 border-y border-white/20 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-display font-bold mb-6 text-inherit"
          >
            Simple, Transparent <span className="text-gradient">Pricing</span> 💎
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-inherit"
          >
            Invest in your brand's growth with our tailored packages. No hidden fees. Cancel anytime 🤝.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 mt-8 text-sm font-medium text-inherit"
          >
            <div className="flex items-center gap-2"><ShieldCheck className="text-brand-primary" size={18} /> No hidden fees</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-brand-primary" size={18} /> Cancel anytime</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-24">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.15, type: "spring", bounce: 0.3 }}
              className={cn(
                "relative glass-card rounded-2xl p-8 flex flex-col hover:-translate-y-2 transition-all duration-300",
                plan.popular ? "border border-black/10 border-2  " : "border border-black/10 "
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-primary delay-100 text-white text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-inherit mb-4 capitalize">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-inherit">{plan.price}</span>
                  <span className="text-inherit">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-inherit">
                    <Check className="text-brand-primary shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={cn(
                  "w-full py-3 rounded-2xl font-bold text-center transition-all block group",
                  plan.popular 
                    ? "bg-brand-primary text-black font-bold border border-black/10 hover:bg-brand-primary/90 hover:shadow-brand-primary/25 hover:-translate-y-1 flex justify-center items-center h-12 brutalist-shadow transition-all" 
                    : "glass-card text-inherit border border-black/10 hover:bg-[#2563EB] hover:text-white hover:border-black/10 border"
                )}
              >
                Get Started 🚀
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card rounded-2xl p-8 md:p-12 border border-black/10"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8 text-inherit">Available Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl glass-card border border-black/10 hover:border-brand-primary/50 transition-colors">
                <div className="font-semibold text-inherit mb-2">{addon.name}</div>
                <div className="text-brand-primary font-medium">{addon.price}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      </section>
    </div>
  );
}
