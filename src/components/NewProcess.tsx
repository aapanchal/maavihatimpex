import { motion } from 'framer-motion';
import { Sprout, Zap, CheckCircle, Truck } from 'lucide-react';
import organicCotton from '../../public/o1.avif';
import premiumGinning from '../../public/o2.avif';
import qualityInspection from '../../public/o3.avif';
import efficientExport from '../../public/o4.avif';
const NewProcess = () => {
  const steps = [
    {
      number: '01',
      icon: Sprout,
      title: 'Sourcing from Organic Farms',
      description: 'We carefully select certified organic cotton from trusted sustainable farms across India.',
      image: organicCotton,
    },
    {
      number: '02',
      icon: Zap,
      title: 'Premium Ginning & Processing',
      description: 'State-of-the-art ginning facilities ensure pure, high-quality cotton fiber extraction.',
      image: premiumGinning,
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'Quality Inspection & Certification',
      description: 'Rigorous testing against international standards with complete documentation.',
      image: qualityInspection,
    },
    {
      number: '04',
      icon: Truck,
      title: 'Efficient Export & Delivery',
      description: 'Seamless logistics and timely delivery to global markets with full transparency.',
      image: efficientExport,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="process" className="py-20 bg-organic-light">
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
              Our Process
            </h2>
            <div className="w-24 h-1 bg-organic-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              From farm to export: Our meticulous process ensures premium organic cotton quality at every stage
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                  className="relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <motion.img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6 relative">
                    <div className="absolute -top-6 left-6 w-12 h-12 bg-organic-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>

                    <div className="flex items-center space-x-3 mb-3 mt-2">
                      <Icon className="w-6 h-6 text-organic-primary" />
                      <h3 className="text-xl font-semibold text-organic-dark">{step.title}</h3>
                    </div>

                    <p className="text-gray-700">{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <svg className="w-8 h-8 text-organic-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewProcess;
