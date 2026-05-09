import { Link } from "@tanstack/react-router";
import hero from "@/assets/hero-gorilla.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="Gorilla"
          className="w-full h-full object-cover opacity-60"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 noise" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-32 w-full">
        <div className="max-w-2xl">
          <span className="inline-block px-3 py-1 border border-jungle text-jungle font-display tracking-[0.3em] text-[10px] sm:text-xs">
            ENTER THE JUNGLE
          </span>
          <h1 className="display text-5xl sm:text-6xl md:text-8xl leading-[0.9] mt-6 font-bold">
            UNLEASH
            <br />
            THE <span className="text-jungle">BEAST</span>
            <br />
            <span className="text-stroke">WITHIN</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg">
            Two arenas. One mindset. CrossFit, musculation, and specialized preparation for athletes
            — pick your battlefield and forge the strongest version of yourself.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="bg-jungle text-primary-foreground font-display tracking-widest px-8 py-4 text-sm sm:text-base hover:bg-jungle-glow transition shadow-brutal text-center"
            >
              JOIN THE PACK
            </Link>
            <Link
              to="/locations"
              className="border border-foreground/30 text-foreground font-display tracking-widest px-8 py-4 text-sm sm:text-base hover:border-jungle hover:text-jungle transition text-center"
            >
              EXPLORE LOCATIONS
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
