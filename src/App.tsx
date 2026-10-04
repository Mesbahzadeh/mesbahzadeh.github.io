import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  const [initialSubject, setInitialSubject] = useState<string>('');

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenWhatsAppDirect = () => {
    scrollToSection('contact');
  };

  const handleFloatingClick = () => {
    // Open WhatsApp directly or scroll to contact
    const text = encodeURIComponent('سلام جناب مهندس مصباح‌زاده، جهت ارتباط و دریافت مشاوره از سایت شما پیام میدم.');
    window.open(`https://wa.me/${PERSONAL_INFO.whatsAppNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0] text-[#283618] selection:bg-[#BC6C25] selection:text-white relative">
      <Navbar onOpenWhatsAppDirect={handleOpenWhatsAppDirect} />

      <main>
        <Hero
          onScrollToSection={scrollToSection}
          onOpenWhatsAppDirect={handleOpenWhatsAppDirect}
        />

        <AboutSection
          onScrollToSection={scrollToSection}
          onOpenWhatsAppDirect={handleOpenWhatsAppDirect}
        />

        <CoursesSection />

        <SkillsSection />

        <ProjectsSection />

        <ContactSection initialSubject={initialSubject} />

        <FaqSection />
      </main>

      <Footer />

      <FloatingWhatsApp onClick={handleFloatingClick} />
    </div>
  );
}
