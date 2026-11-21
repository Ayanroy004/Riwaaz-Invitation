import React from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/studioData';
import { GoldHairline } from '../components/OrnamentMotif';

export const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-y border-[#252525]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-14 sm:mb-16 space-y-4"
        >
          <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#124E46]">
            Our Creative Process
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B332E] leading-[1.12]">
            From Idea to Beautiful Design
          </h2>
          <GoldHairline className="pt-1" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative pt-6 border-t border-[#C6A45D]/50 flex flex-col"
            >
              <span className="font-serif text-4xl font-semibold text-[#C6A45D] tabular-nums mb-4">
                {step.number}
              </span>
              <h3 className="font-serif text-2xl font-semibold text-[#0B332E] mb-2.5">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#252525]/75">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
