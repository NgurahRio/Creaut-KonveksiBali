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
  title: "Konveksi Bali",
  description:
    "Konveksi apparel custom di Bali untuk kaos, jersey, jaket, PDH, dan workshop wear.",
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