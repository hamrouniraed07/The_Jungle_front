import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/gorilla-logo.png";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/locations", label: "LOCATIONS" },
    { to: "/events", label: "EVENTS" },
    { to: "/transformations", label: "TRANSFORMATIONS" },
    { to: "/contact", label: "CONTACT" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="The Jungle" className="h-9 w-9 invert" width={36} height={36} />
          <span className="font-display text-xl tracking-widest">
            THE <span className="text-jungle">JUNGLE</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 font-display tracking-widest text-sm">
          {navLinks.map((link) => (
            <Link key={link.to} to={link.to} className="hover:text-jungle transition">
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-jungle text-primary-foreground font-display tracking-widest px-5 py-2 text-sm hover:bg-jungle-glow transition shadow-jungle"
          >
            CONTACT US
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          "fixed inset-0 top-16 bg-background z-40 md:hidden transition-all duration-300 ease-in-out",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none",
        )}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-6 font-display tracking-[0.2em] text-lg">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:text-jungle transition py-2"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-jungle text-primary-foreground font-display tracking-widest px-8 py-4 text-sm hover:bg-jungle-glow transition shadow-jungle mt-4 w-full text-center"
          >
            CONTACT US
          </Link>
        </div>
      </div>
    </header>
  );
}
