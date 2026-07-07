import { Wrench, Zap, Building2, Radio, CheckCircle2, LayoutDashboard } from 'lucide-react';

const About = () => {
  const specialties = [
    { icon: <Wrench />, name: "Mechanical Engineering" },
    { icon: <Zap />, name: "Electrical Engineering" },
    { icon: <Building2 />, name: "Civil Construction" },
    { icon: <Radio />, name: "Telecom Infrastructure" },
    { icon: <CheckCircle2 />, name: "Industrial Maintenance" },
    { icon: <LayoutDashboard />, name: "Project Management" },
  ];

  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="relative p-4">
            <div className="rounded-xl shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2070&auto=format&fit=crop" 
                alt="Engineering Team" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 md:right-4 md:-bottom-4 bg-accent text-primary p-6 rounded-xl shadow-lg flex items-center gap-4 border-4 border-white">
              <span className="text-4xl font-extrabold leading-none">10+</span>
              <span className="font-semibold leading-tight text-sm">Years of<br/>Excellence</span>
            </div>
          </div>
          
          <div className="py-8 px-4 md:px-0">
            <h2 className="section-title text-left">About S. Brothers Engineering</h2>
            <p className="text-xl font-semibold text-primary mb-4">
              Your Trusted Partner for Complete Engineering & Industrial Solutions.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              We are a leading engineering service provider in Bangladesh and Australia, delivering top-tier solutions with a strong commitment to quality, safety, and innovation. Our highly skilled team consists of experienced engineers, technicians, project managers, logistics teams, and quality assurance professionals dedicated to executing projects reliably and efficiently nationwide.
            </p>
            
            <h3 className="text-xl font-bold text-primary mb-6">Our Core Specialties:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {specialties.map((item, index) => (
                <div key={index} className="flex items-center gap-3 font-medium text-primary">
                  <div className="text-accent flex items-center justify-center w-10 h-10 bg-accent/10 rounded-md shrink-0">
                    {item.icon}
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
            
            <a href="#services" className="btn btn-primary mt-4">Discover Our Services</a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
