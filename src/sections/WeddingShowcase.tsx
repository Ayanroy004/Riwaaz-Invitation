import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { WEDDING_STYLES } from '../data/studioData';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { StudioImage } from '../components/StudioImage';
import { GoldHairline } from '../components/OrnamentMotif';

export const WeddingShowcase: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const activeStyle = WEDDING_STYLES[selectedIndex];

  const weddingWhatsappUrl = buildWhatsAppUrl(
    `Hello Riwaaz Invitation! I would love to create a customized wedding invitation (${activeStyle.styleName} style). Could we discuss my event details?`
  );

  return (
    <section className="py-20 sm:py-28 bg-[#0B332E] text-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Curated Style Selector & Copy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#E4D2A0]">
              Wedding Invitation Showcase
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.12]">
              Invitations Made for Your Once-in-a-Lifetime Moments
            </h2>

            <GoldHairline />

            <p className="text-sm sm:text-base text-[#F8F5EE]/80 leading-relaxed max-w-xl">
              From heritage Indian palace arches and cultural illustrations to minimal floral suites and foil-stamped luxury cards, each invitation is composed to set the tone for your celebration.
            </p>

            {/* Interactive Style Switcher List */}
            <div className="divide-y divide-[#C6A45D]/20 border-y border-[#C6A45D]/20">
              {WEDDING_STYLES.map((style, index) => {
                const isActive = index === selectedIndex;
                return (
                  <button
                    key={style.id}
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className={`relative w-full text-left py-4 px-4 transition-colors duration-200 flex items-start justify-between gap-4 cursor-pointer ${
                      isActive ? 'bg-[#124E46]/70' : 'hover:bg-[#124E46]/35'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="wedding-style-indicator"
                        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
                        className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C6A45D]"
                        aria-hidden="true"
                      />
                    )}
                    <div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-medium text-[#C6A45D] tabular-nums">
                          0{index + 1}
                        </span>
                        <h3 className="font-serif text-xl sm:text-2xl font-medium text-white">
                          {style.styleName}
                        </h3>
                      </div>
                      <p className="text-xs text-[#E4D2A0]/85 mt-1 pl-7">
                        {style.subtitle}
                      </p>
                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.p
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-sm text-[#F8F5EE]/80 mt-2 pl-7 leading-relaxed max-w-lg"
                          >
                            {style.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-2">
              <a
                href={weddingWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#C6A45D] text-[#0B332E] hover:bg-[#E4D2A0] text-sm font-semibold tracking-wide transition-colors duration-200 rounded-sm whitespace-nowrap"
              >
                <span>Create Your Invitation</span>
                <ArrowUpRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Active Gallery Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <div className="border border-[#C6A45D]/40 bg-[#124E46]/40 p-3 sm:p-4">
              <div className="relative aspect-[4/4.6] sm:aspect-[4/4.3] w-full overflow-hidden bg-[#0B332E]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStyle.id}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <StudioImage
                      src={activeStyle.image}
                      alt={activeStyle.imageAlt}
                      fallbackLabel={activeStyle.styleName}
                      className="w-full h-full"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="pt-4 pb-1 px-1 flex items-center justify-between gap-4 text-xs">
                <span className="text-[#E4D2A0] font-medium">
                  {activeStyle.styleName}
                </span>
                <span className="text-[#F8F5EE]/65">
                  Concept Preview · Customizable Suite
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
