import { createFileRoute } from "@tanstack/react-router";
import { Check, Crown } from "lucide-react";

export const Route = createFileRoute("/premium")({
  component: Premium,
});

const perks = [
  "Ad‑free listening",
  "Unlimited downloads",
  "Exclusive premium stories",
  "Hi‑fi audio quality",
  "Sleep timer & speed controls",
];

const plans = [
  { name: "Monthly", price: "₹99", sub: "per month", popular: false },
  { name: "Yearly", price: "₹699", sub: "₹58/mo · Save 41%", popular: true },
  { name: "Family", price: "₹999", sub: "Up to 6 accounts", popular: false },
];

function Premium() {
  return (
    <div>
      <div className="bg-gradient-premium text-primary-foreground px-5 pt-8 pb-10 rounded-b-3xl">
        <div className="h-14 w-14 rounded-2xl bg-background/20 flex items-center justify-center">
          <Crown className="h-7 w-7" />
        </div>
        <h1 className="mt-4 text-3xl font-bold leading-tight">
          Audory <br /> Premium
        </h1>
        <p className="mt-2 text-sm opacity-90">
          Unlock every story, ad‑free and offline.
        </p>
      </div>

      <ul className="px-5 mt-6 space-y-3">
        {perks.map((p) => (
          <li key={p} className="flex items-center gap-3">
            <span className="h-6 w-6 rounded-full bg-primary/15 text-primary flex items-center justify-center">
              <Check className="h-3.5 w-3.5" strokeWidth={3} />
            </span>
            <span className="text-sm">{p}</span>
          </li>
        ))}
      </ul>

      <div className="px-5 mt-7 space-y-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`relative p-4 rounded-2xl border ${
              p.popular
                ? "border-primary bg-gradient-card shadow-glow"
                : "border-border bg-secondary/40"
            }`}
          >
            {p.popular && (
              <span className="absolute -top-2 right-4 text-[10px] font-bold bg-gradient-primary text-primary-foreground px-2 py-0.5 rounded-full">
                MOST POPULAR
              </span>
            )}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-bold">{p.name}</p>
                <p className="text-xs text-muted-foreground">{p.sub}</p>
              </div>
              <p className="text-lg font-bold">{p.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 mt-6">
        <button className="w-full h-12 rounded-2xl bg-gradient-primary text-primary-foreground font-bold shadow-glow">
          Start 7‑day free trial
        </button>
        <p className="text-[11px] text-muted-foreground text-center mt-3">
          Cancel anytime. Auto‑renews unless cancelled.
        </p>
      </div>
    </div>
  );
}
