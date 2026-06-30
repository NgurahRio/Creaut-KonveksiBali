/**
 * ════════════════════════════════════════════════════════════
 *  SHARED ANIMATION VARIANTS (Framer Motion)
 *
 *  File ini menyimpan semua definisi animasi yang digunakan
 *  berulang di berbagai halaman. Cukup import dari sini agar
 *  konsisten dan tidak duplikat.
 * ════════════════════════════════════════════════════════════
 */

import type { Variants } from "framer-motion";

/**
 * Fade Up — elemen muncul perlahan dari bawah ke atas.
 * Gunakan `custom={delay}` untuk mengatur waktu tunda.
 *
 * @example
 * <motion.div variants={fadeUp} initial="hidden" whileInView="visible" custom={0.2} />
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

/**
 * Fade Left — elemen muncul dari kiri ke kanan.
 */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" as const },
  },
};

/**
 * Fade Right — elemen muncul dari kanan ke kiri.
 */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.2, ease: "easeOut" as const },
  },
};

/**
 * Scale In — elemen muncul dengan efek zoom in.
 * Gunakan `custom={index}` untuk stagger delay.
 */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

/**
 * Stagger Container — container pembungkus yang menganimasikan
 * anak-anaknya satu per satu secara berurutan.
 *
 * @example
 * <motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
 *   <motion.div variants={staggerItem} />
 *   <motion.div variants={staggerItem} />
 * </motion.div>
 */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

/**
 * Stagger Item — item anak yang dianimasikan dalam staggerContainer.
 */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};
