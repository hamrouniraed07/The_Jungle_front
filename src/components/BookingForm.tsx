import { useState, useMemo } from "react";
import type { BookingPayload, BookingSlot, LocationId, User } from "@/types/jungle";
import { LOCATION_LIST, LOCATIONS } from "@/data/locations";
import { useLocationCtx } from "@/context/LocationContext";
import { cn } from "@/lib/utils";
import api from "@/lib/api";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

const TIMES = ["07:00", "09:00", "11:00", "13:00", "15:00", "17:00", "19:00", "20:30"];

function buildDays(): string[] {
  const out: string[] = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    out.push(d.toISOString().slice(0, 10));
  }
  return out;
}

function fmtDay(iso: string) {
  const d = new Date(iso);
  return {
    dow: d.toLocaleDateString("en", { weekday: "short" }).toUpperCase(),
    num: d.getDate(),
    mon: d.toLocaleDateString("en", { month: "short" }).toUpperCase(),
  };
}

export function BookingForm() {
  const { currentId, setCurrentId } = useLocationCtx();
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [location, setLocation] = useState<LocationId>(currentId);
  const [slot, setSlot] = useState<BookingSlot | null>(null);
  const [user, setUser] = useState({
    fullName: "",
    phone: "",
    goal: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const days = useMemo(buildDays, []);

  const next = () => setStep((s) => (s < 4 ? ((s + 1) as 1 | 2 | 3 | 4) : s));
  const prev = () => setStep((s) => (s > 1 ? ((s - 1) as 1 | 2 | 3 | 4) : s));

  const handleInputChange = (field: string, value: string) => {
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async () => {
    if (!slot) return;
    setLoading(true);
    try {
      if (!user.goal || user.goal.length < 10) {
        toast.error("Fitness goal must be at least 10 characters.");
        return;
      }

      const trainers = await api.getTrainers(location);
      if (!trainers || trainers.length === 0) {
        toast.error("No trainers are currently available at this location.");
        return;
      }
      const trainerId = trainers[0].id;

      const dt = new Date(`${slot.date}T${slot.time}:00`);
      const bookingPayload = {
        location_id: location,
        trainer_id: trainerId || "000000000000000000000000",
        client_name: user.fullName,
        client_email: user.email || `${user.fullName.replace(/\s+/g, ".").toLowerCase()}@example.com`,
        client_phone: user.phone,
        datetime: dt.toISOString(),
        goal: user.goal,
        notes: null,
      };

      await api.createBooking(bookingPayload);
      toast.success("Séance confirmed. Welcome to the Jungle.");
      setStep(4);
    } catch (err: any) {
      console.error(err);
      toast.error(`Booking failed: ${err.message || String(err)}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-border bg-card">
      <Stepper step={step} />
      <div className="p-6 md:p-10">
        {step === 1 && (
          <div>
            <StepHeader num="01" title="CHOOSE YOUR ARENA" />
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {LOCATION_LIST.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => {
                    setLocation(loc.id);
                    setCurrentId(loc.id);
                  }}
                  className={cn(
                    "text-left p-6 border transition-all",
                    location === loc.id
                      ? "border-jungle bg-jungle/5 shadow-jungle"
                      : "border-border hover:border-jungle/5"
                  )}
                >
                  <h4 className="font-display text-2xl tracking-wider">{loc.name}</h4>
                  <p className="text-sm text-muted-foreground mt-2">{loc.tagline}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <StepHeader num="02" title="PICK YOUR SLOT" />
            <div className="grid grid-cols-7 gap-2 mt-6">
              {days.map((iso) => {
                const f = fmtDay(iso);
                const selected = slot?.date === iso;
                return (
                  <button
                    key={iso}
                    type="button"
                    onClick={() => setSlot({ date: iso, time: slot?.time ?? "", available: true })}
                    className={cn(
                      "p-3 border text-center transition",
                      selected ? "border-jungle bg-jungle/10" : "border-border hover:border-jungle/50"
                    )}
                  >
                    <div className="text-xs text-muted-foreground font-display tracking-widest">{f.dow}</div>
                    <div className="font-display text-2xl mt-1">{f.num}</div>
                    <div className="text-[10px] text-muted-foreground tracking-widest">{f.mon}</div>
                  </button>
                );
              })}
            </div>
            {slot?.date && (
              <div className="mt-8">
                <p className="font-display tracking-widest text-jungle text-sm">SELECT TIME</p>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2 mt-3">
                  {TIMES.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setSlot({ ...slot, time: t })}
                      className={cn(
                        "py-3 border font-display tracking-widest text-sm transition",
                        slot.time === t ? "border-jungle bg-jungle text-primary-foreground" : "border-border hover:border-jungle/50"
                      )}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div>
            <StepHeader num="03" title="YOUR DETAILS" />
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <div>
                <label className="block font-display tracking-widest text-xs text-jungle mb-2">FULL NAME</label>
                <input
                  type="text"
                  value={user.fullName}
                  onChange={(e) => handleInputChange("fullName", e.target.value)}
                  className="w-full bg-input border border-border p-3 text-foreground focus:border-jungle outline-none"
                />
              </div>
              <div>
                <label className="block font-display tracking-widest text-xs text-jungle mb-2">PHONE</label>
                <input
                  type="text"
                  value={user.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full bg-input border border-border p-3 text-foreground focus:border-jungle outline-none"
                />
              </div>
              <div>
                <label className="block font-display tracking-widest text-xs text-jungle mb-2">EMAIL</label>
                <input
                  type="email"
                  value={user.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-input border border-border p-3 text-foreground focus:border-jungle outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-display tracking-widest text-xs text-jungle mb-2">FITNESS GOAL</label>
                <textarea
                  value={user.goal}
                  onChange={(e) => handleInputChange("goal", e.target.value)}
                  rows={4}
                  className="w-full bg-input border border-border p-3 text-foreground focus:border-jungle outline-none"
                />
                {user.goal.length > 0 && user.goal.length < 10 && (
                  <p className="text-xs text-amber-400 mt-2">Goal must be at least 10 characters.</p>
                )}
              </div>
            </div>
            <div className="mt-8 p-4 border border-jungle/40 bg-jungle/5">
              <p className="font-display tracking-widest text-jungle text-sm">SUMMARY</p>
              <p className="text-sm mt-2">{LOCATIONS[location]?.name}</p>
              <p className="text-sm text-muted-foreground">{slot?.date} · {slot?.time}</p>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-8">
            <div className="inline-flex w-16 h-16 items-center justify-center rounded-full bg-jungle text-primary-foreground">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-display text-3xl mt-6 tracking-wider">SÉANCE LOCKED IN</h3>
            <p className="text-muted-foreground mt-2">We'll contact you at {user.phone} to confirm.</p>
          </div>
        )}

        {step < 4 && (
          <div className="flex justify-between mt-10">
            <button
              type="button"
              onClick={prev}
              disabled={step === 1 || loading}
              className="flex items-center gap-2 font-display tracking-widest text-sm px-5 py-3 border border-border disabled:opacity-30 hover:border-jungle/60"
            >
              <ChevronLeft className="w-4 h-4" /> BACK
            </button>
            {step < 3 ? (
              <button
                type="button"
                onClick={next}
                disabled={step === 2 && (!slot?.date || !slot?.time)}
                className="flex items-center gap-2 bg-jungle text-primary-foreground font-display tracking-widest text-sm px-6 py-3 hover:bg-jungle-glow disabled:opacity-30 transition"
              >
                NEXT <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={submit}
                disabled={loading || !user.fullName || !user.phone || user.goal.length < 10}
                className="bg-jungle text-primary-foreground font-display tracking-widest text-sm px-6 py-3 hover:bg-jungle-glow disabled:opacity-30 transition shadow-brutal"
              >
                {loading ? "PROCESSING..." : "CONFIRM SÉANCE"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StepHeader({ num, title }: { num: string; title: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-display text-4xl text-jungle">{num}</span>
      <h3 className="font-display text-2xl md:text-3xl tracking-wider">{title}</h3>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="block font-display tracking-widest text-xs text-jungle mb-2">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={100}
        className="w-full bg-input border border-border p-3 text-foreground focus:border-jungle outline-none"
      />
    </div>
  );
}

function Stepper({ step }: { step: number }) {
  const labels = ["LOCATION", "DATE & TIME", "DETAILS", "DONE"];
  return (
    <div className="grid grid-cols-4 border-b border-border">
      {labels.map((l, i) => {
        const n = i + 1;
        const active = step === n;
        const done = step > n;
        return (
          <div
            key={l}
            className={cn(
              "p-4 text-center border-r border-border last:border-r-0",
              active && "bg-jungle/10",
            )}
          >
            <div
              className={cn(
                "font-display text-xs tracking-widest",
                done ? "text-jungle" : active ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {String(n).padStart(2, "0")} · {l}
            </div>
          </div>
        );
      })}
    </div>
  );
}
