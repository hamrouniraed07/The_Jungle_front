import { useLocationCtx } from "@/context/LocationContext";
import { Dumbbell, Wrench, ShieldAlert, Clock, MapPin } from "lucide-react";

export function FeatureSection() {
  const { current } = useLocationCtx();
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 sm:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div>
          <span className="text-jungle font-display tracking-[0.3em] text-[10px] sm:text-xs">
            CURRENTLY VIEWING
          </span>
          <h2 className="display text-3xl sm:text-4xl md:text-6xl mt-3">{current.name}</h2>
          <p className="text-base sm:text-lg text-muted-foreground mt-4">{current.description}</p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <InfoTile icon={<MapPin />} title="ADDRESS" value={current.address} />
            <InfoTile
              icon={<Clock />}
              title="HOURS"
              value={current.hours.map((h) => `${h.day} · ${h.time}`).join(" / ")}
            />
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden border border-border">
          <img
            src={current.image}
            alt={current.name}
            className="w-full h-full object-cover"
            loading="lazy"
            width={1024}
            height={1280}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 p-6">
            <p className="font-display text-jungle tracking-widest text-sm">{current.tagline}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12 sm:mt-16">
        <Block icon={<Dumbbell />} title="EQUIPMENT" items={current.equipment} />
        <Block icon={<Wrench />} title="FACILITIES" items={current.facilities} />
        <Block icon={<ShieldAlert />} title="THE JUNGLE CODE" items={current.rules} />
      </div>
    </section>
  );
}

function InfoTile({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="border border-border bg-card p-4">
      <div className="flex items-center gap-2 text-jungle">
        <span className="[&>svg]:w-4 [&>svg]:h-4">{icon}</span>
        <span className="font-display tracking-widest text-xs">{title}</span>
      </div>
      <p className="text-sm mt-2">{value}</p>
    </div>
  );
}

function Block({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) {
  return (
    <div className="border border-border bg-card p-6 hover:border-jungle/60 transition">
      <div className="flex items-center gap-2 text-jungle">
        <span className="[&>svg]:w-5 [&>svg]:h-5">{icon}</span>
        <h4 className="font-display tracking-widest">{title}</h4>
      </div>
      <ul className="mt-4 space-y-2">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground">
            <span className="text-jungle mt-1">▸</span> {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
