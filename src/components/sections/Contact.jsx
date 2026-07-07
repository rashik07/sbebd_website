import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Get in Touch</h2>
        <p className="text-center text-gray-500 -mt-8 mb-12 text-lg">Let's Build the Future Together</p>
        
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 mt-12">
          
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-5 p-6 bg-gray-50 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:bg-white hover:shadow-md hover:border-accent">
              <div className="text-accent bg-primary w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Bangladesh Office</h3>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed">House-17/H (2nd Floor), Road-3, Kallyanpur, Dhaka-1216, Bangladesh</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-gray-50 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:bg-white hover:shadow-md hover:border-accent">
              <div className="text-accent bg-primary w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Australia Office</h3>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed">11 Fred Pham Crescent, Doolandella, Queensland 4077, Australia</p>
              </div>
            </div>

            <div className="flex gap-5 p-6 bg-gray-50 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:bg-white hover:shadow-md hover:border-accent">
              <div className="text-accent bg-primary w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Email Us</h3>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-1"><a href="mailto:info@sbebd.com" className="hover:text-accent">info@sbebd.com</a></p>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed"><a href="mailto:shajaduldnj@gmail.com" className="hover:text-accent">shajaduldnj@gmail.com</a></p>
              </div>
            </div>
            
            <div className="flex gap-5 p-6 bg-gray-50 rounded-lg transition-all duration-300 border-l-4 border-transparent hover:bg-white hover:shadow-md hover:border-accent">
              <div className="text-accent bg-primary w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Call Us</h3>
                <p className="text-gray-400 italic text-[0.95rem] leading-relaxed">Contact numbers available upon request via email.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-10 rounded-xl shadow-xl border border-gray-100">
            <form className="w-full" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-3xl font-bold mb-8 text-primary relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-accent">Request a Quote</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block font-medium mb-2 text-primary text-[0.95rem]">Full Name *</label>
                  <input type="text" id="name" placeholder="John Doe" required className="w-full px-4 py-3 border border-gray-200 rounded-md font-sans text-base transition-all duration-200 bg-gray-50 focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10" />
                </div>
                <div>
                  <label htmlFor="company" className="block font-medium mb-2 text-primary text-[0.95rem]">Company Name</label>
                  <input type="text" id="company" placeholder="Your Company Ltd." className="w-full px-4 py-3 border border-gray-200 rounded-md font-sans text-base transition-all duration-200 bg-gray-50 focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="email" className="block font-medium mb-2 text-primary text-[0.95rem]">Email Address *</label>
                  <input type="email" id="email" placeholder="john@example.com" required className="w-full px-4 py-3 border border-gray-200 rounded-md font-sans text-base transition-all duration-200 bg-gray-50 focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10" />
                </div>
                <div>
                  <label htmlFor="phone" className="block font-medium mb-2 text-primary text-[0.95rem]">Phone Number *</label>
                  <input type="tel" id="phone" placeholder="+880 / +61..." required className="w-full px-4 py-3 border border-gray-200 rounded-md font-sans text-base transition-all duration-200 bg-gray-50 focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="service" className="block font-medium mb-2 text-primary text-[0.95rem]">Service Required *</label>
                <select id="service" required className="w-full px-4 py-3 border border-gray-200 rounded-md font-sans text-base transition-all duration-200 bg-gray-50 focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 appearance-none">
                  <option value="" disabled selected>Select a Service</option>
                  <option value="mechanical">Mechanical Engineering</option>
                  <option value="electrical">Electrical Engineering</option>
                  <option value="civil">Civil Construction</option>
                  <option value="telecom">Telecom Power Infrastructure</option>
                  <option value="maintenance">Industrial Maintenance</option>
                  <option value="project_management">Project Management</option>
                  <option value="other">Other / Turnkey Solution</option>
                </select>
              </div>

              <div className="mb-8">
                <label htmlFor="details" className="block font-medium mb-2 text-primary text-[0.95rem]">Project Details *</label>
                <textarea id="details" rows="5" placeholder="Tell us about your project requirements..." required className="w-full px-4 py-3 border border-gray-200 rounded-md font-sans text-base transition-all duration-200 bg-gray-50 focus:outline-none focus:border-accent focus:bg-white focus:ring-4 focus:ring-accent/10 resize-y"></textarea>
              </div>

              <button type="submit" className="btn btn-primary w-full py-4 text-lg gap-2">
                Send Message <Send size={20} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
