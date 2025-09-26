"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15);
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-brand hover:bg-brand/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
        isVisible ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-label="Back to top"
    >
      <motion.svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        animate={{ y: [0, -3, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </motion.svg>
    </motion.button>
  );
};

export default function EnviroBusinessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden scroll-smooth">
      <Navbar />
      <BackToTop />

      {/* Hero Section - Dynamic Background */}
      <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900">
        {/* Dynamic Background with Morphing Shapes */}
        <div className="absolute inset-0">
          {/* Animated Morphing Blobs */}
          <motion.div
            className="hidden sm:block absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-green-400/30 to-blue-500/30 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 0.8, 1.1, 1],
              x: [0, 50, -30, 20, 0],
              y: [0, -30, 40, -10, 0],
              borderRadius: ["50%", "60%", "40%", "70%", "50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="hidden sm:block absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-500/25 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 0.9, 1.3, 0.7, 1.1],
              x: [0, -40, 60, -20, 0],
              y: [0, 50, -40, 30, 0],
              borderRadius: ["60%", "40%", "80%", "30%", "60%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
          <motion.div
            className="hidden sm:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 rounded-full blur-2xl"
            animate={{
              scale: [0.8, 1.4, 0.6, 1.2, 0.8],
              rotate: [0, 180, 360, 90, 0],
              borderRadius: ["50%", "30%", "70%", "20%", "50%"],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Floating Geometric Shapes */}
          <motion.div
            className="hidden sm:block absolute top-20 right-1/4 w-4 h-4 bg-green-300/60 rotate-45"
            animate={{
              y: [0, -100, 0],
              rotate: [45, 135, 225, 315, 45],
              opacity: [0.6, 1, 0.3, 0.8, 0.6],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="hidden sm:block absolute bottom-32 left-1/3 w-6 h-6 bg-blue-300/50 rounded-full"
            animate={{
              y: [0, 80, 0],
              x: [0, 40, 0],
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.2, 0.7, 0.5],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="hidden sm:block absolute top-40 right-10 w-3 h-3 bg-purple-300/70"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 0.7, 1.2, 1],
              opacity: [0.7, 1, 0.4, 0.9, 0.7],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 flex items-center justify-center min-h-screen">
          {/* Hero Content */}
          <motion.div
            className="text-center text-white max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/20 backdrop-blur-xl rounded-full border border-emerald-400/30 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-3 h-3 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-emerald-200 font-semibold tracking-wide">🏆 ENVIRO BUSINESS COMPETITION 2025</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Punya Ide Bisnis Hijau?
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                Wujudkan di Environation EBC 2025!
              </span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Kompetisi bisnis untuk Siswa dan Mahasiswa se-Indonesia dengan total hadiah puluhan juta rupiah.
              Kembangkan idemu, dapatkan mentoring dari para ahli, dan jadilah agen perubahan untuk lingkungan!
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#registration"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 text-lg"
                >
                  <span>DAFTAR SEKARANG</span>
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#timeline"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-xl hover:bg-white/20 text-white font-semibold rounded-2xl border border-white/20 transition-all duration-300 text-lg"
                >
                  <span>Lihat Alur Lomba</span>
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </motion.svg>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About EBC Section */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#105230] to-[#1C5DDC]">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Kompetisi Bisnis Lingkungan Paling Bergengsi
            </motion.h2>
          </motion.div>

          {/* About Content */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <motion.h3
                className="text-2xl font-bold text-white mb-6"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Enviro Business Competition (EBC) 2025
              </motion.h3>
              <motion.p
                className="text-lg text-emerald-100/90 leading-relaxed max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                adalah bagian dari rangkaian acara terbesar Himpunan Mahasiswa Teknik Lingkungan ITS.
                Kami menantang para inovator muda untuk menciptakan model bisnis yang tidak hanya profitabel,
                tetapi juga memberikan dampak positif bagi planet. Saatnya mengubah masalah lingkungan menjadi peluang berkelanjutan!
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Competition Categories Section */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-green-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(34,197,94,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(34,197,94,0.1) 0%, transparent 50%)`,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pilih Jenjang Kompetisimu
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Kami membuka dua kategori untuk menjaring ide-ide terbaik dari seluruh penjuru negeri.
            </motion.p>
          </motion.div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Student Category */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg overflow-hidden h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    🎒
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Kategori Siswa (SMA/SMK Sederajat)
                  </h3>

                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    Bagi kamu pelajar SMA yang punya semangat wirausaha dan peduli lingkungan.
                    Inilah panggung pertamamu untuk bersinar!
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center"
                  >
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    >
                      <span>Syarat Kategori Siswa</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </motion.div>

            {/* University Category */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-lg overflow-hidden h-full"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="relative z-10">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-3xl flex items-center justify-center text-4xl mx-auto mb-6 shadow-lg"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    🎓
                  </motion.div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                    Kategori Mahasiswa (Perguruan Tinggi)
                  </h3>

                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    Untuk mahasiswa/i dengan ide bisnis yang lebih matang dan siap dikembangkan.
                    Asah proposal bisnismu bersama mentor profesional.
                  </p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-center"
                  >
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                    >
                      <span>Syarat Kategori Mahasiswa</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-b-3xl"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-green-50 to-white">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 70%, rgba(34,197,94,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 70% 30%, rgba(34,197,94,0.1) 0%, transparent 50%)`,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100/90 backdrop-blur-xl rounded-full border border-emerald-200/50 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-3 h-3 bg-emerald-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-emerald-800 font-semibold tracking-wide">✨ KEUNTUNGAN MENGIKUTI EBC 2025</span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Inilah yang Akan Kamu Dapatkan
            </motion.h2>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🏆",
                title: "Total Hadiah Rp 36.000.000",
                description: "Rp 18 Juta untuk masing-masing kategori - penghargaan yang sepadan dengan inovasimu!",
                gradient: "from-yellow-400 to-orange-500",
                delay: 0.1
              },
              {
                icon: "👨‍🏫",
                title: "Inkubasi Bisnis Eksklusif",
                description: "Mentoring intensif dari para ahli di bidangnya untuk menyempurnakan model bisnismu.",
                gradient: "from-blue-400 to-purple-500",
                delay: 0.2
              },
              {
                icon: "🏭",
                title: "Company Visit",
                description: "Kunjungi perusahaan ternama untuk finalis - pengalaman berharga di dunia bisnis nyata.",
                gradient: "from-green-400 to-teal-500",
                delay: 0.3
              },
              {
                icon: "🤝",
                title: "Networking Luas",
                description: "Berinteraksi dengan sesama pebisnis muda, akademisi, dan profesional industri.",
                gradient: "from-indigo-400 to-blue-500",
                delay: 0.4
              },
              {
                icon: "💡",
                title: "Webinar Skill Up",
                description: "Sesi webinar eksklusif untuk mempertajam rencana bisnismu sebelum pitching.",
                gradient: "from-purple-400 to-pink-500",
                delay: 0.5
              },
              {
                icon: "🌟",
                title: "Pengalaman Berharga",
                description: "Jadilah wirausahawan muda yang siap mengubah dunia dengan bisnis berkelanjutan.",
                gradient: "from-emerald-400 to-cyan-500",
                delay: 0.6
              }
            ].map((benefit) => (
              <motion.div
                key={benefit.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: benefit.delay }}
                viewport={{ once: true }}
              >
                {/* Card Background */}
                <motion.div
                  className="relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg overflow-hidden h-full"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${benefit.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-r ${benefit.gradient} rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {benefit.icon}
                    </motion.div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${benefit.gradient} rounded-b-2xl`}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Flow Section */}
      <section id="timeline" className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1C5DDC] to-[#105230]">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Dari Ide hingga Final: Inilah Perjalananmu di EBC 2025!
            </motion.h2>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-teal-400"></div>

            {/* Timeline Items */}
            {[
              {
                step: "Tahap 1",
                title: "Pendaftaran & Pengumpulan BMC",
                description: "Daftarkan tim-mu dan submit ringkasan ide bisnismu dalam format BMC yang kreatif. Ini adalah gerbang pertamamu!",
                icon: "📝",
                color: "from-blue-400 to-indigo-500"
              },
              {
                step: "Tahap 2",
                title: "Pengumpulan Proposal",
                description: "Tim yang lolos seleksi BMC akan diminta untuk mengembangkan idenya menjadi sebuah proposal bisnis yang detail dan komprehensif.",
                icon: "📋",
                color: "from-purple-400 to-pink-500"
              },
              {
                step: "Tahap 3",
                title: "Inkubasi Bisnis & Mentoring",
                description: "Masuk semifinal? Selamat! Kamu akan mendapatkan sesi mentoring intensif dari para ahli untuk menyempurnakan model bisnismu.",
                icon: "👨‍🏫",
                color: "from-emerald-400 to-teal-500"
              },
              {
                step: "Tahap 4",
                title: "Pitching Online",
                description: "Presentasikan proposal bisnismu di hadapan dewan juri secara online. Tunjukkan potensi dan kelayakan idemu!",
                icon: "🎤",
                color: "from-orange-400 to-red-500"
              },
              {
                step: "Tahap 5",
                title: "Final Pitch Deck (Offline di Surabaya)",
                description: "5 tim terbaik dari setiap kategori akan diundang ke Surabaya untuk mempresentasikan bisnis mereka secara langsung dan memperebutkan gelar juara!",
                icon: "🏆",
                color: "from-yellow-400 to-orange-500"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="relative flex items-start gap-6 mb-8"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`w-4 h-4 rounded-full border-4 border-white shadow-lg flex-shrink-0 mt-2 bg-gradient-to-r ${item.color}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      {item.icon}
                    </motion.div>

                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-semibold">
                          {item.step}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-emerald-100/90 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-green-50">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(34,197,94,0.1) 0%, transparent 50%),
                              radial-gradient(circle at 80% 20%, rgba(34,197,94,0.1) 0%, transparent 50%)`,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100/90 backdrop-blur-xl rounded-full border border-emerald-200/50 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-3 h-3 bg-emerald-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-emerald-800 font-semibold tracking-wide">⏰ SIMPAN TANGGAL PENTING INI!</span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Linimasa Lengkap EBC 2025
            </motion.h2>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-teal-500"></div>

            {/* Timeline Items */}
            {[
              { date: "29 Sep - 30 Okt 2025", title: "Pendaftaran & Pengumpulan BMC", status: "upcoming" },
              { date: "1 Nov 2025", title: "Pengumuman Lolos BMC", status: "upcoming" },
              { date: "2 - 8 Nov 2025", title: "Pengumpulan Proposal", status: "upcoming" },
              { date: "15 Nov 2025", title: "Pengumuman Lolos Proposal", status: "upcoming" },
              { date: "17 - 30 Nov 2025", title: "Inkubasi Bisnis & Mentoring", status: "upcoming" },
              { date: "6 Des 2025", title: "Pitching Online", status: "upcoming" },
              { date: "7 Des 2025", title: "Pengumuman Finalis", status: "upcoming" },
              { date: "18 Des 2025", title: "Final Pitch Deck (Offline)", status: "upcoming" },
              { date: "19 Des 2025", title: "Company Visit", status: "upcoming" }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="relative flex items-start gap-6 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Timeline Dot */}
                <motion.div
                  className={`w-4 h-4 rounded-full border-4 border-white shadow-lg flex-shrink-0 mt-2 ${
                    item.status === 'upcoming' ? 'bg-emerald-500' : 'bg-gray-400'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />

                {/* Content Card */}
                <motion.div
                  className="flex-1 bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <h4 className="font-bold text-gray-900">{item.title}</h4>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'upcoming'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      {item.date}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#105230] to-[#1C5DDC]">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 text-center">
          {/* Section Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Siap Berkompetisi? Daftarkan Tim Kamu Sekarang!
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Langkah Mudah Mendaftar EBC 2025
            </motion.p>
          </motion.div>

          {/* Registration Steps */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Isi Formulir Pendaftaran",
                  description: "Klik tombol di bawah ini dan isi data diri tim kamu di website resmi kami.",
                  color: "from-blue-400 to-indigo-500"
                },
                {
                  step: "2",
                  title: "Lakukan Pembayaran",
                  description: "Transfer biaya pendaftaran sesuai kategori dan periode.",
                  details: [
                    "Siswa: Rp 60.000 (18 - 24 Oktober 2025)",
                    "Mahasiswa: Rp 70.000 (Early Bird: 18 - 24 Oktober 2025)"
                  ],
                  color: "from-emerald-400 to-teal-500"
                },
                {
                  step: "3",
                  title: "Siapkan & Unggah Berkas",
                  description: "Pastikan kamu sudah menyiapkan semua persyaratan ini:",
                  details: [
                    "Kartu Tanda Mahasiswa / Kartu Pelajar",
                    "Screenshot bukti follow IG @environation.its",
                    "Screenshot bukti share poster EBC di Instagram Story",
                    "Screenshot bukti upload twibbon & tag @environation.its",
                    "Bukti transfer pembayaran"
                  ],
                  color: "from-purple-400 to-pink-500"
                },
                {
                  step: "4",
                  title: "Submit BMC & Konfirmasi",
                  description: "Unggah semua berkas beserta file BMC (format .pdf), lalu konfirmasi ke Contact Person.",
                  color: "from-orange-400 to-red-500"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-10 h-10 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {step.step}
                  </motion.div>
                  <div className="text-left">
                    <h4 className="text-emerald-300 font-semibold mb-1">{step.title}</h4>
                    <p className="text-emerald-100/90 text-sm mb-2">{step.description}</p>
                    {step.details && (
                      <ul className="space-y-1">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-xs text-emerald-200 flex items-center gap-2">
                            <span className="w-1 h-1 bg-emerald-400 rounded-full flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bank Account Info */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 mb-8"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Rekening Tujuan</h3>
            <div className="bg-emerald-500/10 rounded-xl p-4 border border-emerald-400/20">
              <p className="text-emerald-300 font-semibold">Bank Mandiri</p>
              <p className="text-white text-lg font-mono">1400025372807</p>
              <p className="text-emerald-200 text-sm">a.n. AURELLIA PUSPITASARI</p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 text-lg"
                >
                  <span>📚 DOWNLOAD GUIDEBOOK</span>
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </motion.svg>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 text-lg"
                >
                  <span>LINK PENDAFTARAN RESMI</span>
                  <motion.svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </motion.svg>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1C5DDC] to-[#105230]">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px)
              `,
              backgroundSize: '60px 60px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px', '0px 0px'],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 text-center">
          {/* Section Header */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ada Pertanyaan? Hubungi Kami!
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-emerald-100/90 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Tim kami siap membantu menjawab pertanyaanmu seputar kompetisi EBC 2025.
            </motion.p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 mb-8"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Narahubung</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👤</span>
                </div>
                <p className="text-emerald-300 font-semibold mb-1">Ario</p>
                <p className="text-white">+62 851-5522-8891</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👤</span>
                </div>
                <p className="text-emerald-300 font-semibold mb-1">Neta</p>
                <p className="text-white">+62 811-1622-209</p>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ikuti Kami di Media Sosial</h3>
            <div className="flex justify-center gap-6">
              <motion.a
                href="#"
                className="flex items-center gap-3 px-4 py-2 bg-pink-500/20 hover:bg-pink-500/30 rounded-xl border border-pink-400/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-2xl">📸</span>
                <span className="text-white font-medium">@environation.its</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white text-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">ENVIRONATION</h2>
            <p className="text-gray-600">HMTL ITS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4">Lokasi Kami</h3>
              <div className="text-gray-600 text-sm leading-relaxed">
                <p className="font-medium text-gray-800">Departemen Teknik Lingkungan</p>
                <p>Fakultas Teknik Sipil, Perencanaan dan Kebumian (FTSPK)</p>
                <p>Institut Teknologi Sepuluh Nopember (ITS)</p>
                <p>Kampus ITS, Jl. Teknik Kimia, Keputih, Kec. Sukolilo, Surabaya, Jawa Timur 60111</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Temukan Kami</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span className="text-gray-700 hover:text-gray-900 transition-colors">environationhmtlits2023@gmail.com</span>
                </li>

                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.441c-3.171 0-3.543.012-4.782.069-2.704.123-3.951.996-4.103 2.808-.056 1.205-.068 1.572-.068 4.518s.012 3.313.068 4.518c.152 1.812 1.399 2.685 4.103 2.808 1.239.057 1.611.069 4.782.069s3.543-.012 4.782-.069c2.704-.123 3.951-.996 4.103-2.808.056-1.205.068-1.572.068-4.518s-.012-3.313-.068-4.518c-.152-1.812-1.399-2.685-4.103-2.808-1.239-.057-1.611-.069-4.782-.069zm0 3.333a4.062 4.062 0 100 8.124 4.062 4.062 0 000-8.124zm0 6.682a2.62 2.62 0 110-5.24 2.62 2.62 0 010 5.24zM18.225 6.132a.96.96 0 100 1.92.96.96 0 000-1.92z"/>
                  </svg>
                  <span className="text-gray-700 hover:text-gray-900 transition-colors">@environation_its</span>
                </li>

                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"></path>
                  </svg>
                  <span className="text-gray-700 hover:text-gray-900 transition-colors">@environation.its</span>
                </li>

                <li className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01s-.521.074-.792.372c-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                  <span className="text-gray-700 hover:text-gray-900 transition-colors">+62-123-4567-890 (Contoh)</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300">
            <p className="text-center text-sm text-gray-600">
              © 2025 ENVIRONATION. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
