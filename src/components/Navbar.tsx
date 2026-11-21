import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/studioData';
import { BrandCrest } from './OrnamentMotif';
import logo from '../assets/images/logo.png';
export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#F8F5EE]/92 backdrop-blur-md border-b border-[#C6A45D]/25 py-3 shadow-[0_4px_24px_rgba(11,51,46,0.05)]'
          : 'bg-[#F8F5EE]/70 backdrop-blur-[2px] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line brand mark */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 text-[#0B332E] hover:text-[#124E46] transition-colors whitespace-nowrap shrink-0"
          aria-label="Riwaaz Invitation Home"
        >
          {/* <BrandCrest className="w-7 h-7 text-[#124E46] shrink-0" /> */}
          <div className='w-8 flex items-center justify-center'>
            <img src={logo} alt="Logo"  />
          </div>
          <span className="font-serif text-xl sm:text-2xl font-semibold tracking-tight">
            Riwaaz Invitation
          </span>
        </a>

        {/* Zone 2: Clean single-line navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#252525]/85"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-[#124E46] transition-colors whitespace-nowrap shrink-0 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-px after:bg-[#C6A45D] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200 after:origin-left"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Drawer Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide bg-[#124E46] text-[#F8F5EE] hover:bg-[#0B332E] border border-[#124E46] transition-colors duration-200 rounded-sm whitespace-nowrap shrink-0"
          >
            Let&apos;s Create Something
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-sm text-[#0B332E] hover:bg-[#124E46]/10 transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] bottom-0 bg-[#F8F5EE] border-t border-[#C6A45D]/25 z-50 px-6 py-8 flex flex-col justify-between overflow-y-auto">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="py-3.5 text-2xl font-serif font-medium text-[#0B332E] border-b border-[#C6A45D]/20 hover:text-[#124E46] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-8 pb-4 space-y-4">
            <a
              href="#contact"
              onClick={handleLinkClick}
              className="flex items-center justify-center w-full py-3.5 px-6 text-sm font-medium bg-[#124E46] text-[#F8F5EE] hover:bg-[#0B332E] rounded-sm transition-colors"
            >
              Let&apos;s Create Something
            </a>
            <p className="text-center text-xs text-[#252525]/65">
              Riwaaz Invitation · Designed to Leave a Lasting Impression
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
