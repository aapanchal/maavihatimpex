import { motion } from 'framer-motion';
import cottonBales from '../../public/mvi-cotton-1.jpg';
import cottonSeeds from '../../public/mvi-cotton-2.webp';
import cottonPlants from '../../public/mvi-cotton.jpg';
import premiumGinning from '../../public/c1.avif';
import qualityInspection from '../../public/c2.avif';
import cottonExport from '../../public/o1.avif';
import pureCottonFiber from '../../public/o2.avif';
import sustainableFarming from '../../public/o3.avif';
import cottonProcessingFacility from '../../public/o4.avif';

const NewGallery = () => {
  const images = [
    {
      url: cottonBales,
      alt: 'Organic cotton bolls',
    },
    {
      url: cottonSeeds,
      alt: 'Cotton field harvest',
    },
    {
      url: cottonPlants,
      alt: 'Cotton plants growth',
    },
    {
      url: premiumGinning,
      alt: 'Ginning process',
    },
    {
      url: qualityInspection,
      alt: 'Quality inspection',
    },
    {
      url: cottonExport,
      alt: 'Cotton export logistics',
    },
    {
      url: pureCottonFiber,
      alt: 'Pure cotton fiber',
    },
    {
      url: sustainableFarming,
      alt: 'Sustainable farming',
    },
    {
      url: cottonProcessingFacility,
      alt: 'Cotton processing facility',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
    <section id="gallery" className="py-20 bg-organic-light">
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
              Gallery
            </h2>
            <div className="w-24 h-1 bg-organic-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              A glimpse into our organic cotton journey
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-64"
              >
                <motion.img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium text-sm">{image.alt}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewGallery;
