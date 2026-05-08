import { Link } from "@tanstack/react-router";
import logo from "@/assets/gorilla-logo.png";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="The Jungle" className="h-9 w-9 invert" width={36} height={36} />
          <span className="font-display text-xl tracking-widest">
            THE <span className="text-jungle">JUNGLE</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8 font-display tracking-widest text-sm">
          <Link to="/" className="hover:text-jungle transition">
            HOME
          </Link>
          <Link to="/locations" className="hover:text-jungle transition">
            LOCATIONS
          </Link>
          <Link to="/booking" className="hover:text-jungle transition">
            BOOKING
          </Link>
          <Link to="/contact" className="hover:text-jungle transition">
            CONTACT
          </Link>
        </div>
        <Link
          to="/booking"
          className="bg-jungle text-primary-foreground font-display tracking-widest px-5 py-2 text-sm hover:bg-jungle-glow transition shadow-jungle"
        >
          BOOK SÉANCE
        </Link>
      </nav>
    </header>
  );
}
