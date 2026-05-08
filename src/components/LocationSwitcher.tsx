import { LOCATION_LIST } from "@/data/locations";
import { LocationCard } from "./LocationCard";

export function LocationSwitcher() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-jungle font-display tracking-[0.3em] text-xs">PICK YOUR HABITAT</span>
        <h2 className="display text-4xl md:text-6xl mt-3">
          TWO BEASTS.
          <br />
          ONE <span className="text-jungle">JUNGLE.</span>
        </h2>
        <p className="text-muted-foreground mt-4">
          Tap a card to switch the entire experience to that location.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-12">
        {LOCATION_LIST.map((loc) => (
          <LocationCard key={loc.id} location={loc} />
        ))}
      </div>
    </section>
  );
}
