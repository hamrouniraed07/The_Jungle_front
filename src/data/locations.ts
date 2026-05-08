import gymCross from "@/assets/gym-cross.jpg";
import gymFitbox from "@/assets/gym-fitbox.jpg";
import type { GymLocation, LocationId } from "@/types/jungle";

export const LOCATIONS: Record<LocationId, GymLocation> = {
  cross: {
    id: "cross",
    name: "The Jungle Cross-Training Gym",
    tagline: "Forge raw power. Train like a beast.",
    description:
      "A 600m² temple of iron built for athletes who refuse to settle. Functional rigs, Olympic platforms, sleds, and unlimited barbell racks — train heavy, train smart.",
    address: "RJM6+M6F, Sahloul 4, Sousse",
    hours: [
      { day: "Mon — Fri", time: "06:00 — 23:00" },
      { day: "Saturday", time: "08:00 — 20:00" },
      { day: "Sunday", time: "09:00 — 18:00" },
    ],
    facilities: [
      "Olympic Lifting Platforms",
      "Functional Rig 24m",
      "Sled Track",
      "Recovery Lounge",
      "Showers & Sauna",
    ],
    equipment: [
      "Rogue Barbells",
      "Bumper Plates 5–25kg",
      "Concept2 Rowers & Bikes",
      "Assault Runners",
      "Kettlebells 4–48kg",
      "Gymnastics Rings",
    ],
    rules: [
      "Chalk allowed — clean your station.",
      "Drop bumpers only, never empty bars.",
      "Re-rack everything before leaving.",
      "Respect the pack. Respect the iron.",
    ],
    mapsQuery: "35.8587,10.5841",
    image: gymCross,
  },
  fitbox: {
    id: "fitbox",
    name: "The Jungle Fit Box",
    tagline: "Strike harder. Move faster. Hunt smarter.",
    description:
      "Our combat-ready box dedicated to boxing, MMA conditioning and HIIT. Ring, heavy bags, hand-wrap stations and small-group coaching. Step in. Step up.",
    address: "Hammem sousse - kantaoui, Sousse, Tunisia, 4011",
    hours: [
      { day: "Mon — Fri", time: "07:00 — 22:00" },
      { day: "Saturday", time: "09:00 — 19:00" },
      { day: "Sunday", time: "Closed" },
    ],
    facilities: [
      "Full-size Boxing Ring",
      "12 Heavy Bags",
      "Speed Bag Station",
      "Wrap & Glove Wall",
      "Mobility Zone",
    ],
    equipment: [
      "Cleto Reyes Bags",
      "Double-end Bags",
      "Battle Ropes",
      "Plyo Boxes",
      "Slam Balls",
      "Jump Ropes",
    ],
    rules: [
      "Hand wraps are mandatory in the ring.",
      "No outdoor shoes on the mat.",
      "Sparring only with coach approval.",
      "Leave ego at the door — bring discipline.",
    ],
    mapsQuery: "35.8856,10.5985",
    image: gymFitbox,
  },
};

export const LOCATION_LIST: GymLocation[] = [LOCATIONS.cross, LOCATIONS.fitbox];
