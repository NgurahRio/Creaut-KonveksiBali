"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Icon } from "@/components/common/Icons";

export default function TrackingWidget() {
  const router = useRouter();

  return (
    <div className="relative z-20 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mt-16 lg:mt-24">
      <motion.div
        className="rounded-3xl bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-gray-200 sm:p-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-black text-gray-900 flex items-center gap-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-50 text-cyan-500">
                <Icon name="search" className="h-5 w-5" />
              </div>
              Lacak Progress Produksi
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed max-w-lg">
              Sudah order di Advish Konveksi? Masukkan ID Pesanan Anda untuk melihat apakah baju Anda sedang di tahap potong, sablon, jahit, atau finishing.
            </p>
          </div>
          <div className="flex shrink-0">
            <button
              onClick={() => router.push('/tracking-order')}
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gray-900 px-8 py-3.5 text-sm font-bold text-white transition-all hover:bg-cyan-500 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              Cek Status
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
