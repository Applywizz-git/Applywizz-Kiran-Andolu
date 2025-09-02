import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects, ProjectItem } from '@/data/projects';

// Import project images
import vintagePlatform from '@/assets/projects/vintage-platform.jpg';
import cardAnalytics from '@/assets/projects/card-analytics.jpg';
import customerBehavior from '@/assets/projects/customer-behavior.jpg';
import pensionAnalytics from '@/assets/projects/pension-analytics.jpg';
import workCredit from '@/assets/projects/work-credit.jpg';
import financialAnalytics from '@/assets/projects/financial-analytics.jpg';

const projectImages: Record<string, string> = {
  'vintage-platform': vintagePlatform,
  'predictive-card-analytics': cardAnalytics,
  'customer-behavior-prediction': customerBehavior,
  'pension-claims-analytics': pensionAnalytics,
  'work-credit-modernization': workCredit,
  'financial-transaction-analytics': financialAnalytics,
};

const categories = [
  { id: 'all', label: 'All Projects', color: 'text-foreground' },
  { id: 'ai-ml', label: 'AI & ML', color: 'text-primary' },
  { id: 'data-engineering', label: 'Data Engineering', color: 'text-secondary' },
  { id: 'mlops', label: 'MLOps', color: 'text-accent' },
  { id: 'analytics', label: 'Analytics', color: 'text-success-green' }
];

export const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const ProjectCard: React.FC<{ project: ProjectItem; index: number }> = ({ project, index }) => (
    <motion.div
      className="group relative bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      layout
    >
      {/* Project Image */}
      <div className="relative aspect-video overflow-hidden">
        <motion.img
          src={projectImages[project.id]}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured Badge */}
        {project.featured && (
          <motion.div
            className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 + 0.3, type: "spring", stiffness: 200 }}
          >
            Featured
          </motion.div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Category Tag */}
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
            project.category === 'ai-ml' ? 'bg-primary/10 text-primary border-primary/20' :
            project.category === 'data-engineering' ? 'bg-secondary/10 text-secondary border-secondary/20' :
            project.category === 'mlops' ? 'bg-accent/10 text-accent border-accent/20' :
            'bg-success-green/10 text-success-green border-success-green/20'
          }`}>
            {categories.find(cat => cat.id === project.category)?.label}
          </span>
          
          {project.featured && (
            <Award className="h-4 w-4 text-primary" />
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Key Outcomes */}
        <div className="mb-4">
          <div className="flex items-center text-xs font-medium text-success-green mb-2">
            <TrendingUp className="h-3 w-3 mr-2" />
            Key Outcomes
          </div>
          <div className="space-y-1">
            {project.outcomes.slice(0, 2).map((outcome, idx) => (
              <div key={idx} className="text-xs text-muted-foreground flex items-start">
                <ChevronRight className="h-3 w-3 mr-2 mt-0.5 text-success-green flex-shrink-0" />
                {outcome}
              </div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-muted text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-card/30 to-background">
      <div className="container mx-auto px-4">
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
              AI/ML Projects
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Production-ready AI/ML solutions delivering measurable business impact
            </motion.p>
          </div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.id)}
                className={`transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-primary text-primary-foreground shadow-lg' 
                    : 'hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Project Stats */}
          <motion.div
            className="mt-20 grid md:grid-cols-4 gap-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              { number: projects.length, label: 'Projects Delivered' },
              { number: '92%', label: 'Avg Model Accuracy' },
              { number: '2M+', label: 'Records Processed' },
              { number: '50%', label: 'Efficiency Gains' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="p-6 rounded-2xl bg-card/30 border border-border/50"
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
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal Placeholder */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="max-w-2xl w-full bg-card border border-border rounded-2xl p-6 max-h-[80vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  ×
                </Button>
              </div>
              
              <img
                src={projectImages[selectedProject.id]}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-lg mb-4"
              />
              
              <p className="text-muted-foreground mb-6">{selectedProject.longDescription}</p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Key Outcomes:</h4>
                  <ul className="space-y-1">
                    {selectedProject.outcomes.map((outcome, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start">
                        <ChevronRight className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};