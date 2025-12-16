import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'Enquiry@maavihatimpex.com',
      href: 'mailto:Enquiry@maavihatimpex.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 99880 03877 (Mukesh Desai)',
      href: 'tel:+919988003877',
    },
    {
      icon: Phone,
      title: 'Sales & Enquiries',
      content: '+91 70414 40230',
      href: 'tel:+917041440230',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Survey No 1416, Plot No 2/A, Kamla Amrut Industrial Estate, Indrad Road, Nr. Indrad Village, Indrad-384440, Mehsana, Gujarat',
      href: '',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-organic-light">
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
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-organic-primary mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Reach out to us for organic cotton inquiries and business partnerships
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-organic-dark mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-organic-dark font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-organic rounded-lg focus:outline-none focus:ring-2 focus:ring-organic-primary transition-all bg-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-organic-dark font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-organic rounded-lg focus:outline-none focus:ring-2 focus:ring-organic-primary transition-all bg-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-organic-dark font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-organic rounded-lg focus:outline-none focus:ring-2 focus:ring-organic-primary transition-all bg-white"
                    placeholder="+91 1234567890"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-organic-dark font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-organic rounded-lg focus:outline-none focus:ring-2 focus:ring-organic-primary transition-all bg-white"
                    placeholder="Inquiry regarding organic cotton..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-organic-dark font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-organic rounded-lg focus:outline-none focus:ring-2 focus:ring-organic-primary transition-all resize-none bg-white"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-organic-primary text-white px-6 py-4 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-organic-dark mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ x: 8 }}
                      className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-organic shadow-md hover:shadow-lg transition-all"
                    >
                      <div className="flex-shrink-0 w-12 h-12 bg-organic-primary/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-organic-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-organic-dark mb-1">{item.title}</h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-gray-700 hover:text-organic-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-gray-700">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-8 p-6 bg-white rounded-lg border border-organic shadow-md"
              >
                <h4 className="font-semibold text-organic-dark mb-4 text-lg">Business Hours</h4>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
