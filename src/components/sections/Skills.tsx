import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Database, Cloud, Cog, ChevronRight } from 'lucide-react';
import { Skillverse } from '@/components/3d/Skillverse';
import { skillCategories, topSkills } from '@/data/skills';
import { Button } from '@/components/ui/button';

const categoryIcons = {
  'AI & Machine Learning': Code,
  'Data Engineering': Database,
  'MLOps & DevOps': Cog,
  'Programming & Frameworks': Cloud
};

const categoryColors = {
  'AI & Machine Learning': 'from-primary to-primary/70',
  'Data Engineering': 'from-secondary to-secondary/70', 
  'MLOps & DevOps': 'from-accent to-accent/70',
  'Programming & Frameworks': 'from-success-green to-success-green/70'
};

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const SkillBar: React.FC<{ skill: any; delay: number }> = ({ skill, delay }) => (
    <motion.div
      className="group"
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      onHoverStart={() => setHoveredSkill(skill.name)}
      onHoverEnd={() => setHoveredSkill(null)}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-xs text-muted-foreground">{skill.level}%</span>
      </div>
      
      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
      
      {skill.description && (
        <motion.p
          className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity"
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: hoveredSkill === skill.name ? 'auto' : 0,
            opacity: hoveredSkill === skill.name ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          {skill.description}
        </motion.p>
      )}
    </motion.div>
  );

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      {/* Subtle 3D Background */}
      <Skillverse className="opacity-10" intensity={0.15} />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-7xl mx-auto"
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
              Technical Expertise
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A comprehensive toolkit spanning the entire AI/ML and data engineering ecosystem
            </motion.p>
          </div>

          {/* Top Skills Highlight */}
          <motion.div
            className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 to-secondary/5 border border-primary/10"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Core Competencies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {topSkills.slice(0, 12).map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card/70 transition-all duration-300 group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="text-2xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">
                    {skill.level}%
                  </div>
                  <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Category Navigation */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              variant={selectedCategory === null ? "default" : "outline"}
              onClick={() => setSelectedCategory(null)}
              className="transition-all duration-300"
            >
              All Skills
            </Button>
            {skillCategories.map((category) => {
              const IconComponent = categoryIcons[category.title];
              return (
                <Button
                  key={category.title}
                  variant={selectedCategory === category.title ? "default" : "outline"}
                  onClick={() => setSelectedCategory(
                    selectedCategory === category.title ? null : category.title
                  )}
                  className="transition-all duration-300"
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {category.title}
                </Button>
              );
            })}
          </motion.div>

          {/* Skills Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory || 'all'}
              className="grid lg:grid-cols-2 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {(selectedCategory 
                ? skillCategories.filter(cat => cat.title === selectedCategory)
                : skillCategories
              ).map((category, categoryIndex) => {
                const IconComponent = categoryIcons[category.title];
                const gradientClass = categoryColors[category.title];
                
                return (
                  <motion.div
                    key={category.title}
                    className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    {/* Category Header */}
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${gradientClass} mr-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <SkillBar
                          key={skill.name}
                          skill={skill}
                          delay={categoryIndex * 0.1 + skillIndex * 0.05}
                        />
                      ))}
                    </div>

                    {/* Category Footer */}
                    <div className="mt-6 pt-4 border-t border-border/50">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{category.skills.length} skills</span>
                        <span>
                          Avg: {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>

          {/* Skills Summary */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {[
                { number: skillCategories.length, label: 'Skill Categories' },
                { number: skillCategories.reduce((acc, cat) => acc + cat.skills.length, 0), label: 'Total Skills' },
                { number: topSkills.filter(skill => skill.level >= 90).length, label: 'Expert Level' },
                { number: '12+', label: 'Years Experience' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-foreground mb-4">
                Continuous Learning Philosophy
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The AI/ML landscape evolves rapidly, and I maintain cutting-edge expertise through 
                continuous learning, hands-on experimentation, and contributing to production systems. 
                My skills represent not just theoretical knowledge, but battle-tested experience 
                delivering real-world solutions at scale.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};