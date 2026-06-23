export interface ProductSpec {
  label: string;
  value: string;
}

export interface ProductDetailImage {
  src: string;
  alt: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  price: string;
  image: string;
  imageAlt: string;
  description: string;
  specs: ProductSpec[];
  printOptions: string[];
  detailImages: ProductDetailImage[];
}

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

export interface TrackingStep {
  title: string;
  subtitle: string;
  date?: string;
  icon: string;
  status: "done" | "active" | "pending";
}

export interface OrderDetail {
  label: string;
  value: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

export interface WorkStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  icon: string;
  borderColor: string;
  bgColor: string;
  iconColor: string;
  count: number;
}

export interface BerandaProduct {
  label: string;
  image: string;
  imageAlt: string;
  href: string;
}

