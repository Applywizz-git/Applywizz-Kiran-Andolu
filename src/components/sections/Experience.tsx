import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, ChevronRight, Award } from 'lucide-react';
import { experience } from '@/data/experience';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-background">
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
              Professional Experience
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A journey through cutting-edge AI/ML engineering roles across leading organizations
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent transform md:-translate-x-0.5" />

            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                className={`relative mb-16 ${
                  index % 2 === 0 
                    ? 'md:ml-0 md:mr-auto md:pr-12 md:text-right' 
                    : 'md:ml-auto md:mr-0 md:pl-12 md:text-left'
                } md:w-1/2 pl-20 md:pl-0`}
                initial={{ opacity: 0, y: 50, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                {/* Timeline Node */}
                <motion.div
                  className={`absolute w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg ${
                    index % 2 === 0 
                      ? 'left-6 md:right-[-8px] md:left-auto' 
                      : 'left-6 md:left-[-8px]'
                  } top-8`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                />

                {/* Job Card */}
                <motion.div
                  className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.1)" }}
                >
                  {/* Job Header */}
                  <div className="mb-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {job.role}
                      </h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {job.startDate} - {job.endDate}
                      </div>
                    </div>
                    
                    <div className="flex items-center text-secondary font-semibold mb-2">
                      <span className="text-lg">{job.company}</span>
                      <ChevronRight className="h-4 w-4 mx-2" />
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="h-4 w-4 mr-1" />
                        {job.location}
                      </div>
                    </div>
                  </div>

                  {/* Job Description */}
                  <div className="space-y-3 mb-6">
                    {job.description.map((desc, descIndex) => (
                      <motion.div
                        key={descIndex}
                        className="flex items-start space-x-3 text-sm text-muted-foreground"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + descIndex * 0.1 + 0.5 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <p className="leading-relaxed">{desc}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Key Achievements */}
                  {job.achievements.length > 0 && (
                    <div className="mb-6">
                      <div className="flex items-center text-sm font-medium text-success-green mb-3">
                        <Award className="h-4 w-4 mr-2" />
                        Key Achievements
                      </div>
                      <div className="grid gap-2">
                        {job.achievements.slice(0, 3).map((achievement, achIndex) => (
                          <motion.div
                            key={achIndex}
                            className="text-xs text-muted-foreground bg-success-green/5 border border-success-green/20 rounded-lg px-3 py-2"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4, delay: index * 0.2 + achIndex * 0.1 + 0.7 }}
                            viewport={{ once: true }}
                          >
                            {achievement}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Technologies */}
                  <div>
                    <div className="text-xs font-medium text-muted-foreground mb-2">
                      Technologies & Tools
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.slice(0, 8).map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.3, 
                            delay: index * 0.2 + techIndex * 0.05 + 0.8,
                            type: "spring",
                            stiffness: 200
                          }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {job.technologies.length > 8 && (
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground">
                          +{job.technologies.length - 8} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Career Progression Summary */}
          <motion.div
            className="mt-20 text-center bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Career Evolution
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From Java development intern to Principal AI/ML Engineer, my journey has been focused on 
              continuous learning and innovation. I've evolved from building traditional web applications 
              to architecting complex AI/ML systems that process millions of transactions and deliver 
              real business value through intelligent automation.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">8</div>
                <div className="text-sm text-muted-foreground">Different Roles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-2">7</div>
                <div className="text-sm text-muted-foreground">Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-2">12+</div>
                <div className="text-sm text-muted-foreground">Years Growth</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};