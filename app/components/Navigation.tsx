"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-orange-600">
            HarJas
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="/#home"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/#menu"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Menu
            </Link>
            <Link
              href="/#about"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              About
            </Link>
            <Link
              href="/#contact"
              className="text-gray-700 hover:text-orange-600 transition-colors"
            >
              Contact
            </Link>
          </div>
          <button className="md:hidden px-4 py-2 rounded-full bg-orange-600 text-white">
            <a href="tel:+14034949001" className="flex items-center gap-2">
              Call Us
            </a>
          </button>
        </div>
      </div>
    </nav>
  );
}
