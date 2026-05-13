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
          <button className="md:hidden text-gray-700">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
