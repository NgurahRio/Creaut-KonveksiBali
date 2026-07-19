import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, defaultOpenGraphImage } from "@/data/seo";

export const metadata: Metadata = {
  title: "Tentang Advish Konveksi Bali | Konveksi Custom Denpasar",
  description:
    "Kenali Advish Konveksi, jasa konveksi custom di Denpasar Bali untuk produksi apparel, seragam, kaos, kemeja, polo, jaket, jersey, bordir, dan sablon.",
  alternates: {
    canonical: "/tentang-kami",
  },
  openGraph: {
    title: "Tentang Advish Konveksi Bali",
    description:
      "Advish Konveksi adalah partner produksi apparel custom, seragam, merchandise, dan clothing brand di Denpasar Bali.",
    siteName: SITE_NAME,
    url: `${SITE_URL}/tentang-kami`,
    images: [defaultOpenGraphImage],
  },
};

export default function TentangKamiLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
