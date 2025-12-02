"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#observability", label: "Observability" },
  { href: "#data", label: "Data Engineering" },
  { href: "#mvp", label: "MVP" },
  { href: "#contact", label: "Contact" },
];

const HeaderNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-900">Antriva AI Labs</h1>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-base text-gray-600 transition-colors hover:text-blue-600"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-500 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base text-gray-600 transition-colors hover:text-blue-600"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default HeaderNavigation;