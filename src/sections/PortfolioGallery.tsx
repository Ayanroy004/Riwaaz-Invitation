import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import {
  PORTFOLIO_CATEGORIES,
  PORTFOLIO_ITEMS,
  PortfolioCategory,
  PortfolioItem,
  STUDIO_IMAGES,
} from "../data/studioData";
import { StudioImage } from "../components/StudioImage";
import { PortfolioModal } from "../components/PortfolioModal";
import { GoldHairline } from "../components/OrnamentMotif";

type SlideMedia = {
  src: string;
  alt: string;
};

function getItemSlides(item: PortfolioItem): SlideMedia[] {
  const extendedItem = item as PortfolioItem & {
    images?: string[];
    gallery?: string[];
    secondaryImage?: string;
    secondaryImageAlt?: string;
  };

  const fallbackExtras = [
    STUDIO_IMAGES.heroSuite,
    STUDIO_IMAGES.storyCraft,
  ].filter(Boolean);

  const primaryAndCustom = [
    ...(Array.isArray(extendedItem.images) ? extendedItem.images : []),
    ...(Array.isArray(extendedItem.gallery) ? extendedItem.gallery : []),
    item.image,
    extendedItem.secondaryImage,
  ].filter((src): src is string => Boolean(src && src.trim()));

  const combined =
    primaryAndCustom.length > 1
      ? primaryAndCustom
      : [...primaryAndCustom, ...fallbackExtras];

  const uniqueSources = Array.from(new Set(combined));

  return uniqueSources.map((src, idx) => ({
    src,
    alt:
      idx === 1 && extendedItem.secondaryImageAlt
        ? extendedItem.secondaryImageAlt
        : `${item.imageAlt} — view ${idx + 1}`,
  }));
}

interface PortfolioCardProps {
  item: PortfolioItem;
  aspectClass: string;
  isFeaturedAll: boolean;
  onSelect: (item: PortfolioItem) => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  item,
  aspectClass,
  isFeaturedAll,
  onSelect,
}) => {
  const slides = useMemo(() => getItemSlides(item), [item]);
  const [activeIndex, setActiveIndex] = useState(0);

  const hasMultipleSlides = slides.length > 1;
  const safeIndex = activeIndex < slides.length ? activeIndex : 0;
  const currentSlide = slides[safeIndex] ?? {
    src: item.image,
    alt: item.imageAlt,
  };

  const handlePrev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleDotClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    idx: number,
  ) => {
    e.stopPropagation();
    setActiveIndex(idx);
  };

  return (
    <motion.article
      key={item.id}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`group flex flex-col bg-[#F8F5EE]/55 border border-[#252525]/10 hover:border-[#C6A45D]/70 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,51,46,0.07)] transition-all duration-300 min-w-0 ${
        isFeaturedAll ? "md:col-span-2" : ""
      }`}
    >
      {/* Mini Carousel Stage */}
      <div
        className={`relative w-full overflow-hidden bg-[#EFEAE0] ${aspectClass}`}
      >
        <div
          role="button"
          tabIndex={0}
          onClick={() => onSelect(item)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect(item);
            }
          }}
          aria-label={`Open preview for ${item.title}`}
          className="relative w-full h-full cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#C6A45D]"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={`${item.id}-${safeIndex}-${currentSlide.src}`}
              initial={{ opacity: 0.4, x: 14 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0.4, x: -14 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="w-full h-full"
            >
              <StudioImage
                src={currentSlide.src}
                alt={currentSlide.alt}
                fallbackLabel={item.title}
                className="w-full h-full"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </motion.div>
          </AnimatePresence>

          {/* Subtle Gradient Overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B332E]/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Top-Right Slide Counter Pill (Instagram style) */}
          {hasMultipleSlides && (
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#0B332E]/80 text-[#F8F5EE] text-[11px] font-medium tracking-wide backdrop-blur-2xs tabular-nums"
            >
              {safeIndex + 1} / {slides.length}
            </span>
          )}

          {/* View Preview CTA Pill */}
          <span className="pointer-events-none absolute bottom-3.5 right-3.5 inline-flex items-center gap-1 px-3 py-1.5 bg-[#F8F5EE]/95 text-[#0B332E] text-xs font-medium translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-xs shadow-xs">
            <span>View Preview</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </div>

        {/* Left / Right Carousel Controls */}
        {hasMultipleSlides && (
          <>
            <button
              type="button"
              onClick={handlePrev}
              aria-label={`Previous image in ${item.title}`}
              className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#F8F5EE]/90 hover:bg-[#F8F5EE] text-[#0B332E] border border-[#252525]/15 flex items-center justify-center shadow-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label={`Next image in ${item.title}`}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-[#F8F5EE]/90 hover:bg-[#F8F5EE] text-[#0B332E] border border-[#252525]/15 flex items-center justify-center shadow-sm opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" aria-hidden="true" />
            </button>

            {/* Bottom Carousel Pagination Dots */}
            <div
              role="tablist"
              aria-label={`Select slide for ${item.title}`}
              className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0B332E]/45 backdrop-blur-2xs"
            >
              {slides.map((_, idx) => {
                const isCurrent = idx === safeIndex;
                return (
                  <button
                    key={idx}
                    type="button"
                    role="tab"
                    aria-selected={isCurrent}
                    aria-label={`Show image ${idx + 1} of ${slides.length}`}
                    onClick={(e) => handleDotClick(e, idx)}
                    className={`h-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                      isCurrent
                        ? "w-4 bg-[#F8F5EE]"
                        : "w-1.5 bg-[#F8F5EE]/55 hover:bg-[#F8F5EE]/80"
                    }`}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Card Editorial Content */}
      <button
        type="button"
        onClick={() => onSelect(item)}
        className="p-5 sm:p-6 flex flex-col flex-1 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#C6A45D]"
      >
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
      </button>
    </motion.article>
  );
};

export const PortfolioGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] =
    useState<PortfolioCategory>("All Projects");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All Projects") return PORTFOLIO_ITEMS;
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
              Explore a selection of designs crafted with creativity, attention
              to detail, and a personal touch.
            </p>
          </div>

          <p className="text-xs text-[#252525]/60 max-w-xs leading-relaxed">
            Click the arrows or dots on any card to browse multiple views, or
            select a card to open the full preview.
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
                    ? "text-[#F8F5EE]"
                    : "bg-[#F8F5EE] text-[#252525]/75 hover:text-[#0B332E] hover:bg-[#EFEAE0]"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="portfolio-active-tab"
                    transition={{ type: "spring", stiffness: 360, damping: 32 }}
                    className="absolute inset-0 bg-[#124E46] rounded-sm"
                    aria-hidden="true"
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Responsive Side-by-Side Grid of Mini Carousels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <AnimatePresence initial={false}>
            {filteredItems.map((item) => {
              const isFeaturedAll =
                activeCategory === "All Projects" &&
                item.gridSpan === "featured";

              const aspectClass = isFeaturedAll
                ? "aspect-[4/3] sm:aspect-[16/10]"
                : "aspect-[4/3]";

              return (
                <PortfolioCard
                  key={item.id}
                  item={item}
                  aspectClass={aspectClass}
                  isFeaturedAll={isFeaturedAll}
                  onSelect={setSelectedItem}
                />
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      <PortfolioModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
};
