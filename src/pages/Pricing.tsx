import { motion } from 'motion/react';
import { Check, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export function Pricing() {
  const plans = [
    {
      name: "meta and & adds",
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
      name: "social media marketing",
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
      name: "website devolopment",
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
      name: "videos and reels editing",
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
    { name: "Website Design", price: "₹10,000 – ₹25,000" },
    { name: "Logo & Branding", price: "₹3,000 – ₹8,000" },
    { name: "Extra Videos", price: "₹500 – ₹1,500" }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold mb-6"
          >
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Invest in your brand's growth with our tailored packages. No hidden fees. Cancel anytime.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-6 mt-8 text-sm font-medium text-slate-300"
          >
            <div className="flex items-center gap-2"><ShieldCheck className="text-brand-cyan" size={18} /> No hidden fees</div>
            <div className="flex items-center gap-2"><ShieldCheck className="text-brand-cyan" size={18} /> Cancel anytime</div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative glass-card rounded-3xl p-8 flex flex-col hover:scale-105 transition-transform duration-300",
                plan.popular ? "border-brand-cyan/50 shadow-[0_0_30px_rgba(34,211,238,0.15)]" : "border-white/10"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan text-white text-xs font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-display font-bold text-white mb-4 capitalize">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="text-slate-400">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3 text-sm text-slate-300">
                    <Check className="text-brand-cyan shrink-0 mt-0.5" size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link
                to="/contact"
                className={cn(
                  "w-full py-3 rounded-xl font-semibold text-center transition-all",
                  plan.popular 
                    ? "bg-gradient-to-r from-brand-purple to-brand-cyan text-white hover:shadow-[0_0_20px_rgba(34,211,238,0.4)]" 
                    : "bg-white/10 text-white hover:bg-white/20"
                )}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto glass-card rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">Available Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-white/5 border border-white/5">
                <div className="font-semibold text-white mb-2">{addon.name}</div>
                <div className="text-brand-cyan font-medium">{addon.price}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
