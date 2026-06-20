"use client";

import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/Icons";
import TrackingTimeline from "@/components/TrackingTimeline";
import { orderDetails, trackingSteps } from "@/data/site";
import React, { useState } from "react";
import { trackOrderAPI } from "./actions";

function getDynamicTrackingSteps(apiData: any) {
  const statusFlow = [
    ["created", "approved", "down_payment"], // Step 1
    ["production"], // Step 2
    ["finish_production"], // Step 3
    ["paid_off"], // Step 4
    [""], // Step 5
    ["order_complete"], // Step 6
  ];

  const currentApiStatus = apiData.status;
  console.log("ini data substatus", apiData.sub_status)
  let stepIndex = 0;
  statusFlow.forEach((group, index) => {
    if (group.includes(currentApiStatus)) stepIndex = index;
  });

  const getSubStatusLabel = (sub: string | null) => {
    if (!sub) return "Sedang diproduksi";
    const labels: Record<string, string> = {
      buy_material: "Beli Bahan",
      material_in_queue: "Bahan Antri",
      cutting: "Proses Potong",
      detailing: "Detailing",
      qtc: "Quality Control (QTC)",
    };
    return labels[sub] || sub;
  };

  return [
    { title: "Verifikasi Pesanan", subtitle: "Pesanan masuk", date: "", icon: "check", status: stepIndex > 0 ? "done" : stepIndex === 0 ? "active" : "pending" },

    { title: "Tahap Potong", subtitle: stepIndex === 1 ? getSubStatusLabel(apiData.sub_status) : "Sedang diproduksi", date: "", icon: "factory", status: stepIndex > 1 ? "done" : stepIndex === 1 ? "active" : "pending" },

    {
      title: `Tahap Bordir
      /Sablon
      /Sublim`, subtitle: "Proses finishing", date: "", icon: "package", status: stepIndex > 2 ? "done" : stepIndex === 2 ? "active" : "pending"
    },

    { title: "Tahap Jarit", subtitle: "", date: "", icon: "truck", status: stepIndex > 3 ? "done" : stepIndex === 3 ? "active" : "pending" },

    { title: "Tahap Quality Control & Pengemasan", subtitle: "Pesanan selesai", date: "", icon: "shirt", status: stepIndex === 4 ? "done" : "pending" },

    { title: "Tqwqw", subtitle: "Pesanan selqwqwesai", date: "", icon: "shirt", status: stepIndex === 5 ? "done" : "pending" },
  ] as any;
}

function getDynamicOrderDetails(apiData: any) {
  let typeStr = apiData.type || "-";
  let sizeStr = apiData.size || "-";

  try {
    const parsedType = JSON.parse(apiData.type);
    if (Array.isArray(parsedType)) typeStr = parsedType.join(", ");
  } catch (e) {
    // Abaikan jika bukan JSON
  }

  try {
    const parsedSize = JSON.parse(apiData.size);
    if (Array.isArray(parsedSize)) sizeStr = parsedSize.join(", ");
  } catch (e) {
    // Abaikan jika bukan JSON
  }

  return [
    { label: "Atas Nama", value: apiData.customer_name || "-" },
    { label: "Produk", value: typeStr },
    { label: "Material", value: apiData.material || "-" },
    { label: "Jumlah", value: apiData.qty ? `${apiData.qty} Pcs` : "-" },
    { label: "Ukuran", value: sizeStr },
    { label: "Total Harga", value: apiData.amount ? `Rp ${apiData.amount.toLocaleString("id-ID")}` : "-" },
  ];
}

export default function TrackingOrderPage() {
  const [invoice, setInvoice] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [orderData, setOrderData] = useState<any>(null);

  const handleTrack = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!invoice.trim()) return;

    setIsLoading(true);
    setError(null);
    setOrderData(null);

    try {
      const result = await trackOrderAPI(invoice);
      if (result.success) {
        setOrderData(result.data);
      } else {
        setError(result.message ?? "Terjadi kesalahan saat melacak pesanan.");
      }
    } catch (err: any) {
      console.error(err);
      setError("Koneksi gagal. Jika menguji di HP (local IP), Server Action Next.js mungkin memblokirnya.");
    }

    setIsLoading(false);
  };

  return (
    <Container className="pt-10 lg:pt-20">
      <section>
        <h1 className="text-5xl font-black leading-tight text-gray-900 sm:text-7xl">
          Tracking Order
        </h1>
        <p className="mt-8 max-w-2xl text-xl font-semibold leading-10 text-gray-600 sm:text-2xl">
          Pantau setiap tahap produksi pesanan Anda dengan mudah dan real-time.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-[0.7fr_1.5fr]">
        <div className="grid gap-6">
          <form onSubmit={handleTrack} className="relative z-10 rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-light/20">
            <label className="text-lg font-black text-gray-900" htmlFor="invoice">
              Masukkan Nomor Invoice
            </label>
            <input
              className="mt-4 h-16 w-full rounded-full border border-gray-200 bg-gray-50 text-gray-900 px-6 text-lg font-semibold outline-none placeholder:text-gray-400 transition-all duration-300 focus:-translate-y-1 focus:border-primary-light focus:bg-white focus:ring-2 focus:ring-primary-light"
              id="invoice"
              value={invoice}
              onChange={(e) => setInvoice(e.target.value)}
              placeholder="Contoh: ORD3/02/10/23"
              type="text"
              required
            />
            <button
              disabled={isLoading}
              className="mt-4 h-16 w-full rounded-full bg-primary-dark px-6 text-base font-black uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:shadow-[0_8px_20px_rgba(8,145,178,0.25)] active:scale-95 disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:shadow-none disabled:active:scale-100"
              type="submit"
            >
              {isLoading ? "Mencari..." : "Lacak Order"}
            </button>
            {error && <p className="mt-4 text-center font-semibold text-red-500">{error}</p>}
          </form>

          <aside className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-light/20">
            <h2 className="text-lg font-black text-gray-900">Butuh Bantuan?</h2>
            <p className="mt-2 text-base font-semibold text-gray-600">
              Hubungi kami via WhatsApp untuk informasi lebih lanjut.
            </p>
            <a
              className="mt-5 flex h-14 items-center justify-center gap-2 rounded-xl border border-[#25b829] bg-[#ecfaec] text-base font-black uppercase text-[#25a728] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8f5d8] hover:shadow-md active:scale-95"
              href="https://wa.me/6285738814898"
              rel="noreferrer"
              target="_blank"
            >
              <Icon className="h-6 w-6" name="whatsapp" />
              Chat WhatsApp
            </a>
          </aside>
        </div>

        {orderData ? (
          <article className="rounded-2xl border border-gray-100 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-light/20 lg:p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-black text-gray-900">{orderData.number}</h2>
            </div>

            <TrackingTimeline showDates steps={getDynamicTrackingSteps(orderData)} />

            <div className="mt-10">
              <h3 className="mb-6 text-xl font-black text-gray-900">Detail Pesanan</h3>
              <dl className="grid gap-x-12 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
                {getDynamicOrderDetails(orderData).map((item) => (
                  <div key={item.label}>
                    <dt className="text-lg font-black text-gray-900">{item.label}</dt>
                    <dd className="mt-2 text-lg font-semibold text-gray-600">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        ) : (
          <article className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 p-6 text-center transition-all duration-300 lg:p-8">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white text-primary-dark shadow-md">
              <Icon className="h-10 w-10" name="search" />
            </div>
            <h2 className="text-2xl font-black text-gray-900">Ayo Cek Pesanan Kamu!</h2>
            <p className="mt-3 max-w-md text-base font-semibold leading-relaxed text-gray-600">
              Masukkan nomor invoice (contoh: ORD...) pada form di sebelah kiri untuk melihat status produksi dan detail pesananmu secara lengkap.
            </p>
          </article>
        )}
      </section>

      <CTASection className="mt-24" />
    </Container>
  );
}
