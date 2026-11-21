import React from 'react';
import { motion } from 'motion/react';
import { SERVICES } from '../data/studioData';
import { ServiceCard } from '../components/ServiceCard';
import { GoldHairline } from '../components/OrnamentMotif';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-12 sm:mb-16 space-y-4"
        >
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#124E46]">
            Our Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B332E] leading-[1.12]">
            Thoughtfully Designed. Beautifully Crafted.
          </h2>
          <GoldHairline className="pt-1" />
          <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed pt-1">
            Every design is created around your occasion, audience, and personal taste—whether you are welcoming wedding guests or launching a memorable product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
