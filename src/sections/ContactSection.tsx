import React, { useState } from 'react';
import {
  Phone,
  Instagram,
  MessageCircle,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';
import { PROJECT_TYPE_OPTIONS } from '../data/studioData';
import {
  STUDIO_CONTACT,
  buildWhatsAppUrl,
  buildEnquiryWhatsAppMessage,
} from '../utils/whatsapp';
import { GoldHairline } from '../components/OrnamentMotif';

interface FormErrors {
  name?: string;
  phone?: string;
  requirements?: string;
}

export const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState(PROJECT_TYPE_OPTIONS[0]);
  const [eventDate, setEventDate] = useState('');
  const [quantity, setQuantity] = useState('');
  const [requirements, setRequirements] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedMessageUrl, setSubmittedMessageUrl] = useState<string | null>(
    null
  );

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};
    if (!name.trim()) {
      nextErrors.name = 'Please enter your name.';
    }
    const digitsOnly = phone.replace(/\D/g, '');
    if (!digitsOnly || digitsOnly.length < 8) {
      nextErrors.phone = 'Please enter a valid contact or WhatsApp number.';
    }
    if (!requirements.trim()) {
      nextErrors.requirements = 'Please share a brief note about your design requirements.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    const message = buildEnquiryWhatsAppMessage({
      name,
      phone,
      projectType,
      eventDate,
      quantity,
      requirements,
    });
    const url = buildWhatsAppUrl(message);
    setSubmittedMessageUrl(url);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#124E46] text-[#F8F5EE]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Studio Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-medium tracking-[0.22em] uppercase text-[#E4D2A0]">
              Start an Enquiry
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-[1.12]">
              Let&apos;s Create Something Beautiful.
            </h2>

            <GoldHairline />

            <p className="text-sm sm:text-base text-[#F8F5EE]/85 leading-relaxed">
              Have an idea for an invitation, packaging, or brand design? Let&apos;s bring it to life.
            </p>

            <div className="pt-4 space-y-5 border-t border-[#C6A45D]/25">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#E4D2A0]/85 mb-1.5">
                  Phone &amp; WhatsApp
                </p>
                <a
                  href={STUDIO_CONTACT.phoneHref}
                  className="inline-flex items-center gap-2.5 text-lg font-medium text-white hover:text-[#E4D2A0] transition-colors tabular-nums"
                >
                  <Phone className="w-4 h-4 text-[#C6A45D]" aria-hidden="true" />
                  <span>{STUDIO_CONTACT.phoneDisplay}</span>
                </a>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#E4D2A0]/85 mb-1.5">
                  Instagram
                </p>
                <a
                  href={STUDIO_CONTACT.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-base font-medium text-white hover:text-[#E4D2A0] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#C6A45D]" aria-hidden="true" />
                  <span>{STUDIO_CONTACT.instagramHandle}</span>
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#C6A45D] text-[#0B332E] hover:bg-[#E4D2A0] text-sm font-semibold tracking-wide transition-colors duration-200 rounded-sm whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>Chat Directly on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Enquiry Form */}
          <div className="lg:col-span-7 bg-[#0B332E] border border-[#C6A45D]/35 p-6 sm:p-10">
            {submittedMessageUrl ? (
              <div className="py-8 space-y-5 text-center sm:text-left">
                <div className="inline-flex items-center gap-2 text-[#E4D2A0]">
                  <CheckCircle2 className="w-6 h-6" aria-hidden="true" />
                  <span className="font-serif text-2xl font-semibold text-white">
                    Your Enquiry Details Are Ready
                  </span>
                </div>
                <p className="text-sm text-[#F8F5EE]/85 leading-relaxed max-w-lg">
                  Thank you, <span className="text-white font-medium">{name}</span>. Click below to send your prepared project brief directly to Riwaaz Invitation on WhatsApp.
                </p>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href={submittedMessageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C6A45D] text-[#0B332E] hover:bg-[#E4D2A0] text-sm font-semibold transition-colors rounded-sm whitespace-nowrap"
                  >
                    <span>Send Enquiry on WhatsApp</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={() => setSubmittedMessageUrl(null)}
                    className="px-4 py-3 text-xs sm:text-sm text-[#E4D2A0] hover:text-white underline underline-offset-4 cursor-pointer"
                  >
                    Edit Details
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enquiry-name"
                      className="block text-xs font-medium tracking-wide text-[#E4D2A0] mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      id="enquiry-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 bg-[#124E46]/70 border border-[#C6A45D]/35 text-sm text-white placeholder:text-[#F8F5EE]/45 focus:border-[#E4D2A0] focus:outline-none rounded-sm"
                    />
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-[#E4D2A0]" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-phone"
                      className="block text-xs font-medium tracking-wide text-[#E4D2A0] mb-2"
                    >
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      id="enquiry-phone"
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        if (errors.phone) setErrors((prev) => ({ ...prev, phone: undefined }));
                      }}
                      placeholder="e.g. 98765 43210"
                      className="w-full px-4 py-3 bg-[#124E46]/70 border border-[#C6A45D]/35 text-sm text-white placeholder:text-[#F8F5EE]/45 focus:border-[#E4D2A0] focus:outline-none rounded-sm"
                    />
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-[#E4D2A0]" role="alert">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="enquiry-type"
                      className="block text-xs font-medium tracking-wide text-[#E4D2A0] mb-2"
                    >
                      Type of Project
                    </label>
                    <select
                      id="enquiry-type"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-3.5 py-3 bg-[#124E46]/90 border border-[#C6A45D]/35 text-sm text-white focus:border-[#E4D2A0] focus:outline-none rounded-sm"
                    >
                      {PROJECT_TYPE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-date"
                      className="block text-xs font-medium tracking-wide text-[#E4D2A0] mb-2"
                    >
                      Event Date (Optional)
                    </label>
                    <input
                      id="enquiry-date"
                      type="text"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      placeholder="e.g. December 2026"
                      className="w-full px-4 py-3 bg-[#124E46]/70 border border-[#C6A45D]/35 text-sm text-white placeholder:text-[#F8F5EE]/45 focus:border-[#E4D2A0] focus:outline-none rounded-sm"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="enquiry-quantity"
                      className="block text-xs font-medium tracking-wide text-[#E4D2A0] mb-2"
                    >
                      Quantity (Optional)
                    </label>
                    <input
                      id="enquiry-quantity"
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      placeholder="e.g. 150 cards"
                      className="w-full px-4 py-3 bg-[#124E46]/70 border border-[#C6A45D]/35 text-sm text-white placeholder:text-[#F8F5EE]/45 focus:border-[#E4D2A0] focus:outline-none rounded-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enquiry-requirements"
                    className="block text-xs font-medium tracking-wide text-[#E4D2A0] mb-2"
                  >
                    Description of Requirements *
                  </label>
                  <textarea
                    id="enquiry-requirements"
                    rows={4}
                    required
                    value={requirements}
                    onChange={(e) => {
                      setRequirements(e.target.value);
                      if (errors.requirements) {
                        setErrors((prev) => ({ ...prev, requirements: undefined }));
                      }
                    }}
                    placeholder="Share your preferred style, colours, occasion, or packaging goals..."
                    className="w-full px-4 py-3 bg-[#124E46]/70 border border-[#C6A45D]/35 text-sm text-white placeholder:text-[#F8F5EE]/45 focus:border-[#E4D2A0] focus:outline-none rounded-sm resize-y"
                  />
                  {errors.requirements && (
                    <p className="mt-1.5 text-xs text-[#E4D2A0]" role="alert">
                      {errors.requirements}
                    </p>
                  )}
                </div>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#C6A45D] text-[#0B332E] hover:bg-[#E4D2A0] text-sm font-semibold tracking-wide transition-colors duration-200 rounded-sm whitespace-nowrap cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" aria-hidden="true" />
                    <span>Prepare WhatsApp Enquiry</span>
                  </button>

                  <p className="text-xs text-[#F8F5EE]/65">
                    Prepares a pre-filled WhatsApp message to {STUDIO_CONTACT.phoneDisplay}
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
