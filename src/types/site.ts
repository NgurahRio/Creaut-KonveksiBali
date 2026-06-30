/**
 * ════════════════════════════════════════════════════════════
 *  TYPE DEFINITIONS
 *
 *  Semua interface dan type yang digunakan di seluruh project.
 *  Import dari sini agar konsisten dan mudah di-maintain.
 * ════════════════════════════════════════════════════════════
 */

/* ── Produk ── */

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

/* ── Statistik ── */

export interface StatItem {
  value: string;
  label: string;
  icon: string;
}

/* ── Tracking ── */

export interface TrackingStep {
  title: string;
  icon: string;
  status: "done" | "active" | "pending";
}

export interface OrderDetail {
  label: string;
  value: string;
}

/* ── Testimonial ── */

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

/* ── Cara Kerja / Work Steps ── */

export interface WorkStep {
  step: number;
  title: string;
  description?: string;
  icon: string;
}

/* ── Tentang Kami ── */

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: string;
}

export interface TeamPhilosophy {
  title: string;
  description: string;
  icon: string;
}

/* ── Footer ── */

export interface FooterLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: "instagram" | "whatsapp" | "mail";
}

/* ── Produk Detail Page ── */

export type CategorySpecMap = Record<string, ProductSpec[]>;
export type CategorySlugMap = Record<string, string>;

/* ── Produk Page (Hover Colors) ── */

export type HoverColorMap = Record<string, string>;
