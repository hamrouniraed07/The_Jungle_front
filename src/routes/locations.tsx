import { createFileRoute } from "@tanstack/react-router";
import { LocationProvider, useLocationCtx } from "@/context/LocationContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LocationSwitcher } from "@/components/LocationSwitcher";
import { FeatureSection } from "@/components/FeatureSection";
import { Toaster } from "@/components/ui/sonner";
import { LOCATIONS } from "@/data/locations";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Locations — The Jungle" },
      {
        name: "description",
        content:
          "Discover the Jungle Cross-Training Gym and the Jungle Fit Box. Hours, equipment, and rules.",
      },
      { property: "og:title", content: "Locations — The Jungle" },
      { property: "og:description", content: "Two arenas. Pick your habitat." },
    ],
  }),
  component: LocationsPage,
});

function LocationsPage() {
  return (
    <LocationProvider>
      <Navbar />
      <main className="pt-16">
        <Header />
        <LocationSwitcher />
        <FeatureSection />
        <MapBlock />
      </main>
      <Footer />
      <Toaster />
    </LocationProvider>
  );
}

function Header() {
  return (
    <section className="max-w-7xl mx-auto px-6 pt-16">
      <span className="text-jungle font-display tracking-[0.3em] text-xs">OUR LOCATIONS</span>
      <h1 className="display text-5xl md:text-7xl mt-3">
        FIND YOUR <span className="text-jungle">TERRITORY</span>
      </h1>
    </section>
  );
}

function MapBlock() {
  const { current } = useLocationCtx();
  const otherId = current.id === "cross" ? "fitbox" : "cross";
  const other = LOCATIONS[otherId];
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
      {[current, other].map((loc) => (
        <div key={loc.id} className="border border-border bg-card overflow-hidden">
          <iframe
            title={loc.name}
            src={`https://www.google.com/maps?q=${loc.mapsQuery}&output=embed`}
            className="w-full h-72 grayscale contrast-125"
            loading="lazy"
          />
          <div className="p-6">
            <h3 className="font-display text-2xl tracking-wider">{loc.name}</h3>
            <p className="text-sm text-muted-foreground mt-2">{loc.address}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
