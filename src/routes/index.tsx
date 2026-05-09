import { createFileRoute } from "@tanstack/react-router";
import { LocationProvider } from "@/context/LocationContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LocationSwitcher } from "@/components/LocationSwitcher";
import { FeatureSection } from "@/components/FeatureSection";
import { PricingSection } from "@/components/PricingSection";
import { CoachesSection } from "@/components/CoachesSection";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Jungle — CrossFit, Musculation & Athlete Performance" },
      {
        name: "description",
        content:
          "Two locations, one mindset. Specialized in CrossFit, musculation, and preparing athletes (footballers, basketballers, handballers) for competition in Sahloul 4 and Kantaoui. Join the pack today.",
      },
      { property: "og:title", content: "The Jungle — CrossFit, Musculation & Athlete Performance" },
      {
        property: "og:description",
        content: "Forge raw power. Prepare for competition. Join the pack at The Jungle.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <LocationProvider>
      <Navbar />
      <main>
        <Hero />
        <LocationSwitcher />
        <FeatureSection />
        <CoachesSection />
        <PricingSection />
      </main>
      <Footer />
      <Toaster />
    </LocationProvider>
  );
}
