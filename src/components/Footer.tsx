import { Link } from 'react-router-dom';
import { logoBase64 } from '../assets/logo-b64';

export function Footer() {
  return (
    <footer className="border-t border-white/20 glass-card pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
             <img src={logoBase64} alt="Klyzen Media Logo" className="h-12 w-auto object-contain" />
              <span className="font-display font-bold text-2xl tracking-tight text-slate-800">
                Klyzen
              </span>
            </Link>
            <p className="text-slate-800 max-w-sm mb-6">
              Turning Ideas into Impact. We help your brand stand out, connect with the right audience, and grow online with purpose.
            </p>
            <div className="flex items-center gap-4">
              <a href="tel:+918106974731" className="text-slate-800 hover:text-brand-primary transition-colors font-medium">
                +91 8106974731
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-4 text-lg text-slate-800">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-800 hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-slate-800 hover:text-brand-primary transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-slate-800 hover:text-brand-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="text-slate-800 hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display font-semibold mb-4 text-lg text-slate-800">Services</h3>
            <ul className="space-y-3">
              <li className="text-slate-800">Website Design</li>
              <li className="text-slate-800">Social Media Marketing</li>
              <li className="text-slate-800">Video Editing</li>
              <li className="text-slate-800">SEO & Ads</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-indigo-100 border text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-800 text-sm">
            © {new Date().getFullYear()} Klyzen Media. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-slate-800">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
