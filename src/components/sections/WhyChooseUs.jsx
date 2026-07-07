import { Users, Cpu, Clock, ShieldCheck, TrendingDown, Headphones, Award, Globe } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    { icon: <Users size={32} />, title: "Expert Engineering Team", desc: "Highly qualified professionals ensuring flawless execution." },
    { icon: <Cpu size={32} />, title: "Advanced Technology & Tools", desc: "Leveraging state-of-the-art equipment for modern solutions." },
    { icon: <Clock size={32} />, title: "Fast Project Delivery", desc: "Strict adherence to timelines without compromising quality." },
    { icon: <ShieldCheck size={32} />, title: "Flexible Solutions", desc: "Customized engineering approaches tailored to your needs." },
    { icon: <TrendingDown size={32} />, title: "Competitive Pricing", desc: "Cost-effective services maximizing your ROI." },
    { icon: <Headphones size={32} />, title: "Dedicated Support", desc: "24/7 client support and post-project maintenance." },
    { icon: <Award size={32} />, title: "Quality Assurance", desc: "Zero error service policy with strict quality controls." },
    { icon: <Globe size={32} />, title: "Nationwide Reach", desc: "Extensive logistics serving across Bangladesh and Australia." }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <h2 className="section-title">Why Choose Us</h2>
        <p className="text-center text-gray-500 -mt-8 mb-12 text-lg">Delivering excellence through commitment and expertise</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white p-10 rounded-lg text-center shadow-sm transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:shadow-xl hover:border-accent group">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-primary-light text-accent rounded-full transition-all duration-300 group-hover:bg-accent group-hover:text-primary group-hover:scale-110">
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary">{reason.title}</h3>
              <p className="text-gray-600 text-[0.95rem] leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
