import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import hero from "@/assets/hero-gorilla.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src={hero}
          alt="Gorilla"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute inset-0 noise" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 sm:py-32 w-full">
        <div className="max-w-2xl">
          <motion.span
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block px-3 py-1 border border-jungle text-jungle font-display tracking-[0.3em] text-[10px] sm:text-xs"
          >
            ENTER THE JUNGLE
          </motion.span>
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="display text-5xl sm:text-6xl md:text-8xl leading-[0.9] mt-6 font-bold"
          >
            UNLEASH
            <br />
            THE <span className="text-jungle">BEAST</span>
            <br />
            <span className="text-stroke">WITHIN</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg"
          >
            Two arenas. One mindset. CrossFit, musculation, and specialized preparation for athletes
            — pick your battlefield and forge the strongest version of yourself.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
