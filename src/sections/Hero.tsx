import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import video from "../assets/video/hero-video.mp4";

const HEADLINE_WORDS = ["Every", "Detail", "Tells", "a", "Story."];

const HERO_BACKGROUND_VIDEO_SRC = video;

export const Hero: React.FC = () => {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const auraOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.25]);
  const bgVideoY = useTransform(scrollYProgress, [0, 1], [0, 64]);
  const bgVideoScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.12]);

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-[82vh] flex items-center pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-40 lg:pb-32 bg-[#0B332E] overflow-hidden"
    >
      {/* Background Video Layer with Smooth Parallax & Editorial Scrim */}
      <motion.div
        style={{ y: bgVideoY, scale: bgVideoScale }}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden will-change-transform"
      >
        <motion.video
          src={HERO_BACKGROUND_VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover"
        />

        {/* Soft gradient scrim so video shines while text stays crisp and attractive */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#F8F5EE]/92 via-[#F8F5EE]/72 to-[#F8F5EE]/25"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-[#F8F5EE]/60 via-transparent to-[#F8F5EE]/85"
        />
      </motion.div>

      {/* Subtle Sunlit Warm Gold Ambient Aura */}
      <motion.div
        style={{ opacity: auraOpacity }}
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-[-8%] w-[540px] h-[540px] sm:w-[720px] sm:h-[720px] rounded-full bg-radial from-[#E4D2A0]/35 via-[#C6A45D]/10 to-transparent blur-3xl z-[1]"
      />

      {/* Delicate Animated Architectural Hairlines */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute top-24 right-0 w-2/5 h-px bg-gradient-to-l from-[#C6A45D]/50 to-transparent origin-right z-[1]"
        aria-hidden="true"
      />
      <motion.div
        initial={{ scaleY: 0, opacity: 0 }}
        animate={{ scaleY: 1, opacity: 1 }}
        transition={{ duration: 1.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none hidden lg:block absolute top-24 right-12 w-px h-40 bg-gradient-to-b from-[#C6A45D]/40 to-transparent origin-top z-[1]"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10">
        <div className="max-w-3xl space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-px w-10 bg-[#C6A45D] origin-left"
              aria-hidden="true"
            />
            <p className="text-[11px] sm:text-xs font-semibold tracking-[0.28em] text-[#124E46]">
              DESIGN · DETAIL · PERSONALITY
            </p>
          </motion.div>

          {/* Masked Word-by-Word Editorial Headline Reveal */}
          <h1 className="font-serif text-[clamp(2.9rem,5.6vw,4.85rem)] font-semibold text-[#0B332E] leading-[1.05] tracking-tight drop-shadow-[0_1px_12px_rgba(248,245,238,0.85)]">
            {HEADLINE_WORDS.map((word, index) => (
              <span
                key={word + index}
                className="inline-block overflow-hidden align-bottom mr-[0.24em] pb-[0.06em]"
              >
                <motion.span
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.12 + index * 0.075,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`inline-block ${
                    word === "Story." ? "italic text-[#124E46]" : ""
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
            transition={{
              duration: 0.8,
              delay: 0.48,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-base sm:text-xl leading-relaxed text-[#252525]/90 max-w-2xl"
          >
            Beautifully designed invitations, thoughtful packaging, and creative
            branding that make your moments and your brand unforgettable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.58,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pt-2 flex flex-wrap items-center gap-4"
          >
            <a
              href="#portfolio"
              className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#124E46] text-[#F8F5EE] hover:bg-[#0B332E] text-sm font-medium tracking-wide transition-all duration-300 hover:shadow-[0_14px_30px_rgba(18,78,70,0.28)] hover:-translate-y-0.5 rounded-sm whitespace-nowrap shrink-0"
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
              className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-[#F8F5EE]/85 backdrop-blur-xs text-[#0B332E] border border-[#124E46]/40 hover:border-[#C6A45D] hover:bg-[#F8F5EE] text-sm font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 rounded-sm whitespace-nowrap shrink-0"
            >
              <span>Start Your Design</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.68,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="pt-5 border-t border-[#C6A45D]/40 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-[#252525]/80"
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
      </div>
    </section>
  );
};
