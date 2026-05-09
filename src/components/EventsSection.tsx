import { useState } from "react";
import { cn } from "@/lib/utils";
import gymCross from "@/assets/gym-cross.jpg";
import gymFitbox from "@/assets/gym-fitbox.jpg";
import coachCross1 from "@/assets/coach-cross-1.jpg";
import coachCross2 from "@/assets/coach-cross-2.jpg";
import coachFitbox1 from "@/assets/coach-fitbox-1.jpg";
import coachFitbox2 from "@/assets/coach-fitbox-2.jpg";

interface EventAlbum {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
}

const EVENT_ALBUMS: EventAlbum[] = [
  {
    id: "grand-opening",
    title: "Jungle Sahloul Grand Opening",
    date: "October 2025",
    description: "Celebrating the launch of our cross-training temple in Sousse. High energy, heavy lifts, and the start of a legacy.",
    images: [gymCross, coachCross1, coachCross2],
  },
  {
    id: "fitbox-challenge",
    title: "The Fit Box Combat Night",
    date: "December 2025",
    description: "A night of high-intensity boxing and MMA conditioning. The pack tested their limits in the ring.",
    images: [gymFitbox, coachFitbox1, coachFitbox2],
  },
];

export function EventsSection() {
  const [activeAlbum, setActiveAlbum] = useState<string | null>(null);

  return (
    <section id="events" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter mb-4">
              THE JUNGLE <span className="text-jungle">EVENTS</span>
            </h2>
            <p className="text-muted-foreground max-w-xl text-lg">
              Beyond the training, we build a community. Relive the moments that define the pack.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {EVENT_ALBUMS.map((album) => (
            <div 
              key={album.id}
              className="group relative border border-border bg-card overflow-hidden transition-all duration-500 hover:border-jungle/50"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img 
                  src={album.images[0]} 
                  alt={album.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-8">
                  <span className="text-jungle font-display tracking-widest text-sm mb-2 block uppercase">
                    {album.date}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl tracking-wider mb-4">
                    {album.title}
                  </h3>
                  <p className="text-muted-foreground text-sm max-w-md line-clamp-2 mb-6">
                    {album.description}
                  </p>
                  <button 
                    onClick={() => setActiveAlbum(activeAlbum === album.id ? null : album.id)}
                    className="inline-flex items-center gap-2 bg-jungle text-primary-foreground font-display tracking-widest px-6 py-3 text-sm hover:bg-jungle-glow transition"
                  >
                    {activeAlbum === album.id ? "CLOSE ALBUM" : "VIEW ALBUM"}
                  </button>
                </div>
              </div>

              {/* Expanded Album Images */}
              <div 
                className={cn(
                  "grid grid-cols-3 gap-1 p-1 bg-border/20 transition-all duration-500",
                  activeAlbum === album.id ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                )}
              >
                {album.images.map((img, idx) => (
                  <div key={idx} className="aspect-square overflow-hidden">
                    <img 
                      src={img} 
                      alt={`${album.title} ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-jungle/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
    </section>
  );
}
