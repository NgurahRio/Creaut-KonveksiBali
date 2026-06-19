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
<<<<<<< HEAD
      <body className="flex min-h-full flex-col ">
        <LanguageProvider>
          <div className=" mb-30 lg:mb-17 md:mb-20">
          <Navbar />
          </div>
          <main className="">{children}</main>
=======
      <body className="flex min-h-full flex-col">
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
>>>>>>> 43d64230efb2783a109a75ac4627895e6501f006
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
