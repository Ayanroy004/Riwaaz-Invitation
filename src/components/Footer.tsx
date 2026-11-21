import React from 'react';
import { Instagram, Phone, ArrowUpRight } from 'lucide-react';
import { NAV_LINKS } from '../data/studioData';
import { STUDIO_CONTACT, buildWhatsAppUrl } from '../utils/whatsapp';
import { BrandCrest } from './OrnamentMotif';

const FOOTER_SERVICES = [
  'Invitations',
  'Digital Invitations',
  'Packaging',
  'Branding',
  'Stickers',
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B332E] text-[#F8F5EE] border-t border-[#C6A45D]/25">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#C6A45D]/20">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-3 text-[#F8F5EE] hover:text-[#E4D2A0] transition-colors"
            >
              <BrandCrest className="w-8 h-8 text-[#E4D2A0]" />
              <span className="font-serif text-2xl font-semibold tracking-tight">
                {STUDIO_CONTACT.name}
              </span>
            </a>

            <p className="font-serif italic text-lg text-[#E4D2A0]">
              &ldquo;{STUDIO_CONTACT.tagline}&rdquo;
            </p>

            <p className="text-sm text-[#F8F5EE]/75 max-w-sm leading-relaxed">
              Creative design studio crafting bespoke wedding invitations, digital e-invites, custom packaging, stickers, labels, and brand identities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-lg font-medium text-[#E4D2A0] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F8F5EE]/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-[#E4D2A0] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="font-serif text-lg font-medium text-[#E4D2A0] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-[#F8F5EE]/80">
              {FOOTER_SERVICES.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="hover:text-[#E4D2A0] transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="font-serif text-lg font-medium text-[#E4D2A0] mb-4">
              Connect
            </h3>
            <div className="space-y-3 text-sm text-[#F8F5EE]/85">
              <a
                href={STUDIO_CONTACT.phoneHref}
                className="flex items-center gap-2.5 hover:text-[#E4D2A0] transition-colors tabular-nums"
              >
                <Phone className="w-4 h-4 text-[#C6A45D] shrink-0" aria-hidden="true" />
                <span>{STUDIO_CONTACT.phoneDisplay}</span>
              </a>

              <a
                href={STUDIO_CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#E4D2A0] transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#C6A45D] shrink-0" aria-hidden="true" />
                <span>{STUDIO_CONTACT.instagramHandle}</span>
              </a>

              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 pt-2 text-xs font-medium tracking-wide text-[#E4D2A0] hover:text-white underline underline-offset-4 decoration-[#C6A45D]/60 transition-colors"
              >
                <span>Message on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F8F5EE]/65">
          <p>
            &copy; {currentYear} {STUDIO_CONTACT.name}. All rights reserved.
          </p>
          <p>Invitations · Packaging · Brand Identity</p>
        </div>
      </div>
    </footer>
  );
};
