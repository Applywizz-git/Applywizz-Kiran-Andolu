import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skillverse } from '@/components/3d/Skillverse';
import { profile } from '@/data/profile';
import { useParallax } from '@/hooks/useParallax';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import heroPortrait from '@/assets/hero-portrait.jpg';

const rotatingKeywords = [
  'LLMs & GenAI',
  'MLOps Pipelines',
  'Vector Search',
  'Real-time Streaming',
  'Neural Networks',
  'Data Engineering'
];

export const Hero: React.FC = () => {
  const [currentKeywordIndex, setCurrentKeywordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const parallax = useParallax(0.3);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentKeywordIndex((prev) => (prev + 1) % rotatingKeywords.length);
        setIsTyping(false);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [prefersReducedMotion]);

  const handleScrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const handleDownloadResume = () => {
  //   const link = document.createElement('a');
  //   link.href = '/assets/Resume_KIRAN_ANDOLU_AIML.pdf';
  //   link.download = 'Kiran_Resume.pdf'; // this forces download instead of just opening
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Skillverse Background */}
      <Skillverse
        className="opacity-40"
        intensity={0.25}
      />

      {/* Parallax Background Elements */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          transform: prefersReducedMotion ? 'none' : `translateY(${parallax.y * 0.5}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-pulse-glow" />
        <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.3,
            delayChildren: 0.2
          }}
        >
          {/* Content Column */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Greeting */}
            <motion.p
              className="text-lg text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Hello, I'm {profile.name}
            </motion.p>

            {/* Main Headline with Typewriter Effect */}
            <div className="space-y-4">
              <motion.h1
                className="text-hero leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <span className="block text-foreground">Designing, Training &</span>
                <span className="block">
                  <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Shipping AI
                  </span>
                  <span className="text-foreground"> at Scale</span>
                </span>
              </motion.h1>

              {/* Rotating Keywords */}
              <motion.div
                className="h-16 flex items-center justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="text-xl text-muted-foreground mr-2">Specializing in</span>
                <div className="relative">
                  <motion.span
                    key={currentKeywordIndex}
                    className="text-xl font-semibold text-primary inline-block"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                  >
                    {rotatingKeywords[currentKeywordIndex]}
                  </motion.span>
                  {!prefersReducedMotion && (
                    <motion.span
                      className="absolute -right-3 top-0 w-0.5 h-6 bg-primary"
                      animate={{ opacity: isTyping ? [1, 0] : 0 }}
                      transition={{
                        repeat: isTyping ? Infinity : 0,
                        duration: 0.8,
                        ease: 'easeInOut'
                      }}
                    />
                  )}
                </div>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {profile.experience} of experience designing, developing, and deploying scalable AI/ML applications.
              Expert in end-to-end ML pipelines, predictive modeling, and production deployment.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <Button
                size="lg"
                onClick={handleScrollToProjects}
                className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <a href="/assets/resume.pdf" download="resume.pdf">
                <Button
                  variant="outline"
                  size="lg"
                  className="group border-primary/20 hover:border-primary text-foreground hover:text-primary px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
                >
                  Download Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </Button>
              </a>

            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">{profile.experience}</div>
                <div className="text-sm text-muted-foreground">Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">{profile.modelsShipped}</div>
                <div className="text-sm text-muted-foreground">Models Shipped</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-primary">{profile.uptimeTarget}</div>
                <div className="text-sm text-muted-foreground">Uptime Target</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image Column */}
          <motion.div
            className="relative order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glowing Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl scale-110" />

              {/* Main Image */}
              <motion.div
                className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl"
                whileHover={{ scale: prefersReducedMotion ? 1 : 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={heroPortrait}
                  alt={`${profile.name} - Principal AI/ML Engineer`}
                  className="w-full h-full object-cover"
                  loading="eager"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>

              {/* Floating Elements */}
              {!prefersReducedMotion && (
                <>
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 bg-primary/10 border border-primary/20 rounded-lg backdrop-blur-sm flex items-center justify-center"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <span className="text-xs font-mono text-primary">AI</span>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 w-16 h-16 bg-secondary/10 border border-secondary/20 rounded-lg backdrop-blur-sm flex items-center justify-center"
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  >
                    <span className="text-xs font-mono text-secondary">ML</span>
                  </motion.div>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center space-y-2 cursor-pointer text-muted-foreground hover:text-primary transition-colors"
            onClick={handleScrollToProjects}
            animate={{ y: prefersReducedMotion ? 0 : [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
