"use client";

import Container from "@/components/layout/Container";
import CTASection from "@/components/sections/CTASection";
import { Icon } from "@/components/common/Icons";

export default function TrackingOrderPage() {
  return (
    <Container className="pt-28 lg:pt-36">
      <section className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-black leading-tight text-gray-900 sm:text-5xl lg:text-6xl tracking-tight">
          Tracking <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">Order</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg font-medium leading-relaxed text-gray-500 sm:text-xl">
          Pantau setiap tahap produksi pesanan Anda dengan mudah dan real-time melalui sistem terpadu kami.
        </p>
      </section>

      <section className="mt-12 max-w-2xl mx-auto">
        <div className="flex flex-col items-center justify-center rounded-3xl border border-gray-200 bg-gray-100 p-8 shadow-xl shadow-primary-light/10 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-light/20 sm:p-12">
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary-light/10 text-primary">
            <Icon className="h-12 w-12" name="search" />
          </div>
          
          <h2 className="text-2xl font-black text-gray-900 sm:text-3xl">Cek Status Pesanan Kamu</h2>
          
          <p className="mt-4 text-base font-medium leading-relaxed text-gray-600 sm:text-lg">
            Untuk memberikan pengalaman pelacakan yang lebih baik dan aman, layanan tracking pesanan kini dapat diakses langsung melalui portal sistem produksi utama kami.
          </p>
          
          <a
            href="https://simadvishkonveksi.com/track"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex h-auto py-3 sm:py-4 items-center justify-center gap-4 rounded-full bg-primary-dark px-8 sm:px-12 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-[0_8px_20px_rgba(8,145,178,0.25)] active:scale-95 text-base sm:text-lg font-black uppercase tracking-wide"
          >
            Menuju Portal Tracking
            <Icon className="h-6 w-6 ml-2 hidden sm:block" name="arrowRight" />
          </a>
        </div>
      </section>

      <CTASection className="mt-24" />
    </Container>
  );
}
