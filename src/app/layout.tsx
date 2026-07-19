import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import LanguageProvider from "@/components/i18n/LanguageProvider";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import { Noto_Sans, Playfair_Display } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  BUSINESS_EMAIL,
  BUSINESS_INSTAGRAM,
  BUSINESS_NAME,
  BUSINESS_PHONE,
  SEO_KEYWORDS,
  SITE_NAME,
  SITE_URL,
  defaultOpenGraphImage,
} from "@/data/seo";

const playfairDisplayHeading = Playfair_Display({ subsets: ['latin'], variable: '--font-heading' });

const notoSans = Noto_Sans({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: "Konveksi Bali - Jasa Pembuatan Kaos, Seragam & Apparel Custom",
  description:
    "Vendor konveksi apparel custom di Bali dan Denpasar untuk kaos, jersey, jaket, PDH, kemeja, polo shirt, dan seragam perusahaan dengan kualitas terbaik.",
  keywords: [...SEO_KEYWORDS],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Konveksi Bali - Jasa Pembuatan Kaos, Seragam & Apparel Custom",
    description:
      "Advish Konveksi melayani kaos custom, seragam perusahaan, polo shirt, kemeja, jaket, hoodie, jersey, bordir, sablon, merchandise, dan apparel custom di Bali.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "id_ID",
    type: "website",
    images: [defaultOpenGraphImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konveksi Bali - Advish Konveksi",
    description:
      "Jasa konveksi Bali dan Denpasar untuk kaos custom, seragam, bordir, sablon, merchandise, dan apparel custom.",
    images: [defaultOpenGraphImage.url],
  },
  verification: {
    google: "X9IXP5lIpM47ki0n3JpOXN7F7GowfR373wsNdYycp9I",
  },
};

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/assets/toko.png`,
  logo: `${SITE_URL}/assets/logo.png`,
  telephone: BUSINESS_PHONE,
  email: BUSINESS_EMAIL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Sedap Malam, Gg. Alamanda, No.23",
    addressLocality: "Denpasar Timur",
    addressRegion: "Bali",
    addressCountry: "ID",
  },
  areaServed: ["Bali", "Denpasar", "Indonesia"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [BUSINESS_INSTAGRAM],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "id-ID",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={cn("h-full antialiased", "font-sans", notoSans.variable, playfairDisplayHeading.variable)}>
      <body className="flex min-h-full flex-col ">
        <JsonLd data={localBusinessJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <LanguageProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />

        </LanguageProvider>
      </body>
    </html>
  );
}
