import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-purple to-brand-cyan flex items-center justify-center">
                <span className="text-white font-display font-bold text-xl">K</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Klyzen<span className="text-brand-cyan">Media</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm mb-6">
              Turning Ideas into Impact. We help your brand stand out, connect with the right audience, and grow online with purpose.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:+918106974731" className="text-brand-cyan hover:text-white transition-colors font-medium">
                +91 8106974731
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-brand-cyan transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-cyan transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-slate-400 hover:text-brand-cyan transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-brand-cyan transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-4 text-lg">Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-400">Website Design</li>
              <li className="text-slate-400">Social Media Marketing</li>
              <li className="text-slate-400">Video Editing</li>
              <li className="text-slate-400">SEO & Ads</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Klyzen Media. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-500">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
