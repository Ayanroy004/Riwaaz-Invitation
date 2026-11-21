import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { PACKAGING_HIGHLIGHTS } from '../data/studioData';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { StudioImage } from '../components/StudioImage';
import { GoldHairline } from '../components/OrnamentMotif';

export const PackagingShowcase: React.FC = () => {
  const brandingWhatsappUrl = buildWhatsAppUrl(
    'Hello Riwaaz Invitation! I would like to discuss a custom packaging, label, or brand identity project for my business.'
  );

  return (
    <section className="py-20 sm:py-28 bg-[#F8F5EE]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 sm:mb-16"
        >
          <div className="max-w-2xl space-y-4">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#124E46]">
              Packaging &amp; Brand Identity
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B332E] leading-[1.12]">
              Make Your Brand Unforgettable
            </h2>
            <GoldHairline className="pt-1" />
            <p className="text-sm sm:text-base text-[#252525]/80 leading-relaxed">
              From the first impression to the final detail, thoughtful packaging and branding help your business stand out.
            </p>
          </div>

          <a
            href={brandingWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#124E46] text-[#F8F5EE] hover:bg-[#0B332E] text-sm font-medium tracking-wide transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <span>Discuss Your Branding Project</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-8">
          {PACKAGING_HIGHLIGHTS.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.09,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group bg-white border border-[#252525]/10 hover:border-[#C6A45D]/70 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,51,46,0.07)] transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <StudioImage
                  src={item.image}
                  alt={item.imageAlt}
                  fallbackLabel={item.title}
                  className="w-full h-full"
                  imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <p className="text-xs font-medium text-[#124E46] mb-2">
                  {item.category}
                </p>
                <h3 className="font-serif text-2xl font-semibold text-[#0B332E] leading-snug mb-3 group-hover:text-[#124E46] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#252525]/75">
                  {item.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Unboxed Business Deliverables Summary Row */}
        <div className="mt-10 pt-7 border-t border-[#C6A45D]/25 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-[#252525]/75">
          <span>
            Kraft Paper Packaging · Custom Packaging Bags · Product Labels · Brand Logos · Stickers · Business Stationery
          </span>
          <a
            href={brandingWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#124E46] font-medium hover:text-[#0B332E] underline underline-offset-4 decoration-[#C6A45D]/60 whitespace-nowrap"
          >
            Request Custom Branding Quote
          </a>
        </div>
      </div>
    </section>
  );
};
