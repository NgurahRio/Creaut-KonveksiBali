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
    imageAlt: "Kaos putih Cotton Combed 30s Advish Konveksi",
    description:
      "Kaos Cotton Combed 30s dari Advish Konveksi merupakan pilihan apparel terbaik untuk kebutuhan seragam komunitas, merchandise event, hingga pakaian kasual harian Anda. Terbuat dari serat kapas alami pilihan, kain ini terasa halus, ringan, dan nyaman digunakan sepanjang hari di iklim tropis.",
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
    imageAlt: "Jersey biru dryfit premium Advish Konveksi",
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
    imageAlt: "Jaket sporty hitam merah Advish Konveksi",
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
    imageAlt: "Jaket formal hitam Advish Konveksi",
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
    imageAlt: "PDH abu-abu American Drill Advish Konveksi",
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
    imageAlt: "Jaket hoodie hitam merah Advish Konveksi",
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
    imageAlt: "Workshop wear hitam Advish Konveksi",
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
    imageAlt: "Topi custom hitam Advish Konveksi",
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
  { value: "2+", label: "Tahun Pengalaman", icon: "briefcase" },
  { value: "100+", label: "Project Selesai", icon: "shirt" },
  { value: "50+", label: "Klien Puas", icon: "user" },
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
  { year: "2023", text: "Advish Konveksi resmi berdiri di Denpasar, Bali dengan visi menghadirkan apparel custom berkualitas." },
  { year: "2024", text: "Berkembang pesat dan dipercaya oleh berbagai komunitas, event, dan brand lokal di Bali." },
  { year: "2025", text: "Terus berinovasi dalam desain dan produksi, memperluas layanan ke seluruh Indonesia." },
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
  { src: "/assets/gallery-8.png", alt: "Tim workshop Advish Konveksi" },
];

export const clientLogos = ["PT Bali Kreasi", "Komunitas Riders", "Bank BRI", "Hotel Sanur", "Bali United FC", "SMK Negeri 1", "PT Maju Jaya", "Dinas Pariwisata"];

export const portfolioItems = [
  {
    title: "Jersey Bali Riders",
    description: "Jersey full print custom untuk komunitas Bali Riders dengan desain racing dinamis dan bahan dryfit premium.",
    image: "/assets/gallery-1.png",
    imageAlt: "Jersey custom Bali Riders Community",
  },
  {
    title: "Kaos Event Festival",
    description: "Produksi 500 pcs kaos event Bali Festival dengan sablon plastisol 4 warna dan finishing rapi.",
    image: "/assets/gallery-2.png",
    imageAlt: "Kaos event Bali Festival",
  },
  {
    title: "Seragam PT Maju Jaya",
    description: "Seragam kerja American Drill untuk 200 karyawan PT Maju Jaya dengan bordir logo dan nama.",
    image: "/assets/gallery-3.png",
    imageAlt: "Seragam kerja PT Maju Jaya",
  },
  {
    title: "Jaket Angkatan SMK",
    description: "Jaket hoodie custom angkatan 2025 SMK Negeri 1 dengan desain premium dan bahan fleece tebal.",
    image: "/assets/gallery-4.png",
    imageAlt: "Jaket angkatan SMK Negeri 1",
  },
  {
    title: "Workshop Wear Hotel",
    description: "Wearpack custom untuk tim engineering Hotel Sanur dengan bahan drill premium dan banyak kantong.",
    image: "/assets/gallery-5.png",
    imageAlt: "Workshop wear Hotel Sanur",
  },
  {
    title: "PDH Dinas Pariwisata",
    description: "PDH formal untuk Dinas Pariwisata Bali dengan bordir logo dan potongan rapi profesional.",
    image: "/assets/gallery-6.png",
    imageAlt: "PDH Dinas Pariwisata Bali",
  },
];

export const testimonials = [
  { name: "exsos XII 9", role: "2 bulan lalu", text: "Konveksi Advish benar-benar memberikan pengalaman yang sangat memuaskan. Kualitas jahitannya rapi dan detail, bahan yang digunakan juga terasa nyaman dan tidak murahan. Pelayanan mereka sangat ramah dan responsif, sehingga komunikasi selama proses pemesanan berjalan lancar tanpa kendala.", rating: 5, image: "https://i.pravatar.cc/150?u=exsos" },
  { name: "Putu Chandra Risca Dinata", role: "4 bulan lalu", text: "Konveksi ini oke sih. Dari bahan sampai hasil akhir sesuai sama yang diharapkan. Adminnya responsif dan enak diajak komunikasi. Worth it buat langganan.", rating: 5, image: "https://i.pravatar.cc/150?u=putu" },
  { name: "Ni Luh Komang Triayu Laksmi Dewi", role: "2 bulan lalu", text: "pernah skeptis sama konveksi, tapi konveksi yang satu ini berhasil matahin stigma ku itu karena dari proses awal - akhir semuanya dibantu dengan jelas dan jujur! setiap ada problem pstii di kabari dan dari awal selalu di make sure supaya ekspektasi ku dan mereka sama. dan hasil produksi ga kaleng”,bener bener sesuai sama ekspektasi🥹 terharu bgt, semoga owner nya yg buat nih konveksi masuk surga ya kak!", rating: 5, image: "https://i.pravatar.cc/150?u=niluh" },
  { name: "Cindy Oktacia", role: "4 bulan lalu", text: "pelayanannyaa bagus banget apa lagi hasil sablonnya ga pernah mengecewakan, selalu memuaskaannn, TOP BANGET ⭐️⭐️⭐️⭐️", rating: 5, image: "https://i.pravatar.cc/150?u=cindy" },
  { name: "helmi kuswandi", role: "2 bulan lalu", text: "Yang saya notice waktu order di Advish Konveksi tuh mereka gak vuma bilang \"bisa\",tapi juga jelasin dari sisi produksi. Bahkan kemungkinan hasil yang kurang maksimal juga dikasih tau dari awal. Jadi kita sebagai customer malah lebih kebayang hasil akhirnya bakal kayak gimana.", rating: 5, image: "https://i.pravatar.cc/150?u=helmi" },
  { name: "I GUSTI AYU NGURAH ANGGIA PRADNYANI", role: "sebulan lalu", text: "Kualitas bajunya bagus dan ramah dikantong juga nih\nyuk dicoba gais dijamin puas sama hasilnya", rating: 5, image: "https://i.pravatar.cc/150?u=anggia" },
  { name: "Surya Wirakusumah", role: "2 bulan lalu", text: "Menurutku yang bikin beda Advish tuh mereka jelasin proses nya. Bahkan worst case di produksi juga disampaikan. Jadi kita sebagai customers ngerasa lebih dihargai dan gak dibikin terlalu berharap tinggi doang.", rating: 5, image: "https://i.pravatar.cc/150?u=surya" },
  { name: "Ni komang Luh suandewi", role: "2 bulan lalu", text: "Salah satu hal yang menurutku beda dari advish mereka transparan banget. Dari bahan proses produksi sampai kemungkinan terburuknya ,juga di jelasin jadi pas barang jadi itu gak kaget malah sesuai ekspektasi.", rating: 5, image: "https://i.pravatar.cc/150?u=suandewi" },
  { name: "Made Vita Maharani", role: "4 bulan lalu", text: "keren banget kualitasnya gausah diragukan lagii bahannya selalu premium selalu memuaskan", rating: 5, image: "https://i.pravatar.cc/150?u=vita" },
  { name: "Meybella V. Saputra", role: "sebulan lalu", text: "Pelayanannya bagus banget, sangat informatif dan satset. Kualitas gak usah diraguin lagi deh. Recommended!", rating: 5, image: "https://i.pravatar.cc/150?u=meybella" },
  { name: "Hendra ije", role: "2 bulan lalu", text: "Enaknya bikin di Advish Konveksi tuh mereka ngasih insight dari sisi produksi juga. Jadi kita gak cuma order doang, tapi dikasih gambaran realistis soal hasil akhirnya. Jarang sih Nemu konveksi yang kayak gitu.", rating: 5, image: "https://i.pravatar.cc/150?u=hendra" },
  { name: "A.A.Ngurah Agung Kusuma Putra", role: "5 bulan lalu", text: "Pemesanan baju disini sangat baik, selain dari hasil bajunya yang bagus, pelayanannya juga sangat ramah", rating: 5, image: "https://i.pravatar.cc/150?u=agung" },
  { name: "Enjang Suhadma", role: "2 bulan lalu", text: "Respect sih sama cara Advish handle order. mereka dari awal udah jelasin kemungkinan terbaik sampai kemungkinan kurang idealnya. Buatku itu malah bikin lebih trust sama hasil akhirnya.", rating: 5, image: "https://i.pravatar.cc/150?u=enjang" },
  { name: "Gusti Ayu Jacinda Mewiana Putri", role: "5 bulan lalu", text: "Kualitas bintang 5 ⭐ hasil dari jahitannya sangat rapiii dan bahannya juga bagus, untuk harganya juga ramah di kantong, bestt dehh pokoknyaa", rating: 5, image: "https://i.pravatar.cc/150?u=jacinda" },
  { name: "Feby Amanda Sukmawati", role: "4 bulan lalu", text: "selama organisasi yang saya ikuti selalu membuat baju di advish konveksi karena baju disana bahan nya bagus, adem dan juga stylelish.", rating: 5, image: "https://i.pravatar.cc/150?u=feby" },
  { name: "Putu Dinda Priyah Putri", role: "5 bulan lalu", text: "hasil jahitannya rapi dan bahannya juga bagus,, untuk soal harga sangat amat terjangkau dan kualitass bintang 5❤️", rating: 5, image: "https://i.pravatar.cc/150?u=dinda" },
  { name: "Ni Komang Kharina Gayatri", role: "6 bulan lalu", text: "Sangat senang bekerja sama dengan Advish Konveksi🤩🤩🤩, hampir setahun bekerja sama dan sudah sangat banyak juga pesenan kami yang ada saja requestnya itu dibuatkan oleh konveksi dengan baik dan teliti. Teruntuk owner Advish Konveksi kak Wibawa dan kak Caca kami ucapkan terima kasih banyak atas semua dedikasinya karena setiap kendala yang ada sudah diselesaikan dan selalu dikomunikasikan dengan baik dan saya mewakili Himatika Udayana mengucapkan maaf jika terdapat hal yang kurang berkenan selama hampir setahun ini💐🙂‍↕️👐🏻. Buat kalian yang mau lihat hasil-hasil karya Advish Konveksi bisa langsung cek Instagram @himatika.udayana periode 2025🔥🔥🔥🤩🤩👏🏻👏🏻👏🏻", rating: 5, image: "https://i.pravatar.cc/150?u=kharina" }
];


export const workSteps = [
  {
    step: 1,
    title: "Konsultasi",
    description: "Diskusikan kebutuhan apparel custom Anda dengan tim kami melalui WhatsApp.",
    icon: "phone",
  },
  {
    step: 2,
    title: "Desain",
    description: "Tim desain kami bantu wujudkan ide Anda menjadi mockup visual yang menarik.",
    icon: "ruler",
  },
  {
    step: 3,
    title: "Produksi",
    description: "Proses produksi dengan bahan premium dan quality control ketat di setiap tahap.",
    icon: "factory",
  },
  {
    step: 4,
    title: "Pengiriman",
    description: "Pesanan dikemas rapi dan dikirim tepat waktu ke seluruh Indonesia.",
    icon: "truck",
  },
];

export const advantages = [
  {
    title: "Gratis Desain",
    description: "Tim desainer profesional siap membantu mewujudkan ide Anda tanpa biaya tambahan.",
    icon: "ruler",
  },
  {
    title: "Bahan Premium",
    description: "Hanya menggunakan bahan berkualitas tinggi untuk hasil yang nyaman dan tahan lama.",
    icon: "award",
  },
  {
    title: "Produksi Cepat",
    description: "Proses produksi efisien dengan estimasi waktu 7-14 hari kerja sesuai quantity.",
    icon: "clock",
  },
  {
    title: "Kirim Seluruh Indonesia",
    description: "Melayani pengiriman ke seluruh wilayah Indonesia dengan packing aman.",
    icon: "truck",
  },
];
