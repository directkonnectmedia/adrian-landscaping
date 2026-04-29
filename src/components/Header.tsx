"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <span className="text-2xl mr-1">🌳</span>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white to-green-500 bg-clip-text text-transparent group-hover:from-white group-hover:to-green-400 transition-all">
              Adrian Landscaping
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="#home" className="text-gray-300 hover:text-green-500 font-medium transition-colors">
              Home
            </Link>
            <Link href="#services" className="text-gray-300 hover:text-green-500 font-medium transition-colors">
              Services
            </Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-green-500 font-medium transition-colors">
              Portfolio
            </Link>
            <Link href="#reviews" className="text-gray-300 hover:text-green-500 font-medium transition-colors">
              Reviews
            </Link>
          </nav>

          {/* CTA & Phone (Desktop) */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="tel:480-363-6207" className="flex items-center text-gray-300 hover:text-green-500 font-semibold transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              <span>(480) 363-6207</span>
            </a>
            <Link
              href="#quote"
              className="bg-green-500 hover:bg-green-400 text-white px-6 py-2.5 rounded-md font-semibold transition-colors shadow-sm"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="w-7 h-7" />
              ) : (
                <Menu className="w-7 h-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 absolute w-full left-0 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              Home
            </Link>
            <Link
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              Services
            </Link>
            <Link
              href="#portfolio"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              Portfolio
            </Link>
            <Link
              href="#reviews"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-gray-300 hover:bg-gray-800 hover:text-white rounded-md"
            >
              Reviews
            </Link>
            <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
              <a
                href="tel:480-363-6207"
                className="flex items-center justify-center w-full px-4 py-3 border border-gray-700 rounded-md text-base font-semibold text-gray-300 bg-black hover:bg-gray-800 hover:text-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                (480) 363-6207
              </a>
              <Link
                href="#quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 border border-transparent rounded-md text-base font-semibold text-white bg-green-500 hover:bg-green-400 shadow-sm"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
