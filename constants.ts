import { Product, Story, Logo } from './types';

export const NAV_LINKS = [
  "Shop All",
  "Clomaná",
  "CMFRT",
  "Marshmallow Quiz",
  "Soft Skin Cream",
  "Christmas",
  "Loyalty"
];

export const HERO_IMAGE_DESKTOP = "//clomana.com/cdn/shop/files/1_95f90abc-7a5f-45f7-9c3f-3931a8246a00.jpg?v=1766136999";
export const HERO_IMAGE_MOBILE = "//clomana.com/cdn/shop/files/2_115e47d0-9a2f-420c-841b-7e9e8844a08f.jpg?v=1766137012";

export const CATEGORIES = [
  { id: 'new', name: 'New Arrivals' },
  { id: 'christmas', name: 'Christmas' },
  { id: 'stocking', name: 'Stocking Fillers' },
  { id: 'mystery', name: 'Mystery' },
  { id: 'sponges', name: 'Sponges' },
  { id: 'bundles', name: 'Bundles' },
];

export const NEW_ARRIVALS: Product[] = [
  {
    id: '1',
    title: 'Marshmallow Original Duo Bauble',
    price: '£18.00',
    image: '//clomana.com/cdn/shop/files/Product_Pages_3.jpg?v=1765275465&width=600',
    rating: 5.0,
    badge: 'New'
  },
  {
    id: '2',
    title: 'Marshmallow Sponge Cracker Trio - Strawberry Cream',
    price: '£15.00',
    originalPrice: '£36.00',
    image: '//clomana.com/cdn/shop/files/Product_Pages_1.jpg?v=1765275364&width=600',
    rating: 5.0,
    badge: 'Sold Out'
  },
  {
    id: '3',
    title: 'Mystery Marshmallow Sponge',
    price: '£7.50',
    originalPrice: '£12.95',
    image: '//clomana.com/cdn/shop/files/12_76c0daf8-50de-442b-9a37-3441b0b67980.jpg?v=1763745367&width=600',
    rating: 5.0
  },
  {
    id: '4',
    title: 'Christmas Box - Gold',
    price: '£150.00',
    image: '//clomana.com/cdn/shop/files/1_b5a9a66b-9a18-4a8d-af5b-a3ca0f541c51.jpg?v=1763988958&width=600',
    rating: 5.0
  }
];

export const OFFERS_PRODUCTS: Product[] = [
  {
    id: '5',
    title: 'CMFRT Luxury Soft Long Pyjama Set - Frankie',
    price: '£50.00',
    originalPrice: '£65.00',
    image: '//clomana.com/cdn/shop/files/45.jpg?v=1763463384&width=600',
    rating: 5.0,
    badge: 'Sale'
  },
  {
    id: '6',
    title: 'Mystery Brush & Sponge Cleanser',
    price: '£13.50',
    originalPrice: '£18.00',
    image: '//clomana.com/cdn/shop/files/15_d2afae43-c281-4b99-ae1d-d960812b4de5.jpg?v=1763745391&width=600',
    rating: 4.5
  }
];

export const STORIES: Story[] = [
  {
    id: '1',
    title: 'The Art of the Marshmallow Sponge',
    subtitle: 'Discover the secret to flawless application',
    image: '//clomana.com/cdn/shop/files/Product_Pages.jpg?v=1765275196&width=800',
    linkText: 'Read & Shop'
  },
  {
    id: '2',
    title: 'Get Ready for the Holidays',
    subtitle: 'Our top picks for festive glam',
    image: '//clomana.com/cdn/shop/files/CC2A0160.webp?v=1764352759&width=800',
    linkText: 'Read & Shop'
  },
  {
    id: '3',
    title: 'Mystery Boxes Explained',
    subtitle: 'What could you find inside?',
    image: '//clomana.com/cdn/shop/files/MysteryProductImages.jpg?v=1763745367&width=800',
    linkText: 'Read & Shop'
  }
];

export const LOGOS: Logo[] = [
  { id: '1', name: 'Sephora', src: '//clomana.com/cdn/shop/files/1280px-Sephora_logo_svg.png?v=1718899042&width=140' },
  { id: '2', name: 'ASOS', src: '//clomana.com/cdn/shop/files/Asos-logo.png?v=1736179561&width=140' },
  { id: '3', name: 'Boots', src: '//clomana.com/cdn/shop/files/boots_logo_icon_247440.webp?v=1736179605&width=140' },
  { id: '4', name: 'TikTok Shop', src: '//clomana.com/cdn/shop/files/tiktok_shop-logo_brandlogos.net_5ewfz.png?v=1736179638&width=140' },
  { id: '5', name: 'John Lewis', src: '//clomana.com/cdn/shop/files/John_Lewis_Announcement_1.png?v=1753699736&width=140' },
  { id: '6', name: 'Debenhams', src: '//clomana.com/cdn/shop/files/DEBENHAMS_LOGO_2023__1.png?v=1753699919&width=140' }
];
