import { motion } from 'framer-motion';
import { Leaf, Shield, Globe, Award } from 'lucide-react';

const NewAbout = () => {
  const highlights = [
    {
      icon: Leaf,
      title: '100% Organic',
      description: 'Certified organic cotton grown without synthetic pesticides or fertilizers',
    },
    {
      icon: Shield,
      title: 'Sustainable Sourcing',
      description: 'Ethically sourced from trusted organic farms across India',
    },
    {
      icon: Globe,
      title: 'Global Export',
      description: 'Connecting organic cotton farmers to international markets worldwide',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'Rigorous testing and certification for premium quality standards',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-white">
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
              About Maa Vihat Impex
            </h2>
            <div className="w-24 h-1 bg-organic-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Maa Vihat Impex is a trusted name in organic cotton trading, committed to sourcing and exporting purely ginned, truly organic cotton. We connect sustainable farms to global markets with excellence in quality and reliability.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="text-center p-6 rounded-lg bg-organic-light hover:shadow-xl transition-all duration-300"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 text-organic-primary"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-organic-dark mb-2">{item.title}</h3>
                  <p className="text-gray-700 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewAbout;
