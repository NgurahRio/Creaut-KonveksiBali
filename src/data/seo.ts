export const SITE_URL = "https://www.advishkonveksi.id";
export const SITE_NAME = "Advish Konveksi";
export const BUSINESS_NAME = "Advish Konveksi";
export const BUSINESS_PHONE = "+62 857 3881 4898";
export const BUSINESS_EMAIL = "advishkonveksi@gmail.com";
export const BUSINESS_INSTAGRAM = "https://www.instagram.com/konveksi.advish";

export const SEO_KEYWORDS = [
  "Konveksi Bali",
  "Jasa Konveksi Bali",
  "Konveksi Kaos Bali",
  "Konveksi Kaos Custom",
  "Konveksi Seragam",
  "Vendor Seragam Perusahaan",
  "Konveksi Hoodie",
  "Konveksi Polo Shirt",
  "Konveksi Kemeja",
  "Konveksi Jaket",
  "Konveksi Jersey",
  "Jasa Bordir Komputer",
  "Jasa Sablon Kaos",
  "Tempat Bikin Kaos Custom",
  "Vendor Merchandise Perusahaan",
  "Konveksi Baju Custom",
  "Konveksi PDH & PDL",
  "Vendor Seragam Hotel Bali",
  "Konveksi Clothing Brand",
  "Produksi Apparel Custom",
  "Konveksi Denpasar",
  "Jasa Konveksi Denpasar",
  "Konveksi Kaos Denpasar",
  "Konveksi Kaos Custom Denpasar",
  "Konveksi Seragam Denpasar",
  "Vendor Seragam Denpasar",
  "Konveksi Hoodie Denpasar",
  "Konveksi Polo Shirt Denpasar",
  "Konveksi Kemeja Denpasar",
  "Konveksi Jaket Denpasar",
] as const;

export const defaultOpenGraphImage = {
  url: "/assets/toko.png",
  width: 1200,
  height: 630,
  alt: "Workshop Advish Konveksi Bali",
};

export const productSeoContent: Record<
  string,
  {
    h1: string;
    title: string;
    description: string;
    intro: string;
    keywords: string[];
  }
> = {
  Kaos: {
    h1: "Konveksi Kaos Custom Bali",
    title: "Konveksi Kaos Custom Bali | Jasa Sablon Kaos Denpasar",
    description:
      "Produksi kaos custom Bali dan Denpasar untuk event, komunitas, merchandise perusahaan, clothing brand, dan seragam dengan pilihan bahan serta sablon.",
    intro:
      "Advish Konveksi melayani pembuatan kaos custom di Bali untuk komunitas, event, perusahaan, sekolah, kampus, dan clothing brand. Produksi dapat disesuaikan dari bahan, warna, ukuran, desain, sampai finishing sablon.",
    keywords: [
      "Konveksi Kaos Bali",
      "Konveksi Kaos Custom",
      "Konveksi Kaos Denpasar",
      "Konveksi Kaos Custom Denpasar",
      "Jasa Sablon Kaos",
      "Tempat Bikin Kaos Custom",
    ],
  },
  Jersey: {
    h1: "Konveksi Jersey Bali",
    title: "Konveksi Jersey Bali | Jersey Custom Denpasar",
    description:
      "Produksi jersey custom Bali untuk tim olahraga, komunitas, sekolah, kampus, dan event dengan desain, nama, nomor, dan ukuran custom.",
    intro:
      "Jersey custom Advish cocok untuk tim olahraga, komunitas, event, sekolah, dan kampus yang membutuhkan apparel ringan, nyaman, dan mudah dikenali. Desain, warna, nama, nomor, dan logo sponsor bisa disesuaikan.",
    keywords: [
      "Konveksi Jersey",
      "Konveksi Jersey Bali",
      "Konveksi Denpasar",
      "Produksi Apparel Custom",
    ],
  },
  Jaket: {
    h1: "Konveksi Jaket & Hoodie Custom Bali",
    title: "Konveksi Jaket Bali | Konveksi Hoodie Denpasar",
    description:
      "Produksi jaket dan hoodie custom Bali untuk komunitas, perusahaan, event, brand apparel, dan merchandise dengan pilihan bahan serta finishing logo.",
    intro:
      "Advish melayani konveksi jaket dan hoodie custom di Bali untuk kebutuhan komunitas, perusahaan, event, merchandise, dan clothing brand. Model, bahan, warna, logo, saku, zipper, dan detail produksi bisa dibuat sesuai kebutuhan.",
    keywords: [
      "Konveksi Jaket",
      "Konveksi Jaket Denpasar",
      "Konveksi Hoodie",
      "Konveksi Hoodie Denpasar",
      "Konveksi Clothing Brand",
    ],
  },
  Kemeja: {
    h1: "Konveksi Kemeja, PDH & PDL Denpasar",
    title: "Konveksi Kemeja Denpasar | Konveksi PDH & PDL Bali",
    description:
      "Produksi kemeja custom, PDH, dan PDL di Bali untuk perusahaan, hotel, organisasi, komunitas, sekolah, dan instansi dengan opsi bordir logo.",
    intro:
      "Kemeja custom Advish cocok untuk seragam perusahaan, vendor seragam hotel Bali, organisasi, komunitas, PDH, dan PDL. Detail bahan, warna, model, saku, ukuran, serta bordir logo bisa disesuaikan.",
    keywords: [
      "Konveksi Kemeja",
      "Konveksi Kemeja Denpasar",
      "Konveksi PDH & PDL",
      "Vendor Seragam Perusahaan",
      "Vendor Seragam Hotel Bali",
    ],
  },
  Topi: {
    h1: "Topi Custom & Merchandise Bali",
    title: "Topi Custom Bali | Vendor Merchandise Perusahaan",
    description:
      "Produksi topi custom untuk merchandise perusahaan, komunitas, event, dan seragam dengan pilihan bordir, patch, warna, dan model.",
    intro:
      "Topi custom dapat menjadi pelengkap seragam, merchandise perusahaan, campaign, komunitas, atau event. Advish membantu menyesuaikan model topi, bahan, warna, bordir, patch, dan detail logo.",
    keywords: [
      "Topi Custom",
      "Vendor Merchandise Perusahaan",
      "Jasa Bordir Komputer",
      "Produksi Apparel Custom",
    ],
  },
  Polo: {
    h1: "Konveksi Polo Shirt Custom Denpasar",
    title: "Konveksi Polo Shirt Bali | Polo Custom Denpasar",
    description:
      "Produksi polo shirt custom Bali dan Denpasar untuk seragam kantor, komunitas, hotel, event, dan merchandise dengan opsi bordir logo.",
    intro:
      "Polo shirt custom cocok untuk seragam semi-formal perusahaan, hotel, restoran, komunitas, event, dan tim operasional. Advish dapat menyesuaikan bahan, warna, ukuran, bordir logo, dan detail desain.",
    keywords: [
      "Konveksi Polo Shirt",
      "Konveksi Polo Shirt Denpasar",
      "Vendor Seragam Perusahaan",
      "Vendor Seragam Denpasar",
    ],
  },
  Celana: {
    h1: "Konveksi Celana Custom Bali",
    title: "Konveksi Celana Custom Bali | Apparel & Seragam Denpasar",
    description:
      "Produksi celana custom untuk kebutuhan seragam, olahraga, komunitas, training, dan apparel custom dengan bahan serta ukuran yang dapat disesuaikan.",
    intro:
      "Celana custom Advish dapat digunakan untuk seragam lapangan, training, komunitas, event, dan pelengkap apparel custom. Bahan, model, warna, ukuran, dan detail produksi dapat disesuaikan dengan kebutuhan.",
    keywords: [
      "Konveksi Baju Custom",
      "Produksi Apparel Custom",
      "Konveksi Seragam",
      "Konveksi Denpasar",
    ],
  },
};
