import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { profile } from '@/data/profile';
import { useToast } from '@/hooks/use-toast';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Show success toast with confetti effect
      toast({
        title: "Message sent successfully! 🎉",
        description: "I'll get back to you within 24 hours.",
      });

      // Reset form after showing success
      setTimeout(() => {
        setFormData({ name: '', email: '', company: '', message: '' });
        setIsSubmitted(false);
      }, 2000);
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: profile.email,
      href: `mailto:${profile.email}`,
      color: 'text-primary'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: profile.phone,
      href: `tel:${profile.phone}`,
      color: 'text-secondary'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: profile.location,
      href: '#',
      color: 'text-accent'
    }
  ];

  const socialLinks = [
    // {
    //   icon: Linkedin,
    //   label: 'LinkedIn',
    //   href: profile.social.linkedin,
    //   color: 'hover:text-blue-500'
    // },
    // {
    //   icon: Github,
    //   label: 'GitHub', 
    //   href: profile.social.github,
    //   color: 'hover:text-purple-500'
    // },
    {
      icon: Mail,
      label: 'Email',
      href: `mailto:${profile.social.email}`,
      color: 'hover:text-green-500'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-section mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Let's Connect
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Ready to discuss your next AI/ML project or explore collaboration opportunities?
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8">
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus:border-primary"
                        placeholder="Your full name"
                        disabled={isSubmitting}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-background/50 border-border/50 focus:border-primary"
                        placeholder="your@email.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company / Organization
                    </label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary"
                      placeholder="Your company name"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="bg-background/50 border-border/50 focus:border-primary resize-none"
                      placeholder="Tell me about your project, collaboration ideas, or just say hello..."
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg disabled:hover:scale-100"
                  >
                    <AnimatePresence mode="wait">
                      {isSubmitting ? (
                        <motion.div
                          key="submitting"
                          className="flex items-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <motion.div
                            className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          />
                          Sending...
                        </motion.div>
                      ) : isSubmitted ? (
                        <motion.div
                          key="submitted"
                          className="flex items-center"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Message Sent!
                          <motion.div
                            className="ml-2"
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                          >
                            <Sparkles className="h-4 w-4" />
                          </motion.div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="default"
                          className="flex items-center"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground text-center">
                    I typically respond within 24 hours. Looking forward to hearing from you!
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="order-1 lg:order-2 space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {/* Quick Contact */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">
                  Get In Touch
                </h3>
                
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    className="flex items-center group p-4 rounded-xl bg-card/30 border border-border/50 hover:bg-card/50 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -2 }}
                  >
                    <div className={`p-3 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 mr-4 group-hover:scale-110 transition-transform ${info.color}`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">
                  Connect Online
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center w-12 h-12 rounded-xl bg-card/50 border border-border/50 text-muted-foreground transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: -2 }}
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Call-to-Action */}
              <motion.div
                className="p-6 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-bold text-foreground mb-3">
                  Let's Build Something Amazing
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Whether you're looking to implement cutting-edge AI/ML solutions, optimize existing 
                  data pipelines, or explore new possibilities in artificial intelligence, I'm here 
                  to turn your vision into reality.
                </p>
                <div className="flex flex-wrap gap-2">
                  {['AI/ML Consulting', 'System Architecture', 'MLOps Implementation', 'Data Engineering'].map((service) => (
                    <span
                      key={service}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};