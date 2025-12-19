export interface Product {
  id: string;
  title: string;
  price: string;
  originalPrice?: string;
  image: string;
  badge?: string;
  rating?: number;
}

export interface Story {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  linkText: string;
}

export interface Logo {
  id: string;
  name: string;
  src: string;
}
