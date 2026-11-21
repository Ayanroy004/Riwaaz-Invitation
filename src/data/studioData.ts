export type PortfolioCategory =
  | 'All Projects'
  | 'Wedding Invitations'
  | 'Digital Invitations'
  | 'Packaging'
  | 'Branding'
  | 'Stickers'
  | 'Print Design';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  examples: string[];
  image: string;
  imageAlt: string;
  aspectClass: string;
  whatsappPrompt: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All Projects'>;
  label: 'Portfolio Preview' | 'Design Concept';
  shortDescription: string;
  fullDescription: string;
  details: string[];
  image: string;
  imageAlt: string;
  gridSpan: 'featured' | 'tall' | 'standard';
}

export interface WeddingStyleItem {
  id: string;
  styleName: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface PackagingHighlightItem {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface QualityPoint {
  id: string;
  title: string;
  description: string;
}

export interface InstagramTile {
  id: string;
  caption: string;
  category: string;
  image: string;
  imageAlt: string;
}

export const STUDIO_IMAGES = {
  heroSuite: '/src/assets/images/hero_wedding_suite_1795268590849.jpg',
  storyCraft: '/src/assets/images/story_studio_craft_1795268591161.jpg',
  weddingTraditional: '/src/assets/images/wedding_traditional_arch_1795268591249.jpg',
  weddingFloral: '/src/assets/images/wedding_minimal_floral_1795268591130.jpg',
  digitalEinvite: '/src/assets/images/digital_einvite_showcase_1795268591760.jpg',
  packagingBoxes: '/src/assets/images/packaging_luxury_boxes_1795268590930.jpg',
  stickersLabels: '/src/assets/images/stickers_labels_collection_1795268591127.jpg',
  brandingStationery: '/src/assets/images/branding_stationery_print_1795268591683.jpg',
  printBooklet: '/src/assets/images/print_booklet_calendar_1795268591089.jpg',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Our Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'wedding-invitations',
    number: '01',
    title: 'Wedding & Celebration Invitations',
    description:
      'Personalized invitation designs for weddings, engagements, ceremonies, and special celebrations.',
    examples: [
      'Traditional invitations',
      'Floral invitations',
      'Luxury invitation suites',
      'Customized invitation cards',
    ],
    image: STUDIO_IMAGES.weddingTraditional,
    imageAlt:
      'Traditional Indian wedding invitation card with antique gold foil arch and deep emerald envelope',
    aspectClass: 'aspect-[4/3]',
    whatsappPrompt:
      'Hello Riwaaz Invitation! I would like to enquire about custom Wedding & Celebration Invitations.',
  },
  {
    id: 'digital-invitations',
    number: '02',
    title: 'Digital Invitations',
    description:
      'Beautiful digital invitations designed to share your special moments with friends and family.',
    examples: [
      'Digital wedding invitations',
      'E-invites',
      'Event invitations',
      'Digital announcement designs',
    ],
    image: STUDIO_IMAGES.digitalEinvite,
    imageAlt:
      'Minimalist smartphone displaying an emerald and antique gold floral digital wedding e-invite',
    aspectClass: 'aspect-[4/3]',
    whatsappPrompt:
      'Hello Riwaaz Invitation! I am interested in designing a custom Digital Invitation / E-Invite.',
  },
  {
    id: 'custom-packaging',
    number: '03',
    title: 'Custom Packaging',
    description:
      'Custom packaging designed to create a memorable experience for your customers.',
    examples: [
      'Packaging boxes',
      'Paper bags',
      'Product packaging',
      'Gift packaging',
    ],
    image: STUDIO_IMAGES.packagingBoxes,
    imageAlt:
      'Custom deep forest green rigid gift boxes and kraft paper boutique bags with gold foil emblems',
    aspectClass: 'aspect-[4/3]',
    whatsappPrompt:
      'Hello Riwaaz Invitation! I would like to discuss Custom Packaging design for my products or gifts.',
  },
  {
    id: 'stickers-labels',
    number: '04',
    title: 'Custom Stickers & Labels',
    description:
      'Creative stickers and labels that add personality and identity to your products.',
    examples: [
      'Product stickers',
      'Branding stickers',
      'Custom labels',
      'Decorative stickers',
    ],
    image: STUDIO_IMAGES.stickersLabels,
    imageAlt:
      'Bespoke round boutique product stickers, matte emerald labels, and embossed gold foil seals',
    aspectClass: 'aspect-[4/3]',
    whatsappPrompt:
      'Hello Riwaaz Invitation! I am looking for Custom Stickers and Product Labels.',
  },
  {
    id: 'logo-brand-identity',
    number: '05',
    title: 'Logo & Brand Identity',
    description:
      'Creative visual identities that help businesses communicate their personality.',
    examples: [
      'Logo design',
      'Brand identity',
      'Business stationery',
      'Brand visuals',
    ],
    image: STUDIO_IMAGES.brandingStationery,
    imageAlt:
      'Luxury brand identity stationery suite with gilded business cards, embossed folder, and monogram',
    aspectClass: 'aspect-[4/3]',
    whatsappPrompt:
      'Hello Riwaaz Invitation! I would like to discuss Logo Design and Brand Identity for my business.',
  },
  {
    id: 'creative-print-design',
    number: '06',
    title: 'Creative Print Design',
    description:
      'Thoughtfully designed printed materials for personal celebrations and business needs.',
    examples: [
      'Magazine design',
      'Booklets',
      'Calendar cards',
      'Business cards & promotional materials',
    ],
    image: STUDIO_IMAGES.printBooklet,
    imageAlt:
      'Editorial open magazine booklet and minimalist desk calendar cards on warm ivory paper',
    aspectClass: 'aspect-[4/3]',
    whatsappPrompt:
      'Hello Riwaaz Invitation! I would like to enquire about Creative Print Design (booklets, calendars, or promotional materials).',
  },
];

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All Projects',
  'Wedding Invitations',
  'Digital Invitations',
  'Packaging',
  'Branding',
  'Stickers',
  'Print Design',
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'royal-emerald-suite',
    title: 'The Emerald & Gold Arch Wedding Suite',
    category: 'Wedding Invitations',
    label: 'Design Concept',
    shortDescription:
      'Botanical arch foil crest paired with a deep emerald envelope and custom brass wax seal.',
    fullDescription:
      'A multi-card wedding invitation concept pairing textured handmade cotton cardstock with a deep forest emerald pocket envelope. Detailed with antique gold botanical arches, RSVP insert cards, and a bespoke monogram wax seal.',
    details: [
      'Handmade Cotton Cardstock',
      'Antique Gold Foil Crest',
      'Deep Emerald Envelope',
      'Custom Monogram Seal',
    ],
    image: STUDIO_IMAGES.heroSuite,
    imageAlt:
      'Luxury Indian wedding invitation suite with emerald envelope, gold foil arch card, and brass wax seal',
    gridSpan: 'featured',
  },
  {
    id: 'jaipur-lotus-traditional',
    title: 'Lotus Pavilion Traditional Invitation',
    category: 'Wedding Invitations',
    label: 'Portfolio Preview',
    shortDescription:
      'Classic Indian palace arch illustration framed in gold foil with velvet-matte emerald wrapping.',
    fullDescription:
      'Inspired by heritage Indian architectural arches and lotus motifs, this celebration card balances intricate traditional illustration with crisp serif typography and a gold-tasseled emerald sleeve.',
    details: [
      'Cultural Illustration',
      'Deckled Edge Ivory Stock',
      'Velvet-Matte Emerald Envelope',
      'Matching RSVP & Itinerary Cards',
    ],
    image: STUDIO_IMAGES.weddingTraditional,
    imageAlt:
      'Ornate traditional Indian wedding invitation card featuring lotus and peacock palace arch motif',
    gridSpan: 'tall',
  },
  {
    id: 'botanical-vellum-suite',
    title: 'Minimal Floral Vellum & Silk Suite',
    category: 'Wedding Invitations',
    label: 'Design Concept',
    shortDescription:
      'Fine botanical line art wrapped in translucent vellum and raw champagne silk ribbon.',
    fullDescription:
      'Designed for intimate ceremonies and modern celebrations, this minimal floral concept pairs airy serif calligraphy with translucent vellum overlays, hand-torn edges, and a soft silk ribbon tie.',
    details: [
      'Botanical Line Art',
      'Translucent Vellum Wrap',
      'Silk Ribbon Detailing',
      'Custom Envelope Liner',
    ],
    image: STUDIO_IMAGES.weddingFloral,
    imageAlt:
      'Minimalist floral wedding invitation suite wrapped in translucent vellum and silk ribbon',
    gridSpan: 'standard',
  },
  {
    id: 'emerald-digital-einvite',
    title: 'Botanical Arch Digital E-Invite',
    category: 'Digital Invitations',
    label: 'Portfolio Preview',
    shortDescription:
      'Mobile-ready digital wedding invitation styled for effortless sharing over WhatsApp.',
    fullDescription:
      'Crafted specifically for seamless smartphone viewing, this digital invitation combines rich emerald backdrops with crisp gold botanical borders, clear ceremony schedules, and instant readability.',
    details: [
      'Mobile-First Vertical Layout',
      'High-Contrast Serif Typography',
      'Event Schedule & RSVP Layout',
      'Ready for Instant Sharing',
    ],
    image: STUDIO_IMAGES.digitalEinvite,
    imageAlt:
      'Smartphone displaying an emerald and antique gold floral digital wedding e-invite',
    gridSpan: 'tall',
  },
  {
    id: 'forest-kraft-packaging',
    title: 'Boutique Rigid Box & Kraft Bag System',
    category: 'Packaging',
    label: 'Design Concept',
    shortDescription:
      'Cohesive unboxing system uniting deep green gift boxes and natural kraft carrier bags.',
    fullDescription:
      'Thoughtful structural surface design for boutique gifting and retail brands. Combines matte deep forest rigid boxes and natural kraft paper bags unified by a geometric antique gold emblem.',
    details: [
      'Rigid Gift Box Artwork',
      'Kraft Paper Shopping Bags',
      'Geometric Gold Emblem',
      'Cohesive Brand System',
    ],
    image: STUDIO_IMAGES.packagingBoxes,
    imageAlt:
      'Deep green rigid gift boxes and natural kraft shopping bags featuring gold foil emblems',
    gridSpan: 'standard',
  },
  {
    id: 'apothecary-stickers-seals',
    title: 'Artisan Apothecary Stickers & Foil Seals',
    category: 'Stickers',
    label: 'Portfolio Preview',
    shortDescription:
      'Custom die-cut product labels, kraft pouch stickers, and embossed gold sealing stamps.',
    fullDescription:
      'A versatile label and sticker collection created to elevate handmade skincare, tea pouches, and boutique gift wraps. Includes circular brand badges, textured jar labels, and metallic foil seals.',
    details: [
      'Die-Cut Circular Stickers',
      'Jar & Bottle Product Labels',
      'Embossed Foil Seals',
      'Matte & Textured Finishes',
    ],
    image: STUDIO_IMAGES.stickersLabels,
    imageAlt:
      'Collection of custom round product stickers, botanical labels, and embossed gold packaging seals',
    gridSpan: 'standard',
  },
  {
    id: 'monogram-brand-stationery',
    title: 'Architectural Monogram Brand Identity',
    category: 'Branding',
    label: 'Design Concept',
    shortDescription:
      'Complete corporate stationery suite with gilded edge business cards and embossed folders.',
    fullDescription:
      'A refined visual identity concept built around an angular architectural monogram. Applied seamlessly across thick cotton business cards, presentation folders, custom envelopes, and letterheads.',
    details: [
      'Custom Monogram Logo',
      'Gilded Business Cards',
      'Embossed Presentation Folder',
      'Letterhead & Envelope System',
    ],
    image: STUDIO_IMAGES.brandingStationery,
    imageAlt:
      'Corporate brand identity suite with embossed folder, gilded business cards, and letterhead',
    gridSpan: 'standard',
  },
  {
    id: 'editorial-lookbook-calendar',
    title: 'Editorial Lookbook & Desk Calendar Cards',
    category: 'Print Design',
    label: 'Portfolio Preview',
    shortDescription:
      'Minimalist multi-page magazine layout paired with bespoke seasonal desk calendar cards.',
    fullDescription:
      'Clean editorial grid design for brand lookbooks, studio booklets, and annual desk calendar cards. Balances generous negative space with classic serif headings and subtle foil accents.',
    details: [
      'Editorial Magazine Spreads',
      'Custom Desk Calendar Cards',
      'Typographic Grid System',
      'Print-Ready Layout Architecture',
    ],
    image: STUDIO_IMAGES.printBooklet,
    imageAlt:
      'Open editorial magazine booklet next to minimalist desk calendar cards in a brass stand',
    gridSpan: 'tall',
  },
];

export const WEDDING_STYLES: WeddingStyleItem[] = [
  {
    id: 'traditional-indian',
    styleName: 'Traditional Indian',
    subtitle: 'Heritage Motifs & Palace Arches',
    description:
      'Intricate jharokha arches, lotus florals, and sacred cultural motifs rendered with regal gold detailing.',
    image: STUDIO_IMAGES.weddingTraditional,
    imageAlt: 'Traditional Indian palace arch wedding invitation card with gold foil details',
  },
  {
    id: 'minimal-floral',
    styleName: 'Minimal Floral',
    subtitle: 'Botanical Line Art & Soft Ivory',
    description:
      'Delicate botanical illustrations, deckled paper edges, and translucent vellum wraps for understated romance.',
    image: STUDIO_IMAGES.weddingFloral,
    imageAlt: 'Minimal floral wedding invitation with silk ribbon and vellum wrap',
  },
  {
    id: 'luxury-gold',
    styleName: 'Luxury Gold & Emerald',
    subtitle: 'Foil Crests & Wax Seals',
    description:
      'Rich forest green envelopes paired with antique gold foil stamping and custom monogram brass wax seals.',
    image: STUDIO_IMAGES.heroSuite,
    imageAlt: 'Luxury emerald and antique gold wedding invitation suite with wax seal',
  },
  {
    id: 'digital-einvites',
    styleName: 'Personalized Digital Suites',
    subtitle: 'Modern E-Invites for Instant Sharing',
    description:
      'Bespoke digital wedding invitations tailored to match your theme and shared effortlessly with guests.',
    image: STUDIO_IMAGES.digitalEinvite,
    imageAlt: 'Digital wedding e-invite on smartphone screen with floral border',
  },
];

export const PACKAGING_HIGHLIGHTS: PackagingHighlightItem[] = [
  {
    id: 'kraft-bags-boxes',
    title: 'Kraft Paper Packaging & Custom Bags',
    category: 'Packaging Boxes · Paper Bags',
    description:
      'Cohesive carrier bags and rigid gift boxes designed with crisp emblems that turn every unboxing into a signature moment.',
    image: STUDIO_IMAGES.packagingBoxes,
    imageAlt: 'Custom kraft paper bags and deep green rigid gift boxes',
  },
  {
    id: 'labels-stickers',
    title: 'Product Labels & Custom Stickers',
    category: 'Product Labels · Branding Stickers',
    description:
      'Distinctive jar labels, pouch seals, and die-cut stickers tailored to give artisanal and retail products shelf presence.',
    image: STUDIO_IMAGES.stickersLabels,
    imageAlt: 'Bespoke product labels, kraft pouch stickers, and embossed gold seals',
  },
  {
    id: 'logos-stationery',
    title: 'Brand Logos & Business Stationery',
    category: 'Logo Design · Business Cards',
    description:
      'Timeless monograms, letterheads, and tactile business stationery crafted to express your brand with clarity and poise.',
    image: STUDIO_IMAGES.brandingStationery,
    imageAlt: 'Custom logo identity applied to business cards, envelopes, and presentation folders',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Share Your Idea',
    description:
      'Tell us about your event, brand, vision, and requirements.',
  },
  {
    number: '02',
    title: 'Explore the Design',
    description:
      'We develop creative concepts based on your preferences.',
  },
  {
    number: '03',
    title: 'Refine the Details',
    description:
      'We work on the details to create a design that feels right.',
  },
  {
    number: '04',
    title: 'Create Your Final Design',
    description:
      'Your customized design is prepared according to the agreed requirements.',
  },
];

export const WHY_CHOOSE_POINTS: QualityPoint[] = [
  {
    id: 'personalized',
    title: 'Personalized Designs',
    description:
      'Every card, box, and brand mark is tailored around your story, occasion, and personal aesthetic.',
  },
  {
    id: 'attention-to-detail',
    title: 'Attention to Detail',
    description:
      'Thoughtful typography, balanced spacing, and refined colour harmony in every element we craft.',
  },
  {
    id: 'creative-ideas',
    title: 'Creative Ideas',
    description:
      'Fresh concepts that bridge cultural warmth with contemporary editorial design sensibility.',
  },
  {
    id: 'multiple-styles',
    title: 'Multiple Design Styles',
    description:
      'From ornate traditional Indian motifs to clean minimalist florals and modern brand systems.',
  },
  {
    id: 'custom-branding',
    title: 'Custom Branding Solutions',
    description:
      'Unified logos, product labels, stickers, and packaging built to help businesses stand apart.',
  },
  {
    id: 'celebrations-and-businesses',
    title: 'For Celebrations & Businesses',
    description:
      'One dedicated studio for both once-in-a-lifetime family milestones and growing product brands.',
  },
];

export const INSTAGRAM_GALLERY: InstagramTile[] = [
  {
    id: 'ig-1',
    caption: 'Emerald & Antique Gold Wedding Suite',
    category: 'Wedding Invitations',
    image: STUDIO_IMAGES.heroSuite,
    imageAlt: 'Emerald and antique gold wedding invitation flatlay',
  },
  {
    id: 'ig-2',
    caption: 'Inside the Studio Craft Table',
    category: 'Behind the Design',
    image: STUDIO_IMAGES.storyCraft,
    imageAlt: 'Stationery studio desk with wax seal stamp, gold foil, and silk ribbons',
  },
  {
    id: 'ig-3',
    caption: 'Heritage Lotus Palace Arch Invite',
    category: 'Traditional Invitations',
    image: STUDIO_IMAGES.weddingTraditional,
    imageAlt: 'Traditional Indian lotus motif wedding invitation',
  },
  {
    id: 'ig-4',
    caption: 'Rigid Boxes & Kraft Boutique Bags',
    category: 'Custom Packaging',
    image: STUDIO_IMAGES.packagingBoxes,
    imageAlt: 'Deep green gift boxes and kraft paper packaging bags',
  },
  {
    id: 'ig-5',
    caption: 'Bespoke Labels & Foil Seals',
    category: 'Stickers & Labels',
    image: STUDIO_IMAGES.stickersLabels,
    imageAlt: 'Custom stickers, jar labels, and gold packaging seals',
  },
  {
    id: 'ig-6',
    caption: 'Editorial Lookbook & Desk Calendar',
    category: 'Print Design',
    image: STUDIO_IMAGES.printBooklet,
    imageAlt: 'Minimalist lookbook magazine and desk calendar cards',
  },
];

export const PROJECT_TYPE_OPTIONS = [
  'Wedding & Celebration Invitations',
  'Digital Invitations / E-Invites',
  'Custom Packaging & Boxes',
  'Custom Stickers & Product Labels',
  'Logo Design & Brand Identity',
  'Magazine, Booklet & Calendar Print Design',
  'Multiple Services / Custom Suite',
];
