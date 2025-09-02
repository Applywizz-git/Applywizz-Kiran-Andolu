import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';
import { certifications, featuredCertifications } from '@/data/certifications';
import { Button } from '@/components/ui/button';

const platformColors = {
  'Coursera': 'from-blue-500 to-blue-600',
  'DataCamp': 'from-green-500 to-green-600',
  'IBM': 'from-blue-600 to-indigo-600',
  'Microsoft': 'from-blue-500 to-cyan-500',
  'Google Cloud': 'from-red-500 to-orange-500'
};

export const Certifications: React.FC = () => {
  const CertificationCard: React.FC<{ cert: any; index: number; featured?: boolean }> = ({ 
    cert, 
    index, 
    featured = false 
  }) => (
    <motion.div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:shadow-xl ${
        featured 
          ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/40' 
          : 'bg-card/60 border-border/50 hover:border-border'
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium flex items-center">
            <Award className="h-3 w-3 mr-1" />
            Featured
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            {/* Platform Badge */}
            <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
              platformColors[cert.platform] || 'from-gray-500 to-gray-600'
            } mb-3`}>
              {cert.platform}
            </div>
            
            {/* Title */}
            <h3 className={`font-bold leading-tight group-hover:text-primary transition-colors ${
              featured ? 'text-lg mb-2' : 'text-base mb-2'
            }`}>
              {cert.title}
            </h3>
            
            {/* Issuer */}
            <div className="flex items-center text-muted-foreground mb-2">
              <span className="font-medium text-foreground">{cert.issuer}</span>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {cert.dateEarned}
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {cert.description}
        </p>

        {/* Skills Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {cert.skills.slice(0, 4).map((skill: string) => (
            <span
              key={skill}
              className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20"
            >
              {skill}
            </span>
          ))}
          {cert.skills.length > 4 && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
              +{cert.skills.length - 4} more
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <div className="flex items-center text-xs text-success-green">
            <CheckCircle className="h-3 w-3 mr-1" />
            Verified Certificate
          </div>
          
          {cert.verificationUrl && (
            <Button size="sm" variant="ghost" className="text-xs">
              <ExternalLink className="h-3 w-3 mr-1" />
              Verify
            </Button>
          )}
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );

  return (
    <section id="certifications" className="py-24 bg-gradient-to-b from-card/30 to-background">
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
              Professional Certifications
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Industry-recognized credentials validating expertise in AI/ML engineering and cloud technologies
            </motion.p>
          </div>

          {/* Featured Certifications */}
          <div className="mb-16">
            <motion.h3
              className="text-xl font-bold text-foreground mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Featured Certifications
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {featuredCertifications.map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  cert={cert}
                  index={index}
                  featured={true}
                />
              ))}
            </div>
          </div>

          {/* All Certifications */}
          <div className="mb-16">
            <motion.h3
              className="text-xl font-bold text-foreground mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Additional Certifications
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.filter(cert => !cert.featured).map((cert, index) => (
                <CertificationCard
                  key={cert.id}
                  cert={cert}
                  index={index + featuredCertifications.length}
                />
              ))}
            </div>
          </div>

          {/* Certification Stats */}
          <motion.div
            className="grid md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-6 rounded-2xl bg-card/30 border border-border/50">
              <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
              <div className="text-sm text-muted-foreground">Total Certifications</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/30 border border-border/50">
              <div className="text-3xl font-bold text-secondary mb-2">{featuredCertifications.length}</div>
              <div className="text-sm text-muted-foreground">Professional Certificates</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/30 border border-border/50">
              <div className="text-3xl font-bold text-accent mb-2">3</div>
              <div className="text-sm text-muted-foreground">Major Platforms</div>
            </div>
            
            <div className="p-6 rounded-2xl bg-card/30 border border-border/50">
              <div className="text-3xl font-bold text-success-green mb-2">2024</div>
              <div className="text-sm text-muted-foreground">Latest Certification</div>
            </div>
          </motion.div>

          {/* Commitment Statement */}
          <motion.div
            className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Commitment to Excellence
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              These certifications represent my dedication to staying current with the latest advances 
              in AI/ML, cloud technologies, and engineering best practices. I continuously invest in 
              professional development to deliver cutting-edge solutions and maintain expertise across 
              the rapidly evolving technology landscape.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};