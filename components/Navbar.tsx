"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

const NavLogo = () => (
  <div className="w-8 h-8">
    <Image
      src="/logo.png"
      alt="Environation Logo"
      width={80}
      height={80}
      className="w-full h-full object-contain"
    />
  </div>
);

export default function Navbar() {
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
      className="fixed top-0 left-0 w-full z-50 p-4"
    >
      <nav className="w-full max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2 bg-white/70 backdrop-blur-lg rounded-full shadow-lg border border-green-100">
        <Link href="/" aria-label="Homepage">
          <NavLogo />
        </Link>
        <div className="flex items-center gap-3">
          <Button
            asChild
            size="sm"
            className="rounded-full px-5 font-medium border border-green-500 text-green-600 bg-transparent hover:bg-green-100 hover:text-green-700 hover:border-green-600 transition-colors"
          >
            <Link href="/auth/login">Sign In</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full px-5 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Link href="/auth/sign-up">Sign Up</Link>
          </Button>
        </div>
      </nav>
    </motion.header>
  );
}
