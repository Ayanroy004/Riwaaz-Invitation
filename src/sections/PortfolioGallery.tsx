import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  PortfolioCategory,
  PortfolioItem,
} from '../data/studioData';
import { StudioImage } from '../components/StudioImage';
import { PortfolioModal } from '../components/PortfolioModal';
import { GoldHairline } from '../components/OrnamentMotif';

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>('All Projects');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All Projects') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 bg-white border-t border-[#252525]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-10 sm:mb-14"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#124E46]">
              Featured Portfolio
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B332E] leading-[1.12]">
              A Collection of Beautiful Creations
            </h2>
            <GoldHairline className="pt-1" />
            <p className="text-sm sm:text-base text-[#252525]/75 leading-relaxed">
              Explore a selection of designs crafted with creativity, attention to detail, and a personal touch.
            </p>
          </div>

          <p className="text-xs text-[#252525]/60 max-w-xs leading-relaxed">
            Select any preview below to inspect craft details or request a bespoke variation.
          </p>
        </motion.div>

        {/* Interactive Filter Tabs with smooth layoutId indicator */}
        <div
          role="tablist"
          aria-label="Filter portfolio by category"
          className="flex flex-wrap items-center gap-2 pb-10 mb-8 border-b border-[#252525]/10"
        >
          {PORTFOLIO_CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 text-xs sm:text-sm font-medium transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 cursor-pointer ${
                  isActive
                    ? 'text-[#F8F5EE]'
                    : 'bg-[#F8F5EE] text-[#252525]/75 hover:text-[#0B332E] hover:bg-[#EFEAE0]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-active-tab"
                    transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    className="absolute inset-0 bg-[#124E46] rounded-sm"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Editorial Varied-Proportion Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => {
              const isFeaturedAll =
                activeCategory === 'All Projects' && item.gridSpan === 'featured';

              const aspectClass = isFeaturedAll
                ? 'aspect-[4/3] md:aspect-[16/10]'
                : item.gridSpan === 'tall'
                  ? 'aspect-[4/5]'
                  : 'aspect-[4/3]';

              return (
                <motion.article
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className={`group flex flex-col bg-[#F8F5EE]/55 border border-[#252525]/10 hover:border-[#C6A45D]/70 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,51,46,0.07)] transition-all duration-300 ${
                    isFeaturedAll ? 'md:col-span-2' : ''
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setSelectedItem(item)}
                    className="text-left flex flex-col h-full w-full cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C6A45D]"
                  >
                    <div className={`relative w-full overflow-hidden ${aspectClass}`}>
                      <StudioImage
                        src={item.image}
                        alt={item.imageAlt}
                        fallbackLabel={item.title}
                        className="w-full h-full"
                        imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B332E]/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        aria-hidden="true"
                      />
                      <span className="pointer-events-none absolute bottom-4 right-4 inline-flex items-center gap-1 px-3 py-1.5 bg-[#F8F5EE]/95 text-[#0B332E] text-xs font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <span>View Preview</span>
                        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </span>
                    </div>

                    <div className="p-5 sm:p-6 flex flex-col flex-1">
                      <div className="flex flex-wrap items-center gap-2 text-xs text-[#124E46] mb-2">
                        <span className="font-medium">{item.category}</span>
                        <span aria-hidden="true" className="text-[#C6A45D]">
                          ·
                        </span>
                        <span className="text-[#252525]/60">{item.label}</span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#0B332E] leading-snug mb-2 group-hover:text-[#124E46] transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-[#252525]/75 leading-relaxed">
                        {item.shortDescription}
                      </p>
                    </div>
                  </button>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
