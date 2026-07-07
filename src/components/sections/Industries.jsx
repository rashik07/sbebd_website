import { Factory, Briefcase, Pill, ShoppingCart, Cigarette, Package, Scissors, Box, Layers, Building } from 'lucide-react';

const Industries = () => {
  const industries = [
    { icon: <Building size={36} strokeWidth={1.5} />, name: "Cement" },
    { icon: <Scissors size={36} strokeWidth={1.5} />, name: "Textile" },
    { icon: <Pill size={36} strokeWidth={1.5} />, name: "Pharmaceutical" },
    { icon: <ShoppingCart size={36} strokeWidth={1.5} />, name: "FMCG" },
    { icon: <Cigarette size={36} strokeWidth={1.5} />, name: "Tobacco" },
    { icon: <Package size={36} strokeWidth={1.5} />, name: "Packaging" },
    { icon: <Briefcase size={36} strokeWidth={1.5} />, name: "Leather" },
    { icon: <Box size={36} strokeWidth={1.5} />, name: "Jute" },
    { icon: <Factory size={36} strokeWidth={1.5} />, name: "Manufacturing" },
    { icon: <Layers size={36} strokeWidth={1.5} />, name: "Commercial Infrastructure" }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Industries We Serve</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-12">
          {industries.map((industry, index) => (
            <div key={index} className="bg-white p-8 rounded-xl text-center shadow-sm transition-all duration-300 border border-gray-200 flex flex-col items-center justify-center hover:border-accent hover:-translate-y-1.5 hover:shadow-md group cursor-default">
              <div className="text-primary mb-4 transition-colors duration-200 group-hover:text-accent">
                {industry.icon}
              </div>
              <h3 className="text-base text-gray-800 font-semibold">{industry.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
