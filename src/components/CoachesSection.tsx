import { Instagram } from "lucide-react";
import coachCross1 from "@/assets/coach-cross-1.jpg";
import coachCross2 from "@/assets/coach-cross-2.jpg";
import coachFitbox1 from "@/assets/coach-fitbox-1.jpg";
import coachFitbox2 from "@/assets/coach-fitbox-2.jpg";
import type { LocationId } from "@/types/jungle";

interface Coach {
  name: string;
  role: string;
  bio: string;
  image: string;
  ig: string;
}

const COACHES: Record<LocationId, Coach[]> = {
  cross: [
    {
      name: "Anas 'Zbanta9louch' Douss",
      role: "Pro Basketball Player & Physiotherapist",
      bio: "Professional basketball player with years of competitive experience. Combines on-court performance with physiotherapy expertise, specializing in injury prevention, rehabilitation, and optimizing athletes’ physical condition and recovery.",
      image: coachCross1,
      ig: "@anasdouss",
    },

    {
      name: "Youssef Ayeche",
      role: "Certified CrossFit Coach & Nutritionist",
      bio: "Certified CrossFit coach and nutrition specialist. Builds strength, endurance, and performance through functional training and personalized nutrition plans, helping athletes reach peak condition and sustainable results.",
      image: coachCross2,
      ig: "@youssefayeche",
    },
  ],
  fitbox: [
    {
      name: "Malek 'Gordon' Douss",
      role: "Pro Basketball Player & Physiotherapist",
      bio: "Professional basketball player with elite court vision and athleticism. Combines high-level performance with physiotherapy expertise to optimize recovery, prevent injuries, and enhance overall physical conditioning.",
      image: coachFitbox1,
      ig: "@doussmalek",
    },
    {
      name: "Yessine Slama",
      role: "Professional Physiotherapist & Nutritionist",
      bio: "Certified physiotherapist and nutrition specialist. Focuses on injury prevention, rehabilitation, and personalized nutrition plans to optimize performance, recovery, and overall well-being.",
      image: coachFitbox2,
      ig: "@yessineslama",
    },
  ],
};

export function CoachesSection() {
  return (
    <section className="border-t border-border bg-card/30">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-jungle font-display tracking-[0.3em] text-xs">
            THE PACK LEADERS
          </span>
          <h2 className="display text-4xl md:text-6xl mt-3">
            MEET YOUR <span className="text-jungle">COACHES</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Two arenas. Two specialized teams. Every coach earns their place in the jungle.
          </p>
        </div>

        <CoachGroup title="THE JUNGLE CROSS-TRAINING GYM" coaches={COACHES.cross} />
        <div className="h-12" />
        <CoachGroup title="THE JUNGLE FIT BOX" coaches={COACHES.fitbox} />
      </div>
    </section>
  );
}

function CoachGroup({ title, coaches }: { title: string; coaches: Coach[] }) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-6 border-b border-border pb-3">
        <h3 className="font-display text-xl md:text-2xl tracking-wider">{title}</h3>
        <span className="text-jungle font-display tracking-widest text-xs">
          {coaches.length} COACHES
        </span>
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {coaches.map((c) => (
          <CoachCard key={c.name} coach={c} />
        ))}
      </div>
    </div>
  );
}

function CoachCard({ coach }: { coach: Coach }) {
  return (
    <div className="group relative border border-border bg-background overflow-hidden hover:border-jungle/60 transition">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={coach.image}
          alt={coach.name}
          loading="lazy"
          width={768}
          height={960}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="font-display text-jungle tracking-widest text-xs">{coach.role}</p>
          <h4 className="display text-2xl md:text-3xl mt-1">{coach.name}</h4>
        </div>
      </div>
      <div className="p-6 border-t border-border">
        <p className="text-sm text-muted-foreground">{coach.bio}</p>
        <div className="flex items-center gap-2 mt-4 text-jungle">
          <Instagram className="w-4 h-4" />
          <span className="text-xs font-display tracking-widest">{coach.ig}</span>
        </div>
      </div>
    </div>
  );
}
