"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled ? "bg-white/90 shadow-lg backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-accent tracking-wide">
          NitinAgency
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-base font-medium text-gray-800">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-accent transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed top-0 left-0 w-full h-full bg-white z-40 flex flex-col items-center justify-center space-y-8 text-xl font-semibold text-gray-700 transition-all duration-300",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-accent transition"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
