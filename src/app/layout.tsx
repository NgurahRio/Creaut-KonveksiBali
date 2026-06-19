import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LanguageProvider from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Konveksi Bali",
  description:
    "Konveksi apparel custom di Bali untuk kaos, jersey, jaket, PDH, dan workshop wear.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="h-full antialiased">
      <body className="flex min-h-full flex-col ">
        <LanguageProvider>
          <div className=" mb-30 lg:mb-17 md:mb-20">
          <Navbar />
          </div>
          <main className="">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
