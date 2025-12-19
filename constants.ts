import { Product, Story, Logo } from './types';

export const NAV_LINKS = [
  "Shop All",
  "Clomaná",
  "CMFRT",
  "Christmas",
  "Loyalty"
];

export const HERO_IMAGE_DESKTOP = "//clomana.com/cdn/shop/files/1_95f90abc-7a5f-45f7-9c3f-3931a8246a00.jpg?v=1766136999";
export const HERO_IMAGE_MOBILE = "//clomana.com/cdn/shop/files/2_115e47d0-9a2f-420c-841b-7e9e8844a08f.jpg?v=1766137012";

export const CATEGORIES = [
  { id: 'exclusive', name: 'New & Exclusive' },
  { id: 'christmas', name: 'Christmas' },
  { id: 'stocking', name: 'Stocking Fillers' },
  { id: 'mystery', name: 'Mystery' },
];

export const CATEGORY_PRODUCTS: Record<string, Product[]> = {
  'exclusive': [
    {
      id: 'c1',
      title: 'Marshmallow Sponge Cracker Trio - Strawberry Cream',
      price: '£15.00',
      originalPrice: '£36.00',
      image: '//clomana.com/cdn/shop/files/Product_Pages_1.jpg?v=1765275364&width=600',
      rating: 5.0,
      badge: 'Exclusive'
    },
    {
      id: 'c2',
      title: 'CMFRT Luxury Soft Long Pyjama Set - Frankie',
      price: '£50.00',
      originalPrice: '£65.00',
      image: '//clomana.com/cdn/shop/files/45.jpg?v=1763463384&width=600',
      rating: 5.0,
      badge: 'New'
    },
    {
      id: 'c3',
      title: 'Marshmallow Original Duo Bauble',
      price: '£18.00',
      image: '//clomana.com/cdn/shop/files/Product_Pages_3.jpg?v=1765275465&width=600',
      rating: 4.9
    },
    {
      id: 'c4',
      title: 'Mystery Brush & Sponge Cleanser',
      price: '£13.50',
      originalPrice: '£18.00',
      image: '//clomana.com/cdn/shop/files/15_d2afae43-c281-4b99-ae1d-d960812b4de5.jpg?v=1763745391&width=600',
      rating: 4.7
    }
  ],
  'christmas': [
    {
      id: 'x1',
      title: 'Christmas Box - Gold',
      price: '£150.00',
      image: '//clomana.com/cdn/shop/files/1_b5a9a66b-9a18-4a8d-af5b-a3ca0f541c51.jpg?v=1763988958&width=600',
      rating: 5.0,
      badge: 'Limited'
    },
    {
      id: 'x2',
      title: 'Christmas Box - Silver',
      price: '£100.00',
      image: '//clomana.com/cdn/shop/files/2_20187546-3d02-4df1-ac01-bfa024193adb.jpg?v=1763988915&width=600',
      rating: 4.8
    },
    {
      id: 'x3',
      title: 'Marshmallow Sponge - Christmas Edition',
      price: '£12.00',
      image: '//clomana.com/cdn/shop/files/Product_Pages_2.jpg?v=1765275418&width=600',
      rating: 5.0
    },
    {
      id: 'x4',
      title: 'Festive Brush Set',
      price: '£45.00',
      image: '//clomana.com/cdn/shop/files/4_cf203dac-8742-4333-bd5e-105233b1d2dc.jpg?v=1763988958&width=600',
      rating: 4.9
    }
  ],
  'stocking': [
    {
      id: 's1',
      title: 'Mini Marshmallow Sponge',
      price: '£6.00',
      image: '//clomana.com/cdn/shop/files/Product_Pages_3.jpg?v=1765275465&width=600',
      rating: 4.8
    },
    {
      id: 's2',
      title: 'Lip Oil - Berry',
      price: '£8.00',
      image: '//clomana.com/cdn/shop/files/Product_Pages_1.jpg?v=1765275364&width=600',
      rating: 4.5
    },
    {
      id: 's3',
      title: 'Pocket Mirror',
      price: '£5.00',
      image: '//clomana.com/cdn/shop/files/12_76c0daf8-50de-442b-9a37-3441b0b67980.jpg?v=1763745367&width=600',
      rating: 4.2
    },
    {
      id: 's4',
      title: 'Hair Clips Duo',
      price: '£4.50',
      image: '//clomana.com/cdn/shop/files/15_d2afae43-c281-4b99-ae1d-d960812b4de5.jpg?v=1763745391&width=600',
      rating: 4.6
    }
  ],
  'mystery': [
    {
      id: 'm1',
      title: 'Mystery Marshmallow Sponge',
      price: '£7.50',
      originalPrice: '£12.95',
      image: '//clomana.com/cdn/shop/files/12_76c0daf8-50de-442b-9a37-3441b0b67980.jpg?v=1763745367&width=600',
      rating: 5.0,
      badge: 'Mystery'
    },
    {
      id: 'm2',
      title: 'Mystery Box - Small',
      price: '£25.00',
      image: '//clomana.com/cdn/shop/files/MysteryProductImages.jpg?v=1763745367&width=600',
      rating: 4.7
    },
    {
      id: 'm3',
      title: 'Mystery Box - Large',
      price: '£50.00',
      image: '//clomana.com/cdn/shop/files/13_6e36a2af-fa83-4556-b80d-9d01769e1746.jpg?v=1763745367&width=600',
      rating: 4.9
    },
    {
      id: 'm4',
      title: 'Mystery Accessory',
      price: '£5.00',
      image: '//clomana.com/cdn/shop/files/14_b86f8d81-80cc-45c7-9e5b-7ba54408500c.jpg?v=1763745367&width=600',
      rating: 4.4
    }
  ]
};

export const NEW_ARRIVALS: Product[] = [
  {
    id: 'na1',
    title: 'Marshmallow Original Duo Bauble',
    price: '£18.00',
    image: '//clomana.com/cdn/shop/files/Product_Pages_3.jpg?v=1765275465&width=600',
    rating: 5.0,
    badge: 'New'
  },
  {
    id: 'na2',
    title: 'Marshmallow Sponge Cracker Trio - Strawberry Cream',
    price: '£15.00',
    originalPrice: '£36.00',
    image: '//clomana.com/cdn/shop/files/Product_Pages_1.jpg?v=1765275364&width=600',
    rating: 5.0,
    badge: 'Sold Out'
  },
  {
    id: 'na3',
    title: 'Mystery Marshmallow Sponge',
    price: '£7.50',
    originalPrice: '£12.95',
    image: '//clomana.com/cdn/shop/files/12_76c0daf8-50de-442b-9a37-3441b0b67980.jpg?v=1763745367&width=600',
    rating: 5.0
  },
  {
    id: 'na4',
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
