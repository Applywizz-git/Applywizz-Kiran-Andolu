import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { LoadingOverlay } from '@/components/LoadingOverlay';
import { Header } from '@/components/sections/Header';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';
import { Certifications } from '@/components/sections/Certifications';
import { Education } from '@/components/sections/Education';
import { Contact } from '@/components/sections/Contact';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
    });

    // Cleanup AOS on unmount
    return () => {
      AOS.refresh();
    };
  }, []);

  const handleLoadingComplete = () => {
    setIsLoading(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      {/* Loading Overlay */}
      {isLoading && <LoadingOverlay onComplete={handleLoadingComplete} />}
      
      {/* Main Portfolio */}
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default Index;
