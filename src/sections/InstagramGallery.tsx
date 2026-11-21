import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { INSTAGRAM_GALLERY } from '../data/studioData';
import { STUDIO_CONTACT } from '../utils/whatsapp';
import { StudioImage } from '../components/StudioImage';
import { GoldHairline } from '../components/OrnamentMotif';

export const InstagramGallery: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#252525]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-3 max-w-xl">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#124E46]">
              Studio Feed
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B332E] leading-[1.12]">
              More Inspiration on Instagram
            </h2>
            <GoldHairline className="pt-1" />
          </div>

          <a
            href={STUDIO_CONTACT.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 border border-[#124E46] text-[#124E46] hover:bg-[#124E46] hover:text-[#F8F5EE] text-sm font-medium transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            <Instagram className="w-4 h-4" aria-hidden="true" />
            <span>Follow {STUDIO_CONTACT.instagramHandle}</span>
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {INSTAGRAM_GALLERY.map((tile, index) => (
            <motion.a
              key={tile.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.16, 1, 0.3, 1],
              }}
              href={STUDIO_CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${tile.caption} on Instagram`}
              className="group relative aspect-square overflow-hidden border border-[#252525]/10 hover:border-[#C6A45D]/70 bg-[#F8F5EE] transition-colors duration-300"
            >
              <StudioImage
                src={tile.image}
                alt={tile.imageAlt}
                fallbackLabel={tile.category}
                className="w-full h-full"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B332E]/90 via-[#0B332E]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-3.5 flex flex-col justify-end">
                <p className="text-[11px] text-[#E4D2A0] font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  {tile.category}
                </p>
                <p className="text-xs text-white font-medium leading-snug mt-0.5 line-clamp-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {tile.caption}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
