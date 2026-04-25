import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// The chunk we need to replace is from lines 43 to 149
const startMarker = `          />\n          \n          {/* Animated Freelancing/Productivity Images */}`;
const endMarker = `        </div>\n      </section>`;

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex) + endMarker.length;

if (startIndex === -1 || endIndex < startIndex) {
  console.log("Could not find markers.", { startIndex, endIndex });
  process.exit(1);
}

const replacement = `          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center mt-12 sm:mt-24 lg:mt-32 pb-20 lg:pb-32">
            
            {/* Left Column: Text */}
            <div className="text-left w-full">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-card mb-8 relative border border-indigo-100"
              >
                <span className="w-2 h-2 rounded-2xl bg-brand-accent animate-pulse" />
                <span className="text-sm font-medium text-slate-800">Turning Ideas into Impact 🚀</span>
              </motion.div>
              
              <div className="relative inline-block w-full">
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[120%] h-[120%] bg-brand-primary/20 blur-[100px] rounded-2xl mix-blend-screen pointer-events-none -z-10" />
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6 leading-tight text-slate-800 text-left"
                >
                  Grow Your Brand With ✨<br className="hidden md:block" />
                  <span className="text-gradient drop- relative inline-block text-left">
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
                className="text-base sm:text-lg md:text-xl text-slate-800 mb-12 max-w-2xl leading-relaxed border-l-2 border-brand-primary/50 pl-6 text-left"
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
                  className="w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  Get a Free Consultation 💬
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-2xl glass-card text-slate-800 font-semibold text-lg hover:bg-white hover:border-indigo-100 border transition-all text-center group whitespace-nowrap"
                >
                  Explore Services 🚀
                </Link>
              </motion.div>
            </div>

            {/* Right Column: Gathered Images */}
            <div className="hidden lg:block relative w-full h-[550px]">
              <motion.div
                className="absolute top-[5%] left-0 w-[55%] h-[220px] rounded-3xl overflow-hidden shadow-xl border border-white/20 glass-card z-20"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay z-10" />
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=500&q=80" alt="Web Development" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                className="absolute top-[8%] right-0 w-[50%] h-[260px] rounded-3xl overflow-hidden shadow-xl border border-white/20 glass-card z-10"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="absolute inset-0 bg-brand-secondary/10 mix-blend-overlay z-10" />
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=500&q=80" alt="Team Strategy" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                className="absolute bottom-[5%] left-[5%] w-[45%] h-[240px] rounded-3xl overflow-hidden shadow-xl border border-white/20 glass-card z-30"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              >
                <div className="absolute inset-0 bg-brand-accent/10 mix-blend-overlay z-10" />
                <img src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=500&q=80" alt="Content Creation" className="w-full h-full object-cover" />
              </motion.div>

              <motion.div
                className="absolute bottom-[10%] right-[5%] w-[55%] h-[200px] rounded-3xl overflow-hidden shadow-xl border border-white/20 glass-card z-20"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="absolute inset-0 bg-brand-highlight/10 mix-blend-overlay z-10" />
                <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&w=500&q=80" alt="Design UI" className="w-full h-full object-cover" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>`;

const newContent = content.substring(0, startIndex) + replacement + content.substring(endIndex);
fs.writeFileSync('src/pages/Home.tsx', newContent, 'utf-8');
console.log('Hero section restructured!');
