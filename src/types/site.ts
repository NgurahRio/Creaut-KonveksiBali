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
