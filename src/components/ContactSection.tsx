
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! I'll get back to you soon.", {
      style: {
        background: '#1a1a2e',
        border: '1px solid #9d4edd',
        color: '#ffffff'
      }
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: '📧',
      label: 'Email',
      value: 'john.doe@example.com',
      action: () => window.open('mailto:john.doe@example.com')
    },
    {
      icon: '💼',
      label: 'LinkedIn',
      value: '/in/johndoe',
      action: () => window.open('https://linkedin.com/in/johndoe')
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: '@johndoe',
      action: () => window.open('https://github.com/johndoe')
    },
    {
      icon: '🐦',
      label: 'Twitter',
      value: '@johndoe_dev',
      action: () => window.open('https://twitter.com/johndoe_dev')
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-white">Get In</span>{' '}
            <span className="neon-text text-neon-purple">Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
            Let's create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="cyber-card p-8"
          >
            <h3 className="text-2xl font-bold text-neon-purple mb-6 neon-text">
              Send Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-card border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all neon-border"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-card border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all neon-border"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-cyber-card border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all neon-border"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-cyber-card border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-neon-purple focus:outline-none focus:ring-2 focus:ring-neon-purple/20 transition-all neon-border resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neon-purple hover:bg-neon-purple/90 text-white font-semibold py-4 rounded-lg neon-border transition-all"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-neon-blue mb-6 neon-text">
                Connect With Me
              </h3>
              <p className="text-gray-400 mb-8">
                Ready to discuss your next project? Reach out through any of these channels:
              </p>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.button
                    key={method.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.02, 
                      boxShadow: "0 0 25px rgba(14, 165, 233, 0.3)" 
                    }}
                    onClick={method.action}
                    className="w-full p-4 cyber-card border border-white/10 hover:border-neon-blue transition-all rounded-lg text-left"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="text-2xl">{method.icon}</div>
                      <div>
                        <div className="text-neon-blue font-semibold">
                          {method.label}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {method.value}
                        </div>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Fun Stats */}
            <div className="cyber-card p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                Let's Build Together
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple neon-text">24h</div>
                  <div className="text-sm text-gray-400">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue neon-text">50+</div>
                  <div className="text-sm text-gray-400">Projects Done</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-purple neon-text">100%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-neon-blue neon-text">3+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
