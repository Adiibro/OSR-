"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "3D Printing", href: "#3d-printing" },
    { name: "Movies & Craft", href: "#movies-craft" },
    { name: "Event Management", href: "#event-management" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-[#111111] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-tight text-white">
              OSR<span className="text-primary">Arts</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-xs font-medium text-gray-300 hover:text-white transition-colors">
                {link.name}
              </Link>
            ))}
            <Link href="#shop" className="px-4 py-1.5 rounded-full border border-gray-500 text-xs font-medium text-white hover:bg-white/10 transition-colors">
              Shop
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#111111] flex flex-col space-y-4 px-4 py-6 border-t border-gray-800">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-sm font-medium text-gray-300 hover:text-white">
              {link.name}
            </Link>
          ))}
          <Link href="#shop" onClick={() => setIsOpen(false)} className="inline-block px-4 py-2 rounded-full border border-gray-500 text-sm font-medium text-white w-fit">
            Shop
          </Link>
        </div>
      )}
    </nav>
  );
}
