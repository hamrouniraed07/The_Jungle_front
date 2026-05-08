const API_BASE = (import.meta.env.VITE_API_BASE as string) || "http://localhost:8000";

export function toBackendLocationId(locationId: string) {
  if (locationId === "cross") return "jungle_cross_training";
  if (locationId === "fitbox") return "jungle_fit_box";
  return locationId;
}

export async function getTrainers(locationId: string) {
  const url = `${API_BASE}/api/v1/trainers/?location_id=${encodeURIComponent(toBackendLocationId(locationId))}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch trainers: ${res.status}`);
  return res.json();
}

export async function createBooking(payload: unknown) {
  const body =
    payload && typeof payload === "object" && "location_id" in payload
      ? {
          ...(payload as Record<string, unknown>),
          location_id: toBackendLocationId(
            String((payload as Record<string, unknown>).location_id),
          ),
        }
      : payload;
  const url = `${API_BASE}/api/v1/bookings/`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Booking failed (${res.status}): ${text}`);
  }
  return res.json();
}

export default { getTrainers, createBooking };
