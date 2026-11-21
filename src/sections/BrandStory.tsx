import React from 'react';
import { motion } from 'motion/react';
import { STUDIO_IMAGES } from '../data/studioData';
import { StudioImage } from '../components/StudioImage';
import { GoldHairline } from '../components/OrnamentMotif';

export const BrandStory: React.FC = () => {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-white border-y border-[#252525]/8"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Portrait Studio Image */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none border border-[#C6A45D]/35 p-2.5 bg-[#F8F5EE]">
              <StudioImage
                src={STUDIO_IMAGES.storyCraft}
                alt="Riwaaz Invitation studio desk with gold foil swatches, emerald paper, brass seal, and ribbons"
                fallbackLabel="Riwaaz Craftsmanship"
                className="w-full h-full"
              />
            </div>
          </motion.div>

          {/* Right Brand Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 sm:space-y-7"
          >
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#124E46]">
              Our Studio Story
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0B332E] leading-[1.12]">
              Where Creativity Meets Tradition
            </h2>

            <GoldHairline />

            <p className="text-base sm:text-lg leading-relaxed text-[#252525]/85 max-w-2xl">
              At Riwaaz Invitation, we believe every celebration and every brand deserves a unique identity. From thoughtfully designed invitations to personalized packaging and creative branding, we bring ideas to life through design, detail, and imagination.
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#252525]/10">
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#0B332E] mb-1.5">
                  Personal Celebrations
                </h3>
                <p className="text-sm leading-relaxed text-[#252525]/75">
                  Traditional Indian wedding cards, floral suites, and digital invitations crafted with warmth and cultural grace.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl font-semibold text-[#0B332E] mb-1.5">
                  Distinctive Brands
                </h3>
                <p className="text-sm leading-relaxed text-[#252525]/75">
                  Custom packaging, product labels, stickers, stationery, and visual identities designed to stand apart.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
