import { Settings, Zap, Home, Wifi } from 'lucide-react';

const Services = () => {
  const serviceCategories = [
    {
      icon: <Settings size={40} />,
      title: "Mechanical Engineering Services",
      image: "https://images.unsplash.com/photo-1711199694531-e982a79ea381?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        "Air Compressor Installation & Maintenance",
        "Generator Supply, Installation & Service",
        "Boiler Installation & Maintenance",
        "Industrial Machinery Installation",
        "Fabrication & Structural Works",
        "Preventive & Breakdown Maintenance"
      ]
    },
    {
      icon: <Zap size={40} />,
      title: "Electrical Engineering Services",
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
      items: [
        "Substation Installation (11KV/33KV)",
        "Solar Power Solutions",
        "LT Panel, MDB & SDB Installation",
        "Industrial Electrical Systems",
        "Cable Laying & Power Distribution",
        "Electrical Maintenance & Troubleshooting"
      ]
    },
    {
      icon: <Home size={40} />,
      title: "Civil Engineering Services",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        "Residential Construction",
        "Commercial Construction",
        "Industrial Infrastructure Development",
        "Structural Renovation",
        "Roads & Drainage Systems",
        "RCC & Foundation Works"
      ]
    },
    {
      icon: <Wifi size={40} />,
      title: "Telecom Power Infrastructure",
      image: "https://images.unsplash.com/photo-1646516447226-e2eb0e6e3f36?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      items: [
        "BTS Installation & SWAP",
        "MSC, BSC & Transmission Equipment",
        "Rectifier & Inverter Installation",
        "Battery Bank Systems",
        "Generator Installation",
        "AC/DC Power Solutions & Grounding"
      ]
    }
  ];

  return (
    <section id="services" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="text-center text-gray-500 -mt-8 mb-12 text-lg">Comprehensive engineering solutions tailored to your industry</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md transition-all duration-300 border border-gray-200 hover:-translate-y-2 hover:shadow-xl hover:border-accent group">
              <div className="relative h-60 overflow-hidden">
                <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute -bottom-6 right-6 w-16 h-16 bg-accent text-primary flex items-center justify-center rounded-full shadow-md z-10 border-4 border-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-primary group-hover:text-accent group-hover:border-accent">
                  {category.icon}
                </div>
              </div>
              <div className="p-10 pt-10 pb-8">
                <h3 className="text-[1.35rem] font-bold mb-5 text-primary group-hover:text-accent transition-colors">{category.title}</h3>
                <ul className="flex flex-col gap-3">
                  {category.items.map((item, i) => (
                    <li key={i} className="relative pl-6 text-gray-600 text-[0.95rem]">
                      <span className="absolute left-0 text-accent font-bold">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-primary to-primary-light rounded-xl p-12 text-center text-white shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-accent text-3xl font-bold mb-4">Complete Project Solutions</h3>
            <p className="text-gray-200 mb-8 text-xl">We offer end-to-end turnkey solutions for your projects:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <span className="bg-white/10 p-4 rounded-lg font-medium border border-white/20 transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent shadow-sm">Design & Engineering</span>
              <span className="bg-white/10 p-4 rounded-lg font-medium border border-white/20 transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent shadow-sm">Supply & Procurement</span>
              <span className="bg-white/10 p-4 rounded-lg font-medium border border-white/20 transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent shadow-sm">Installation & Commissioning</span>
              <span className="bg-white/10 p-4 rounded-lg font-medium border border-white/20 transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent shadow-sm">Project Management</span>
              <span className="bg-white/10 p-4 rounded-lg font-medium border border-white/20 transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent shadow-sm">Quality Control</span>
              <span className="bg-white/10 p-4 rounded-lg font-medium border border-white/20 transition-all duration-200 hover:bg-accent hover:text-primary hover:border-accent shadow-sm">Turnkey Execution</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
