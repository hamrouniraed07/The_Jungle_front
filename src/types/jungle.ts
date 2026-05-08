export type LocationId = "cross" | "fitbox";

export interface GymLocation {
  id: LocationId;
  name: string;
  tagline: string;
  description: string;
  address: string;
  hours: { day: string; time: string }[];
  facilities: string[];
  equipment: string[];
  rules: string[];
  mapsQuery: string;
  image: string;
}

export interface BookingSlot {
  date: string; // ISO yyyy-mm-dd
  time: string; // HH:mm
  available: boolean;
}

export interface User {
  fullName: string;
  phone: string;
  goal: string;
}

export interface BookingPayload {
  location: LocationId;
  slot: BookingSlot;
  user: User;
}
