import React, { useRef } from 'react';
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { STUDIO_IMAGES } from '../data/studioData';
import { StudioImage } from '../components/StudioImage';
import { BrandCrest } from '../components/OrnamentMotif';

const HEADLINE_WORDS = ['Every', 'Detail', 'Tells', 'a', 'Story.'];

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const insetY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const mainImageY = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const auraOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);

  // Smooth 3D pointer-reactive foil tilt & light sheen
  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);

  const smoothX = useSpring(pointerX, { stiffness: 120, damping: 20, mass: 0.6 });
  const smoothY = useSpring(pointerY, { stiffness: 120, damping: 20, mass: 0.6 });

  const rotateX = useTransform(smoothY, [0, 1], [3.5, -3.5]);
  const rotateY = useTransform(smoothX, [0, 1], [-4, 4]);
  const sheenX = useTransform(smoothX, [0, 1], ['0%', '100%']);
  const sheenY = useTransform(smoothY, [0, 1], ['0%', '100%']);

  const foilSheenBackground = useMotionTemplate`radial-gradient(480px circle at ${sheenX} ${sheenY}, rgba(228, 210, 160, 0.24), rgba(198, 164, 93, 0.06) 45%, transparent 72%)`;

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse' || !frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    pointerX.set(Math.max(0, Math.min(1, x)));
    pointerY.set(Math.max(0, Math.min(1, y)));
  };

  const handlePointerLeave = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 bg-[#F8F5EE] overflow-hidden"
    >
      {/* Subtle Sunlit Warm Gold Ambient Aura */}
      <motion.div
        style={{ opacity: auraOpacity }}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-8%] w-[540px] h-[540px] sm:w-[720px] sm:h-[720px] rounded-full bg-radial from-[#E4D2A0]/35 via-[#C6A45D]/10 to-transparent blur-3xl"
      />

      {/* Delicate Animated Architectural Hairlines */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-24 right-0 w-2/5 h-px bg-gradient-to-l from-[#C6A45D]/50 to-transparent origin-right"
        aria-hidden="true"
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none hidden lg:block absolute top-24 right-12 w-px h-40 bg-gradient-to-b from-[#C6A45D]/40 to-transparent origin-top"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Editorial Typography */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-7">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-3"
            >
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="h-px w-8 bg-[#C6A45D] origin-left"
                aria-hidden="true"
              />
              <p className="text-[11px] sm:text-xs font-medium tracking-[0.26em] text-[#124E46]">
                DESIGN · DETAIL · PERSONALITY
              </p>
            </motion.div>

            {/* Masked Word-by-Word Editorial Headline Reveal */}
            <h1 className="font-serif text-[clamp(2.6rem,4.7vw,4.35rem)] font-semibold text-[#0B332E] leading-[1.06] tracking-tight">
              {HEADLINE_WORDS.map((word, index) => (
                <span
                  key={word + index}
                  className="inline-block overflow-hidden align-bottom mr-[0.24em] pb-[0.06em]"
                >
                  <motion.span
                    initial={{ y: '110%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    transition={{
                      duration: 0.85,
                      delay: 0.12 + index * 0.075,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`inline-block ${
                      word === 'Story.' ? 'italic text-[#124E46]' : ''
                    }`}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.48, ease: [0.16, 1, 0.3, 1] }}
              className="text-base sm:text-lg leading-relaxed text-[#252525]/80 max-w-xl"
            >
              Beautifully designed invitations, thoughtful packaging, and creative branding that make your moments and your brand unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <a
                href="#portfolio"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#124E46] text-[#F8F5EE] hover:bg-[#0B332E] text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_12px_28px_rgba(18,78,70,0.22)] hover:-translate-y-0.5 rounded-sm whitespace-nowrap shrink-0"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-[#E4D2A0]/28 to-transparent"
                />
                <span className="relative">Explore Our Creations</span>
                <ArrowRight
                  className="relative w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-transparent text-[#0B332E] border border-[#124E46]/35 hover:border-[#C6A45D] hover:bg-[#124E46]/5 text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 rounded-sm whitespace-nowrap shrink-0"
              >
                <span>Start Your Design</span>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
              className="pt-4 border-t border-[#C6A45D]/30 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[#252525]/65"
            >
              <span>Wedding Invitations</span>
              <span aria-hidden="true" className="text-[#C6A45D]">
                ·
              </span>
              <span>Digital E-Invites</span>
              <span aria-hidden="true" className="text-[#C6A45D]">
                ·
              </span>
              <span>Custom Packaging</span>
              <span aria-hidden="true" className="text-[#C6A45D]">
                ·
              </span>
              <span>Brand Identity</span>
            </motion.div>
          </div>

          {/* Right Interactive 3D Tilt & Silk Reveal Composition */}
          <div className="lg:col-span-7 relative [perspective:1200px]">
            <div className="relative lg:pl-10">
              {/* Primary 4:3 Showcase Frame with 3D Pointer Tilt + Foil Light Sheen */}
              <motion.div
                ref={frameRef}
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                style={{
                  y: mainImageY,
                  rotateX,
                  rotateY,
                  transformStyle: 'preserve-3d',
                }}
                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 1.0, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[4/3] w-full border border-[#C6A45D]/45 bg-white p-2 sm:p-3 shadow-[0_28px_70px_rgba(11,51,46,0.1)] will-change-transform"
              >
                {/* Animated Antique Gold Corner Brackets */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1.5 -right-1.5 w-12 h-[1.5px] bg-[#C6A45D] origin-right"
                />
                <motion.span
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-1.5 -right-1.5 w-[1.5px] h-12 bg-[#C6A45D] origin-top"
                />

                {/* Silk Curtain Image Reveal */}
                <div className="relative w-full h-full overflow-hidden">
                  <motion.div
                    initial={{ scale: 1.09 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.3, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full h-full"
                  >
                    <StudioImage
                      src={STUDIO_IMAGES.heroSuite}
                      alt="Bespoke Indian wedding invitation suite with emerald envelope, gold foil arch card, and brass wax seal"
                      fallbackLabel="Riwaaz Invitation Suite"
                      className="w-full h-full"
                      loading="eager"
                    />
                  </motion.div>

                  {/* Soft Emerald/Ivory Unveiling Curtain */}
                  <motion.div
                    initial={{ scaleX: 1 }}
                    animate={{ scaleX: 0 }}
                    transition={{ duration: 1.05, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-[#124E46] origin-right z-10"
                  />

                  {/* Pointer-tracking Antique Gold Foil Reflection */}
                  <motion.div
                    aria-hidden="true"
                    style={{ background: foilSheenBackground }}
                    className="pointer-events-none absolute inset-0 z-10 mix-blend-soft-light transition-opacity duration-300"
                  />
                </div>

                {/* Subtle Embossed Brass/Gold Studio Seal Accent */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
                  className="hidden sm:flex absolute -top-5 -right-5 w-14 h-14 rounded-full bg-[#0B332E] border border-[#C6A45D]/70 shadow-lg items-center justify-center text-[#E4D2A0] z-20"
                  aria-hidden="true"
                >
                  <BrandCrest className="w-7 h-7" />
                </motion.div>
              </motion.div>

              {/* Asymmetrical Floating Studio Craft Inset */}
              <motion.div
                style={{ y: insetY }}
                initial={{ opacity: 0, y: 32, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.95, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
                className="hidden sm:block absolute -bottom-10 left-0 w-40 md:w-48 z-20"
              >
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="aspect-[3/4] border border-[#C6A45D]/50 bg-[#F8F5EE] p-1.5 shadow-[0_22px_48px_rgba(11,51,46,0.16)]"
                >
                  <StudioImage
                    src={STUDIO_IMAGES.storyCraft}
                    alt="Gold foil sheets, emerald cardstock swatches, and brass wax seal on studio linen"
                    fallbackLabel="Craft & Materiality"
                    className="w-full h-full"
                    imgClassName="transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </motion.div>
              </motion.div>

              {/* Subtle Editorial Caption */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-5 sm:mt-6 flex justify-end"
              >
                <p className="text-xs text-[#252525]/60 tracking-wide">
                  Bespoke Stationery · Foil &amp; Paper Craft · Concept Showcase
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
