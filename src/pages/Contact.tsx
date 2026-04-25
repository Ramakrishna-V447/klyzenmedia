import { motion } from 'motion/react';
import { Phone, Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-slate-900">
              Let's Build Something <span className="text-gradient">Amazing</span>
            </h1>
            <p className="text-lg text-slate-600 mb-12 max-w-lg">
              Ready to turn your ideas into impact? Reach out to us today for a free consultation and let's discuss how we can grow your brand.
            </p>
            
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-6 glass-card p-6 rounded-2xl border border-slate-200 hover:border-brand-primary/30 transition-colors hover:shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Call Us Directly</div>
                  <a href="tel:+918106974731" className="text-xl font-semibold text-slate-900 hover:text-brand-primary transition-colors">
                    +91 8106974731
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center gap-6 glass-card p-6 rounded-2xl border border-slate-200 hover:border-brand-accent/30 transition-colors hover:shadow-lg hover:shadow-brand-accent/10 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <div className="text-sm text-slate-600 mb-1">Email Us</div>
                  <a href="mailto:hello@klyzenmedia.com" className="text-xl font-semibold text-slate-900 hover:text-brand-accent transition-colors">
                    hello@klyzenmedia.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.9, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="glass-card p-8 md:p-10 rounded-3xl border border-slate-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none" />
              
              <h3 className="text-2xl font-display font-bold mb-8 text-slate-900">Send us a message</h3>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">First Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white focus:shadow-md focus:-translate-y-0.5 hover:border-slate-300 shadow-sm backdrop-blur-sm transition-all duration-300"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white focus:shadow-md focus:-translate-y-0.5 hover:border-slate-300 shadow-sm backdrop-blur-sm transition-all duration-300"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white focus:shadow-md focus:-translate-y-0.5 hover:border-slate-300 shadow-sm backdrop-blur-sm transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Service Interested In</label>
                  <select className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white focus:shadow-md focus:-translate-y-0.5 hover:border-slate-300 shadow-sm backdrop-blur-sm transition-all duration-300 appearance-none">
                    <option value="">Select a service...</option>
                    <option value="smm">Social Media Marketing</option>
                    <option value="web">Website Development</option>
                    <option value="video">Video Editing</option>
                    <option value="ads">Meta & Google Ads</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/60 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-brand-primary focus:bg-white focus:shadow-md focus:-translate-y-0.5 hover:border-slate-300 shadow-sm backdrop-blur-sm transition-all duration-300 resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-primary text-white font-bold text-lg hover:bg-brand-secondary shadow-lg hover:shadow-brand-primary/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                >
                  Get a Free Consultation
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
