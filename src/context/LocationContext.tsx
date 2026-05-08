import { createContext, useContext, useState, type ReactNode, useEffect } from "react";
import type { LocationId } from "@/types/jungle";
import { LOCATIONS } from "@/data/locations";

interface LocationCtx {
  currentId: LocationId;
  setCurrentId: (id: LocationId) => void;
  current: (typeof LOCATIONS)[LocationId];
}

const Ctx = createContext<LocationCtx | null>(null);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [currentId, setCurrentId] = useState<LocationId>("cross");

  useEffect(() => {
    // Remove both possible theme classes first
    document.documentElement.classList.remove("theme-cross", "theme-fitbox");
    // Add the class for the current location
    document.documentElement.classList.add(`theme-${currentId}`);
  }, [currentId]);

  return (
    <Ctx.Provider value={{ currentId, setCurrentId, current: LOCATIONS[currentId] }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLocationCtx() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useLocationCtx must be used within LocationProvider");
  return ctx;
}
