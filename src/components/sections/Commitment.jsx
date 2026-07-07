import { HeartHandshake, ShieldAlert, Timer, CircleDollarSign, HardHat, Handshake } from 'lucide-react';

const Commitment = () => {
  const commitments = [
    { icon: <HeartHandshake size={40} />, title: "Customer Satisfaction" },
    { icon: <ShieldAlert size={40} />, title: "Zero Error Service" },
    { icon: <Timer size={40} />, title: "Timeline Discipline" },
    { icon: <CircleDollarSign size={40} />, title: "Competitive Pricing" },
    { icon: <HardHat size={40} />, title: "Skilled Workforce" },
    { icon: <Handshake size={40} />, title: "Long-Term Partnership" }
  ];

  return (
    <section className="bg-gray-50 pb-32 pt-20">
      <div className="container">
        <div className="relative overflow-hidden bg-gradient-to-br from-primary to-primary-light rounded-2xl p-16 text-white shadow-2xl">
          
          {/* Decorative background circle */}
          <div className="absolute -top-1/2 -right-[10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(212,175,55,0.15)_0%,rgba(212,175,55,0)_70%)] pointer-events-none"></div>
          
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-accent text-4xl font-bold mb-4">Our Commitment</h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Building lasting relationships through uncompromising quality and dedication.
            </p>
          </div>
          
          <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {commitments.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md border border-white/15 p-8 rounded-xl text-center transition-all duration-300 hover:bg-accent hover:border-accent hover:text-primary hover:-translate-y-1.5 group cursor-default shadow-lg">
                <div className="text-accent mb-4 inline-block transition-colors duration-200 group-hover:text-primary">
                  {item.icon}
                </div>
                <h4 className="text-inherit text-lg font-bold m-0">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Commitment;
