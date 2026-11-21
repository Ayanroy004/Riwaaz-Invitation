import React from 'react';
import { motion } from 'motion/react';

interface BrandCrestProps {
  className?: string;
}

export const BrandCrest: React.FC<BrandCrestProps> = ({ className = 'w-7 h-7' }) => {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Subtle outer architectural arch frame inspired by Indian invitation motifs */}
      <path
        d="M6 31V16.5C6 11.2 10.5 7.5 18 4C25.5 7.5 30 11.2 30 16.5V31H6Z"
        stroke="currentColor"
        strokeWidth="1.25"
      />
      <path
        d="M9.5 31V17.5C9.5 13.4 13 10.4 18 7.8C23 10.4 26.5 13.4 26.5 17.5V31"
        stroke="#C6A45D"
        strokeWidth="1"
      />
      {/* Delicate lotus diamond centerpiece */}
      <path
        d="M18 12.5C19.6 15.3 21 17 21 19C21 20.8 19.65 22.2 18 22.2C16.35 22.2 15 20.8 15 19C15 17 16.4 15.3 18 12.5Z"
        stroke="#C6A45D"
        strokeWidth="1.15"
      />
      <path
        d="M12.5 25.5H23.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
};

interface GoldHairlineProps {
  className?: string;
}

export const GoldHairline: React.FC<GoldHairlineProps> = ({ className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-3 ${className}`}
      aria-hidden="true"
    >
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-10 bg-[#C6A45D] origin-right"
      />
      <motion.svg
        initial={{ scale: 0.5, rotate: -45 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        viewBox="0 0 12 12"
        fill="none"
        className="w-2.5 h-2.5 text-[#C6A45D] shrink-0"
      >
        <path
          d="M6 0.5L11.5 6L6 11.5L0.5 6L6 0.5Z"
          stroke="currentColor"
          strokeWidth="1"
        />
      </motion.svg>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="h-px w-10 bg-[#C6A45D] origin-left"
      />
    </motion.div>
  );
};
