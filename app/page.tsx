"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import { useEffect, useState, useRef } from "react";

const TitleLogo = () => (
  <div className="w-10 h-10 md:w-16 md:h-16 shrink-0 mx-1">
    <Image
      src="/title-logo.svg"
      alt="Environation Title Logo"
      width={40}
      height={40}
      className="w-full h-full object-contain"
    />
  </div>
);

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
    const scrollStep = -window.scrollY / (500 / 15); // 500ms duration, 15ms per frame
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

export default function Home() {
  // Generate random positions for particles only on the client
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  interface EventType {
    month: string;
    date: string;
    fullDate: string;
    title: string;
    description: string;
    icon: string;
    gradient: string;
    delay: number;
    detail: string;
  }
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!scrollRef.current) return;
    // List of events, must match the timeline
    const events = [
      { fullDate: "2025-09-19" },
      { fullDate: "2025-09-29" },
      { fullDate: "2025-10-19" },
      { fullDate: "2025-10-25" },
      { fullDate: "2025-10-30" },
      { fullDate: "2025-11-07" },
      { fullDate: "2025-12-18" },
      { fullDate: "2025-12-19" },
    ];
    const currentDate = new Date('2025-09-25');
    let targetIdx = events.findIndex(e => {
      const eventDate = new Date(e.fullDate);
      return eventDate >= currentDate;
    });
    if (targetIdx === -1) targetIdx = events.length - 1;

    setTimeout(() => {
      const container = scrollRef.current;
      const cards = container?.querySelectorAll('.group');
      if (container && cards && cards[targetIdx]) {
        const card = cards[targetIdx] as HTMLElement;
        container.scrollTo({
          left: card.offsetLeft - 24, // 24px padding
          behavior: 'smooth'
        });
      }
    }, 500);
  }, [mounted]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white overflow-hidden scroll-smooth">
      <Navbar />
      <BackToTop />

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
        <div className="relative z-10 min-h-screen flex items-center px-4 sm:px-0">
          <div className="w-full sm:px-4 md:max-w-screen-xl md:mx-auto">
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
                    Selamat Datang di
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

                <motion.div
                  className="text-center lg:text-left"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.p
                    className="text-lg sm:text-xl md:text-xl lg:text-2xl text-green-200 font-semibold leading-relaxed max-w-2xl"
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(34,197,94,0.3)",
                        "0 0 20px rgba(34,197,94,0.5)",
                        "0 0 10px rgba(34,197,94,0.3)",
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                                        Bersama untuk Masa Depan yang Lebih Hijau: Bertindak, Melestarikan, Berkelanjutan
                  </motion.p>
                </motion.div>


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
                      className="group relative inline-flex items-center justify-center gap-2 lg:gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden text-sm lg:text-base"
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
                      <h3 className="text-lg lg:text-2xl font-bold text-white">Inovasi</h3>
                      <p className="text-gray-300 text-xs lg:text-sm">Untuk Masa Depan Berkelanjutan</p>
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
            <span className="text-white/60 text-sm font-medium">Gulir untuk menjelajahi</span>
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

      {/* About ENVIRONATION - Compact Design */}
      <section className="relative py-12 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#105230] to-[#1C5DDC]">
        {/* Epic Background Layers */}
        <div className="absolute inset-0">
          {/* Dynamic Mesh Overlay */}
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 2px, transparent 2px),
                radial-gradient(circle at 25% 75%, rgba(255,255,255,0.1) 1px, transparent 1px),
                radial-gradient(circle at 75% 25%, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 100px 100px, 50px 50px, 50px 50px',
            }}
            animate={{
              backgroundPosition: [
                '0px 0px, 0px 0px, 0px 0px, 0px 0px',
                '100px 100px, -100px -100px, 50px 50px, -50px -50px',
                '0px 0px, 0px 0px, 0px 0px, 0px 0px'
              ],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Floating Geometric Elements */}
          {mounted && Array.from({ length: 4 }, (_, i) => (
            <motion.div
              key={`about-geo-${i}`}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 200 - 100, 0],
                y: [0, Math.random() * 200 - 100, 0],
                rotate: [0, 360, 0],
                scale: [0.5, 1.5, 0.5],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            >
              {i % 4 === 0 && (
                <div className="w-8 h-8 border-2 border-emerald-300/30 rotate-45" />
              )}
              {i % 4 === 1 && (
                <div className="w-6 h-6 bg-teal-400/20 rounded-full" />
              )}
              {i % 4 === 2 && (
                <div className="w-10 h-2 bg-cyan-300/20 rounded-full" />
              )}
              {i % 4 === 3 && (
                <div className="w-4 h-4 border border-emerald-400/40 rotate-12" />
              )}
            </motion.div>
          ))}

          {/* Particle Storm */}
          {mounted && (
            <div className="absolute inset-0">
              {Array.from({ length: 12 }, (_, i) => (
                <motion.div
                  key={`about-particle-${i}`}
                  className="absolute w-1 h-1 bg-gradient-to-r from-emerald-300 to-cyan-300 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [0, Math.random() * 300 - 150, 0],
                    y: [0, Math.random() * 300 - 150, 0],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: 8 + Math.random() * 4,
                    repeat: Infinity,
                    delay: Math.random() * 6,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Main Content Container */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
          {/* Hero Title Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >

            {/* Main Title */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 font-whyte leading-none"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              TENTANG{" "}
              <motion.span
                className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ENVIRONATION
              </motion.span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Memelopori Inovasi Lingkungan Sejak 2005
            </motion.p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Story Cards */}
              {[
                {
                  year: "2005",
                  title: "Awal Mula",
                  description: "HMTL ITS meluncurkan LITL - kompetisi esai lingkungan pelopor untuk siswa.",
                  icon: "🌟",
                  gradient: "from-emerald-500 to-teal-500"
                },
                {
                  year: "2016",
                  title: "Evolusi",
                  description: "LITL menjadi ENVIRONATION dengan seminar, workshop, dan kunjungan sekolah.",
                  icon: "🔄",
                  gradient: "from-teal-500 to-cyan-500"
                },
                {
                  year: "2025",
                  title: "Kelahiran Kembali",
                  description: "ENVIRONATION kembali dengan dampak lebih luas dan kolaborasi inovatif.",
                  icon: "🚀",
                  gradient: "from-cyan-500 to-blue-500"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  className="group relative"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Card Background */}
                  <motion.div
                    className="absolute inset-0 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />

                  {/* Content */}
                  <div className="relative p-6">
                    <div className="flex items-start gap-4">
                      {/* Year Badge */}
                      <motion.div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-lg`}
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        {item.year.slice(-2)}
                      </motion.div>

                      {/* Text Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xl">{item.icon}</span>
                          <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        </div>
                        <p className="text-emerald-100/80 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Right Content - Interactive Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              viewport={{ once: true }}
            >
              {/* Central Interactive Element */}
              <motion.div
                className="relative w-full max-w-sm mx-auto"
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {/* Main Orb */}
                <motion.div
                  className="relative w-64 h-64 mx-auto"
                  animate={{
                    scale: [1, 1.05, 0.95, 1.02, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Outer Glow */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 rounded-full blur-3xl"
                    animate={{
                      scale: [1, 1.2, 0.8, 1.1, 1],
                      opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Main Circle */}
                  <motion.div
                    className="absolute inset-4 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-2xl rounded-full border border-white/30 shadow-2xl flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Inner Content */}
                    <div className="text-center space-y-4">
                      <motion.div
                        className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 12,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        <span className="text-3xl">🌍</span>
                      </motion.div>

                      <div>
                        <motion.h3
                          className="text-xl font-bold text-white mb-1"
                          animate={{
                            textShadow: [
                              "0 0 10px rgba(255,255,255,0.5)",
                              "0 0 20px rgba(255,255,255,0.8)",
                              "0 0 10px rgba(255,255,255,0.5)",
                            ]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          20+ Tahun
                        </motion.h3>
                        <p className="text-emerald-200/80 text-sm">Kecemerlangan Lingkungan</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Floating Stats */}
                {[
                  { label: "Mahasiswa", value: "1000+", position: "top-6 -left-6" },
                  { label: "Acara", value: "50+", position: "top-8 -right-8" },
                  { label: "Dampak", value: "Global", position: "-bottom-6 -left-8" },
                  { label: "Inovasi", value: "Tak Terbatas", position: "-bottom-8 -right-6" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className={`absolute ${stat.position} bg-white/10 backdrop-blur-xl rounded-xl p-3 border border-white/20 shadow-xl`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8, delay: 1.5 + index * 0.2 } }}
                    viewport={{ once: true }}
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                      transition: {
                        duration: 6 + index * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    }}
                  >
                    <div className="text-center">
                      <div className="text-sm font-bold text-white">{stat.value}</div>
                      <div className="text-xs text-emerald-200/70">{stat.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
      </section>

      {/* Environmental Engineering ITS Section */}
      <section className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1C5DDC] to-[#19AE5D]">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 80%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(255,255,255,0.05) 0%, transparent 50%)
              `,
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{
              duration: 20,
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 mb-8"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-3 h-3 bg-emerald-400 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-white/90 font-medium tracking-wide">🏫 KEUNGGULAN AKADEMIK</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Teknik Lingkungan{" "}
              <motion.span
                className="bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ITS
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Content - Information */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Tentang Departemen</h3>
                <p className="text-emerald-100/90 leading-relaxed mb-6">
                  Departemen Teknik Lingkungan Institut Teknologi Sepuluh Nopember (ITS) mempelajari dan mengeksplorasi bidang rekayasa dan manajemen lingkungan, seperti misalnya Teknologi Penyediaan dan Pengolahan Air Minum, Penyaluran dan Pengolahan Air Limbah, Pengelolaan Limbah Bahan Berbahaya dan Beracun (B3), Pengelolaan Sampah, Pencemaran Lingkungan, Analisis Mengenai Dampak Lingkungan (AMDAL).
                </p>
                <p className="text-emerald-100/90 leading-relaxed">
                  Salah satu misi departemen ini adalah untuk mengembangkan IPTEK di bidang rekayasa dan manajemen lingkungan yang mengutamakan kualitas lingkungan hidup, termasuk wilayah pesisir.
                </p>
              </motion.div>

              <motion.div
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <h3 className="text-2xl font-bold text-white mb-4">Laboratorium Unggulan</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    "Teknologi Pengolahan Air",
                    "Pengolahan Limbah Padat dan B3",
                    "Pengendalian Pencemaran Udara dan Perubahan Iklim",
                    "Remediasi Lingkungan",
                    "Manajemen Kualitas Lingkungan",
                    "Laboratorium Pelayanan"
                  ].map((lab, index) => (
                    <motion.div
                      key={lab}
                      className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/10"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-2 h-2 bg-emerald-400 rounded-full flex-shrink-0"></div>
                      <span className="text-emerald-100/90 text-sm">{lab}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content - Images */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Lab Images */}
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="relative group"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="aspect-square bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-xl border border-white/20 overflow-hidden">
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl mb-2">🏫</div>
                          <div className="text-white/70 text-xs">Lab Photo {i}</div>
                        </div>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-end p-3">
                      <span className="text-white text-xs font-medium">Laboratorium {i}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Featured Image */}
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-teal-400/20 to-emerald-400/20 rounded-2xl border border-white/20 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🎓</div>
                      <div className="text-white/90 text-lg font-semibold mb-2">Departemen Teknik Lingkungan</div>
                      <div className="text-white/70 text-sm">Institut Teknologi Sepuluh Nopember</div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-xl rounded-lg px-3 py-1 border border-white/20">
                  <span className="text-white text-sm font-medium">Unggulan</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold rounded-2xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">Pelajari Lebih Lanjut</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </motion.svg>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline Kegiatan Section */}
  <section className="relative py-16 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#19AE5D] to-white" data-timeline-section>
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(34,197,94,0.1) 2px, transparent 2px),
                radial-gradient(circle at 75% 75%, rgba(34,197,94,0.1) 2px, transparent 2px)
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
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
          {/* Section Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-100/90 backdrop-blur-xl rounded-full border border-emerald-200/50 mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="w-3 h-3 bg-emerald-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-emerald-800 font-semibold tracking-wide">⏰ TIMELINE 2025</span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4 leading-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Jadwal{" "}
              <motion.span
                className="bg-gradient-to-r from-emerald-700 via-teal-700 to-cyan-700 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                ENVIRONATION
              </motion.span>
            </motion.h2>
          </motion.div>

          {/* Horizontal Scrollable Timeline */}
          <div className="relative">
            {/* Scrollable Container */}
            <div className="overflow-x-auto pb-4" ref={scrollRef}>
              <div className="flex gap-6 min-w-max px-4 items-stretch">
                {[
                  {
                    month: "SEP",
                    date: "19",
                    fullDate: "2025-09-19",
                    title: "Opening",
                    description: "Pembukaan ENVIRONATION 2025",
                    icon: "🎉",
                    gradient: "from-emerald-500 to-teal-500",
                    delay: 0,
                    detail: "Kegiatan Opening ENVIRONATION 2025 merupakan acara simbolis pembukaan mulainya gerbang baru kepanitiaan ENVIRONATION 2025."
                  },
                  {
                    month: "SEP-OKT",
                    date: "29-30",
                    fullDate: "2025-09-29",
                    title: "Registrasi & Roadshow",
                    description: "Pendaftaran kompetisi & roadshow SMA",
                    icon: "📝",
                    gradient: "from-teal-500 to-cyan-500",
                    delay: 0.1,
                    detail: ""
                  },
                  {
                    month: "OKT",
                    date: "19",
                    fullDate: "2025-10-19",
                    title: "Webinar & Upskill",
                    description: "Sesi pengembangan keterampilan",
                    icon: "🎓",
                    gradient: "from-cyan-500 to-blue-500",
                    delay: 0.2,
                    detail: "Acara ini mencakup tiga sesi utama: (1) seminar lingkungan bertema \"ESG Implementation and Its Contribution to Environmental SDGs\"; (2) sesi Skill Up dan (3) sesi Skill Up Bisnis"
                  },
                  {
                    month: "OKT",
                    date: "25",
                    fullDate: "2025-10-25",
                    title: "Open TL & Roadshow",
                    description: "Technical Loss & roadshow final",
                    icon: "🚀",
                    gradient: "from-blue-500 to-indigo-500",
                    delay: 0.3,
                    detail: "Kegiatan memperkenalkan Departemen Teknik Lingkungan ITS beserta bidang keilmuan dan prospek kariernya kepada peserta, khususnya siswa SMA, melalui rangkaian kegiatan edukatif dan interaktif. Intinya, acara ini bertujuan memberi pengalaman nyata tentang dunia teknik lingkungan lewat Tour TL (kunjungan laboratorium), One Day Lecture & FGD (pemahaman isu lingkungan dan diskusi solusi), serta Workshop Laboratorium (praktik sederhana dan aplikatif). Dengan cara ini, peserta tidak hanya mengenal fasilitas dan riset di TL ITS, tetapi juga terdorong untuk peduli pada isu lingkungan dan termotivasi melanjutkan studi di bidang ini."
                  },
                  {
                    month: "OKT-DES",
                    date: "30-18",
                    fullDate: "2025-10-30",
                    title: "Competition",
                    description: "Pelaksanaan kompetisi utama",
                    icon: "🏆",
                    gradient: "from-indigo-500 to-purple-500",
                    delay: 0.4,
                    detail: "Lomba Karya Tulis Ilmiah (LKTI) Environation 2025 merupakan salah satu rangkaian utama dalam kegiatan Environation yang mengedepankan semangat keberlanjutan dan kontribusi nyata generasi muda terhadap pencapaian Sustainable Development Goals (SDGs). Kompetisi ini dibagi menjadi dua cabang, yaitu Essay Competition dan Paper Competition, yang masing-masing ditujukan untuk kelompok peserta berbeda.\n\nEnviro Business Competition (EBC) Merupakan salah satu rangkaian utama dari Environation 2025 yang diselenggarakan oleh Himpunan Mahasiswa Teknik Lingkungan ITS. Kompetisi ini dirancang sebagai wadah bagi siswa dan mahasiswa untuk menyalurkan ide bisnis inovatif yang berorientasi pada keberlanjutan lingkungan. Bentuk kegiatan EBC terdiri dari beberapa tahap yang terstruktur dengan tujuan memberikan pengalaman belajar, berkompetisi, sekaligus berjejaring secara komprehensif. Pada tahun 2025, EBC mengusung tema besar \"Sustainable Development Goals (SDGs) sebagai Arah Inovasi Bisnis Berkelanjutan\". Tema ini menjadi landasan dalam setiap tahapan lomba, di mana peserta ditantang untuk menghadirkan solusi bisnis yang mampu menjawab isu-isu global sekaligus memberikan manfaat nyata bagi masyarakat dan lingkungan"
                  },
                  {
                    month: "NOV",
                    date: "7",
                    fullDate: "2025-11-07",
                    title: "Uji Emisi",
                    description: "Pengujian emisi kendaraan",
                    icon: "🔬",
                    gradient: "from-purple-500 to-pink-500",
                    delay: 0.5,
                    detail: "Tujuan dari kegiatan ini adalah sebagai wadah edukasi memastikan kendaraan memenuhi standar emisi yang ditetapkan pemerintah serta menjaga kualitas udara dari polusi gas buang kendaraan. Uji emisi akan dilaksanakan di Graha ITS dengan koordinasi bersama Dinas Perhubungan Kota Surabaya dan Polrestabes Kota Surabaya atau Kepolisian Sektor sekitar lokasi pengujian."
                  },
                  {
                    month: "DES",
                    date: "18",
                    fullDate: "2025-12-18",
                    title: "Closing",
                    description: "Exhibition, Pitching & Talkshow",
                    icon: "🎊",
                    gradient: "from-pink-500 to-red-500",
                    delay: 0.6,
                    detail: "Closing ENVIRONATION 2025 berisikan rangkaian kegiatan pitching finalis perlombaan dengan jumlah 5 tim paper competition dan 10 tim Enviro Business Competition, berikutnya terdapat pameran karya hasil atau prototype para finalis perlombaan. Closing ENVIRONATION 2025 juga menghadirkan 27 maket Desain Infrastruktur Lingkungan Berkelanjutan dari mahasiswa Teknik Lingkungan angkatan 2022. Dalam kegiatan Exhibition ini, peserta Lomba Karya Tulis Ilmiah dan Enviro Business Competition serta mahasiswa Teknik Lingkungan ITS diberi kesempatan untuk memamerkan hasil eksplorasi visual dan konseptual mereka."
                  },
                  {
                    month: "DES",
                    date: "19",
                    fullDate: "2025-12-19",
                    title: "Company Visit",
                    description: "Kunjungan perusahaan & travelling",
                    icon: "🏢",
                    gradient: "from-red-500 to-orange-500",
                    delay: 0.7,
                    detail: ""
                  }
                ].map((event) => {
                  const eventDate = new Date(event.fullDate);
                  const currentDate = new Date('2025-09-25');
                  const isPast = eventDate < currentDate;
                  const isToday = eventDate.toDateString() === currentDate.toDateString();

                  return (
                    <motion.div
                      key={event.title}
                      className="group relative flex-shrink-0 w-80 mt-6 min-h-[220px] cursor-pointer"
                      initial={{ opacity: 0, x: 50, scale: 0.9 }}
                      whileInView={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: event.delay,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      viewport={{ once: true }}
                      whileHover={{ y: isPast ? 0 : -8, scale: isPast ? 1 : 1.02 }}
                      style={{ filter: isPast ? 'grayscale(100%) opacity(0.6)' : 'none' }}
                      onClick={() => { if (!isPast) { setSelectedEvent(event); setShowModal(true); } }}
                    >
                      {/* Status Indicator */}
                      <div className="flex justify-center mb-2">
                        {isPast ? (
                          <motion.div
                            className="px-6 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: event.delay + 0.5 }}
                          >
                            ✓ Selesai
                          </motion.div>
                        ) : isToday ? (
                          <motion.div
                            className="px-6 py-1 bg-emerald-100 text-emerald-700 text-xs font-medium rounded-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: event.delay + 0.5 }}
                          >
                            🔴 Sedang Berlangsung
                          </motion.div>
                        ) : (
                          <motion.div
                            className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full min-w-max"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: event.delay + 0.5 }}
                          >
                            ⏳ Akan Datang
                          </motion.div>
                        )}
                      </div>

                      {/* Card Background */}
                      <motion.div
                        className={`relative bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-white/50 shadow-xl transition-all duration-300 overflow-hidden ${
                          isPast ? 'cursor-not-allowed' : 'hover:shadow-2xl'
                        }`}
                        style={{
                          transformStyle: "preserve-3d",
                          pointerEvents: isPast ? 'none' : 'auto'
                        }}
                      >
                        {/* Gradient Background */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />

                        {/* Date Badge */}
                        <motion.div
                          className="flex items-center justify-between mb-4"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: event.delay + 0.2 }}
                          viewport={{ once: true }}
                        >
                          <div className={`px-3 py-1 bg-gradient-to-r ${event.gradient} text-white text-xs font-bold rounded-lg shadow-lg ${
                            isPast ? 'opacity-50' : ''
                          }`}>
                            {event.month}
                          </div>
                          <motion.div
                            className={`bg-gradient-to-r ${event.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg ${
                              isPast ? 'opacity-50' : ''
                            } ${event.date.includes('-') ? 'px-4 py-1 min-w-[60px] whitespace-nowrap text-xs' : 'w-10 h-10 text-sm'}`}
                            whileHover={isPast ? {} : { scale: 1.2, rotate: 10 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {event.date}
                          </motion.div>
                        </motion.div>

                        {/* Icon */}
                        <motion.div
                          className={`w-16 h-16 bg-gradient-to-r ${event.gradient} rounded-2xl flex items-center justify-center text-3xl mb-4 mx-auto shadow-xl ${
                            isPast ? 'opacity-50' : ''
                          }`}
                          whileHover={isPast ? {} : { scale: 1.1, rotate: 5 }}
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: event.delay + 0.3,
                            type: "spring",
                            stiffness: 300,
                            damping: 20
                          }}
                          viewport={{ once: true }}
                        >
                          {event.icon}
                        </motion.div>

                        {/* Content */}
                        <div className="text-center">
                          <motion.h3
                            className={`text-lg font-bold mb-2 leading-tight ${
                              isPast ? 'text-gray-500' : 'text-gray-900'
                            }`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: event.delay + 0.4 }}
                            viewport={{ once: true }}
                          >
                            {event.title}
                          </motion.h3>
                          <motion.p
                            className={`text-sm leading-relaxed ${
                              isPast ? 'text-gray-400' : 'text-gray-600'
                            }`}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: event.delay + 0.5 }}
                            viewport={{ once: true }}
                          >
                            {event.description}
                          </motion.p>
                        </div>

                        {/* Hover Effect */}
                        {!isPast && (
                          <motion.div
                            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient} rounded-b-2xl`}
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                            style={{ originX: 0 }}
                          />
                        )}
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Event Detail Modal */}
            <AnimatePresence>
              {showModal && selectedEvent && (
                <motion.div
                  className="fixed inset-0 z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setShowModal(false)}
                >
                  {/* Backdrop */}
                  <motion.div
                    className="absolute inset-0 bg-black/60 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />

                  {/* Modal Content */}
                  <motion.div
                    className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 max-w-3xl w-full max-h-[85vh] overflow-hidden"
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-2xl -translate-y-16 translate-x-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl translate-y-12 -translate-x-12" />

                    {/* Header */}
                    <div className={`relative bg-gradient-to-r ${selectedEvent.gradient} p-8 text-white overflow-hidden`}>
                      {/* Animated Background Pattern */}
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%),
                                          radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%),
                                          radial-gradient(circle at 40% 40%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
                        }}
                        animate={{
                          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                        }}
                        transition={{
                          duration: 20,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />

                      <div className="relative z-10 flex items-start justify-between">
                        <div className="flex items-center gap-6">
                          <motion.div
                            className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-5xl shadow-lg"
                            whileHover={{ scale: 1.05, rotate: 5 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {selectedEvent.icon}
                          </motion.div>
                          <div className="flex-1">
                            <motion.h3
                              className="text-2xl md:text-3xl font-black mb-2 leading-tight"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 }}
                            >
                              {selectedEvent.title}
                            </motion.h3>
                            <motion.p
                              className="text-white/90 text-base md:text-lg leading-relaxed"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {selectedEvent.description}
                            </motion.p>
                            <motion.div
                              className="flex items-center gap-2 mt-3"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              <div className={`px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium border border-white/30`}>
                                {selectedEvent.month} {selectedEvent.date}
                              </div>
                            </motion.div>
                          </div>
                        </div>
                        <motion.button
                          onClick={() => setShowModal(false)}
                          className="text-white/70 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-200 group"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </motion.button>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative p-8 max-h-96 overflow-y-auto">
                      {selectedEvent.detail ? (
                        <motion.div
                          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                        >
                          {selectedEvent.detail.split('\n\n').map((paragraph: string, index: number) => (
                            <motion.p
                              key={index}
                              className="mb-6 text-base md:text-lg"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                            >
                              {paragraph}
                            </motion.p>
                          ))}
                        </motion.div>
                      ) : (
                        <motion.div
                          className="text-center py-12"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          <div className="text-6xl mb-4">📝</div>
                          <p className="text-gray-500 text-lg">
                            Detail untuk kegiatan ini sedang disiapkan.
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* Footer */}
                    <motion.div
                      className="bg-gray-50 px-8 py-4 border-t border-gray-100"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                    >
                      <div className="flex justify-end">
                        <motion.button
                          onClick={() => setShowModal(false)}
                          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-xl transition-colors duration-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Tutup
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Scroll Indicator */}
            <motion.div
              className="flex justify-center mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="flex items-center gap-2 text-gray-500 text-sm"
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>Scroll ke kanan</span>
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </motion.svg>
              </motion.div>
            </motion.div>
          </div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
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
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
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