import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import LanguageProvider from "@/components/i18n/LanguageProvider";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";

const playfairDisplayHeading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: "Konveksi Bali - Jasa Pembuatan Kaos, Seragam & Apparel Custom",
  description:
    "Vendor konveksi apparel custom di Bali dan Denpasar untuk kaos, jersey, jaket, PDH, kemeja, polo shirt, dan seragam perusahaan dengan kualitas terbaik.",
  keywords: [
    "Konveksi Bali", "Jasa Konveksi Bali", "Konveksi Kaos Bali", "Konveksi Kaos Custom",
    "Konveksi Seragam", "Vendor Seragam Perusahaan", "Konveksi Hoodie", "Konveksi Polo Shirt",
    "Konveksi Kemeja", "Konveksi Jaket", "Konveksi Jersey", "Jasa Bordir Komputer",
    "Jasa Sablon Kaos", "Tempat Bikin Kaos Custom", "Vendor Merchandise Perusahaan",
    "Konveksi Baju Custom", "Konveksi PDH & PDL", "Vendor Seragam Hotel Bali",
    "Konveksi Clothing Brand", "Produksi Apparel Custom", "Konveksi Denpasar",
    "Jasa Konveksi Denpasar", "Konveksi Kaos Denpasar", "Konveksi Kaos Custom Denpasar",
    "Konveksi Seragam Denpasar", "Vendor Seragam Denpasar", "Konveksi Hoodie Denpasar",
    "Konveksi Polo Shirt Denpasar", "Konveksi Kemeja Denpasar", "Konveksi Jaket Denpasar"
  ],
  verification: {
    google: "X9IXP5lIpM47ki0n3JpOXN7F7GowfR373wsNdYycp9I",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("h-full antialiased", "font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
      <body className="flex min-h-full flex-col ">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />

        </LanguageProvider>
      </body>
    </html>
  );
}