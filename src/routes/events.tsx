import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LocationProvider } from "@/context/LocationContext";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
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

import numi from "@/assets/Numidos.jpg";
import numi1 from "@/assets/Numidos1.jpg";
import numi2 from "@/assets/Numidos2.jpg";
import numi3 from "@/assets/Numidos3.jpg";
import numi4 from "@/assets/Numidos4.jpg";
import numi5 from "@/assets/Numidos5.jpg";
import numi6 from "@/assets/Numidos6.jpg";
import numi7 from "@/assets/Numidos7.jpg";
import numi9 from "@/assets/Numidos9.jpg";
import numi10 from "@/assets/Numidos10.jpg";
import numi11 from "@/assets/Numidos11.jpg";
import numi12 from "@/assets/Numidos12.jpg";
import numi13 from "@/assets/Numidos13.jpg";
import numi14 from "@/assets/Numidos14.jpg";
import numi16 from "@/assets/Numidos16.jpg";
import numi17 from "@/assets/Numidos17.jpg";
import numi18 from "@/assets/Numidos18.jpg";
import numi20 from "@/assets/Numidos20.jpg";
import numi21 from "@/assets/Numidos21.jpg";
import numi22 from "@/assets/Numidos22.jpg";

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
      bDay26,
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
      bDay,
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

  {
    id: "numidos",
    title: "NUMIDOS CHALLENGE",
    description:
      "Pushing limits and conquering obstacles. The ultimate test of grit and determination in the wild.",
    images: [
      numi,
      numi1,
      numi2,
      numi3,
      numi4,
      numi5,
      numi6,
      numi7,
      numi9,
      numi10,
      numi11,
      numi12,
      numi13,
      numi14,
      numi16,
      numi17,
      numi18,
      numi20,
      numi21,
      numi22,
    ],
  },
];

function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const activeEvent = EVENTS_DATA.find((e) => e.id === selectedEvent);

  const nextPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeEvent && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % activeEvent.images.length);
    }
  };

  const prevPhoto = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (activeEvent && lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + activeEvent.images.length) % activeEvent.images.length);
    }
  };

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS_DATA.map((event) => (
              <div
                key={event.id}
                className="flex flex-col border border-border bg-card overflow-hidden h-fit group/card"
              >
                <div className="relative h-[450px] overflow-hidden">
                  <img
                    src={event.images[0]}
                    alt={event.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover/card:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-80" />

                  <div className="absolute inset-0 flex flex-col justify-end p-8">
                    <h2 className="font-display text-3xl tracking-tight mb-2 uppercase leading-none">
                      {event.title}
                    </h2>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-6">
                      {event.description}
                    </p>
                    <button
                      onClick={() => setSelectedEvent(selectedEvent === event.id ? null : event.id)}
                      className={cn(
                        "inline-flex items-center justify-center font-display tracking-widest px-6 py-4 text-xs transition-all duration-300 w-full border",
                        selectedEvent === event.id
                          ? "bg-transparent border-jungle text-jungle"
                          : "bg-jungle border-jungle text-primary-foreground hover:bg-jungle-glow",
                      )}
                    >
                      {selectedEvent === event.id ? "CLOSE ALBUM" : "VIEW FULL ALBUM"}
                    </button>
                  </div>
                </div>

                <div
                  className={cn(
                    "bg-black/40 transition-all duration-500 overflow-hidden",
                    selectedEvent === event.id
                      ? "max-h-[5000px] opacity-100 p-2"
                      : "max-h-0 opacity-0",
                  )}
                >
                  <div className="grid grid-cols-3 gap-1">
                    {event.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="group relative aspect-square overflow-hidden cursor-pointer"
                        onClick={() => {
                          setSelectedEvent(event.id);
                          setLightboxIndex(idx);
                        }}
                      >
                        <img
                          src={img}
                          alt={`${event.title} ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-jungle/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Maximize2 className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && activeEvent && (
        <div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-300"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-jungle transition-colors z-[110]"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>

          <button
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-jungle transition-all z-[110] p-4 bg-white/5 rounded-full backdrop-blur-md"
            onClick={prevPhoto}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-jungle transition-all z-[110] p-4 bg-white/5 rounded-full backdrop-blur-md"
            onClick={nextPhoto}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative w-full h-full flex flex-col items-center justify-center gap-6">
            <div
              className="relative max-w-5xl w-full h-[70vh] md:h-[80vh] group/image"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeEvent.images[lightboxIndex]}
                alt="Enlarged view"
                className="w-full h-full object-contain drop-shadow-2xl"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 text-xs font-display tracking-[0.2em] text-white/70">
                {activeEvent.title} · {lightboxIndex + 1} / {activeEvent.images.length}
              </div>
            </div>

            {/* Thumbnails Strip */}
            <div
              className="flex gap-2 overflow-x-auto max-w-full px-4 py-2 no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {activeEvent.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightboxIndex(idx)}
                  className={cn(
                    "relative w-16 h-16 flex-shrink-0 border-2 transition-all duration-300 overflow-hidden",
                    lightboxIndex === idx
                      ? "border-jungle scale-110 z-10"
                      : "border-transparent opacity-40 hover:opacity-100",
                  )}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </LocationProvider>
  );
}
