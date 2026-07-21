
import type {
  Product,
  StatItem,
  ProductCategory,
  BerandaProduct,
  ProcessStep,
  TeamPhilosophy,
  CategorySpecMap,
  CategorySlugMap,
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
    slug: "Kaos",
    category: "Kaos",
    image: "/assets/advish-konveksi-kaos1.png",
    imageAlt: "Kaos Putih Cotton Combed 30s Advish Konveksi",
    specs: [
      { label: "Bahan", value: "Cotton Combed 30s" },
      { label: "Gramasi", value: "150-160 Gsm" },
      { label: "Ketahanan", value: "Sangat Baik" },
      { label: "Pilihan Warna", value: "Lebih dari 30 Warna" },
    ],
    detailImages: [
      { src: "/assets/advish-konveksi-kaos2.png", alt: "Kaos Model 2" },
      { src: "/assets/advish-konveksi-kaos1.png", alt: "Kaos Model 1" },
      { src: "/assets/advish-konveksi-kaos3.png", alt: "Kaos Model 3" },
      { src: "/assets/advish-konveksi-kaos4.png", alt: "Kaos Model 4" },
      { src: "/assets/advish-konveksi-kaos-size2.jpg", alt: "Kaos Size 2" },
      { src: "/assets/advish-konveksi-kaos-size4.jpg", alt: "Kaos Size 4" },
      { src: "/assets/advish-konveksi-kaos-size1.jpg", alt: "Kaos Size 1" },
      { src: "/assets/advish-konveksi-kaos-size3.jpg", alt: "Kaos Size 3" },
    ],
  },

  // Jersey
  {
    slug: "Jersey",
    category: "Jersey",
    image: "/assets/advish-konveksi-jersey1.png",
    imageAlt: "Jersey Dryfit Premium Advish Konveksi",
    specs: [
      { label: "Bahan", value: "Dryfit Milano / Jarum" },
      { label: "Model", value: "Atletis Fit" },
      { label: "Jahitan", value: "Overdeck / Flatlock" },
      { label: "Fitur", value: "Quick Dry & Anti-Bakteri" },
    ],
    detailImages: [
      { src: "/assets/advish-konveksi-jersey4.png", alt: "Jersey Model 4" },
      { src: "/assets/advish-konveksi-jersey1.png", alt: "Jersey Model 1" },
      { src: "/assets/advish-konveksi-jersey2.png", alt: "Jersey Model 2" },
      { src: "/assets/advish-konveksi-jersey3.png", alt: "Jersey Model 3" },
      { src: "/assets/advish-konveksi-jersey-size1.jpg", alt: "Jersey Size 1" },
      { src: "/assets/advish-konveksi-jersey-size2.jpg", alt: "Jersey Size 2" },
      { src: "/assets/advish-konveksi-jersey-size3.jpg", alt: "Jersey Size 3" },
    ],
  },

  // Jaket
  {
    slug: "Jaket",
    category: "Jaket",
    image: "/assets/advish-konveksi-jaket1.png",
    imageAlt: "Jaket Sporty Advish Konveksi",
    specs: [
      { label: "Bahan luar", value: "Parasut Taslan / Despo" },
      { label: "Furing", value: "Jala / Puring Fleece hangat" },
      { label: "Resleting", value: "YKK Windproof" },
      { label: "Fitur", value: "Saku Dalam & Tali Kerut" },
    ],
    detailImages: [
      { src: "/assets/advish-konveksi-jaket4.png", alt: "Jaket Model 4" },
      { src: "/assets/advish-konveksi-jaket1.png", alt: "Jaket Model 1" },
      { src: "/assets/advish-konveksi-jaket2.png", alt: "Jaket Model 2" },
      { src: "/assets/advish-konveksi-jaket3.png", alt: "Jaket Model 3" },
      { src: "/assets/advish-konveksi-jaket-size1.jpg", alt: "Jaket Size 1" },
      { src: "/assets/advish-konveksi-jaket-size2.jpg", alt: "Jaket Size 2" },
      { src: "/assets/advish-konveksi-jaket-size3.jpg", alt: "Jaket Size 3" },
    ],
  },

  // Kemeja
  {
    slug: "Kemeja",
    category: "Kemeja",
    image: "/assets/advish-konveksi-kemeja1.png",
    imageAlt: "Kemeja PDH American Drill Advish",
    specs: [
      { label: "Bahan", value: "American Drill Original" },
      { label: "Kerah", value: "Standard Formal Collar" },
      { label: "Lengan", value: "Panjang / Pendek (Bisa Digulung)" },
      { label: "Fitur", value: "Pangkat Pundak & Saku Kancing Dada" },
    ],
    detailImages: [
      { src: "/assets/advish-konveksi-kemeja4.png", alt: "Kemeja Model 4" },
      { src: "/assets/advish-konveksi-kemeja1.png", alt: "Kemeja Model 1" },
      { src: "/assets/advish-konveksi-kemeja2.png", alt: "Kemeja Model 2" },
      { src: "/assets/advish-konveksi-kemeja3.png", alt: "Kemeja Model 3" },
      { src: "/assets/advish-konveksi-kemeja-size3.jpg", alt: "Kemeja Size 3" },
      { src: "/assets/advish-konveksi-kemeja-size4.jpg", alt: "Kemeja Size 4" },

    ],
  },

  // Topi
  {
    slug: "Topi",
    category: "Topi",
    image: "/assets/advish-konveksi-topi1.png",
    imageAlt: "Topi Custom Baseball Advish",
    specs: [
      { label: "Bahan", value: "Twill Premium / Rafel Denim" },
      { label: "Model", value: "Baseball Cap 6 Panel" },
      { label: "Pengatur Lebar", value: "Cakop Besi / Rantai Plastik" },
      { label: "Visor", value: "Pre-Curved Visor Keras" },
    ],
    detailImages: [
      { src: "/assets/advish-konveksi-topi1.png", alt: "Topi Model 1" },
      { src: "/assets/advish-konveksi-topi2.png", alt: "Topi Model 2" },
      { src: "/assets/advish-konveksi-topi3.png", alt: "Topi Model 3" },
    ],
  },

  // Polo
  {
    slug: "Polo",
    category: "Polo",
    image: "/assets/advish-konveksi-polo1.png",
    imageAlt: "Polo Shirt Lacoste Advish Konveksi",
    specs: [
      { label: "Bahan", value: "Lacoste CVC" },
      { label: "Kerah", value: "Kerah Rajut Tebal" },
      { label: "Lengan", value: "Pendek dengan Rib" },
      { label: "Fitur", value: "Kancing 2-3 baris" },
    ],
    detailImages: [
      { src: "/assets/advish-konveksi-polo1.png", alt: "Polo Model 1" },
      { src: "/assets/advish-konveksi-polo2.png", alt: "Polo Model 2" },
      { src: "/assets/advish-konveksi-polo3.png", alt: "Polo Model 3" },
      { src: "/assets/advish-konveksi-polo4.png", alt: "Polo Model 4" },
      { src: "/assets/advish-konveksi-polo-size1.jpg", alt: "Polo Size 1" },
      { src: "/assets/advish-konveksi-polo-size2.jpg", alt: "Polo Size 2" },
    ],
  },

  // Celana
  {
    slug: "Celana",
    category: "Celana",
    image: "/assets/advish-konveksi-celana1.png",
    imageAlt: "Celana Training Sport Advish Konveksi",
    specs: [
      { label: "Bahan", value: "Diadora / Lotto / Adidas" },
      { label: "Pinggang", value: "Karet Elastis + Tali" },
      { label: "Saku", value: "Kanan Kiri dengan Resleting" },
      { label: "Model", value: "Jogger / Lurus" },
    ],
    detailImages: [
      { src: "/assets/advish-konveksi-celana1.png", alt: "Celana Model 1" },
      { src: "/assets/advish-konveksi-celana2.png", alt: "Celana Model 2" },
      { src: "/assets/advish-konveksi-celana3.png", alt: "Celana Model 3" },
      { src: "/assets/advish-konveksi-celana4.png", alt: "Celana Model 4" },
      { src: "/assets/advish-konveksi-celana-size1.jpg", alt: "Celana Size 1" },
    ],
  },
];

//Halaman Produk Luar
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
    count: 4,
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
    count: 4,
  },
];

/* ══════════════════════════════════════════════════════════
   4. STATISTIK
   ══════════════════════════════════════════════════════════ */

export const stats: StatItem[] = [
  { value: "4+", label: "Tahun Pengalaman", icon: "briefcase" },
  { value: "10K+", label: "Project Selesai", icon: "shirt" },
  { value: "10Rb+", label: "Klien Puas", icon: "user" },
  { value: "100Rb+", label: "Jumlah Order Pelanggan", icon: "package" },
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

export const clientLogos = [
  "/assets/AdvishClient1.webp",
  "/assets/AdvishClient2.webp",
  "/assets/AdvishClient3.webp",
  "/assets/AdvishClient4.webp",
  "/assets/AdvishClient5.webp",
  "/assets/AdvishClient6.webp",
  "/assets/AdvishClient7.webp",
  "/assets/AdvishClient8.webp",
  "/assets/AdvishClient9.webp",
  "/assets/AdvishClient10.webp",
  "/assets/AdvishClient11.webp",
  "/assets/AdvishClient12.webp",
  "/assets/AdvishClient13.webp",
  "/assets/AdvishClient14.webp",
  "/assets/AdvishClient15.webp",
  "/assets/AdvishClient16.webp",
  "/assets/AdvishClient17.webp",
  "/assets/AdvishClient18.webp",
  "/assets/AdvishClient19.webp",
  "/assets/AdvishClient20.webp"
];

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
    href: "/produk/kaos",
  },
  {
    label: "Jersey",
    image: "/assets/advish-konveksi-jersey2.png",
    imageAlt: "Jersey dryfit premium Advish Konveksi",
    href: "/produk/jersey",
  },
  {
    label: "Jaket",
    image: "/assets/advish-konveksi-jaket3.png",
    imageAlt: "Jaket sporty custom Advish Konveksi",
    href: "/produk/jaket",
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
  {
    label: "Celana",
    image: "/assets/advish-konveksi-celana1.png",
    imageAlt: "Celana custom Advish Konveksi",
    href: "/produk/celana",
  },
];

/* ══════════════════════════════════════════════════════════
   8. TENTANG KAMI
   ══════════════════════════════════════════════════════════ */

/** Langkah proses kerja yang ditampilkan di halaman Tentang Kami */
export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Konsultasi Order",
    description: "Diskusikan kebutuhan, desain, dan budget Anda. Kami bantu arahkan bahan dan spesifikasi terbaik.",
    icon: "phone",
  },
  {
    step: "02",
    title: "Fiksasi Data Order",
    description: "Penetapan desain final, jumlah pesanan, ukuran, dan jadwal pengerjaan agar semuanya terukur dengan pasti.",
    icon: "check",
  },
  {
    step: "03",
    title: "Pembayaran Uang Muka",
    description: "Proses produksi akan dimulai segera setelah pembayaran Down Payment (DP) kami terima.",
    icon: "money",
  },
  {
    step: "04",
    title: "Produksi",
    description: "Pesanan Anda masuk ke tahap produksi dengan standar jahitan dan sablon/bordir berkualitas tinggi.",
    icon: "factory",
  },
  {
    step: "05",
    title: "Pemeriksaan Akhir & Pengemasan",
    description: "Setiap produk melewati Quality Control (QC) ketat sebelum dilipat dan dikemas rapi.",
    icon: "package",
  },
  {
    step: "06",
    title: "Pelunasan",
    description: "Selesaikan sisa pembayaran setelah pesanan siap untuk dikirimkan atau diambil.",
    icon: "creditCard",
  },
  {
    step: "07",
    title: "Produk Selesai",
    description: "Produk dikirim ke alamat Anda dan siap digunakan untuk kebutuhan acara atau seragam Anda.",
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
  { src: "/assets/AdvishWork1.webp" },
  { src: "/assets/AdvishWork2.webp" },
  { src: "/assets/AdvishWork3.webp" },
  { src: "/assets/AdvishWork4.webp" },
  { src: "/assets/AdvishWork5.webp" },
  { src: "/assets/AdvishWork6.webp" },
  { src: "/assets/AdvishWork7.webp" },
  { src: "/assets/AdvishWork8.webp" },
  { src: "/assets/AdvishWork9.webp" },
  { src: "/assets/AdvishWork10.webp" },
];

/* ══════════════════════════════════════════════════════════
   11. PRODUK DETAIL PAGE
   ══════════════════════════════════════════════════════════ */

/**
 * Mapping dari slug kategori ke slug produk default.
 * Digunakan saat user mengakses /produk/[kategori] langsung.
 */
export const categoryToProductSlug: CategorySlugMap = {
  kemeja: "Kemeja",
  jaket: "Jaket",
  kaos: "Kaos",
  jersey: "Jersey",
  topi: "Topi",
  polo: "Polo",
  celana: "Celana",
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
    { label: "Bahan", value: "Drill, Twill, Poplin, Canvas, Corduroy, Katun, dll" },
  ],
  "Jaket": [
    { label: "Variasi Model", value: "Custom (Regular, Slim, atau Relaxed)" },
    { label: "Pilihan Warna", value: "Custom" },
    { label: "Size Chart", value: "Banyak Pilihan" },
    { label: "Bahan", value: "Drill, Twill, Cotton Fleece, Canvas, Corduroy, Microfiber, Scuba, Diadora, dll" },
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
    { label: "Bahan", value: "Dryfit, Embos, Running, Jacquard, Serena, Airwalk, dll" },
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
    { label: "Bahan", value: "Drill, Twill, Canvas, Diadora, Fleece, Peles, Microfiber, dll" },
  ],
};
