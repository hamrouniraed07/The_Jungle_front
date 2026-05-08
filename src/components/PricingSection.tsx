import { Check } from "lucide-react";

interface Plan {
  name: string;
  price: number;
  period: string;
  features: string[];
  highlighted?: boolean;
}

const CROSS_PLANS: Plan[] = [
  {
    name: "Musculation",
    price: 70,
    period: "TND / month",
    features: ["Full weights area access", "Open gym hours", "Locker access", "Showers & sauna"],
  },
  {
    name: "CrossFit",
    price: 80,
    period: "TND / month",
    features: ["All CrossFit classes", "Olympic platforms", "Coached sessions", "Recovery lounge"],
    highlighted: true,
  },
  {
    name: "All-Access",
    price: 90,
    period: "TND / month",
    features: [
      "Musculation + CrossFit",
      "Unlimited classes",
      "Priority booking",
      "Full facility access",
    ],
  },
];

const FITBOX_PLANS: Plan[] = [
  {
    name: "Fit Box Unlimited",
    price: 100,
    period: "TND / month",
    features: [
      "Unlimited boxing classes",
      "MMA conditioning & HIIT",
      "Heavy bags & ring access",
      "Coach-led sparring",
    ],
    highlighted: true,
  },
];

export function PricingSection() {
  return (
    <section className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <span className="text-jungle font-display tracking-[0.3em] text-xs">MEMBERSHIPS</span>
          <h2 className="display text-4xl md:text-6xl mt-3">
            PICK YOUR <span className="text-jungle">PACK</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            No contracts. No excuses. One mindset across two arenas.
          </p>
        </div>

        <div className="mb-16">
          <div className="flex items-baseline justify-between mb-6 border-b border-border pb-3">
            <h3 className="font-display text-2xl md:text-3xl tracking-wider">
              THE JUNGLE CROSS-TRAINING GYM
            </h3>
            <span className="text-jungle font-display tracking-widest text-xs hidden sm:block">
              PARIS · SILVERBACK
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CROSS_PLANS.map((p) => (
              <PriceCard key={p.name} plan={p} />
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-baseline justify-between mb-6 border-b border-border pb-3">
            <h3 className="font-display text-2xl md:text-3xl tracking-wider">THE JUNGLE FIT BOX</h3>
            <span className="text-jungle font-display tracking-widest text-xs hidden sm:block">
              PARIS · CANOPÉE
            </span>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <PriceCard plan={FITBOX_PLANS[0]} />
            <div className="md:col-span-2 border border-dashed border-border bg-card/30 p-8 flex items-center">
              <p className="text-muted-foreground">
                One pass. Unlimited combat conditioning. Drop in, lace up, and let the work do the
                talking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PriceCard({ plan }: { plan: Plan }) {
  return (
    <div
      className={`relative border p-8 transition group ${
        plan.highlighted
          ? "border-jungle bg-jungle/5"
          : "border-border bg-card hover:border-jungle/60"
      }`}
    >
      {plan.highlighted && (
        <span className="absolute -top-3 left-6 bg-jungle text-background font-display tracking-widest text-[10px] px-2 py-1">
          MOST CHOSEN
        </span>
      )}
      <h4 className="font-display text-2xl tracking-wider">{plan.name}</h4>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="display text-5xl text-jungle">{plan.price}</span>
        <span className="text-xs font-display tracking-widest text-muted-foreground">
          {plan.period}
        </span>
      </div>
      <ul className="mt-6 space-y-2">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <Check className="w-4 h-4 text-jungle mt-0.5 shrink-0" />
            <span className="text-muted-foreground">{f}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
