import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    document.body.style.overflow = 'auto';
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = !mobileMenuOpen ? 'hidden' : 'auto';
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`sticky top-0 w-full z-50 bg-glass-bg dark:bg-surface-container-low/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300 ease-in-out ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link to="/" className="font-headline-md text-headline-md font-bold text-primary dark:text-primary-fixed">
          Veloxatec LLP
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`font-body-md text-body-md transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary dark:text-primary-fixed font-bold border-b-2 border-primary dark:border-primary-fixed pb-1' 
                  : 'text-on-surface-variant dark:text-on-surface hover:text-primary dark:hover:text-primary-fixed'
              }`}
            >
              {link.name}
            </Link>
          ))}
          {location.pathname !== '/contact' && (
            <Link to="/contact" className="bg-primary text-on-primary px-6 py-2 rounded-xl font-label-md text-label-md hover:bg-primary-container transition-all shadow-md active:scale-95 ml-2">
              Get Quote
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleMobileMenu} className="text-primary p-2 flex items-center justify-center">
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-outline-variant/30 transition-all duration-300 ease-in-out origin-top ${mobileMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`py-3 px-4 rounded-lg transition-colors font-body-md ${
                location.pathname === link.path
                  ? 'text-primary font-bold bg-surface-container-high/50'
                  : 'text-on-surface-variant hover:bg-surface-container-high/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="block bg-primary text-on-primary px-6 py-3 rounded-xl font-label-md text-center mt-2 mx-4">
            Get Quote
          </Link>
        </div>
      </div>
    </nav>
  );
}
