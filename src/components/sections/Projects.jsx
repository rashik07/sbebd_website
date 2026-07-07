import { ArrowUpRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sajol Ceramic Industries Ltd.",
      desc: "Complete Mechanical, Electrical & Civil Engineering Services.",
      image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=1964&auto=format&fit=crop"
    },
    {
      title: "Teletalk 3G Project",
      desc: "Substation Installation, Generator Systems, Rectifiers, Battery Banks, and Telecom Infrastructure.",
      image: "https://images.unsplash.com/photo-1544883626-646e7f2acbfa?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Mobiserve (Oras Invest)",
      desc: "Generator Servicing, Overhauling & Spare Parts Supply.",
      image: "https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?q=80&w=2066&auto=format&fit=crop"
    },
    {
      title: "Enovell Bangladesh",
      desc: "BTS Installation, MW Installation & Grounding Systems.",
      image: "https://images.unsplash.com/photo-1518349619113-03114f06ac3a?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="text-center text-gray-500 -mt-8 mb-12 text-lg">Showcasing our successful execution across various sectors</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/70 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a href="#contact" className="w-16 h-16 bg-accent text-primary rounded-full flex items-center justify-center scale-50 transition-transform duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:bg-white group-hover:scale-100">
                    <ArrowUpRight size={28} strokeWidth={2.5} />
                  </a>
                </div>
              </div>
              <div className="p-8 border border-t-0 border-gray-200 rounded-b-xl">
                <h3 className="text-xl font-bold mb-3 text-primary transition-colors group-hover:text-accent">{project.title}</h3>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
