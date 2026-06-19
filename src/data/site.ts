import type { OrderDetail, Product, StatItem, TrackingStep } from "@/types/site";

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/produk", label: "Produk" },
  { href: "/tracking-order", label: "Tracking Order" },
];

export const products: Product[] = [
  {
    slug: "kaos-cotton-combed-30s",
    name: "Kaos Cotton Combed 30s",
    category: "Kaos",
    price: "Mulai dari 34K",
    image: "/assets/product-kaos.png",
    imageAlt: "Kaos putih Cotton Combed 30s Konveksi Bali",
    description:
      "Kaos Cotton Combed 30s dari Konveksi Bali merupakan pilihan apparel terbaik untuk kebutuhan seragam komunitas, merchandise event, hingga pakaian kasual harian Anda. Terbuat dari serat kapas alami pilihan, kain ini terasa halus, ringan, dan nyaman digunakan sepanjang hari di iklim tropis.",
    specs: [
      { label: "Gramasi", value: "200 Kg" },
      { label: "Tekstur", value: "Cestur" },
      { label: "Ketahanan Warna", value: "Ketahanan Sedang" },
      { label: "Teksture", value: "100%" },
    ],
    printOptions: ["Plastisol", "DTF", "Rubber"],
    detailImages: [
      { src: "/assets/detail-main-kaos.png", alt: "Detail depan kaos hitam" },
      { src: "/assets/detail-thumb-fabric.png", alt: "Detail kain kaos" },
      { src: "/assets/detail-thumb-back.png", alt: "Tampilan belakang kaos" },
      { src: "/assets/detail-thumb-button.png", alt: "Detail kancing kaos" },
    ],
  },
  {
    slug: "jersey-dryfit-premium",
    name: "Jersey Dryfit Premium",
    category: "Jersey",
    price: "Mulai dari 85K",
    image: "/assets/product-jersey.png",
    imageAlt: "Jersey biru dryfit premium Konveksi Bali",
    description:
      "Jersey dryfit premium untuk tim olahraga, komunitas, dan event dengan bahan ringan, cepat kering, serta nyaman untuk aktivitas intens.",
    specs: [
      { label: "Bahan", value: "Dryfit Premium" },
      { label: "Model", value: "Full Print" },
      { label: "Ukuran", value: "S sampai XXL" },
      { label: "Produksi", value: "Custom desain" },
    ],
    printOptions: ["Sublim", "DTF", "Rubber"],
    detailImages: [
      { src: "/assets/product-jersey.png", alt: "Jersey dryfit premium" },
      { src: "/assets/detail-thumb-fabric.png", alt: "Detail bahan jersey" },
      { src: "/assets/detail-thumb-back.png", alt: "Tampilan belakang jersey" },
    ],
  },
  {
    slug: "jaket-sporty",
    name: "Jaket Sporty",
    category: "Jaket",
    price: "Mulai dari 120K",
    image: "/assets/product-jaket-sporty.png",
    imageAlt: "Jaket sporty hitam merah Konveksi Bali",
    description:
      "Jaket sporty custom dengan karakter desain tegas untuk kebutuhan komunitas, club, event, dan brand apparel.",
    specs: [
      { label: "Bahan", value: "Parasut premium" },
      { label: "Furing", value: "Opsional" },
      { label: "Ukuran", value: "S sampai XXL" },
      { label: "Produksi", value: "Custom warna" },
    ],
    printOptions: ["Bordir", "DTF", "Patch"],
    detailImages: [
      { src: "/assets/product-jaket-sporty.png", alt: "Jaket sporty custom" },
      { src: "/assets/detail-thumb-fabric.png", alt: "Detail bahan jaket" },
      { src: "/assets/detail-thumb-button.png", alt: "Detail finishing jaket" },
    ],
  },
  {
    slug: "jaket-formal",
    name: "Jaket Formal",
    category: "Jaket",
    price: "Mulai dari 150K",
    image: "/assets/product-jaket-formal.png",
    imageAlt: "Jaket formal hitam Konveksi Bali",
    description:
      "Jaket formal untuk kebutuhan perusahaan, organisasi, dan team dengan tampilan rapi serta pilihan detail yang dapat disesuaikan.",
    specs: [
      { label: "Bahan", value: "American drill" },
      { label: "Model", value: "Kemeja jaket" },
      { label: "Ukuran", value: "S sampai XXL" },
      { label: "Detail", value: "Logo bordir" },
    ],
    printOptions: ["Bordir", "DTF", "Rubber"],
    detailImages: [
      { src: "/assets/product-jaket-formal.png", alt: "Jaket formal custom" },
      { src: "/assets/detail-thumb-back.png", alt: "Tampilan belakang jaket" },
      { src: "/assets/detail-thumb-button.png", alt: "Detail kancing jaket" },
    ],
  },
  {
    slug: "pdh-american-drill",
    name: "PDH American Drill",
    category: "PDH",
    price: "Mulai dari 100K",
    image: "/assets/product-pdh.png",
    imageAlt: "PDH abu-abu American Drill Konveksi Bali",
    description:
      "PDH American Drill dengan potongan rapi untuk instansi, organisasi, dan komunitas profesional.",
    specs: [
      { label: "Bahan", value: "American Drill" },
      { label: "Kerah", value: "Formal" },
      { label: "Ukuran", value: "S sampai XXL" },
      { label: "Finishing", value: "Bordir nama" },
    ],
    printOptions: ["Bordir", "DTF", "Patch"],
    detailImages: [
      { src: "/assets/product-pdh.png", alt: "PDH American Drill" },
      { src: "/assets/detail-thumb-fabric.png", alt: "Detail bahan PDH" },
      { src: "/assets/detail-thumb-button.png", alt: "Detail kancing PDH" },
    ],
  },
  {
    slug: "jaket-hoodie-custom",
    name: "Jaket Hoodie Custom",
    category: "Jaket",
    price: "Mulai dari 130K",
    image: "/assets/product-hoodie.png",
    imageAlt: "Jaket hoodie hitam merah Konveksi Bali",
    description:
      "Hoodie custom untuk merchandise, komunitas, dan brand dengan detail warna serta logo yang dapat disesuaikan.",
    specs: [
      { label: "Bahan", value: "Fleece premium" },
      { label: "Model", value: "Hoodie zipper" },
      { label: "Ukuran", value: "S sampai XXL" },
      { label: "Detail", value: "Kantong depan" },
    ],
    printOptions: ["Sablon", "Bordir", "DTF"],
    detailImages: [
      { src: "/assets/product-hoodie.png", alt: "Jaket hoodie custom" },
      { src: "/assets/detail-thumb-fabric.png", alt: "Detail bahan hoodie" },
      { src: "/assets/detail-thumb-back.png", alt: "Tampilan belakang hoodie" },
    ],
  },
  {
    slug: "workshop-wear",
    name: "Workshop Wear",
    category: "Workshop Wear",
    price: "Mulai dari 110K",
    image: "/assets/product-workshop.png",
    imageAlt: "Workshop wear hitam Konveksi Bali",
    description:
      "Workshop wear yang kuat dan nyaman untuk kebutuhan operasional lapangan, mekanik, dan tim produksi.",
    specs: [
      { label: "Bahan", value: "Drill premium" },
      { label: "Model", value: "Work shirt" },
      { label: "Ukuran", value: "S sampai XXL" },
      { label: "Detail", value: "Banyak kantong" },
    ],
    printOptions: ["Bordir", "Patch", "DTF"],
    detailImages: [
      { src: "/assets/product-workshop.png", alt: "Workshop wear custom" },
      { src: "/assets/detail-thumb-back.png", alt: "Tampilan belakang wearpack" },
      { src: "/assets/detail-thumb-button.png", alt: "Detail workshop wear" },
    ],
  },
  {
    slug: "topi-custom",
    name: "Topi Custom",
    category: "Topi",
    price: "Mulai dari 25K",
    image: "/assets/product-topi.png",
    imageAlt: "Topi custom hitam Konveksi Bali",
    description:
      "Topi custom untuk merchandise, event, dan seragam komunitas dengan pilihan bordir atau patch.",
    specs: [
      { label: "Bahan", value: "Twill premium" },
      { label: "Model", value: "Baseball cap" },
      { label: "Ukuran", value: "Adjustable" },
      { label: "Detail", value: "Bordir depan" },
    ],
    printOptions: ["Bordir", "Patch", "DTF"],
    detailImages: [
      { src: "/assets/product-topi.png", alt: "Topi custom" },
      { src: "/assets/detail-thumb-fabric.png", alt: "Detail bahan topi" },
      { src: "/assets/detail-thumb-button.png", alt: "Detail topi custom" },
    ],
  },
];

export const categories = ["Semua", "Kaos", "Jersey", "Jaket", "PDH", "Workshop Wear"];

export const stats: StatItem[] = [
  { value: "8+", label: "Tahun Pengalaman", icon: "briefcase" },
  { value: "500+", label: "Project Selesai", icon: "shirt" },
  { value: "200+", label: "Klien Puas", icon: "user" },
  { value: "99%", label: "On Time Pengiriman", icon: "clock" },
];

export const trackingSteps: TrackingStep[] = [
  {
    title: "Order Diterima",
    subtitle: "Pesanan masuk",
    date: "20 Mei 2026",
    icon: "check",
    status: "done",
  },
  {
    title: "Produksi",
    subtitle: "Sedang diproduksi",
    date: "21 Mei 2026",
    icon: "factory",
    status: "done",
  },
  {
    title: "Printing",
    subtitle: "Proses sablon",
    date: "22 Mei 2026",
    icon: "printer",
    status: "pending",
  },
  {
    title: "Finishing",
    subtitle: "Proses finishing",
    date: "24 Mei 2026",
    icon: "package",
    status: "pending",
  },
  {
    title: "Pengiriman",
    subtitle: "Siap dikirim",
    date: "28 Mei 2026",
    icon: "truck",
    status: "pending",
  },
  {
    title: "Selesai",
    subtitle: "Pesanan selesai",
    date: "30 Mei 2026",
    icon: "shirt",
    status: "pending",
  },
];

export const compactTrackingSteps: TrackingStep[] = [
  { title: "Produksi", subtitle: "Sedang diproduksi", icon: "factory", status: "active" },
  { title: "Printing", subtitle: "Proses sablon", icon: "printer", status: "pending" },
  { title: "Finishing", subtitle: "Proses finishing", icon: "package", status: "pending" },
  { title: "Siap Kirim", subtitle: "Siap dikirim", icon: "truck", status: "pending" },
  { title: "Selesai", subtitle: "Pesanan selesai", icon: "shirt", status: "pending" },
];

export const orderDetails: OrderDetail[] = [
  { label: "Produk", value: "Jersey Full Print" },
  { label: "Jumlah", value: "50 Pcs" },
  { label: "Ukuran", value: "M, L, XL" },
  { label: "Warna", value: "Ungu, Putih, Hitam" },
  { label: "Bahan", value: "Dryfit Premium" },
  { label: "Catatan", value: "-" },
];

export const journey = [
  { year: "2016", text: "Awal berdiri dengan skala kecil dan fokus pada kualitas." },
  { year: "2018", text: "Mulai berkembang dan menangani project komunitas." },
  { year: "2020", text: "Investasi mesin dan teknologi produksi lebih modern." },
  { year: "2022", text: "Bermitra dengan brand dan perusahaan skala besar." },
  { year: "2024", text: "Terus berinovasi dan menjadi partner terpercaya Anda." },
];

export const values = [
  {
    title: "Kualitas Terbaik",
    text: "Menggunakan bahan premium dan dikerjakan oleh tenaga ahli.",
    icon: "award",
  },
  {
    title: "Produksi Cepat",
    text: "Proses produksi efisien dan tepat waktu.",
    icon: "factory",
  },
  {
    title: "Desain Kreatif",
    text: "Tim desain siap membantu mewujudkan ide Anda.",
    icon: "ruler",
  },
  {
    title: "Layanan Profesional",
    text: "Komunikasi responsif dan layanan terbaik untuk Anda.",
    icon: "thumb",
  },
];

export const galleryImages = [
  { src: "/assets/gallery-1.png", alt: "Workshop konveksi dengan tim menjahit" },
  { src: "/assets/gallery-2.png", alt: "Detail proses jahit kain motif" },
  { src: "/assets/gallery-3.png", alt: "Area produksi konveksi Bali" },
  { src: "/assets/gallery-4.png", alt: "Meja potong dan produksi apparel" },
  { src: "/assets/gallery-5.png", alt: "Mesin produksi apparel custom" },
  { src: "/assets/gallery-6.png", alt: "Tim menyiapkan kain produksi" },
  { src: "/assets/gallery-7.png", alt: "Proses printing apparel" },
  { src: "/assets/gallery-8.png", alt: "Tim workshop Konveksi Bali" },
];

export const clientLogos = ["BANK BRI", "BANK BRI", "BANK BRI", "BANK BRI", "BANK BRI"];
