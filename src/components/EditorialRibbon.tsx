import React from 'react';

const RIBBON_ITEMS = [
  'Wedding Invitations',
  'Digital E-Invites',
  'Custom Packaging',
  'Stickers & Product Labels',
  'Logo & Brand Identity',
  'Booklets & Calendar Cards',
];

export const EditorialRibbon: React.FC = () => {
  const trackItems = [...RIBBON_ITEMS, ...RIBBON_ITEMS, ...RIBBON_ITEMS];

  return (
    <div
      className="relative overflow-hidden bg-[#0B332E] text-[#E4D2A0] border-y border-[#C6A45D]/30 py-3.5 select-none"
      aria-hidden="true"
    >
      <div className="flex w-max animate-editorial-marquee hover:[animation-play-state:paused]">
        {trackItems.map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="flex items-center gap-6 px-6 text-xs sm:text-sm tracking-[0.18em] uppercase whitespace-nowrap"
          >
            <span className="font-serif italic normal-case tracking-normal text-base sm:text-lg text-[#F8F5EE]/90">
              {item}
            </span>
            <span className="w-1.5 h-1.5 rotate-45 bg-[#C6A45D] shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
