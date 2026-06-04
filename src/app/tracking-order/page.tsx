import Container from "@/components/Container";
import CTASection from "@/components/CTASection";
import { Icon } from "@/components/Icons";
import TrackingTimeline from "@/components/TrackingTimeline";
import { orderDetails, trackingSteps } from "@/data/site";

export default function TrackingOrderPage() {
  return (
    <Container className="pt-10 lg:pt-20">
      <section>
        <h1 className="text-5xl font-black leading-tight text-black sm:text-7xl">
          Tracking Order
        </h1>
        <p className="mt-8 max-w-2xl text-xl font-semibold leading-10 text-[#4f4f4f] sm:text-2xl">
          Pantau setiap tahap produksi pesanan Anda dengan mudah dan real-time.
        </p>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-[0.7fr_1.5fr]">
        <div className="grid gap-6">
          <form className="rounded-lg border border-[#333] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <label className="text-lg font-black text-black" htmlFor="invoice">
              Masukkan Nomor Invoice
            </label>
            <input
              className="mt-4 h-16 w-full rounded-lg border border-[#555] px-5 text-lg font-semibold outline-none placeholder:text-[#cfcfcf] focus:border-[#a17140]"
              id="invoice"
              placeholder="Contoh: INV-2026-0001"
              type="text"
            />
            <button
              className="mt-4 h-16 w-full rounded-lg bg-[#a17140] px-6 text-base font-black uppercase text-white transition hover:bg-[#875d33]"
              type="button"
            >
              Lacak Order
            </button>
          </form>

          <aside className="rounded-lg border border-[#333] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
            <h2 className="text-lg font-black text-black">Butuh Bantuan?</h2>
            <p className="mt-2 text-base font-semibold text-[#4d4d4d]">
              Hubungi kami via WhatsApp untuk informasi lebih lanjut.
            </p>
            <a
              className="mt-5 flex h-14 items-center justify-center gap-2 rounded-lg border border-[#25b829] bg-[#ecfaec] text-base font-black uppercase text-[#25a728] transition hover:bg-[#d8f5d8]"
              href="https://wa.me/6281345677890"
              rel="noreferrer"
              target="_blank"
            >
              <Icon className="h-6 w-6" name="whatsapp" />
              Chat WhatsApp
            </a>
          </aside>
        </div>

        <article className="rounded-lg border border-[#333] bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.06)] lg:p-8">
          <div className="mb-8">
            <h2 className="text-xl font-black text-black">INV-2026-0001</h2>
            <p className="mt-1 text-base font-bold text-[#333]">
              Estimasi selesai berdasarkan status produksi
            </p>
          </div>
          <TrackingTimeline showDates steps={trackingSteps} />

          <div className="mt-10">
            <h3 className="mb-6 text-xl font-black text-black">Detail Pesanan</h3>
            <dl className="grid gap-x-12 gap-y-5 sm:grid-cols-2 xl:grid-cols-3">
              {orderDetails.map((item) => (
                <div key={item.label}>
                  <dt className="text-lg font-black text-black">{item.label}</dt>
                  <dd className="mt-2 text-lg font-semibold text-black">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </article>
      </section>

      <CTASection className="mt-24" />
    </Container>
  );
}
