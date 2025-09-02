import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, BookOpen, Award } from 'lucide-react';
import { education, academicHighlights } from '@/data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
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
              Education
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Academic foundation that shaped my journey into AI/ML engineering excellence
            </motion.p>
          </div>

          {/* Academic Highlights Summary */}
          <motion.div
            className="grid md:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="text-2xl font-bold text-primary mb-2">{academicHighlights.graduationYear}</div>
              <div className="text-sm text-muted-foreground">Graduation Year</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="text-2xl font-bold text-secondary mb-2">MS</div>
              <div className="text-sm text-muted-foreground">Highest Degree</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="text-2xl font-bold text-accent mb-2">CS</div>
              <div className="text-sm text-muted-foreground">Field of Study</div>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-card/50 border border-border/50">
              <div className="text-2xl font-bold text-success-green mb-2">TX</div>
              <div className="text-sm text-muted-foreground">Location</div>
            </div>
          </motion.div>

          {/* Education Details */}
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="relative mb-12 last:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="bg-gradient-to-br from-card/80 to-card/40 border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                {/* Institution Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    {/* Institution Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-4">
                      <GraduationCap className="h-4 w-4 mr-2" />
                      <span className="text-sm font-medium">Higher Education</span>
                    </div>
                    
                    {/* Institution Name */}
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    
                    {/* Degree Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-lg font-semibold text-secondary">
                        <Award className="h-5 w-5 mr-2" />
                        {edu.degree} in {edu.field}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-2" />
                          Graduated {edu.graduationDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                {edu.description && (
                  <div className="mb-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                )}

                {/* Relevant Coursework */}
                {edu.relevantCoursework && (
                  <div className="mb-6">
                    <div className="flex items-center text-foreground font-medium mb-4">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Relevant Coursework
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                      {edu.relevantCoursework.map((course, courseIndex) => (
                        <motion.div
                          key={course}
                          className="px-3 py-2 rounded-lg bg-muted/50 border border-border/30 text-sm text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-all duration-300 cursor-default"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.2 + courseIndex * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {course}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-6 border-t border-border/50">
                  <div className="text-sm text-muted-foreground">
                    This foundational education in Computer Science provided the theoretical background 
                    and analytical thinking skills that have been instrumental in my AI/ML engineering career.
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Educational Impact Statement */}
          <motion.div
            className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-4">
              Foundation for Innovation
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              My Master's degree in Computer Science from Texas A&M University provided the rigorous 
              theoretical foundation that underpins my practical expertise in AI/ML engineering. The 
              comprehensive curriculum in algorithms, data structures, and computational theory has 
              been invaluable in architecting scalable, efficient solutions throughout my career.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};