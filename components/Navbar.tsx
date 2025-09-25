"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const NavLogo = () => (
  <div className="">
    <Image
      src="/logo.png"
      alt="Environation Logo"
      width={100}
      height={100}
      className="w-full h-full object-contain"
    />
  </div>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
        delay: 0.5,
      }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <nav className={`max-w-[98vw] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-xl mx-auto flex justify-between items-center px-1 sm:px-4 py-1.5 sm:py-2 rounded-full mt-1 sm:mt-4 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg border border-slate-700/50" : ""
      }`}>
        <Link href="/" aria-label="Homepage">
          <NavLogo />
        </Link>
        <div className="flex items-center gap-1 sm:gap-3">
          <Button
            asChild
            size="sm"
            className="bg-transparent hover:bg-yellow-400/90 text-white hover:text-black border border-yellow-400 font-semibold rounded-full px-2 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-yellow-400 hover:bg-transparent border border-transparent hover:border-yellow-400 text-black hover:text-white font-semibold rounded-full px-2 sm:px-5 py-1 sm:py-2 text-xs sm:text-sm shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Link href="/auth/sign-up">Sign Up</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}