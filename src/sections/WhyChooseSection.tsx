import React from 'react';
import { motion } from 'motion/react';
import {
  Feather,
  Compass,
  Sparkles,
  Layers,
  Award,
  Briefcase,
} from 'lucide-react';
import { WHY_CHOOSE_POINTS } from '../data/studioData';
import { GoldHairline } from '../components/OrnamentMotif';

const QUALITY_ICONS = [Feather, Compass, Sparkles, Layers, Award, Briefcase];

export const WhyChooseSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Editorial Heading */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 space-y-4 lg:sticky lg:top-28"
          >
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#124E46]">
              Why Riwaaz Invitation
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B332E] leading-[1.12]">
              Design That Feels Personal
            </h2>
            <GoldHairline className="pt-1" />
            <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed pt-1">
              Whether crafting a family wedding invitation or shaping a product&apos;s visual identity, every project receives dedicated care and thoughtful direction.
            </p>
          </motion.div>

          {/* Right 6 Qualities Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {WHY_CHOOSE_POINTS.map((point, index) => {
              const Icon = QUALITY_ICONS[index % QUALITY_ICONS.length];
              return (
                <motion.div
                  key={point.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.55,
                    delay: (index % 2) * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group bg-white border border-[#252525]/10 hover:border-[#C6A45D]/70 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(11,51,46,0.06)] p-6 sm:p-7 space-y-3 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[#C6A45D]/40 bg-[#F8F5EE] text-[#124E46] group-hover:bg-[#124E46] group-hover:text-[#E4D2A0] transition-colors duration-300">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-[#0B332E]">
                    {point.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#252525]/75">
                    {point.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
