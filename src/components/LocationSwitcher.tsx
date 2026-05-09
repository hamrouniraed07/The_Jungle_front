import { LOCATION_LIST } from "@/data/locations";
import { LocationCard } from "./LocationCard";

export function LocationSwitcher() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 sm:py-24">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-jungle font-display tracking-[0.3em] text-[10px] sm:text-xs uppercase">
          Pick your habitat
        </span>
        <h2 className="display text-3xl sm:text-4xl md:text-6xl mt-3 uppercase leading-tight">
          Two beasts.
          <br />
          One <span className="text-jungle">Jungle.</span>
        </h2>
        <p className="text-muted-foreground mt-4 text-sm sm:text-base">
          Tap a card to switch the entire experience to that location.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 sm:mt-12">
        {LOCATION_LIST.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>
    </section>
  );
}
