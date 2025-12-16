import { motion } from 'framer-motion';
import { Package, Leaf, Zap, Shield } from 'lucide-react';
import cottonBales from '../../public/c1.avif';
import cottonSeeds from '../../public/c2.avif';
import cottonSourcing from '../../public/mvi-cotton-2.webp';


const NewServices = () => {
  const services = [
    {
      icon: Package,
      title: 'Organic Cotton Bales',
      description: 'Premium quality ginned cotton bales, compressed and ready for export with full certification.',
      image: 'https://images.unsplash.com/photo-1613299835157-e73eda33110a?w=400&h=300&fit=crop',
    },
    {
      icon: Leaf,
      title: 'Pure Ginned Cotton',
      description: 'High-grade purely ginned organic cotton fiber with superior strength and purity.',
      image: cottonBales,
    },
    {
      icon: Zap,  
      title: 'Cotton Seeds',
      description: 'Organic cotton seeds for sustainable farming and agricultural development programs.',
      image: cottonSeeds,
    },
    {
      icon: Shield,
      title: 'Custom Sourcing',
      description: 'Tailored sourcing solutions to meet specific buyer requirements and quality standards.',
      image: cottonSourcing,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-organic-dark mb-4">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-organic-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive range of organic cotton products for global markets
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(45, 80, 22, 0.15)' }}
                  className="bg-gradient-to-b from-organic-light to-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-12 h-12 bg-organic-primary rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-organic-dark">{service.title}</h3>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{service.description}</p>

                    <motion.a
                      href="#contact"
                      whileHover={{ x: 5 }}
                      className="inline-flex items-center text-organic-primary hover:text-organic-dark font-medium mt-4 text-sm"
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewServices;
