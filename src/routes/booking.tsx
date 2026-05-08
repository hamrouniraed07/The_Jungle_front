import { createFileRoute } from "@tanstack/react-router";
import { LocationProvider } from "@/context/LocationContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingForm } from "@/components/BookingForm";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/booking")({
  head: () => ({
    meta: [
      { title: "Book a Private Séance — The Jungle" },
      {
        name: "description",
        content:
          "Reserve your private training session at The Jungle Cross-Training Gym or Fit Box.",
      },
      { property: "og:title", content: "Book a Private Séance — The Jungle" },
      {
        property: "og:description",
        content: "One-on-one coaching. Pick your arena. Lock your slot.",
      },
    ],
  }),
  component: BookingPage,
});

function BookingPage() {
  return (
    <LocationProvider>
      <Navbar />
      <main className="pt-24 pb-16 max-w-5xl mx-auto px-6">
        <span className="text-jungle font-display tracking-[0.3em] text-xs">PRIVATE SÉANCE</span>
        <h1 className="display text-5xl md:text-7xl mt-3">
          BOOK YOUR <span className="text-jungle">SESSION</span>
        </h1>
        <p className="text-muted-foreground mt-4 max-w-xl">
          Three steps. One coach. Pure focus on your goals.
        </p>
        <div className="mt-12">
          <BookingForm />
        </div>
      </main>
      <Footer />
      <Toaster />
    </LocationProvider>
  );
}
