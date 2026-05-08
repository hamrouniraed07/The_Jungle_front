import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LOCATION_LIST } from "@/data/locations";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Jungle" },
      {
        name: "description",
        content:
          "Get in touch with The Jungle. Two locations in Sahloul4 and Hammam Sousse ready for you.",
      },
      { property: "og:title", content: "Contact — The Jungle" },
      { property: "og:description", content: "Reach the pack. We're listening." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 max-w-7xl mx-auto px-6">
        <span className="text-jungle font-display tracking-[0.3em] text-xs">CONTACT</span>
        <h1 className="display text-5xl md:text-7xl mt-3">
          REACH THE <span className="text-jungle">PACK</span>
        </h1>
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {LOCATION_LIST.map((loc) => (
            <div key={loc.id} className="border border-border bg-card p-8">
              <h3 className="font-display text-2xl tracking-wider">{loc.name}</h3>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-jungle" />
                  {loc.address}
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-jungle" />
                  +33 1 23 45 67 89
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-jungle" />
                  hello@thejungle.fit
                </div>
              </div>
              <div className="mt-6">
                <h4 className="font-display tracking-widest text-xs text-jungle">HOURS</h4>
                <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {loc.hours.map((h) => (
                    <li key={h.day}>
                      {h.day} · {h.time}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
