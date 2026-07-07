import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-extrabold bg-accent text-primary w-12 h-12 flex items-center justify-center rounded-lg">SBE</span>
            <div className="flex flex-col">
              <strong className="text-xl leading-tight">S. Brothers Engineering</strong>
            </div>
          </div>
          <p className="text-gray-400 text-[0.95rem] leading-relaxed">
            Leading engineering solutions provider in Mechanical, Electrical, Civil, Telecom Power Infrastructure, and Industrial Maintenance across Bangladesh and Australia.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all duration-200 hover:bg-accent hover:text-primary hover:-translate-y-1"><span>FB</span></a>
            <a href="#" aria-label="LinkedIn" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all duration-200 hover:bg-accent hover:text-primary hover:-translate-y-1"><span>IN</span></a>
            <a href="#" aria-label="Twitter" className="flex items-center justify-center w-10 h-10 bg-white/10 rounded-full text-white transition-all duration-200 hover:bg-accent hover:text-primary hover:-translate-y-1"><span>X</span></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xl text-white relative pb-2 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">Quick Links</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#home" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Home</a></li>
            <li><a href="#about" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">About Us</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Our Services</a></li>
            <li><a href="#projects" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Featured Projects</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xl text-white relative pb-2 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">Our Services</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#services" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Mechanical Engineering</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Electrical Engineering</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Civil Construction</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Telecom Infrastructure</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Project Management</a></li>
            <li><a href="#services" className="text-gray-400 hover:text-accent hover:translate-x-1 inline-flex transition-all duration-200">Industrial Maintenance</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <h4 className="text-xl text-white relative pb-2 inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-accent">Contact Us</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex gap-4 text-gray-400 text-[0.95rem]">
              <MapPin size={20} className="text-accent shrink-0 mt-1" />
              <div>
                <strong className="text-white">Bangladesh Office:</strong><br />
                House-17/H (2nd Floor), Road-3, Kallyanpur, Dhaka-1216
              </div>
            </li>
            <li className="flex gap-4 text-gray-400 text-[0.95rem]">
              <MapPin size={20} className="text-accent shrink-0 mt-1" />
              <div>
                <strong className="text-white">Australia Office:</strong><br />
                11 Fred Pham Crescent, Doolandella, QLD 4077
              </div>
            </li>
            <li className="flex gap-4 text-gray-400 text-[0.95rem]">
              <Mail size={20} className="text-accent shrink-0 mt-1" />
              <div className="flex flex-col gap-1">
                <a href="mailto:info@sbebd.com" className="hover:text-accent transition-colors">info@sbebd.com</a>
                <a href="mailto:shajaduldnj@gmail.com" className="hover:text-accent transition-colors">shajaduldnj@gmail.com</a>
              </div>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="mt-16 py-6 border-t border-white/10 text-center text-gray-400 text-sm">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} S. Brothers Engineering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
