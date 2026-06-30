/**
 * ════════════════════════════════════════════════════════════
 *  CENTRAL DATA STORE
 *
 *  Semua data statis (mock data, konfigurasi konten, dll)
 *  disimpan di file ini. Page dan komponen cukup mengimpor
 *  data yang dibutuhkan — tidak boleh mendefinisikan data
 *  langsung di page file.
 *
 *  Struktur file:
 *  1. Constants (WhatsApp, dll)
 *  2. Navigation
 *  3. Produk & Kategori
 *  4. Statistik
 *  5. Cara Kerja (Work Steps)
 *  6. Testimoni & Client
 *  7. Beranda Products (ringkasan)
 *  8. Tentang Kami (proses, filosofi, misi, values, gallery)
 *  9. Footer Data
 *  10. Produk Page (hover colors)
 *  11. Produk Detail (category specs, category slugs)
 * ════════════════════════════════════════════════════════════
 */

import type {
  Product,
  StatItem,
  ProductCategory,
  BerandaProduct,
  ProcessStep,
  TeamPhilosophy,
  FooterLink,
  SocialLink,
  CategorySpecMap,
  CategorySlugMap,
  HoverColorMap,
} from "@/types/site";

/* ══════════════════════════════════════════════════════════
   1. CONSTANTS
   ══════════════════════════════════════════════════════════ */

/** Nomor WhatsApp utama — satu sumber kebenaran untuk seluruh website */
export const WHATSAPP_NUMBER = "6285738814898";

/** URL WhatsApp yang sudah diformat untuk link */
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

/* ══════════════════════════════════════════════════════════
   2. NAVIGATION
   ══════════════════════════════════════════════════════════ */

export const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/produk", label: "Produk" },
  { href: "/tracking-order", label: "Tracking Order" },
];

/* ══════════════════════════════════════════════════════════
   3. PRODUK & KATEGORI
   ══════════════════════════════════════════════════════════ */

export const products: Product[] = [
  // Kaos
  {
    slug: "kaos-cotton-combed-30s",
    name: "Kaos Cotton Combed 30s",
    category: "Kaos",
    price: "Mulai dari 34K",
    image: "/assets/advish-konveksi-kaos1.png",
    imageAlt: "Kaos Putih Cotton Combed 30s Advish Konveksi",
    description:
      "Kaos Cotton Combed 30s dari Advish Konveksi merupakan pilihan apparel terbaik untuk seragam komunitas, merchandise event, hingga pakaian kasual harian Anda. Serat alami pilihan, halus, ringan, dan sangat nyaman.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 30s" },
      { label: "Gramasi", value: "150-160 Gsm" },
      { label: "Ketahanan", value: "Sangat Baik" },
      { label: "Pilihan Warna", value: "Lebih dari 30 Warna" },
    ],
    printOptions: ["Plastisol", "DTF", "Rubber"],
    detailImages: [
      { src: "/assets/advish-konveksi-kaos1.png", alt: "Kaos Model 1" },
      { src: "/assets/advish-konveksi-kaos2.png", alt: "Kaos Model 2" },
      { src: "/assets/advish-konveksi-kaos3.png", alt: "Kaos Model 3" },
      { src: "/assets/advish-konveksi-kaos4.png", alt: "Kaos Model 4" },
    ],
  },
  {
    slug: "kaos-oversized-heavyweight",
    name: "Kaos Oversized Heavyweight",
    category: "Kaos",
    price: "Mulai dari 45K",
    image: "/assets/advish-konveksi-kaos2.png",
    imageAlt: "Kaos Oversized Advish Konveksi",
    description:
      "Kaos potongan oversized dengan bahan katun tebal premium. Cocok untuk brand clothing line streetwear dan penampilan kasual trendi.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 24s/20s Heavy" },
      { label: "Potongan", value: "Oversized Fit" },
      { label: "Gramasi", value: "210-220 Gsm" },
      { label: "Jahitan", value: "Rantai & Overdeck" },
    ],
    printOptions: ["Discharge", "Plastisol", "DTF"],
    detailImages: [
      { src: "/assets/advish-konveksi-kaos2.png", alt: "Kaos Model 2" },
      { src: "/assets/advish-konveksi-kaos3.png", alt: "Kaos Model 3" },
      { src: "/assets/advish-konveksi-kaos4.png", alt: "Kaos Model 4" },
      { src: "/assets/advish-konveksi-kaos1.png", alt: "Kaos Model 1" },
    ],
  },
  {
    slug: "kaos-polo-pique",
    name: "Kaos Polo Pique Premium",
    category: "Kaos",
    price: "Mulai dari 55K",
    image: "/assets/advish-konveksi-kaos3.png",
    imageAlt: "Kaos Polo Advish Konveksi",
    description:
      "Polo shirt dengan rajutan pique berpori yang memberikan sirkulasi udara baik dan penampilan semi-formal elegan.",
    specs: [
      { label: "Bahan", value: "Lacoste CVC Pique" },
      { label: "Kerah", value: "Rib Katun Premium" },
      { label: "Detail", value: "Kancing Placket Depan" },
      { label: "Karakter", value: "Tebal & Berpori" },
    ],
    printOptions: ["Bordir Komputer", "DTF", "Rubber"],
    detailImages: [
      { src: "/assets/advish-konveksi-kaos3.png", alt: "Kaos Model 3" },
      { src: "/assets/advish-konveksi-kaos4.png", alt: "Kaos Model 4" },
      { src: "/assets/advish-konveksi-kaos1.png", alt: "Kaos Model 1" },
      { src: "/assets/advish-konveksi-kaos2.png", alt: "Kaos Model 2" },
    ],
  },
  {
    slug: "kaos-raglan-custom",
    name: "Kaos Raglan Custom",
    category: "Kaos",
    price: "Mulai dari 38K",
    image: "/assets/advish-konveksi-kaos4.png",
    imageAlt: "Kaos Raglan Advish Konveksi",
    description:
      "Kaos lengan raglan dengan kombinasi warna kontras pada badan dan lengan. Sangat populer untuk kaos kelas dan family gathering.",
    specs: [
      { label: "Bahan", value: "Cotton Combed 30s" },
      { label: "Lengan", value: "Raglan 3/4 atau Panjang" },
      { label: "Warna", value: "Kombinasi Dual-Tone" },
      { label: "Kenyamanan", value: "Adem & Menyerap Keringat" },
    ],
    printOptions: ["Plastisol", "Rubber", "DTF"],
    detailImages: [
      { src: "/assets/advish-konveksi-kaos4.png", alt: "Kaos Model 4" },
      { src: "/assets/advish-konveksi-kaos1.png", alt: "Kaos Model 1" },
      { src: "/assets/advish-konveksi-kaos2.png", alt: "Kaos Model 2" },
      { src: "/assets/advish-konveksi-kaos3.png", alt: "Kaos Model 3" },
    ],
  },

  // Jersey
  {
    slug: "jersey-dryfit-premium",
    name: "Jersey Dryfit Premium",
    category: "Jersey",
    price: "Mulai dari 85K",
    image: "/assets/advish-konveksi-jersey1.png",
    imageAlt: "Jersey Dryfit Premium Advish Konveksi",
    description:
      "Jersey dryfit premium untuk tim olahraga, komunitas sepeda, lari, dan event esport dengan teknologi cepat kering.",
    specs: [
      { label: "Bahan", value: "Dryfit Milano / Jarum" },
      { label: "Model", value: "Atletis Fit" },
      { label: "Jahitan", value: "Overdeck / Flatlock" },
      { label: "Fitur", value: "Quick Dry & Anti-Bakteri" },
    ],
    printOptions: ["Sublimasi Fullprint", "Polyflex", "DTF"],
    detailImages: [
      { src: "/assets/advish-konveksi-jersey1.png", alt: "Jersey Model 1" },
      { src: "/assets/advish-konveksi-jersey2.png", alt: "Jersey Model 2" },
      { src: "/assets/advish-konveksi-jersey3.png", alt: "Jersey Model 3" },
      { src: "/assets/advish-konveksi-jersey4.png", alt: "Jersey Model 4" },
    ],
  },
  {
    slug: "jersey-sublim-fullprint",
    name: "Jersey Sublim Fullprint",
    category: "Jersey",
    price: "Mulai dari 95K",
    image: "/assets/advish-konveksi-jersey2.png",
    imageAlt: "Jersey Sublim Advish Konveksi",
    description:
      "Jersey sublimasi dengan cetakan desain full cover. Tinta menyerap sempurna ke serat kain sehingga warna tidak akan luntur.",
    specs: [
      { label: "Bahan", value: "Dryfit Premium Polyester" },
      { label: "Cetak", value: "Sublimasi Tinta Jepang EPSON" },
      { label: "Warna", value: "Full Color & Gradasi Bebas" },
      { label: "Kerah", value: "O-Neck / V-Neck / Kerah Polo" },
    ],
    printOptions: ["Sublimasi", "DTF"],
    detailImages: [
      { src: "/assets/advish-konveksi-jersey2.png", alt: "Jersey Model 2" },
      { src: "/assets/advish-konveksi-jersey3.png", alt: "Jersey Model 3" },
      { src: "/assets/advish-konveksi-jersey4.png", alt: "Jersey Model 4" },
      { src: "/assets/advish-konveksi-jersey1.png", alt: "Jersey Model 1" },
    ],
  },
  {
    slug: "jersey-esport-pro",
    name: "Jersey Esport Pro",
    category: "Jersey",
    price: "Mulai dari 90K",
    image: "/assets/advish-konveksi-jersey3.png",
    imageAlt: "Jersey Esport Advish Konveksi",
    description:
      "Jersey khusus tim esport dengan potongan modern dan bahan super sejuk. Bebas pasang logo sponsor dan nickname tim.",
    specs: [
      { label: "Bahan", value: "Dryfit Waffle / Riffle" },
      { label: "Pilihan Kerah", value: "Rib Katun / Kerah Zipper" },
      { label: "Custom", value: "Nama, Nomor & Logo Sponsor" },
      { label: "Tekstur", value: "Lembut & Elastis" },
    ],
    printOptions: ["Sublimasi Fullprint"],
    detailImages: [
      { src: "/assets/advish-konveksi-jersey3.png", alt: "Jersey Model 3" },
      { src: "/assets/advish-konveksi-jersey4.png", alt: "Jersey Model 4" },
      { src: "/assets/advish-konveksi-jersey1.png", alt: "Jersey Model 1" },
      { src: "/assets/advish-konveksi-jersey2.png", alt: "Jersey Model 2" },
    ],
  },
  {
    slug: "jersey-running-ultra",
    name: "Jersey Running Ultra",
    category: "Jersey",
    price: "Mulai dari 80K",
    image: "/assets/advish-konveksi-jersey4.png",
    imageAlt: "Jersey Running Advish Konveksi",
    description:
      "Jersey lari ultra-ringan dengan pori-pori mikro untuk penguapan keringat ekstra cepat. Cocok untuk marathon dan olahraga outdoor.",
    specs: [
      { label: "Bahan", value: "Dryfit Billabong / Dotmicro" },
      { label: "Gramasi", value: "Lightweight 120 Gsm" },
      { label: "Jahitan", value: "Flatlock Stitch (Anti Gesekan)" },
      { label: "Keamanan", value: "Reflector Stripe (Opsional)" },
    ],
    printOptions: ["Sublimasi Partikal", "Polyflex"],
    detailImages: [
      { src: "/assets/advish-konveksi-jersey4.png", alt: "Jersey Model 4" },
      { src: "/assets/advish-konveksi-jersey1.png", alt: "Jersey Model 1" },
      { src: "/assets/advish-konveksi-jersey2.png", alt: "Jersey Model 2" },
      { src: "/assets/advish-konveksi-jersey3.png", alt: "Jersey Model 3" },
    ],
  },

  // Jaket
  {
    slug: "jaket-sporty",
    name: "Jaket Sporty",
    category: "Jaket",
    price: "Mulai dari 120K",
    image: "/assets/advish-konveksi-jaket1.png",
    imageAlt: "Jaket Sporty Advish Konveksi",
    description:
      "Jaket sporty custom dengan bahan parasut windbreaker tahan air ringan. Desain dinamis untuk club motor, olahraga, dan luar ruangan.",
    specs: [
      { label: "Bahan luar", value: "Parasut Taslan / Despo" },
      { label: "Furing", value: "Jala / Puring Fleece hangat" },
      { label: "Resleting", value: "YKK Windproof" },
      { label: "Fitur", value: "Saku Dalam & Tali Kerut" },
    ],
    printOptions: ["Bordir Komputer", "DTF", "Patch Plastisol"],
    detailImages: [
      { src: "/assets/advish-konveksi-jaket1.png", alt: "Jaket Model 1" },
      { src: "/assets/advish-konveksi-jaket2.png", alt: "Jaket Model 2" },
      { src: "/assets/advish-konveksi-jaket3.png", alt: "Jaket Model 3" },
      { src: "/assets/advish-konveksi-jaket4.png", alt: "Jaket Model 4" },
    ],
  },
  {
    slug: "jaket-formal",
    name: "Jaket Formal",
    category: "Jaket",
    price: "Mulai dari 150K",
    image: "/assets/advish-konveksi-jaket2.png",
    imageAlt: "Jaket Formal Advish Konveksi",
    description:
      "Jaket formal semi-jas untuk korporat, instansi pemerintahan, dan universitas dengan potongan yang pas dan elegan.",
    specs: [
      { label: "Bahan luar", value: "High Twist Premium / Drill" },
      { label: "Furing", value: "Dormeuil England Full" },
      { label: "Kerah", value: "Kerah Jas dengan Lapel" },
      { label: "Saku", value: "Saku Bobok Samping & Dada" },
    ],
    printOptions: ["Bordir Komputer"],
    detailImages: [
      { src: "/assets/advish-konveksi-jaket2.png", alt: "Jaket Model 2" },
      { src: "/assets/advish-konveksi-jaket3.png", alt: "Jaket Model 3" },
      { src: "/assets/advish-konveksi-jaket4.png", alt: "Jaket Model 4" },
      { src: "/assets/advish-konveksi-jaket1.png", alt: "Jaket Model 1" },
    ],
  },
  {
    slug: "jaket-hoodie-custom",
    name: "Jaket Hoodie Custom",
    category: "Jaket",
    price: "Mulai dari 130K",
    image: "/assets/advish-konveksi-jaket3.png",
    imageAlt: "Jaket Hoodie Custom Advish Konveksi",
    description:
      "Hoodie hangat dengan tudung kepala dan tali serut. Dibuat dari kain fleece tebal berkualitas tinggi, sangat lembut di kulit bagian dalam.",
    specs: [
      { label: "Bahan", value: "Cotton Fleece Premium" },
      { label: "Model", value: "Hoodie Pullover / Zipper" },
      { label: "Tudung", value: "Double Layer Hood + Tali Katun" },
      { label: "Rib", value: "Rib Elastis Tebal di Lengan & Pinggang" },
    ],
    printOptions: ["Sablon Manual Plastisol", "Bordir", "DTF"],
    detailImages: [
      { src: "/assets/advish-konveksi-jaket3.png", alt: "Jaket Model 3" },
      { src: "/assets/advish-konveksi-jaket4.png", alt: "Jaket Model 4" },
      { src: "/assets/advish-konveksi-jaket1.png", alt: "Jaket Model 1" },
      { src: "/assets/advish-konveksi-jaket2.png", alt: "Jaket Model 2" },
    ],
  },
  {
    slug: "jaket-bomber-varsity",
    name: "Jaket Bomber Varsity",
    category: "Jaket",
    price: "Mulai dari 145K",
    image: "/assets/advish-konveksi-jaket4.png",
    imageAlt: "Jaket Bomber Varsity Advish Konveksi",
    description:
      "Jaket bergaya bomber/varsity klasik dengan saku miring dan kerah rib strip. Pilihan populer untuk jaket angkatan sekolah/kuliah.",
    specs: [
      { label: "Bahan luar", value: "Baby Canvas / Despo / Wool" },
      { label: "Furing", value: "Dakron Tebal Berlapis" },
      { label: "Kancing", value: "Snap Button Besi (Varsity)" },
      { label: "Kerah & Manset", value: "Rib Rajut Kombinasi Garis" },
    ],
    printOptions: ["Bordir Komputer", "Patch Handuk (Toweling)", "DTF"],
    detailImages: [
      { src: "/assets/advish-konveksi-jaket4.png", alt: "Jaket Model 4" },
      { src: "/assets/advish-konveksi-jaket1.png", alt: "Jaket Model 1" },
      { src: "/assets/advish-konveksi-jaket2.png", alt: "Jaket Model 2" },
      { src: "/assets/advish-konveksi-jaket3.png", alt: "Jaket Model 3" },
    ],
  },

  // Kemeja
  {
    slug: "pdh-american-drill",
    name: "PDH American Drill",
    category: "Kemeja",
    price: "Mulai dari 100K",
    image: "/assets/advish-konveksi-kemeja1.png",
    imageAlt: "Kemeja PDH American Drill Advish",
    description:
      "Kemeja PDH/PDL dari bahan American Drill yang kokoh, bertekstur miring diagonal khas drill, dan tidak mudah kusut. Cocok untuk seragam instansi, kantor, dan organisasi mahasiswa.",
    specs: [
      { label: "Bahan", value: "American Drill Original" },
      { label: "Kerah", value: "Standard Formal Collar" },
      { label: "Lengan", value: "Panjang / Pendek (Bisa Digulung)" },
      { label: "Fitur", value: "Pangkat Pundak & Saku Kancing Dada" },
    ],
    printOptions: ["Bordir Komputer", "Patch Emblim"],
    detailImages: [
      { src: "/assets/advish-konveksi-kemeja1.png", alt: "Kemeja Model 1" },
      { src: "/assets/advish-konveksi-kemeja2.png", alt: "Kemeja Model 2" },
      { src: "/assets/advish-konveksi-kemeja3.png", alt: "Kemeja Model 3" },
      { src: "/assets/advish-konveksi-kemeja4.png", alt: "Kemeja Model 4" },
    ],
  },
  {
    slug: "workshop-wear",
    name: "Workshop Wear",
    category: "Kemeja",
    price: "Mulai dari 110K",
    image: "/assets/advish-konveksi-kemeja2.png",
    imageAlt: "Workshop Wear Kemeja Advish",
    description:
      "Kemeja bengkel/wearpack yang dirancang khusus untuk kebutuhan mekanik, pekerja lapangan, dan tim lapangan dengan bahan katun drill yang tahan gesekan.",
    specs: [
      { label: "Bahan", value: "Japan Drill High Quality" },
      { label: "Model", value: "Safety Shirt Fit" },
      { label: "Scotlight", value: "Reflective Tape Depan & Belakang" },
      { label: "Jahitan", value: "Rantai 3 Jarum (Ekstra Kuat)" },
    ],
    printOptions: ["Bordir Komputer", "Reflector Printing"],
    detailImages: [
      { src: "/assets/advish-konveksi-kemeja2.png", alt: "Kemeja Model 2" },
      { src: "/assets/advish-konveksi-kemeja3.png", alt: "Kemeja Model 3" },
      { src: "/assets/advish-konveksi-kemeja4.png", alt: "Kemeja Model 4" },
      { src: "/assets/advish-konveksi-kemeja1.png", alt: "Kemeja Model 1" },
    ],
  },
  {
    slug: "kemeja-pdl-lapangan",
    name: "Kemeja PDL Lapangan",
    category: "Kemeja",
    price: "Mulai dari 120K",
    image: "/assets/advish-konveksi-kemeja3.png",
    imageAlt: "Kemeja PDL Lapangan Advish",
    description:
      "Kemeja lapangan dengan ventilasi udara mesh di bagian punggung (air-vent system). Sangat nyaman digunakan di luar ruangan dalam cuaca panas.",
    specs: [
      { label: "Bahan", value: "Ripstop Tornado (Anti Sobek)" },
      { label: "Ventilasi", value: "Jaring Udara di Punggung Belakang" },
      { label: "Lengan", value: "Lengan Panjang dengan Tali Pengikat Gulungan" },
      { label: "Karakter", value: "Kuat, Ringan, Tahan Cuaca Ekstrem" },
    ],
    printOptions: ["Bordir Komputer", "Patch Velcro Karet"],
    detailImages: [
      { src: "/assets/advish-konveksi-kemeja3.png", alt: "Kemeja Model 3" },
      { src: "/assets/advish-konveksi-kemeja4.png", alt: "Kemeja Model 4" },
      { src: "/assets/advish-konveksi-kemeja1.png", alt: "Kemeja Model 1" },
      { src: "/assets/advish-konveksi-kemeja2.png", alt: "Kemeja Model 2" },
    ],
  },
  {
    slug: "kemeja-flanel-premium",
    name: "Kemeja Flanel Premium",
    category: "Kemeja",
    price: "Mulai dari 125K",
    image: "/assets/advish-konveksi-kemeja4.png",
    imageAlt: "Kemeja Flanel Advish",
    description:
      "Kemeja bermotif kotak-kotak klasik dengan bahan wool flanel berbulu halus yang tebal dan nyaman. Memberikan kesan kasual retro yang trendi.",
    specs: [
      { label: "Bahan", value: "Flannel Wool Import" },
      { label: "Motif", value: "Plaid / Kotak-kotak Custom" },
      { label: "Potongan", value: "Regular Fit / Oversized Style" },
      { label: "Kancing", value: "Kancing Akrilik Premium" },
    ],
    printOptions: ["Bordir Minimalis", "Leather Patch Label"],
    detailImages: [
      { src: "/assets/advish-konveksi-kemeja4.png", alt: "Kemeja Model 4" },
      { src: "/assets/advish-konveksi-kemeja1.png", alt: "Kemeja Model 1" },
      { src: "/assets/advish-konveksi-kemeja2.png", alt: "Kemeja Model 2" },
      { src: "/assets/advish-konveksi-kemeja3.png", alt: "Kemeja Model 3" },
    ],
  },

  // Topi
  {
    slug: "topi-custom",
    name: "Topi Custom Baseball",
    category: "Topi",
    price: "Mulai dari 25K",
    image: "/assets/advish-konveksi-topi1.png",
    imageAlt: "Topi Custom Baseball Advish",
    description:
      "Topi baseball custom untuk event promosi, seragam komunitas, merchandise, dan pelindung cuaca panas harian Anda.",
    specs: [
      { label: "Bahan", value: "Twill Premium / Rafel Denim" },
      { label: "Model", value: "Baseball Cap 6 Panel" },
      { label: "Pengatur Lebar", value: "Cakop Besi / Rantai Plastik" },
      { label: "Visor", value: "Pre-Curved Visor Keras" },
    ],
    printOptions: ["Bordir Timbul (3D)", "DTF", "Leather Patch"],
    detailImages: [
      { src: "/assets/advish-konveksi-topi1.png", alt: "Topi Model 1" },
      { src: "/assets/advish-konveksi-topi2.png", alt: "Topi Model 2" },
      { src: "/assets/advish-konveksi-topi3.png", alt: "Topi Model 3" },
      { src: "/assets/advish-konveksi-topi1.png", alt: "Topi Model 1 (Copy)" },
    ],
  },
  {
    slug: "topi-trucker-panel",
    name: "Topi Trucker Jaring",
    category: "Topi",
    price: "Mulai dari 23K",
    image: "/assets/advish-konveksi-topi2.png",
    imageAlt: "Topi Trucker Advish",
    description:
      "Topi jaring/trucker cap dengan busa depan tebal dan jaring sirkulasi udara di bagian belakang. Pilihan favorit untuk merchandise event kasual.",
    specs: [
      { label: "Bahan depan", value: "Lotto Busa Tebal" },
      { label: "Bahan belakang", value: "Jaring Double Mesh Lembut" },
      { label: "Pengatur", value: "Snap Plastik (Adjustable)" },
      { label: "Tekstur", value: "Ringan & Sejuk" },
    ],
    printOptions: ["Sablon Foam (Timbul)", "Bordir Flat", "DTF"],
    detailImages: [
      { src: "/assets/advish-konveksi-topi2.png", alt: "Topi Model 2" },
      { src: "/assets/advish-konveksi-topi3.png", alt: "Topi Model 3" },
      { src: "/assets/advish-konveksi-topi1.png", alt: "Topi Model 1" },
      { src: "/assets/advish-konveksi-topi2.png", alt: "Topi Model 2 (Copy)" },
    ],
  },
  {
    slug: "topi-snapback-streetwear",
    name: "Topi Snapback Streetwear",
    category: "Topi",
    price: "Mulai dari 30K",
    image: "/assets/advish-konveksi-topi3.png",
    imageAlt: "Topi Snapback Advish",
    description:
      "Topi snapback bermulut datar (flat visor) dengan panel depan kokoh khas streetwear. Sangat disukai oleh komunitas hip-hop dan brand clothing distro.",
    specs: [
      { label: "Bahan", value: "Rafel Daimaru / Canvas Drill" },
      { label: "Visor", value: "Flat Visor (Datar Keras)" },
      { label: "Panel", value: "High-Profile 5/6 Panel" },
      { label: "Jahitan", value: "Sangat Rapi & Kokoh" },
    ],
    printOptions: ["Bordir Komputer Timbul", "Woven Patch Label"],
    detailImages: [
      { src: "/assets/advish-konveksi-topi3.png", alt: "Topi Model 3" },
      { src: "/assets/advish-konveksi-topi1.png", alt: "Topi Model 1" },
      { src: "/assets/advish-konveksi-topi2.png", alt: "Topi Model 2" },
      { src: "/assets/advish-konveksi-topi3.png", alt: "Topi Model 3 (Copy)" },
    ],
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: "kemeja",
    name: "Kemeja",
    icon: "kemeja",
    borderColor: "border-[#d6f6fc] hover:border-[#00c5eb] hover:shadow-[0_8px_20px_rgba(0,197,235,0.1)]",
    bgColor: "bg-[#ecfafd]",
    iconColor: "text-[#00c5eb]",
    count: 4,
  },
  {
    id: "jaket",
    name: "Jaket",
    icon: "jaket",
    borderColor: "border-[#fef7e0] hover:border-[#f5b041] hover:shadow-[0_8px_20px_rgba(245,176,65,0.1)]",
    bgColor: "bg-[#fffbf0]",
    iconColor: "text-[#f5b041]",
    count: 4,
  },
  {
    id: "kaos",
    name: "Kaos",
    icon: "kaos",
    borderColor: "border-[#ebecfc] hover:border-[#5856d6] hover:shadow-[0_8px_20px_rgba(88,86,214,0.1)]",
    bgColor: "bg-[#f4f5fd]",
    iconColor: "text-[#5856d6]",
    count: 4,
  },
  {
    id: "polo",
    name: "Polo",
    icon: "polo",
    borderColor: "border-[#fce8fc] hover:border-[#a020f0] hover:shadow-[0_8px_20px_rgba(160,32,240,0.1)]",
    bgColor: "bg-[#fdf0fd]",
    iconColor: "text-[#a020f0]",
    count: 0,
  },
  {
    id: "jersey",
    name: "Jersey",
    icon: "jersey",
    borderColor: "border-[#e6fbe6] hover:border-[#2e7d32] hover:shadow-[0_8px_20px_rgba(46,125,50,0.1)]",
    bgColor: "bg-[#f2fdf2]",
    iconColor: "text-[#2e7d32]",
    count: 4,
  },
  {
    id: "topi",
    name: "Topi",
    icon: "topi",
    borderColor: "border-[#fde8e8] hover:border-[#c62828] hover:shadow-[0_8px_20px_rgba(198,40,40,0.1)]",
    bgColor: "bg-[#fef2f2]",
    iconColor: "text-[#c62828]",
    count: 3,
  },
  {
    id: "celana",
    name: "Celana",
    icon: "celana",
    borderColor: "border-[#e6f0fa] hover:border-[#1565c0] hover:shadow-[0_8px_20px_rgba(21,101,192,0.1)]",
    bgColor: "bg-[#f2f7fc]",
    iconColor: "text-[#1565c0]",
    count: 0,
  },
];

/* ══════════════════════════════════════════════════════════
   4. STATISTIK
   ══════════════════════════════════════════════════════════ */

export const stats: StatItem[] = [
  { value: "2+", label: "Tahun Pengalaman", icon: "briefcase" },
  { value: "100+", label: "Project Selesai", icon: "shirt" },
  { value: "50+", label: "Klien Puas", icon: "user" },
  { value: "99%", label: "On Time Pengiriman", icon: "clock" },
];

/* ══════════════════════════════════════════════════════════
   5. CARA KERJA (BERANDA)
   ══════════════════════════════════════════════════════════ */

export const workSteps = [
  {
    step: 1,
    title: "Konsultasi",
    icon: "phone",
  },
  {
    step: 2,
    title: "Fiksasi Data Order",
    icon: "check",
  },
  {
    step: 3,
    title: "Produksi",
    icon: "factory",
  },
  {
    step: 4,
    title: "Pemeriksaan Akhir & Pengemasan",
    icon: "package",
  },
  {
    step: 5,
    title: "Produk Selesai",
    icon: "thumb",
  },
];

/* ══════════════════════════════════════════════════════════
   6. TESTIMONI & CLIENT
   ══════════════════════════════════════════════════════════ */

export const clientLogos = ["PT Bali Kreasi", "Komunitas Riders", "Bank BRI", "Hotel Sanur", "Bali United FC", "SMK Negeri 1", "PT Maju Jaya", "Dinas Pariwisata"];

export const testimonials = [
  { name: "exsos XII 9", role: "2 bulan lalu", text: "Konveksi Advish benar-benar memberikan pengalaman yang sangat memuaskan. Kualitas jahitannya rapi dan detail, bahan yang digunakan juga terasa nyaman dan tidak murahan. Pelayanan mereka sangat ramah dan responsif, sehingga komunikasi selama proses pemesanan berjalan lancar tanpa kendala.", rating: 5, image: "/assets/advish-konveksi-testimonial1.png" },
  { name: "Putu Chandra Risca Dinata", role: "4 bulan lalu", text: "Konveksi ini oke sih. Dari bahan sampai hasil akhir sesuai sama yang diharapkan. Adminnya responsif dan enak diajak komunikasi. Worth it buat langganan.", rating: 5, image: "/assets/advish-konveksi-testimonial2.png" },
  { name: "Ni Luh Komang Triayu Laksmi Dewi", role: "2 bulan lalu", text: "pernah skeptis sama konveksi, tapi konveksi yang satu ini berhasil matahin stigma ku itu karena dari proses awal - akhir semuanya dibantu dengan jelas dan jujur! setiap ada problem pstii di kabari dan dari awal selalu di make sure supaya ekspektasi ku dan mereka sama. dan hasil produksi ga kaleng\u201Dbener bener sesuai sama ekspektasi🥹 terharu bgt, semoga owner nya yg buat nih konveksi masuk surga ya kak!", rating: 5, image: "/assets/advish-konveksi-testimonial3.png" },
  { name: "Cindy Oktacia", role: "4 bulan lalu", text: "pelayanannyaa bagus banget apa lagi hasil sablonnya ga pernah mengecewakan, selalu memuaskaannn, TOP BANGET ⭐️⭐️⭐️⭐️", rating: 5, image: "/assets/advish-konveksi-testimonial4.png" },
  { name: "helmi kuswandi", role: "2 bulan lalu", text: "Yang saya notice waktu order di Advish Konveksi tuh mereka gak vuma bilang \"bisa\",tapi juga jelasin dari sisi produksi. Bahkan kemungkinan hasil yang kurang maksimal juga dikasih tau dari awal. Jadi kita sebagai customer malah lebih kebayang hasil akhirnya bakal kayak gimana.", rating: 5, image: "/assets/advish-konveksi-testimonial5.png" },
  { name: "I GUSTI AYU NGURAH ANGGIA PRADNYANI", role: "sebulan lalu", text: "Kualitas bajunya bagus dan ramah dikantong juga nih\nyuk dicoba gais dijamin puas sama hasilnya", rating: 5, image: "/assets/advish-konveksi-testimonial6.png" },
  { name: "Surya Wirakusumah", role: "2 bulan lalu", text: "Menurutku yang bikin beda Advish tuh mereka jelasin proses nya. Bahkan worst case di produksi juga disampaikan. Jadi kita sebagai customers ngerasa lebih dihargai dan gak dibikin terlalu berharap tinggi doang.", rating: 5, image: "/assets/advish-konveksi-testimonial7.png" },
  { name: "Ni komang Luh suandewi", role: "2 bulan lalu", text: "Salah satu hal yang menurutku beda dari advish mereka transparan banget. Dari bahan proses produksi sampai kemungkinan terburuknya ,juga di jelasin jadi pas barang jadi itu gak kaget malah sesuai ekspektasi.", rating: 5, image: "/assets/advish-konveksi-testimonial8.png" },
  { name: "Made Vita Maharani", role: "4 bulan lalu", text: "keren banget kualitasnya gausah diragukan lagii bahannya selalu premium selalu memuaskan", rating: 5, image: "/assets/advish-konveksi-testimonial9.png" },
  { name: "Meybella V. Saputra", role: "sebulan lalu", text: "Pelayanannya bagus banget, sangat informatif dan satset. Kualitas gak usah diraguin lagi deh. Recommended!", rating: 5, image: "/assets/advish-konveksi-testimonial10.png" },
  { name: "Hendra ije", role: "2 bulan lalu", text: "Enaknya bikin di Advish Konveksi tuh mereka ngasih insight dari sisi produksi juga. Jadi kita gak cuma order doang, tapi dikasih gambaran realistis soal hasil akhirnya. Jarang sih Nemu konveksi yang kayak gitu.", rating: 5, image: "/assets/advish-konveksi-testimonial11.png" },
  { name: "A.A.Ngurah Agung Kusuma Putra", role: "5 bulan lalu", text: "Pemesanan baju disini sangat baik, selain dari hasil bajunya yang bagus, pelayanannya juga sangat ramah", rating: 5, image: "/assets/advish-konveksi-testimonial12.png" },
  { name: "Enjang Suhadma", role: "2 bulan lalu", text: "Respect sih sama cara Advish handle order. mereka dari awal udah jelasin kemungkinan terbaik sampai kemungkinan kurang idealnya. Buatku itu malah bikin lebih trust sama hasil akhirnya.", rating: 5, image: "/assets/advish-konveksi-testimonial13.png" },
  { name: "Gusti Ayu Jacinda Mewiana Putri", role: "5 bulan lalu", text: "Kualitas bintang 5 ⭐ hasil dari jahitannya sangat rapiii dan bahannya juga bagus, untuk harganya juga ramah di kantong, bestt dehh pokoknyaa", rating: 5, image: "/assets/advish-konveksi-testimonial14.png" },
  { name: "Feby Amanda Sukmawati", role: "4 bulan lalu", text: "selama organisasi yang saya ikuti selalu membuat baju di advish konveksi karena baju disana bahan nya bagus, adem dan juga stylelish.", rating: 5, image: "/assets/advish-konveksi-testimonial15.png" },
  { name: "Putu Dinda Priyah Putri", role: "5 bulan lalu", text: "hasil jahitannya rapi dan bahannya juga bagus,, untuk soal harga sangat amat terjangkau dan kualitass bintang 5❤️", rating: 5, image: "/assets/advish-konveksi-testimonial16.png" },
  { name: "Ni Komang Kharina Gayatri", role: "6 bulan lalu", text: "Sangat senang bekerja sama dengan Advish Konveksi🤩🤩🤩, hampir setahun bekerja sama dan sudah sangat banyak juga pesenan kami yang ada saja requestnya itu dibuatkan oleh konveksi dengan baik dan teliti. Teruntuk owner Advish Konveksi kak Wibawa dan kak Caca kami ucapkan terima kasih banyak atas semua dedikasinya karena setiap kendala yang ada sudah diselesaikan dan selalu dikomunikasikan dengan baik dan saya mewakili Himatika Udayana mengucapkan maaf jika terdapat hal yang kurang berkenan selama hampir setahun ini💐🙂‍↕️👐🏻. Buat kalian yang mau lihat hasil-hasil karya Advish Konveksi bisa langsung cek Instagram @himatika.udayana periode 2025🔥🔥🔥🤩🤩👏🏻👏🏻👏🏻", rating: 5, image: "/assets/advish-konveksi-testimonial17.png" },
];

/* ══════════════════════════════════════════════════════════
   7. BERANDA PRODUCTS (Ringkasan Kategori di Home)
   ══════════════════════════════════════════════════════════ */

export const BerandaProducts: BerandaProduct[] = [
  {
    label: "Kaos",
    image: "/assets/advish-konveksi-kaos1.png",
    imageAlt: "Kaos custom Advish Konveksi",
    href: "/produk/kaos-cotton-combed-30s",
  },
  {
    label: "Jersey",
    image: "/assets/advish-konveksi-jersey2.png",
    imageAlt: "Jersey dryfit premium Advish Konveksi",
    href: "/produk/jersey-dryfit-premium",
  },
  {
    label: "Jaket",
    image: "/assets/advish-konveksi-jaket3.png",
    imageAlt: "Jaket sporty custom Advish Konveksi",
    href: "/produk/jaket-sporty",
  },
  {
    label: "Kemeja",
    image: "/assets/advish-konveksi-kemeja2.png",
    imageAlt: "Kemeja custom Advish Konveksi",
    href: "/produk/kemeja",
  },
  {
    label: "Polo",
    image: "/assets/advish-konveksi-polo1.png",
    imageAlt: "Polo custom Advish Konveksi",
    href: "/produk/polo",
  },
];

/* ══════════════════════════════════════════════════════════
   8. TENTANG KAMI
   ══════════════════════════════════════════════════════════ */

/** Langkah proses kerja yang ditampilkan di halaman Tentang Kami */
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Konsultasi & Desain",
    description:
      "Diskusikan kebutuhan Anda dengan tim kami. Kami bantu wujudkan desain dari konsep hingga mockup final yang sesuai identitas brand Anda.",
    icon: "ruler",
  },
  {
    step: "02",
    title: "Pemilihan Bahan",
    description:
      "Kami menyediakan pilihan bahan premium mulai dari Cotton Combed, Dryfit, hingga American Drill dengan kualitas terjamin.",
    icon: "package",
  },
  {
    step: "03",
    title: "Produksi & QC",
    description:
      "Proses produksi menggunakan mesin modern dengan quality control ketat di setiap tahap untuk memastikan hasil terbaik.",
    icon: "factory",
  },
  {
    step: "04",
    title: "Pengiriman Tepat Waktu",
    description:
      "Pesanan dikemas rapi dan dikirim tepat waktu ke seluruh Indonesia. Lacak status pesanan Anda secara real-time.",
    icon: "truck",
  },
];

/** Filosofi tim yang ditampilkan di halaman Tentang Kami */
export const teamPhilosophy: TeamPhilosophy[] = [
  {
    title: "Berpusat pada Klien",
    description:
      "Setiap project dimulai dengan memahami kebutuhan unik klien. Kami bukan sekadar vendor — kami partner kreatif Anda.",
    icon: "heart",
  },
  {
    title: "Inovasi Tanpa Henti",
    description:
      "Kami terus berinvestasi pada teknologi dan teknik terbaru untuk memberikan hasil produksi yang selalu lebih baik.",
    icon: "award",
  },
  {
    title: "Komitmen Keberlanjutan",
    description:
      "Menggunakan proses produksi yang bertanggung jawab dengan meminimalkan limbah dan memilih bahan ramah lingkungan.",
    icon: "thumb",
  },
];

/** Item misi perusahaan */
export const missionItems: string[] = [
  "Menghasilkan produk konveksi dengan kualitas terbaik dan standar produksi yang konsisten.",
  "Memberikan pelayanan profesional, cepat, dan responsif kepada setiap pelanggan.",
  "Mengembangkan desain dan inovasi produk sesuai tren serta kebutuhan pasar.",
  "Membangun hubungan kerja yang baik dengan mitra dan pelanggan secara berkelanjutan.",
  "Dapat mengimplementasikan bentuk kegiataan pengabdian kepada masyarakat yang tersirat melalui keberlangsungan kemitraan ini.",

];

/** Nilai-nilai perusahaan */
export const values = [
  {
    title: "Kualitas Terbaik",
    text: "Menggunakan bahan premium dan dikerjakan oleh tenaga ahli.",
    icon: "award",
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

/** Foto galeri workshop */
export const galleryImages = [
  { src: "/assets/gallery-1.png", alt: "Workshop konveksi dengan tim menjahit" },
  { src: "/assets/gallery-2.png", alt: "Detail proses jahit kain motif" },
  { src: "/assets/gallery-3.png", alt: "Area produksi konveksi Bali" },
  { src: "/assets/gallery-4.png", alt: "Meja potong dan produksi apparel" },
  { src: "/assets/gallery-5.png", alt: "Mesin produksi apparel custom" },
  { src: "/assets/gallery-6.png", alt: "Tim menyiapkan kain produksi" },
  { src: "/assets/gallery-7.png", alt: "Proses printing apparel" },
  { src: "/assets/gallery-8.png", alt: "Tim workshop Advish Konveksi" },
];

/* ══════════════════════════════════════════════════════════
   11. PRODUK DETAIL PAGE
   ══════════════════════════════════════════════════════════ */

/**
 * Mapping dari slug kategori ke slug produk default.
 * Digunakan saat user mengakses /produk/[kategori] langsung.
 */
export const categoryToProductSlug: CategorySlugMap = {
  kemeja: "pdh-american-drill",
  jaket: "jaket-sporty",
  kaos: "kaos-cotton-combed-30s",
  jersey: "jersey-dryfit-premium",
  topi: "topi-custom",
};

/**
 * Spesifikasi umum per kategori produk.
 * Ditampilkan di halaman detail produk sebagai pengganti spesifikasi
 * produk individual saat mengakses via kategori.
 */
export const categorySpecs: CategorySpecMap = {
  "Kemeja": [
    { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
    { label: "Pilihan Warna", value: "Custom" },
    { label: "Size Chart", value: "Custom" },
    { label: "Bahan", value: "American Drill, Japan Drill, Nagata Drill, Twill, Poplin, Katun, dll" },
  ],
  "Jaket": [
    { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
    { label: "Pilihan Warna", value: "Custom" },
    { label: "Size Chart", value: "Banyak Pilihan" },
    { label: "Bahan", value: "American Drill, Japan Drill, Nagata Drill, Twill, Cotton Fleece, Canvas, Microfiber, Corduroy, Scuba, Diadora, dll" },
  ],
  "Kaos": [
    { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
    { label: "Pilihan Warna", value: "Custom" },
    { label: "Size Chart", value: "Banyak Pilihan" },
    { label: "Bahan", value: "Cotton Combed, Cotton Korean, Cotton Danball, Cotton Bamboo, Carded, dll" },
  ],
  "Polo": [
    { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
    { label: "Pilihan Warna", value: "Custom" },
    { label: "Size Chart", value: "Banyak Pilihan" },
    { label: "Bahan", value: "Lacoste Cotton, Lacoste CVC, Lacoste PE, Cotton Combed, dll" },
  ],
  "Jersey": [
    { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
    { label: "Pilihan Warna", value: "Custom" },
    { label: "Size Chart", value: "Banyak Pilihan" },
    { label: "Bahan", value: "Lacoste Cotton, Lacoste CVC, Lacoste PE, Cotton Combed, dll" },
  ],
  "Topi": [
    { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
    { label: "Pilihan Warna", value: "Custom" },
    { label: "Size Chart", value: "Banyak Pilihan" },
    { label: "Bahan", value: "Drill, Corduroy, Canvas, Rafel, Jaring, dll" },
  ],
  "Celana": [
    { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
    { label: "Pilihan Warna", value: "Custom" },
    { label: "Size Chart", value: "Banyak Pilihan" },
    { label: "Bahan", value: "Drill, Corduroy, Canvas, Rafel, Jaring, dll" },
  ],
};
