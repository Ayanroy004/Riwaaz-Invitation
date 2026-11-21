import React from 'react';
import { MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Riwaaz Invitation on WhatsApp"
      className="md:hidden fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 px-4 py-3 bg-[#124E46] text-[#F8F5EE] border border-[#C6A45D]/60 shadow-lg hover:bg-[#0B332E] transition-colors rounded-full text-xs font-medium whitespace-nowrap"
    >
      <MessageCircle className="w-4 h-4 text-[#E4D2A0]" aria-hidden="true" />
      <span>WhatsApp</span>
    </a>
  );
};
