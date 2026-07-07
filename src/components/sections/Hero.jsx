import { ArrowRight, PhoneCall, CheckCircle } from 'lucide-react';

const Hero = () => {
  const highlights = [
    "10+ Years Industry Experience",
    "Nationwide Service Coverage",
    "Skilled Engineering Team",
    "Industrial & Infrastructure Projects"
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 text-white bg-[url('https://images.unsplash.com/photo-1716191299980-a6e8827ba10b?q=80&w=1525&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center bg-fixed">
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/70 to-primary-light/40 z-0"></div>
      
      <div className="container relative z-10">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-block bg-accent/20 text-accent px-4 py-2 rounded-full font-semibold text-sm mb-6 border border-accent/30">
            Welcome to S. Brothers Engineering
          </div>
          <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
            Complete <span className="text-accent">Engineering & Industrial</span> Solutions Under One Roof
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
            S. Brothers Engineering delivers Mechanical, Electrical, Civil, Telecom Power Infrastructure, Industrial Maintenance, Project Management, and Turnkey Engineering Solutions across Bangladesh and Australia.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-14">
            <a href="#contact" className="btn btn-primary text-lg px-8 py-4 gap-3 rounded-md">
              Request a Quote <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-outline text-lg px-8 py-4 gap-3 rounded-md">
              <PhoneCall size={20} /> Contact Us
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8 border-t border-white/20">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-center gap-3 font-medium">
                <CheckCircle size={18} className="text-accent shrink-0" />
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
