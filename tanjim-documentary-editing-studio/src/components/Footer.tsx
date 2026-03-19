import { Link } from 'react-router-dom';
import { Film, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Film className="w-8 h-8 text-brand-red" />
              <span className="font-display font-bold text-xl tracking-tight">
                TANJIM<span className="text-brand-red">.</span>
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Professional video editing studio specializing in documentary-style storytelling, YouTube content, and brand narratives.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/portfolio" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Portfolio</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Services</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-red transition-colors text-sm">About Tanjim</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-red transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm">Documentary Editing</li>
              <li className="text-gray-400 text-sm">YouTube Video Editing</li>
              <li className="text-gray-400 text-sm">Corporate & Brand Videos</li>
              <li className="text-gray-400 text-sm">Social Media Edits</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-brand-red shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-brand-red shrink-0" />
                <span>hello@tanjimstudio.com</span>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                <span>Available Worldwide<br/>Remote Editing Studio</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Tanjim Documentary Editing Studio. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
