import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';
import Team from './components/Team';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track scroll parameters to highlight active section in Navbar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'capabilities', 'team', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 180; // offset

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to action function
  const handleScrollTo = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const topOffset = element.offsetTop - 70; // header buffer
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#fcfcfc] font-sans antialiased text-zinc-900" id="atm_workspace_root">
      
      {/* Dynamic ambient grid elements */}
      <div className="pointer-events-none fixed inset-0 -z-30 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-100/40 via-[#fcfcfc] to-[#fcfcfc]"></div>
      
      {/* Sticky header navigation */}
      <Navbar onScrollTo={handleScrollTo} activeSection={activeSection} />

      {/* Main flow items */}
      <main className="relative z-10">
        
        {/* HERO INTRO */}
        <Hero onScrollTo={handleScrollTo} />

        {/* SERVICES / CAPABILITIES SECTIONS */}
        <Capabilities />

        {/* LEADERSHIP BIO TEAM */}
        <Team />

        {/* PRICING & ENGAGEMENT MODEL */}
        <Pricing />

        {/* DIRECT REACHOUT GENERAL & ESCALATION DESK */}
        <Contact />

      </main>

      {/* FOOTER */}
      <Footer onScrollTo={handleScrollTo} />

    </div>
  );
}
