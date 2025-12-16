import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Patel',
      role: 'Textile Manufacturer, Ahmedabad',
      quote: 'The organic cotton from Maa Vihat Impex is exceptional. Pure, premium quality with complete certification. They are truly committed to sustainable farming.',
      rating: 5,
    },
    {
      name: 'Sophie Martin',
      role: 'Textile Director, France',
      quote: 'Working with Maa Vihat Impex has been transformative. Their pure organic cotton meets the highest international standards. Exceptional partners!',
      rating: 5,
    },
    {
      name: 'Amit Verma',
      role: 'Cotton Processor, Mumbai',
      quote: 'The purely ginned cotton quality is outstanding. Maa Vihat Impex understands organic excellence and delivers consistently. Highly recommended!',
      rating: 5,
    },
    {
      name: 'Maria Rodriguez',
      role: 'Fashion Brand Owner, Spain',
      quote: 'Premium organic cotton with complete traceability. Maa Vihat Impex genuinely cares about sustainability. Perfect for ethical fashion brands.',
      rating: 5,
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
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
              What Our Clients Say
            </h2>
            <div className="w-24 h-1 bg-organic-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Trusted by textile manufacturers and brands worldwide
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-organic-light rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Quote className="w-10 h-10 text-organic-primary opacity-40" />
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed text-lg">{testimonial.quote}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-organic-dark text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.svg
                        key={i}
                        className="w-5 h-5 text-amber-500 fill-current"
                        viewBox="0 0 20 20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </motion.svg>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
