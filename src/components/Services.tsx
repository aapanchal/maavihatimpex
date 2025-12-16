import { Package, ShoppingCart, FileText, Award } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Package,
      title: 'Import & Export Services',
      description: 'Comprehensive import and export solutions tailored to your business needs, ensuring smooth international trade operations.',
    },
    {
      icon: ShoppingCart,
      title: 'Product Sourcing & Procurement',
      description: 'Expert sourcing services to find the best quality products at competitive prices from reliable suppliers worldwide.',
    },
    {
      icon: FileText,
      title: 'Custom Clearance & Logistics',
      description: 'End-to-end logistics management including custom clearance, documentation, and efficient shipping solutions.',
    },
    {
      icon: Award,
      title: 'Quality Certification Assistance',
      description: 'Support in obtaining necessary quality certifications and compliance documentation for international standards.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions for all your import-export needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-8 h-8 text-emerald-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <a
                        href="#contact"
                        className="text-emerald-600 hover:text-emerald-700 font-medium inline-flex items-center group"
                      >
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
