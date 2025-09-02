import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Cpu, TrendingUp } from 'lucide-react';
import { profile } from '@/data/profile';

const highlights = [
  {
    icon: Brain,
    title: 'AI/ML Excellence',
    description: 'Expert in deep learning, neural networks, and advanced ML algorithms with production deployment experience',
    color: 'text-primary'
  },
  {
    icon: Database,
    title: 'Big Data Mastery',
    description: 'Extensive experience with PySpark, Kafka, and distributed systems processing millions of records',
    color: 'text-secondary'
  },
  {
    icon: Cpu,
    title: 'MLOps & DevOps',
    description: 'Skilled in containerization, CI/CD pipelines, and automated ML model deployment on AWS',
    color: 'text-accent'
  },
  {
    icon: TrendingUp,
    title: 'Business Impact',
    description: 'Proven track record of delivering measurable results with 92% model accuracy and 50% efficiency gains',
    color: 'text-success-green'
  }
];

const counters = [
  { number: '12+', label: 'Years Experience', suffix: '' },
  { number: '50+', label: 'Models Shipped', suffix: '' },
  { number: '99.9', label: 'Uptime Target', suffix: '%' },
  { number: '2M+', label: 'Records Processed', suffix: '/batch' }
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-card/30">
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
              About Me
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Transforming data into intelligent solutions through cutting-edge AI/ML engineering
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Professional Summary */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Principal AI/ML Engineer & Data Platform Architect
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  With over <span className="text-primary font-semibold">12 years of experience</span> in the AI/ML 
                  space, I specialize in designing, developing, and deploying scalable artificial intelligence 
                  applications that drive real business impact.
                </p>
                
                <p>
                  My expertise spans the entire ML lifecycle—from data ingestion and feature engineering to 
                  model training, deployment, and monitoring. I've successfully delivered production-ready 
                  solutions processing <span className="text-primary font-semibold">2M+ records per batch</span> 
                  and achieved <span className="text-primary font-semibold">92% accuracy</span> in fraud 
                  detection systems.
                </p>
                
                <p>
                  Currently at CapitalOne, I architect end-to-end ML pipelines using cutting-edge technologies 
                  like PyTorch, TensorFlow, and AWS, while focusing on MLOps best practices to ensure 
                  scalable, reliable, and maintainable AI systems.
                </p>
              </div>

              {/* Key Specializations */}
              <div className="pt-6 border-t border-border/50">
                <h4 className="text-lg font-semibold text-foreground mb-4">Core Specializations</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'Deep Learning & Neural Networks',
                    'MLOps & Model Deployment', 
                    'Big Data & Stream Processing',
                    'Fraud Detection & Risk Analytics',
                    'NLP & Semantic Search',
                    'Cloud Architecture (AWS)'
                  ].map((spec, index) => (
                    <motion.div
                      key={spec}
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-primary rounded-full" />
                      <span className="text-sm text-muted-foreground">{spec}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Animated Counters */}
            <motion.div
              className="grid grid-cols-2 gap-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {counters.map((counter, index) => (
                <motion.div
                  key={counter.label}
                  className="text-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(20, 184, 166, 0.1)" }}
                >
                  <motion.div
                    className="text-3xl font-bold text-primary mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 200, 
                      delay: 0.8 + index * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    {counter.number}{counter.suffix}
                  </motion.div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {counter.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Key Highlights */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                className="group p-6 rounded-2xl bg-card/30 border border-border/50 backdrop-blur-sm hover:bg-card/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <highlight.icon className={`h-6 w-6 ${highlight.color}`} />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {highlight.title}
                </h4>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Ready to tackle your next AI/ML challenge?
            </p>
            <motion.button
              className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};