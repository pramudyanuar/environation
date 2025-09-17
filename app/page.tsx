"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
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

const TitleLogo = () => (
  <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 mx-1">
    <Image
      src="/title-logo.png"
      alt="Environation Title Logo"
      width={80}
      height={80}
      className="w-full h-full object-contain"
    />
  </div>
);

export default function Home() {
  return (
    <main
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-landing.png')" }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-800/70 via-transparent to-transparent" />

      <Navbar />

      <motion.div
        className="relative z-10 flex flex-col items-start text-left text-white px-4 pt-16 sm:pt-0 max-w-screen-xl mx-auto w-full md:pl-8 md:pr-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold tracking-tight mb-4 font-whyte"
          variants={itemVariants}
        >
          Welcome to
        </motion.h1>
        <motion.div
          className="flex items-center text-5xl md:text-8xl font-black tracking-tighter mb-6 font-whyte"
          variants={itemVariants}
        >
          <span>ENVIRONATI</span>
          <TitleLogo />
          <span>N!</span>
        </motion.div>

        <motion.p
          className="max-w-xl md:max-w-2xl text-lg md:text-xl text-gray-200 mb-10"
          variants={itemVariants}
        >
          Platform kompetisi lingkungan untuk generasi masa depan.
          Bergabunglah dengan komunitas yang peduli lingkungan!
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center sm:items-start gap-4"
          variants={itemVariants}
        >
          <Link
            href="/lkti"
            className="group flex items-center justify-center gap-2.5 w-40 py-3 px-6 border-2 border-white rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-semibold hover:scale-105 active:scale-95"
          >
            <span>LKTI</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
          <Link
            href="/enviro-business-competition"
            className="group flex items-center justify-center gap-2.5 w-40 py-3 px-6 border-2 border-white rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 font-semibold hover:scale-105 active:scale-95"
          >
            <span>EBC</span>
            <svg
              className="w-5 h-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
