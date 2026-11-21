import { MotionConfig } from 'motion/react';
import { Navbar } from './components/Navbar';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { EditorialRibbon } from './components/EditorialRibbon';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Hero } from './sections/Hero';
import { BrandStory } from './sections/BrandStory';
import { ServicesSection } from './sections/ServicesSection';
import { PortfolioGallery } from './sections/PortfolioGallery';
import { WeddingShowcase } from './sections/WeddingShowcase';
import { PackagingShowcase } from './sections/PackagingShowcase';
import { ProcessSection } from './sections/ProcessSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { InstagramGallery } from './sections/InstagramGallery';
import { ContactSection } from './sections/ContactSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen flex flex-col bg-[#F8F5EE] text-[#252525]">
        <ScrollProgressBar />
        <Navbar />

        <main className="flex-1">
          <Hero />
          <BrandStory />
          <EditorialRibbon />
          <ServicesSection />
          <PortfolioGallery />
          <WeddingShowcase />
          <PackagingShowcase />
          <ProcessSection />
          <WhyChooseSection />
          <InstagramGallery />
          <ContactSection />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </MotionConfig>
  );
}
