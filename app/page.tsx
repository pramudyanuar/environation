"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const TitleLogo = () => (
  <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 mx-1">
    <Image
      src="/title-logo.svg"
      alt="Environation Title Logo"
      width={80}
      height={80}
      className="w-full h-full object-contain"
    />
  </div>
);

export default function Home() {
  // Generate random positions for particles only on the client
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      {/* Hero Section - Unique & Creative Design */}
      <section
        className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 via-green-900 to-emerald-900"
      >
        {/* Dynamic Background with Morphing Shapes */}
        <div className="absolute inset-0">
          {/* Animated Morphing Blobs - Hide on mobile */}
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

          {/* Floating Geometric Shapes - Hide on mobile */}
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
            className="hidden sm:block absolute bottom-32 left-1/4 w-6 h-6 bg-blue-300/50 rounded-full"
            animate={{
              x: [0, 150, -50, 100, 0],
              y: [0, -80, 60, -40, 0],
              scale: [1, 1.5, 0.5, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="hidden sm:block absolute top-1/3 right-10 w-3 h-12 bg-purple-300/40 rounded-full"
            animate={{
              height: [48, 16, 64, 24, 48],
              rotate: [0, 90, 180, 270, 360],
              opacity: [0.4, 0.8, 0.2, 0.6, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />

          {/* Interactive Particle Field - Hide on mobile */}
          {mounted && (
            <div className="hidden sm:block absolute inset-0">
              {Array.from({ length: 15 }, (_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 200 - 100, 0],
                    y: [0, Math.random() * 200 - 100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 4 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 4,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}

          {/* Dynamic Grid Overlay */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '50px 50px', '0px 0px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Main Content - Asymmetrical Layout */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="w-full px-2 sm:px-4 md:max-w-screen-xl md:mx-auto">
            <div className="grid lg:grid-cols-12 gap-8 items-center min-h-screen py-20">
              {/* Left Content - Text */}
              <motion.div
                className="lg:col-span-7 space-y-6 lg:space-y-8"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <motion.div
                  className="space-y-3 lg:space-y-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.span
                    className="inline-block px-3 py-1 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-sm rounded-full text-green-200 text-xs lg:text-sm font-medium border border-white/20"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    🌱 ENVIRONATION 2025
                  </motion.span>

                  <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white leading-tight flex flex-wrap items-center gap-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                  >
                    <motion.span
                      className="bg-gradient-to-r from-green-300 via-blue-300 to-purple-300 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      ENVIRONATI
                    </motion.span>
                    <TitleLogo />
                    <motion.span
                      className="bg-gradient-to-r from-purple-300 via-pink-300 to-red-300 bg-clip-text text-transparent"
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "linear",
                        delay: 1,
                      }}
                    >
                      N!
                    </motion.span>
                  </motion.h1>
                </motion.div>

                <motion.p
                  className="text-lg sm:text-xl md:text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  Platform kompetisi lingkungan terbesar untuk generasi masa depan.
                  Mari bersama wujudkan dunia yang lebih hijau dan berkelanjutan.
                </motion.p>

                {/* Action Buttons - Creative Layout */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-6 lg:pt-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/lkti"
                      className="group relative inline-flex items-center justify-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 text-white font-bold rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 overflow-hidden text-sm lg:text-base"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.span
                        className="relative z-10"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        LKTI
                      </motion.span>
                      <motion.svg
                        className="w-4 h-4 lg:w-5 lg:h-5 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5,
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </Link>
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="/ebc"
                      className="group relative inline-flex items-center justify-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 text-white font-bold rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden text-sm lg:text-base"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <motion.span
                        className="relative z-10"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.3,
                        }}
                      >
                        EBC
                      </motion.span>
                      <motion.svg
                        className="w-4 h-4 lg:w-5 lg:h-5 relative z-10"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ rotate: [0, -10, 10, 0] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.8,
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </motion.svg>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Right Content - Visual Elements */}
              <motion.div
                className="lg:col-span-5 relative mt-8 lg:mt-0"
                initial={{ opacity: 0, x: 100, rotate: 10 }}
                animate={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {/* Floating Cards */}
                <motion.div
                  className="relative h-64 sm:h-80 lg:h-96 flex items-center justify-center"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Main Floating Card */}
                  <motion.div
                    className="relative bg-white/10 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20 shadow-2xl"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <motion.div
                      className="text-center space-y-3 lg:space-y-4"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    >
                      <motion.div
                        className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl lg:rounded-2xl flex items-center justify-center mx-auto"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <svg className="w-6 h-6 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </motion.div>
                      <h3 className="text-lg lg:text-2xl font-bold text-white">Innovation</h3>
                      <p className="text-gray-300 text-xs lg:text-sm">For a Sustainable Future</p>
                    </motion.div>
                  </motion.div>

                  {/* Floating Mini Cards */}
                  <motion.div
                    className="absolute -top-3 -right-3 lg:-top-4 lg:-right-4 w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl"
                    animate={{
                      y: [0, -20, 0],
                      rotate: [0, 15, -15, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-white font-bold text-sm lg:text-lg">🌱</span>
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl"
                    animate={{
                      y: [0, 25, 0],
                      x: [0, -15, 0],
                      rotate: [0, -20, 20, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2,
                    }}
                  >
                    <span className="text-white font-bold text-xs lg:text-lg">⚡</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Creative Design */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
            <motion.div
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
              animate={{ borderColor: ["rgba(255,255,255,0.4)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.4)"] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="w-1 h-2 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0], opacity: [0.6, 1, 0.6] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* About Environation */}
      <section className="py-20 px-4 max-w-6xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-3xl"></div>
        <div className="relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 font-whyte">Tentang ENVIRONATION</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>
          <motion.div
            className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-2xl border border-white/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl">
                Pada tahun 2005, Himpunan Mahasiswa Teknik Lingkungan ITS membuat program kerja berupa perlombaan karya tulis ilmiah bagi siswa SMA/sederajat dan mahasiswa sebagai pengenalan keprofesian Teknik Lingkungan ITS. Tahun 2006 Lomba Inovasi Teknologi Lingkungan (LITL) yang berkembang menjadi big event dengan serangkaian kegiatan perlombaan, kunjung SMA, seminar, dan talkshow. Pada tahun 2016 LITL berganti nama menjadi ENVIRONATION dengan harapan mampu menghadirkan ide inovatif yang lebih berdampak dan menjadi wadah branding keprofesian Teknik Lingkungan ITS dengan baik. Pada tahun 2024 ENVIRONATION vakum dikarenakan terdapat beberapa evaluasi. Pada tahun 2025 ENVIRONATION kembali dengan semangat baru, rangkaian kegiatan yang lebih melibatkan masyarakat, berdampak terhadap pendidikan dan juga lingkungan, serta menghadirkan kolaborasi lebih luas dengan berbagai stakeholder.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Teknik Lingkungan ITS */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTJBQyIgZmlsbC1vcGFjaXR5PSIwLjA1Ij4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPgo8L2c+PC9nPjwvZz4KPC9zdmc+')] opacity-30"></div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 font-whyte">Departemen Teknik Lingkungan ITS</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Pendidikan & Inovasi</h3>
              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p>
                  Departemen Teknik Lingkungan Institut Teknologi Sepuluh Nopember (ITS) mempelajari dan mengeksplorasi bidang rekayasa dan manajemen lingkungan, seperti misalnya Teknologi Penyediaan dan Pengolahan Air Minum, Penyaluran dan Pengolahan Air Limbah, Pengelolaan Limbah Bahan Berbahaya dan Beracun (B3), Pengelolaan Sampah, Pencemaran Lingkungan, Analisis Mengenai Dampak Lingkungan (AMDAL). Salah satu misi departemen ini adalah untuk mengembangkan IPTEK di bidang rekayasa dan manjemen lingkungan yang mengutamakan kualitas lingkungan hidup, termasuk wilayah pesisir.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Laboratorium Unggulan</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Teknologi Pengolahan Air</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Pengolahan Limbah Padat dan B3</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Pengendalian Pencemaran Udara dan Perubahan Iklim</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>Remediasi Lingkungan</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>Manajemen Kualitas Lingkungan</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>Laboratorium Pelayanan</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Kegiatan */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Timeline Kegiatan ENVIRONATION 2025</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {/* Timeline items will be added here */}
          <div className="text-center text-gray-600">
            Timeline detail akan segera diperbarui
          </div>
        </div>
      </section>

      {/* Rangkaian Kegiatan */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzlDOTJBQyIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPgo8L2c+PC9nPjwvZz4KPC9zdmc+')] opacity-40"></div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 font-whyte">Rangkaian Kegiatan</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Opening Ceremony</h3>
              <p className="text-gray-700 leading-relaxed">Kegiatan Opening ENVIRONATION 2025 merupakan acara simbolis pembukaan mulainya gerbang baru kepanitiaan ENVIRONATION 2025.</p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Webinar Lingkungan</h3>
              <p className="text-gray-700 leading-relaxed">Acara ini mencakup tiga sesi utama: (1) seminar lingkungan bertema &quot;ESG Implementation and Its Contribution to Environmental SDGs&quot;; (2) sesi Skill Up dan (3) sesi Skill Up Bisnis.</p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Open TL ENVIRONATION</h3>
              <p className="text-gray-700 leading-relaxed">Kegiatan memperkenalkan Departemen Teknik Lingkungan ITS beserta bidang keilmuan dan prospek kariernya kepada peserta melalui rangkaian kegiatan edukatif dan interaktif.</p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">LKTI Competition</h3>
              <p className="text-gray-700 leading-relaxed">Merupakan salah satu rangkaian utama yang mengedepankan semangat keberlanjutan dan kontribusi nyata generasi muda terhadap pencapaian Sustainable Development Goals (SDGs).</p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">EBC Competition</h3>
              <p className="text-gray-700 leading-relaxed">Kompetisi bisnis inovatif yang berorientasi pada keberlanjutan lingkungan dengan tema &quot;Sustainable Development Goals (SDGs) sebagai Arah Inovasi Bisnis Berkelanjutan&quot;.</p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Uji Emisi</h3>
              <p className="text-gray-700 leading-relaxed">Kegiatan edukasi untuk memastikan kendaraan memenuhi standar emisi yang ditetapkan pemerintah serta menjaga kualitas udara dari polusi gas buang kendaraan.</p>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-3xl shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group md:col-span-2 lg:col-span-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">Closing ENVIRONATION 2025</h3>
              <p className="text-gray-700 leading-relaxed">Rangkaian kegiatan pitching finalis perlombaan dengan jumlah 5 tim paper competition dan 10 tim Enviro Business Competition, berikutnya terdapat pameran karya hasil atau prototype para finalis perlombaan.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Guidebook */}
      <section className="py-20 px-4 max-w-6xl mx-auto relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-3xl"></div>
        <div className="relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 font-whyte">Guidebook Perlombaan</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">LKTI Guidebook</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">Panduan lengkap untuk Lomba Karya Tulis Ilmiah dengan semua informasi yang dibutuhkan peserta.</p>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </motion.div>

            <motion.div
              className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/30 hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 group text-center"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-green-800 mb-4">EBC Guidebook</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">Panduan lengkap untuk Enviro Business Competition dengan panduan bisnis berkelanjutan.</p>
              <a
                href="#"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1zbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4xIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPgo8L2c+PC9nPjwvZz4KPC9zdmc+')] opacity-20"></div>
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-whyte">Kontak Kami</h2>
            <div className="w-32 h-1 bg-white mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m15.118-8.437C18.993 2.238 15.147 1.5 12 1.5S5.007 2.238 2.893 5.618c-2.105 3.36-.34 7.882 4.632 11.889 4.37 3.501 9.568 6.548 9.568 6.548s5.198-3.047 9.568-6.548c4.972-4.007 6.737-8.529 4.632-11.889"/>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">WhatsApp</p>
                    <p className="text-white/80">[Nomor akan segera diperbarui]</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">IG</span>
                  </div>
                  <div>
                    <p className="font-semibold">Instagram</p>
                    <p className="text-white/80">@environation_its</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-white/80">environationhmtlits2023@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">TT</span>
                  </div>
                  <div>
                    <p className="font-semibold">TikTok</p>
                    <p className="text-white/80">@environation.its</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/10 backdrop-blur-sm p-8 md:p-10 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-500"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-6">Lokasi</h3>
              <div className="space-y-3 text-white/90">
                <p className="font-semibold text-lg">Departemen Teknik Lingkungan</p>
                <p>Fakultas Teknik Sipil, Perencanaan dan Kebumian</p>
                <p>Institut Teknologi Sepuluh Nopember</p>
                <p>Kampus ITS, Sukolilo</p>
                <p>Surabaya, Jawa Timur</p>
                <p className="font-semibold">INDONESIA 60111</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
