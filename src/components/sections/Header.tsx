import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { profile } from '@/data/profile';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

const navigationItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' }
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(navigationItems.map(item => item.id));
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle mobile menu accessibility
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      
      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsMobileMenuOpen(false);
        }
      };

      document.addEventListener('keydown', handleEscape);
      return () => {
        document.body.style.overflow = '';
        document.removeEventListener('keydown', handleEscape);
      };
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const LogoAnimation = () => (
    <motion.div
      className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {profile.name.split(' ').map(name => name[0]).join('')}
    </motion.div>
  );

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'glass-nav py-3 shadow-lg' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <LogoAnimation />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary focus-visible:outline-primary ${
                  activeSection === item.id 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
              >
                {item.label}
                
                {/* Active indicator */}
                {activeSection === item.id && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                
                {/* Hover underline */}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary/50 rounded-full origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: activeSection !== item.id ? 1 : 0 }}
                  transition={{ duration: 0.2 }}
                />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden focus-visible:outline-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 top-[72px] z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Content */}
            <motion.nav
              className="relative glass-nav border-t border-border/50 p-6"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="space-y-4">
                {navigationItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`block w-full text-left py-2 px-4 rounded-lg text-lg font-medium transition-colors duration-200 focus-visible:outline-primary ${
                      activeSection === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground hover:text-primary hover:bg-muted/50'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: prefersReducedMotion ? 0 : index * 0.05,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};