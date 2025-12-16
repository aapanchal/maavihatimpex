import { Users, Award, Clock, Globe } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Skilled professionals with years of industry expertise',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous quality standards for all products',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'Reliable logistics ensuring on-time shipments',
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Extensive worldwide connections and partnerships',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">About Us</h2>
            <div className="w-24 h-1 bg-emerald-600 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Maa Vihat Impex is a dynamic import-export company committed to delivering high-quality products with reliability, sustainability, and customer satisfaction. We specialize in sourcing and supplying premium goods, ensuring seamless trade connections worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-gray-50"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
