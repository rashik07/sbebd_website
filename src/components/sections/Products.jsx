import { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { Image } from 'antd';
import compressor from '../../assets/compressor.png';
import parts from '../../assets/parts.png';
import oil from '../../assets/oil.png';
import lift from '../../assets/lift.png';
import generator from '../../assets/genarator.png';

const Products = ({ bgClass = "bg-gray-50", isDarkBg = false }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      title: "Industrial Air Compressor",
      category: "Air Compressor",
      shortDesc: "High-efficiency rotary screw air compressor for industrial needs.",
      image: compressor,
      details: {
        description: "Our industrial-grade rotary screw air compressors are designed for continuous duty and maximum reliability. They offer energy-efficient operation and low maintenance requirements, perfect for heavy manufacturing and industrial applications.",
        features: [
          "Rotary screw technology for continuous operation",
          "Energy-saving control systems",
          "Low noise levels",
          "Easy maintenance access"
        ],
        specifications: {
          "Power": "15kW - 250kW",
          "Pressure": "7 - 13 bar",
          "Capacity": "2.0 - 45 m³/min"
        }
      }
    },
    {
      id: 2,
      title: "Genuine Spare Parts",
      category: "Spare Parts",
      shortDesc: "Authentic parts for all machinery to ensure minimal downtime.",
      image: parts,
      details: {
        description: "Maintain the optimal performance of your equipment with our comprehensive range of genuine spare parts. We supply parts for compressors, generators, lifts, and more to ensure minimal downtime.",
        features: [
          "OEM certified parts",
          "Extensive inventory",
          "Fast shipping and delivery",
          "Expert technical support"
        ],
        specifications: {
          "Availability": "In stock / On demand",
          "Compatibility": "Major brands",
          "Warranty": "Manufacturer warranty included"
        }
      }
    },
    {
      id: 3,
      title: "Premium Industrial Oil",
      category: "Industrial Oil",
      shortDesc: "High-performance lubricants designed to protect machinery.",
      image: oil,
      details: {
        description: "Our premium industrial oils and lubricants are formulated to protect your machinery under extreme conditions. Reduce wear and tear, extend equipment life, and improve operational efficiency.",
        features: [
          "Excellent thermal stability",
          "Anti-wear and anti-corrosion properties",
          "Extended drain intervals",
          "Compatible with various seals"
        ],
        specifications: {
          "Viscosity Grade": "ISO VG 32 to 680",
          "Base Oil": "Mineral / Synthetic",
          "Application": "Hydraulics, Gears, Compressors"
        }
      }
    },
    {
      id: 4,
      title: "Hydraulic Scissor Lift",
      category: "Hydraulic Lift",
      shortDesc: "Versatile and robust lifting solution for warehouses.",
      image: lift,
      details: {
        description: "Enhance your warehouse efficiency with our robust hydraulic scissor lifts. Designed for safe vertical lifting of heavy loads, these lifts are essential for material handling and maintenance tasks.",
        features: [
          "High load capacity",
          "Smooth hydraulic operation",
          "Safety interlock systems",
          "Customizable platform sizes"
        ],
        specifications: {
          "Capacity": "500kg - 5000kg",
          "Lifting Height": "Up to 12 meters",
          "Platform Size": "Customizable"
        }
      }
    },
    {
      id: 5,
      title: "Heavy Duty Generator",
      category: "Generator",
      shortDesc: "Reliable backup power solutions for uninterrupted operation.",
      image: generator,
      details: {
        description: "Ensure uninterrupted power supply with our heavy-duty diesel and gas generators. Built for resilience and longevity, these units are ideal for hospitals, data centers, and manufacturing plants.",
        features: [
          "Automatic transfer switch (ATS) compatible",
          "Soundproof enclosure options",
          "Advanced digital control panel",
          "High fuel efficiency"
        ],
        specifications: {
          "Output": "50kVA - 2500kVA",
          "Fuel Type": "Diesel / Gas",
          "Voltage": "230V / 400V"
        }
      }
    },
    //boiler
    {
      id: 6,
      title: "Boiler",
      category: "Boiler",
      shortDesc: "High-efficiency steam boiler for industrial needs.",
      image: "https://energyplusindia.com/wp-content/uploads/2019/01/industrial-boiler-500x500.jpg",
      details: {
        description: "Our industrial-grade boilers are designed for continuous duty and maximum reliability. They offer energy-efficient operation and low maintenance requirements, perfect for heavy manufacturing and industrial applications.",
        features: [
          "Steam boiler technology for continuous operation",
          "Energy-saving control systems",
          "Low noise levels",
          "Easy maintenance access"
        ],
        specifications: {
          "Power": "15kW - 250kW",
          "Pressure": "7 - 13 bar",
          "Capacity": "2.0 - 45 m³/min"
        }
      }
    },
    //Transformer
    {
      id: 7,
      title: "Transformer",
      category: "Transformer",
      shortDesc: "High-efficiency transformer for industrial needs.",
      image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        description: "Our industrial-grade transformers are designed for continuous duty and maximum reliability. They offer energy-efficient operation and low maintenance requirements, perfect for heavy manufacturing and industrial applications.",
        features: [
          "Transformer technology for continuous operation",
          "Energy-saving control systems",
          "Low noise levels",
          "Easy maintenance access"
        ],
        specifications: {
          "Power": "15kW - 250kW",
          "Pressure": "7 - 13 bar",
          "Capacity": "2.0 - 45 m³/min"
        }
      }
    },
    //Busbar Trunking System
    {
      id: 8,
      title: "Busbar Trunking System(BBT)",
      category: "Busbar Trunking System",
      shortDesc: "High-efficiency busbar trunking system for industrial needs.",
      image: "https://alliantenergybd.com/wp-content/uploads/2022/10/busbar-trunking-system-overview-01-1024x957.jpeg",
      details: {
        description: "Our industrial-grade busbar trunking system is designed for continuous duty and maximum reliability. They offer energy-efficient operation and low maintenance requirements, perfect for heavy manufacturing and industrial applications.",
        features: [
          "Busbar trunking system technology for continuous operation",
          "Energy-saving control systems",
          "Low noise levels",
          "Easy maintenance access"
        ],
        specifications: {
          "Power": "15kW - 250kW",
          "Pressure": "7 - 13 bar",
          "Capacity": "2.0 - 45 m³/min"
        }
      }
    },
    //solar
    {
      id: 9,
      title: "Solar ",
      category: "Solar ",
      shortDesc: "High-efficiency solar panel for industrial needs.",
      image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      details: {
        description: "Our industrial-grade solar panel is designed for continuous duty and maximum reliability. They offer energy-efficient operation and low maintenance requirements, perfect for heavy manufacturing and industrial applications.",
        features: [
          "Solar panel technology for continuous operation",
          "Energy-saving control systems",
          "Low noise levels",
          "Easy maintenance access"
        ],
        specifications: {
          "Power": "15kW - 250kW",
          "Pressure": "7 - 13 bar",
          "Capacity": "2.0 - 45 m³/min"
        }
      }
    }
  ];

  return (
    <section id="products" className={`section ${bgClass} relative`}>
      <div className="container">
        <h2 className={`section-title ${isDarkBg ? 'text-white' : ''}`}>Our Products</h2>
        <p className={`text-center -mt-8 mb-12 text-lg max-w-2xl mx-auto ${isDarkBg ? 'text-gray-200' : 'text-gray-500'}`}>
          We offer a comprehensive range of premium industrial products to meet your operational needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-sm transition-all duration-300 group hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/60 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="bg-accent text-primary rounded-full p-3 transform translate-y-4 transition-all duration-300 group-hover:translate-y-0">
                    <ArrowUpRight size={24} strokeWidth={2.5} />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.category}
                </div>
              </div>
              <div className="p-6 border border-t-0 border-gray-100 rounded-b-xl flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-primary transition-colors group-hover:text-accent">{product.title}</h3>
                <p className="text-gray-500 text-[0.95rem] leading-relaxed mb-4 flex-grow">{product.shortDesc}</p>
                <div className="text-accent font-medium text-sm flex items-center gap-1 mt-auto group-hover:underline">
                  View Details
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProduct(null)}
          ></div>
          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-7xl max-h-[90vh] overflow-y-auto z-10 animate-in fade-in zoom-in-95 duration-200">
            <button
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full p-2 transition-colors z-20"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={20} />
            </button>

            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-2/5 h-64 md:h-auto relative">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  {selectedProduct.category}
                </div>
              </div>

              <div className="w-full md:w-3/5 p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-primary mb-4">{selectedProduct.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {selectedProduct.details.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedProduct.details.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-accent mt-0.5">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-primary mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent"></div>
                    Specifications
                  </h4>
                  <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
                    <dl className="divide-y divide-gray-200">
                      {Object.entries(selectedProduct.details.specifications).map(([key, value], index) => (
                        <div key={index} className="py-2 flex justify-between gap-4">
                          <dt className="text-sm font-medium text-gray-500">{key}</dt>
                          <dd className="text-sm text-primary font-semibold text-right">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>

                {/* <div className="mt-8 pt-6 border-t border-gray-100">
                  <a href="#contact" className="btn btn-primary w-full sm:w-auto text-center" onClick={() => setSelectedProduct(null)}>
                    Request a Quote
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Products;
