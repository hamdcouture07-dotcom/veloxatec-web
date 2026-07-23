import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-on-background dark:bg-surface-container-lowest border-t border-outline-variant/20 py-section-padding w-full py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="space-y-6">
          <Link to="/" className="font-headline-md text-headline-md font-bold text-surface-container-lowest dark:text-on-surface">
            Veloxatec LLP
          </Link>
          <p className="font-body-md text-outline-variant dark:text-outline text-sm leading-relaxed max-w-sm">
            A premier technology consultancy delivering digital transformation at the intersection of AI, Cloud, and human potential.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary transition-colors" href="#">
              <span className="material-symbols-outlined text-lg">terminal</span>
            </a>
          </div>
        </div>
        
        <div className="space-y-6">
          <h6 className="font-headline-md text-lg text-white dark:text-on-surface">Services</h6>
          <ul className="space-y-4 font-body-md text-outline-variant dark:text-outline">
            <li><Link className="hover:text-white dark:hover:text-primary transition-colors text-sm" to="/services">Cloud Computing</Link></li>
            <li><Link className="hover:text-white dark:hover:text-primary transition-colors text-sm" to="/services">AI & ML Solutions</Link></li>
            <li><Link className="hover:text-white dark:hover:text-primary transition-colors text-sm" to="/services">Talent Acquisition</Link></li>
            <li><Link className="hover:text-white dark:hover:text-primary transition-colors text-sm" to="/services">DevOps Strategy</Link></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h6 className="font-headline-md text-lg text-white dark:text-on-surface">Company</h6>
          <ul className="space-y-4 font-body-md text-outline-variant dark:text-outline">
            <li><Link className="hover:text-white dark:hover:text-primary transition-colors text-sm" to="/about">About Us</Link></li>
            <li><Link className="hover:text-white dark:hover:text-primary transition-colors text-sm" to="/services">Industries</Link></li>
            <li><Link className="hover:text-white dark:hover:text-primary transition-colors text-sm" to="/contact">Contact</Link></li>
            <li><a className="hover:text-white dark:hover:text-primary transition-colors text-sm" href="#">Careers</a></li>
          </ul>
        </div>
        
        <div className="space-y-6">
          <h6 className="font-headline-md text-lg text-white dark:text-on-surface">Newsletter</h6>
          <div className="flex gap-2">
            <input 
              className="bg-white/10 border-white/20 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-primary focus:outline-none text-white text-sm" 
              placeholder="Corporate email" 
              type="email" 
            />
            <button className="bg-primary text-on-primary p-2 rounded-lg flex items-center justify-center hover:bg-primary-container transition-colors">
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-caption text-caption text-outline-variant dark:text-outline">
          © {new Date().getFullYear()} Veloxatec LLP. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a className="text-outline-variant hover:text-surface-container-lowest text-xs transition-colors" href="#">Privacy Policy</a>
          <a className="text-outline-variant hover:text-surface-container-lowest text-xs transition-colors" href="#">Terms of Service</a>
          <a className="text-outline-variant hover:text-surface-container-lowest text-xs transition-colors" href="#">Cookie Policy</a>
          <a className="text-outline-variant hover:text-surface-container-lowest text-xs transition-colors" href="#">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}
