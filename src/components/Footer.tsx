export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-display text-2xl tracking-widest">
            THE
            <span className="text-jungle">JUNGLE</span>
          </h3>
          <p className="text-muted-foreground text-sm mt-3 max-w-xs">
            Two locations. One mindset. Train like the wild demands it.
          </p>
        </div>
        <div>
          <h4 className="font-display tracking-widest text-sm text-jungle">CROSS-TRAINING GYM</h4>
          <p className="text-sm text-muted-foreground mt-2">RJM6+M6F, Sahloul 4, Sousse</p>
          <p className="text-sm text-muted-foreground">+216 25 614 679</p>
        </div>
        <div>
          <h4 className="font-display tracking-widest text-sm text-jungle">FIT BOX</h4>
          <p className="text-sm text-muted-foreground mt-2">
            Hammem sousse - kantaoui, Sousse, Tunisia, 4011
          </p>
          <p className="text-sm text-muted-foreground">+216 29 268 834</p>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground tracking-widest">
        © {new Date().getFullYear()} THE JUNGLE — ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
