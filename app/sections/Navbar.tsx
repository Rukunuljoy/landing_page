import Image from "next/image";
import React, { useState } from "react";
import logo from "@/app/assets/images/logo.svg";
import Button from "../components/Button";

const navLinks = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Integrations",
    href: "#integrations",
  },
  {
    label: "FAQs",
    href: "#fAQs",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="py-4 md:py-8">
      <div className="container max-w-5xl mx-auto">
        <div className="flex flex-row border items-center rounded-full border-white/15 p-2 px-4 md:pr-2 justify-between">
          {/* Logo */}
          <div>
            <Image src={logo} alt="logo" className="h-9 md:h-auto w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-center items-center">
            <nav className="flex gap-6 font-medium">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className="hover:text-lime-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center justify-end gap-4">
            <svg
              onClick={() => setMenuOpen(!menuOpen)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu md:hidden cursor-pointer"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>

            {/* Buttons (Visible on desktop only) */}
            <div className="hidden md:inline-flex gap-4">
              <Button variant="secondary">Login</Button>
              <Button variant="primary">Sign Up</Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="mt-4 md:hidden flex flex-col items-center bg-neutral-800 rounded-lg p-4 gap-4">
            <nav className="flex flex-col gap-4 font-medium">
              {navLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.label}
                  className="hover:text-lime-400 transition"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button variant="secondary" className="w-1/2">
              Login
            </Button>
            <Button variant="primary" className="w-1/2">
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;
