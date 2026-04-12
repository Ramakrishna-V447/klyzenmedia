import { motion } from 'motion/react';
import { Phone, Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="text-lg text-slate-400 mb-12 max-w-lg">
              Ready to turn your ideas into impact? Reach out to us today for a free consultation and let's discuss how we can grow your brand.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl border border-white/10 hover:border-brand-cyan/30 transition-colors">
                <div className="w-14 h-14 rounded-full bg-brand-cyan/10 flex items-center justify-center text-brand-cyan shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Call Us Directly</div>
                  <a href="tel:+918106974731" className="text-xl font-semibold text-white hover:text-brand-cyan transition-colors">
                    +91 8106974731
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-6 glass-card p-6 rounded-2xl border border-white/10">
                <div className="w-14 h-14 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-400 mb-1">Email Us</div>
                  <a href="mailto:hello@klyzenmedia.com" className="text-xl font-semibold text-white hover:text-brand-purple transition-colors">
                    hello@klyzenmedia.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cyan/10 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-display font-bold mb-8">Send us a message</h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Service Interested In</label>
                  <select className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all appearance-none">
                    <option value="">Select a service...</option>
                    <option value="smm">Social Media Marketing</option>
                    <option value="web">Website Development</option>
                    <option value="video">Video Editing</option>
                    <option value="ads">Meta & Google Ads</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:ring-1 focus:ring-brand-cyan transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-all flex items-center justify-center gap-2"
                >
                  Get a Free Consultation
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
