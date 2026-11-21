import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../data/studioData';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { StudioImage } from './StudioImage';

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  const whatsappHref = buildWhatsAppUrl(service.whatsappPrompt);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative flex flex-col bg-white border border-[#252525]/10 hover:border-[#C6A45D]/70 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(11,51,46,0.07)] transition-all duration-300"
    >
      <div
        className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] bg-[#C6A45D] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10"
        aria-hidden="true"
      />

      <div className={`w-full overflow-hidden ${service.aspectClass}`}>
        <StudioImage
          src={service.image}
          alt={service.imageAlt}
          fallbackLabel={service.title}
          className="w-full h-full"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <div className="flex items-baseline justify-between gap-4 mb-3">
          <span className="text-xs font-medium tracking-[0.18em] text-[#C6A45D] tabular-nums">
            {service.number}
          </span>
        </div>

        <h3 className="font-serif text-2xl font-semibold text-[#0B332E] leading-snug mb-3 group-hover:text-[#124E46] transition-colors duration-200">
          {service.title}
        </h3>

        <p className="text-sm leading-relaxed text-[#252525]/80 mb-5">
          {service.description}
        </p>

        <ul className="space-y-1.5 text-xs text-[#252525]/70 mb-7 border-t border-[#252525]/8 pt-4">
          {service.examples.map((example) => (
            <li key={example} className="flex items-center gap-2">
              <span className="w-1 h-1 bg-[#C6A45D] shrink-0" aria-hidden="true" />
              <span>{example}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-2 flex items-center justify-between gap-4">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[#124E46] hover:text-[#0B332E] transition-colors whitespace-nowrap shrink-0 group/link"
          >
            <span>Enquire Now</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>

          <a
            href="#portfolio"
            className="text-xs text-[#252525]/60 hover:text-[#124E46] underline underline-offset-4 decoration-[#C6A45D]/50 transition-colors whitespace-nowrap shrink-0"
          >
            View Works
          </a>
        </div>
      </div>
    </motion.article>
  );
};
