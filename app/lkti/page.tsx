"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function LKTIPage() {
  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-landing.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-800/70 via-transparent to-transparent" />

      <Navbar />

      <motion.div
        className="relative z-10 flex flex-col items-start text-left text-white px-4 pt-32 max-w-screen-xl mx-auto w-full md:pl-8 md:pr-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-black tracking-tighter mb-6 font-whyte"
          variants={itemVariants}
        >
          LKTI ENVIRONATION 2025
        </motion.h1>

        <motion.p
          className="max-w-2xl text-lg md:text-xl text-gray-200 mb-10"
          variants={itemVariants}
        >
          Tuangkan ide lingkungan Anda melalui karya tulis ilmiah dan essay
          untuk masa depan berkelanjutan.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link
            href="/auth/sign-up"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full px-8 py-3 text-lg hover:scale-105 active:scale-95 transition-transform duration-150"
          >
            Daftar Sekarang
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
