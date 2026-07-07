const Clients = () => {
  const clients = [
    "Siam City Cement (Bangladesh) Ltd.",
    "Godrej Household Products (BD) Pvt. Ltd.",
    "Pharmasia Limited",
    "Sajol Ceramic Industries Ltd.",
    "Rahimafrooz Globatt Ltd.",
    "Robin Printing & Packaging Ltd.",
    "ACI Formulations Ltd.",
    "VIP Luggage BD Pvt. Ltd.",
    "Spectra International Ltd.",
    "Leather Industries of Bangladesh Ltd.",
    "Kiam Glassware Industries Ltd.",
    "Posh Furniture Ltd."
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <h2 className="section-title">Valued Clients</h2>
        <p className="text-center text-gray-500 -mt-8 mb-12 text-lg">Trusted by leading organizations across multiple industries</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {clients.map((client, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 p-6 rounded-lg flex items-center justify-center text-center min-h-[100px] transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1.5 hover:shadow-md cursor-default group">
              <div className="font-semibold text-[0.95rem] text-inherit transition-colors">{client}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
