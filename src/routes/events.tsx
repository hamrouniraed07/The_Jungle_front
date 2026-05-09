import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LocationProvider } from "@/context/LocationContext";
import { useState } from "react";
import { cn } from "@/lib/utils";
import gymCross from "@/assets/gym-cross.jpg";
import gymFitbox from "@/assets/gym-fitbox.jpg";
import coachCross1 from "@/assets/coach-cross-1.jpg";
import coachCross2 from "@/assets/coach-cross-2.jpg";
import coachFitbox1 from "@/assets/coach-fitbox-1.jpg";
import coachFitbox2 from "@/assets/coach-fitbox-2.jpg";

import bDay from "@/assets/birthday.jpg";
import bDay1 from "@/assets/birthday1.jpg";
import bDay2 from "@/assets/birthday2.jpg";
import bDay3 from "@/assets/birthday3.jpg";
import bDay4 from "@/assets/birthday4.jpg";
import bDay5 from "@/assets/birthday5.jpg";
import bDay6 from "@/assets/birthday6.jpg";
import bDay7 from "@/assets/birthday7.jpg";
import bDay8 from "@/assets/birthday8.jpg";
import bDay9 from "@/assets/birthday9.jpg";
import bDay11 from "@/assets/birthday11.jpg";
import bDay12 from "@/assets/birthday12.jpg";
import bDay13 from "@/assets/birthday13.jpg";
import bDay14 from "@/assets/birthday14.jpg";
import bDay15 from "@/assets/birthday15.jpg";
import bDay16 from "@/assets/birthday16.jpg";
import bDay17 from "@/assets/birthday17.jpg";
import bDay18 from "@/assets/birthday18.jpg";
import bDay19 from "@/assets/birthday19.jpg";
import bDay20 from "@/assets/birthday20.jpg";
import bDay21 from "@/assets/birthday21.jpg";
import bDay22 from "@/assets/birthday22.jpg";
import bDay23 from "@/assets/birthday23.jpg";
import bDay24 from "@/assets/birthday24.jpg";
import bDay25 from "@/assets/birthday25.jpg";
import bDay26 from "@/assets/birthday26.jpg";
import bDay27 from "@/assets/birthday27.jpg";
import bDay28 from "@/assets/birthday28.jpg";
import bDay29 from "@/assets/birthday29.jpg";
import bDay30 from "@/assets/birthday30.jpg";
import bDay31 from "@/assets/birthday31.jpg";
import bDay32 from "@/assets/birthday32.jpg";
import bDay33 from "@/assets/birthday33.jpg";
import bDay34 from "@/assets/birthday34.jpg";
import bDay120 from "@/assets/birthday120.jpg";

import camp from "@/assets/camping.jpg";
import camp0 from "@/assets/camping0.jpg";
import camp1 from "@/assets/camping1.jpg";
import camp2 from "@/assets/camping2.jpg";
import camp3 from "@/assets/camping3.jpg";
import camp4 from "@/assets/camping4.jpg";
import camp5 from "@/assets/camping5.jpg";
import camp6 from "@/assets/camping6.jpg";
import camp7 from "@/assets/camping7.jpg";
import camp8 from "@/assets/camping8.jpg";

import deca from "@/assets/decathlon.jpg";
import deca1 from "@/assets/decathlon1.jpg";
import deca2 from "@/assets/decathlon2.jpg";
import deca3 from "@/assets/decathlon3.jpg";
import deca4 from "@/assets/decathlon4.jpg";
import deca5 from "@/assets/decathlon5.jpg";
import deca6 from "@/assets/decathlon6.jpg";
import deca7 from "@/assets/decathlon7.jpg";
import deca8 from "@/assets/decathlon8.jpg";
import deca9 from "@/assets/decathlon9.jpg";
import deca10 from "@/assets/decathlon10.jpg";
import deca11 from "@/assets/decathlon11.jpg";
import deca12 from "@/assets/decathlon12.jpg";
import deca13 from "@/assets/decathlon13.jpg";
import deca14 from "@/assets/decathlon14.jpg";
import deca15 from "@/assets/decathlon15.jpg";
import deca16 from "@/assets/decathlon16.jpg";
import deca19 from "@/assets/decathlon19.jpg";
import deca20 from "@/assets/decathlon20.jpg";

export const Route = createFileRoute("/events")({
  component: EventsPage,
});

const EVENTS_DATA = [
  {
    id: "camping",
    title: "THE JUNGLE CAMPING",
    description:
      "Training in the wild. A raw experience where the pack bonds through fire, movement, and the great outdoors.",
    images: [camp, camp0, camp1, camp2, camp3, camp4, camp5, camp6, camp7, camp8],
  },
  {
    id: "decathlon",
    title: "THE JUNGLE DECATHLON",
    description:
      "10 events of pure grit. Testing the versatility and endurance of our beasts in the ultimate functional challenge.",
    images: [
      deca13,
      deca1,
      deca2,
      deca3,
      deca4,
      deca5,
      deca6,
      deca7,
      deca8,
      deca9,
      deca10,
      deca11,
      deca12,
      deca,
      deca14,
      deca15,
      deca16,
      deca19,
      deca20,
    ],
  },
  {
    id: "birthday",
    title: "THE JUNGLE BIRTHDAY",
    description:
      "Celebrating another year of strength and community. Relive the intensity and the celebration of the pack.",
    images: [
      bDay,
      bDay1,
      bDay2,
      bDay3,
      bDay4,
      bDay5,
      bDay6,
      bDay7,
      bDay8,
      bDay9,
      bDay11,
      bDay12,
      bDay13,
      bDay14,
      bDay15,
      bDay16,
      bDay17,
      bDay18,
      bDay19,
      bDay20,
      bDay21,
      bDay22,
      bDay23,
      bDay24,
      bDay25,
      bDay26,
      bDay27,
      bDay28,
      bDay29,
      bDay30,
      bDay31,
      bDay32,
      bDay33,
      bDay34,
      bDay120,
    ],
  },
];

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  return (
    <LocationProvider>
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-jungle font-display tracking-[0.3em] text-xs uppercase">
              Community
            </span>
            <h1 className="display text-5xl md:text-8xl mt-4">
              JUNGLE <span className="text-jungle">EVENTS</span>
            </h1>
            <p className="text-muted-foreground mt-6 text-base md:text-lg max-w-2xl">
              Capturing the moments that define the pack. From milestone celebrations to grueling
              competitions.
            </p>
          </div>

          <div className="grid gap-8">
            {EVENTS_DATA.map((event) => (
              <div key={event.id} className="group border border-border bg-card overflow-hidden">
                <div className="grid md:grid-cols-2 lg:grid-cols-3">
                  <div className="relative h-[250px] sm:h-[300px] md:h-[350px] overflow-hidden lg:col-span-1">
                    <img
                      src={event.images[0]}
                      alt={event.title}
                      className="w-full h-full object-contain bg-black/20 transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-6 sm:p-8 md:p-8 flex flex-col justify-center bg-card lg:col-span-2">
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl tracking-tight mb-4">
                      {event.title}
                    </h2>
                    <p className="text-muted-foreground text-sm sm:text-base mb-6 leading-relaxed">
                      {event.description}
                    </p>
                    <button
                      onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                      className="inline-flex items-center justify-center bg-jungle text-primary-foreground font-display tracking-widest px-6 py-3 text-[10px] sm:text-xs hover:bg-jungle-glow transition w-full sm:w-fit"
                    >
                      {selectedEvent === event.id ? "CLOSE ALBUM" : "VIEW FULL ALBUM"}
                    </button>
                  </div>
                </div>

                <div
                  className={cn(
                    "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-6 bg-border/10 transition-all duration-700",
                    selectedEvent === event.id
                      ? "max-h-[5000px] opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden",
                  )}
                >
                  {event.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="aspect-square overflow-hidden border border-border/50"
                    >
                      <img
                        src={img}
                        alt={`${event.title} ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </LocationProvider>
  );
}
