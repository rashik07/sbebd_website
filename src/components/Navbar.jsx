import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
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
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Services', href: '/#services' },
    { name: 'Products', href: '/products' },
    // { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary/95 backdrop-blur-md py-4 shadow-md' : 'bg-transparent py-6'}`}>
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 text-white">
          <span className="text-2xl font-extrabold bg-accent text-primary w-12 h-12 flex items-center justify-center rounded-lg">SBE</span>
          <div className="flex flex-col">
            <strong className="text-xl leading-tight tracking-tight">S. Brothers Engineering</strong>
            <span className="text-xs text-accent uppercase tracking-widest">Industrial Solutions</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.href} className={`font-medium text-[0.95rem] relative text-white group ${!isScrolled ? 'drop-shadow-md' : ''}`}>
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/#contact" className="btn btn-primary gap-2 py-2.5 px-5">Get a Quote <ChevronRight size={16} /></Link>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="block lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div className={`fixed top-0 left-0 w-full h-screen bg-primary px-6 pt-24 pb-8 transform transition-transform duration-300 z-40 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link 
                to={link.href} 
                className="text-white text-xl font-medium block"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/#contact" className="btn btn-primary w-full mt-4" onClick={() => setMobileMenuOpen(false)}>
              Get a Quote
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
