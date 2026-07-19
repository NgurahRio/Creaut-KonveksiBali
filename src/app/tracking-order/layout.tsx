import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, defaultOpenGraphImage } from "@/data/seo";

export const metadata: Metadata = {
  title: "Tracking Order Advish Konveksi | Cek Status Produksi",
  description:
    "Cek status produksi pesanan Advish Konveksi melalui portal tracking order untuk memantau proses produksi, finishing, pengemasan, dan pengiriman.",
  alternates: {
    canonical: "/tracking-order",
  },
  openGraph: {
    title: "Tracking Order Advish Konveksi",
    description:
      "Pantau status produksi pesanan Advish Konveksi melalui portal tracking order.",
    siteName: SITE_NAME,
    url: `${SITE_URL}/tracking-order`,
    images: [defaultOpenGraphImage],
  },
};

export default function TrackingOrderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
