export const STUDIO_CONTACT = {
  name: 'Riwaaz Invitation',
  tagline: 'Designed to Leave a Lasting Impression',
  phoneDisplay: '87990 70042',
  phoneHref: 'tel:+918799070042',
  whatsappNumber: '918799070042',
  instagramHandle: '@riwaaz_invitation',
  instagramUrl: 'https://www.instagram.com/riwaaz_invitation/',
} as const;

export function buildWhatsAppUrl(customMessage?: string): string {
  const defaultMessage =
    'Hello Riwaaz Invitation! I am interested in your design services. I would like to discuss a custom project.';
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${STUDIO_CONTACT.whatsappNumber}?text=${text}`;
}

export interface EnquiryPayload {
  name: string;
  phone: string;
  projectType: string;
  eventDate?: string;
  quantity?: string;
  requirements: string;
}

export function buildEnquiryWhatsAppMessage(payload: EnquiryPayload): string {
  const lines = [
    'Hello Riwaaz Invitation! I would like to enquire about a custom design project.',
    '',
    `Name: ${payload.name.trim()}`,
    `Phone: ${payload.phone.trim()}`,
    `Project Type: ${payload.projectType}`,
  ];

  if (payload.eventDate?.trim()) {
    lines.push(`Event / Target Date: ${payload.eventDate.trim()}`);
  }
  if (payload.quantity?.trim()) {
    lines.push(`Estimated Quantity: ${payload.quantity.trim()}`);
  }
  if (payload.requirements.trim()) {
    lines.push(`Requirements: ${payload.requirements.trim()}`);
  }

  return lines.join('\n');
}
