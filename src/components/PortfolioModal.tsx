import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { PortfolioItem } from '../data/studioData';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { StudioImage } from './StudioImage';

interface PortfolioModalProps {
  item: PortfolioItem | null;
  onClose: () => void;
}

export const PortfolioModal: React.FC<PortfolioModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          key="portfolio-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#0B332E]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="portfolio-modal-title"
          onClick={onClose}
        >
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-[#F8F5EE] text-[#252525] overflow-y-auto shadow-2xl border border-[#C6A45D]/30 grid grid-cols-1 lg:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close project preview"
              className="absolute top-3 right-3 z-10 w-10 h-10 flex items-center justify-center bg-[#F8F5EE]/95 text-[#0B332E] hover:bg-[#124E46] hover:text-[#F8F5EE] border border-[#C6A45D]/35 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Left Image Frame */}
            <div className="lg:col-span-7 bg-[#EFEAE0] min-h-[280px] sm:min-h-[380px] lg:min-h-[500px]">
              <StudioImage
                src={item.image}
                alt={item.imageAlt}
                fallbackLabel={item.title}
                className="w-full h-full"
                imgClassName="object-cover"
                loading="eager"
              />
            </div>

            {/* Right Editorial Details */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#124E46] font-medium mb-3">
                  <span>{item.category}</span>
                  <span aria-hidden="true" className="text-[#C6A45D]">
                    ·
                  </span>
                  <span className="text-[#252525]/65">{item.label}</span>
                </div>

                <h3
                  id="portfolio-modal-title"
                  className="font-serif text-2xl sm:text-3xl font-semibold text-[#0B332E] leading-tight mb-4"
                >
                  {item.title}
                </h3>

                <div className="w-12 h-px bg-[#C6A45D] mb-5" />

                <p className="text-sm leading-relaxed text-[#252525]/85 mb-6">
                  {item.fullDescription}
                </p>

                <div className="border-t border-[#252525]/10 pt-5 mb-7">
                  <p className="text-xs font-semibold tracking-wider uppercase text-[#0B332E]/70 mb-3">
                    Design Highlights
                  </p>
                  <ul className="space-y-2 text-sm text-[#252525]/80">
                    {item.details.map((detail) => (
                      <li key={detail} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 bg-[#C6A45D] shrink-0" aria-hidden="true" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-[#252525]/10">
                <a
                  href={buildWhatsAppUrl(
                    `Hello Riwaaz Invitation! I saw "${item.title}" (${item.category}) in your portfolio and would like to enquire about a custom design in a similar style.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 px-5 bg-[#124E46] text-[#F8F5EE] hover:bg-[#0B332E] text-sm font-medium tracking-wide transition-colors"
                >
                  <span>Enquire About This Design</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <p className="text-xs text-center text-[#252525]/60">
                  Every design is personalized to match your occasion or brand.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
