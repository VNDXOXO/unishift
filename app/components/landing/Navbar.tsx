"use client";

import { useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "employers", label: "For Employers" },
  { id: "about", label: "About" },
];

export default function Navbar({ activeSection }: { activeSection: string }) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="sticky top-0 z-20 border-b border-line/80 bg-white/90 backdrop-blur-md">
      <nav
        className="mx-auto flex h-[78px] max-w-[1160px] items-center justify-between gap-6 px-[22px]"
        aria-label="Main navigation"
      >
        <a
          className="flex items-center font-[Manrope] text-[23px] font-extrabold tracking-tight text-navy"
          href="#home"
          aria-label="UniShift home"
          onClick={closeMenu}
        >
          <span>Uni</span>
          <span className="text-mint-dark">Shift</span>
        </a>

        {/* Nav links — desktop */}
        <div
          className={`hidden items-center gap-1.5 text-[13px] font-bold text-[#555D73] md:flex ${
            menuOpen
              ? "!fixed left-0 right-0 top-[68px] !flex flex-col items-start gap-5 border-b border-line bg-white px-6 py-5 shadow-lg md:!relative md:!top-auto md:!flex-row md:!items-center md:!gap-1.5 md:!border-0 md:!bg-transparent md:!p-0 md:!shadow-none"
              : ""
          }`}
          id="navLinks"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`inline-flex items-center whitespace-nowrap rounded-xl px-3 py-2.5 transition-all duration-200 hover:bg-[#F2FAF7] hover:text-mint-dark ${
                activeSection === item.id
                  ? "bg-mint-pale text-navy shadow-[inset_0_0_0_1px_#D6F0E7]"
                  : ""
              }`}
              aria-current={activeSection === item.id ? "page" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Nav actions — desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            className="px-3 py-2.5 text-sm font-bold text-navy"
            href="#get-started"
          >
            Log in
          </a>
          <a
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-transparent bg-navy px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(23,27,96,.16)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#252B80]"
            href="#get-started"
          >
            Get Started <span>↗</span>
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="block rounded-[10px] border-0 bg-mint-pale px-3 py-2.5 text-xl text-navy md:hidden"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="flex flex-col items-start gap-5 border-b border-line bg-white px-6 py-5 shadow-lg md:hidden">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`inline-flex items-center whitespace-nowrap rounded-xl px-3 py-2.5 text-[13px] font-bold transition-all duration-200 hover:bg-[#F2FAF7] hover:text-mint-dark ${
                activeSection === item.id
                  ? "bg-mint-pale text-navy shadow-[inset_0_0_0_1px_#D6F0E7]"
                  : "text-[#555D73]"
              }`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <a
              className="text-sm font-bold text-navy"
              href="#get-started"
              onClick={closeMenu}
            >
              Log in
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-5 py-3.5 text-sm font-bold text-white shadow-[0_8px_18px_rgba(23,27,96,.16)]"
              href="#get-started"
              onClick={closeMenu}
            >
              Get Started ↗
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
