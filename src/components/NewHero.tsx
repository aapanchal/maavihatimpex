import { motion } from 'framer-motion';
import cottonBales from '../../public/c1.avif';
import cottonSeeds from '../../public/c2.avif';
import cottonSourcing from '../../public/mvi-cotton-2.webp';

const NewHero = () => {
  const cottonImages = [
    cottonBales,
    cottonSeeds,
    cottonSourcing,
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        {cottonImages.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`Organic cotton ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: index === 0 ? 0.3 : 0, scale: 1 }}
            transition={{ duration: 0.8 }}
            style={{ zIndex: -index }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-white/20 z-10"></div>
      </div>

      <div className="relative z-20 flex items-center justify-center min-h-screen">
        <motion.div
          className="text-center px-4 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Purely Ginned, Truly Organic.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-3xl text-white/90 mb-8 font-light"
          >
            Premium Organic Cotton for Global Markets
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Experience the purity of certified organic cotton, sustainably sourced and expertly processed.
          </motion.p>

          <motion.a
            href="#contact"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-organic-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all duration-300"
          >
            Enquire Now
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </motion.div>
    </section>
  );
};

export default NewHero;
