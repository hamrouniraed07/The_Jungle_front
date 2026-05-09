export function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-16 md:mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="font-display text-2xl tracking-widest">
            THE
            <span className="text-jungle">JUNGLE</span>
          </h3>
          <p className="text-muted-foreground text-sm mt-3 max-w-xs">
            Two locations. One mindset. Train like the wild demands it.
          </p>
        </div>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-col">
          <h4 className="font-display tracking-widest text-sm text-jungle uppercase">
            Cross-Training Gym
          </h4>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-muted-foreground">RJM6+M6F, Sahloul 4, Sousse</p>
            <p className="text-sm text-muted-foreground font-mono">+216 25 614 679</p>
          </div>
        </div>
        <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-col">
          <h4 className="font-display tracking-widest text-sm text-jungle uppercase">Fit Box</h4>
          <div className="mt-2 space-y-1">
            <p className="text-sm text-muted-foreground">
              Hammem sousse - kantaoui, Sousse, Tunisia, 4011
            </p>
            <p className="text-sm text-muted-foreground font-mono">+216 29 268 834</p>
          </div>
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground tracking-widest">
        © {new Date().getFullYear()} THE JUNGLE — ALL RIGHTS RESERVED
      </div>
    </footer>
  );
}
