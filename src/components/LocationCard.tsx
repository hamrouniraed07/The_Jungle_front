import type { GymLocation } from "@/types/jungle";
import { useLocationCtx } from "@/context/LocationContext";
import { cn } from "@/lib/utils";

interface Props {
  location: GymLocation;
  onSelect?: () => void;
}

export function LocationCard({ location, onSelect }: Props) {
  const { currentId, setCurrentId } = useLocationCtx();
  const active = currentId === location.id;
  return (
    <button
      onClick={() => {
        setCurrentId(location.id);
        onSelect?.();
      }}
      className={cn(
        "group relative overflow-hidden border text-left transition-all duration-500",
        active
          ? "border-jungle shadow-jungle scale-[1.02]"
          : "border-border hover:border-jungle/60",
      )}
    >
      <div className="relative h-72 overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {active && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-jungle text-primary-foreground font-display tracking-widest text-xs">
            SELECTED
          </span>
        )}
      </div>
      <div className="p-6 bg-card">
        <h3 className="font-display text-2xl md:text-3xl tracking-wider">{location.name}</h3>
        <p className="text-jungle font-display tracking-widest text-xs mt-2">{location.tagline}</p>
        <p className="text-sm text-muted-foreground mt-4 line-clamp-3">{location.description}</p>
      </div>
    </button>
  );
}
