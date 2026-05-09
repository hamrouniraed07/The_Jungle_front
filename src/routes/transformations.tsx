import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LocationProvider } from "@/context/LocationContext";
import trans0 from "@/assets/transformation.jpg";
import trans1 from "@/assets/transformation1.jpg";
import trans2 from "@/assets/transformation2.jpg";
import trans11 from "@/assets/transformation11.jpg";
import trans12 from "@/assets/transformation12.jpg";
import trans13 from "@/assets/transformation13.jpg";
import trans14 from "@/assets/transformation14.jpg";
import trans15 from "@/assets/transformation15.jpg";
import trans18 from "@/assets/transformation18.jpg";
import trans19 from "@/assets/transformation19.jpg";
import trans22 from "@/assets/transformation22.jpg";
import trans23 from "@/assets/transformation23.jpg";
import trans24 from "@/assets/transformation24.jpg";
import trans26 from "@/assets/transformation26.jpg";
import trans27 from "@/assets/transformation27.jpg";
import trans28 from "@/assets/transformation28.jpg";
import trans29 from "@/assets/transformation29.jpg";
import trans3 from "@/assets/transformation3.jpg";
import trans31 from "@/assets/transformation31.jpg";
import trans34 from "@/assets/transformation34.jpg";
import trans35 from "@/assets/transformation35.jpg";
import trans36 from "@/assets/transformation36.jpg";
import trans37 from "@/assets/transformation37.jpg";
import trans39 from "@/assets/transformation39.jpg";
import trans4 from "@/assets/transformation4.jpg";
import trans40 from "@/assets/transformation40.jpg";
import trans41 from "@/assets/transformation41.jpg";

export const Route = createFileRoute("/transformations")({
  component: TransformationsPage,
});

const TRANSFORMATIONS = [
  { name: "Beast #1",  description: "Incredible commitment to the Jungle mindset. Complete body recomposition.", image: trans0 },
  { name: "Beast #2",  description: "Explosive power and lean muscle gain. Forged in the Jungle.", image: trans1 },
  { name: "Beast #3",  description: "Pure discipline. A total lifestyle transformation.", image: trans2 },
  { name: "Beast #4",  description: "Defined, lean, and stronger than ever.", image: trans11 },
  { name: "Beast #5",  description: "Crushing goals and breaking plateaus.", image: trans12 },
  { name: "Beast #6",  description: "Strength meets stamina. The Jungle way.", image: trans13 },
  { name: "Beast #7",  description: "Consistency is key. Results speak for themselves.", image: trans14 },
  { name: "Beast #8",  description: "From zero to hero. The ultimate transformation.", image: trans15 },
  { name: "Beast #9",  description: "Building the foundation for a lifetime of fitness.", image: trans18 },
  { name: "Beast #10",  description: "Stronger every day. No excuses.", image: trans19 },
  { name: "Beast #11",  description: "Pushing limits and seeing the rewards.", image: trans22 },
  { name: "Beast #12",  description: "A new person, a new mindset.", image: trans23 },
  { name: "Beast #13",  description: "The transformation is real. The work is worth it.", image: trans24 },
  { name: "Beast #14",  description: "Transforming more than just the body.", image: trans26 },
  { name: "Beast #15",  description: "Dedicated to the process. Results achieved.", image: trans27 },
  { name: "Beast #16",  description: "Jungle-built strength and endurance.", image: trans28 },
  { name: "Beast #17",  description: "Consistency over time. The Jungle method.", image: trans29 },
  { name: "Beast #18",  description: "New level of fitness reached.", image: trans3 },
  { name: "Beast #19",  description: "Fast-tracked transformation through focus.", image: trans31 },
  { name: "Beast #20",  description: "The grind never stops. The results show.", image: trans34 },
  { name: "Beast #21",  description: "Power, speed, and discipline.", image: trans35 },
  { name: "Beast #22",  description: "Complete lifestyle shift in the Jungle.", image: trans36 },
  { name: "Beast #23",  description: "Building muscle, burning fat, breaking records.", image: trans37 },
  { name: "Beast #24",  description: "Focus on the goal. Achieve the result.", image: trans39 },
  { name: "Beast #25",  description: "The Jungle mindset in action.", image: trans4 },
  { name: "Beast #26", description: "No shortcuts. Just hard work and results.", image: trans40 },
  { name: "Beast #27",  description: "Stronger every single session.", image: trans41 },
];

function TransformationsPage() {
  return (
    <LocationProvider>
      <Navbar />
      <main className="pt-32 pb-24 bg-background min-h-screen">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="text-jungle font-display tracking-[0.3em] text-xs uppercase">Results</span>
            <h1 className="display text-6xl md:text-8xl mt-4">BEAST <span className="text-jungle">TRANSFORMATIONS</span></h1>
            <p className="text-muted-foreground mt-6 text-lg max-w-2xl">
              Proof that the work works. Real members, real results, forged in the Jungle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TRANSFORMATIONS.map((beast, idx) => (
              <div key={idx} className="group border border-border bg-card overflow-hidden">
                <div className="relative h-[400px] overflow-hidden">
                  <img 
                    src={beast.image} 
                    alt={beast.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <div className="mb-4">
                    
                      <h2 className="font-display text-4xl tracking-tight">{beast.name}</h2>
                    </div>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {beast.description}
                    </p>
                  </div>
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

