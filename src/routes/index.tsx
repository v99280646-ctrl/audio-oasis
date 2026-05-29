import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, Sparkles } from "lucide-react";
import { tracks } from "@/lib/audio-data";
import { TrackCard, QuickPickPill } from "@/components/TrackRow";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Audory — Stories that play" },
      { name: "description", content: "Listen to stories, learn from narratives, and discover trending audiobooks." },
    ],
  }),
  component: Home,
});

function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-7">
      <div className="px-4 flex items-end justify-between">
        <div>
          <h2 className="text-lg font-bold tracking-tight">{title}</h2>
          {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
        </div>
        <button className="text-xs text-primary font-semibold">See all</button>
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto scrollbar-hide px-4 pb-1">
        {children}
      </div>
    </section>
  );
}

function Home() {
  const quick = tracks.slice(0, 4);
  const stories = tracks.slice(0, 6);
  const info = [...tracks].reverse().slice(0, 6);
  const learn = tracks.slice(2, 6);
  const trending = [tracks[2], tracks[1], tracks[4], tracks[0], tracks[5]];

  return (
    <div>
      {/* Header */}
      <header className="px-4 pt-6 pb-2 flex items-center justify-between">
        <div>
          <p className="text-xs text-muted-foreground">Good evening</p>
          <h1 className="text-xl font-bold">Aarav</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center">
            <Bell className="h-5 w-5" />
          </button>
          <Link
            to="/account"
            className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center font-bold"
          >
            A
          </Link>
        </div>
      </header>

      {/* Premium banner */}
      <Link
        to="/premium"
        className="mx-4 mt-4 flex items-center gap-3 rounded-2xl p-3 bg-gradient-premium text-primary-foreground shadow-glow"
      >
        <Sparkles className="h-5 w-5" />
        <div className="flex-1">
          <p className="text-sm font-bold">Go Premium</p>
          <p className="text-[11px] opacity-90">Ad‑free · Offline · Exclusive stories</p>
        </div>
        <span className="text-xs font-bold bg-background/20 px-2.5 py-1 rounded-full">Try free</span>
      </Link>

      {/* Quick picks */}
      <section className="mt-6 px-4">
        <h2 className="text-lg font-bold tracking-tight">Quick picks</h2>
        <p className="text-xs text-muted-foreground">Jump back in</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {quick.map((t) => (
            <QuickPickPill key={t.id} track={t} />
          ))}
        </div>
      </section>

      <Section title="Stories" subtitle="Get lost in narration">
        {stories.map((t) => (
          <TrackCard key={t.id} track={t} />
        ))}
      </Section>

      <Section title="Informatives" subtitle="Curious minds welcome">
        {info.map((t) => (
          <TrackCard key={t.id} track={t} />
        ))}
      </Section>

      <Section title="Learn from stories" subtitle="Lessons hidden in tales">
        {learn.map((t) => (
          <TrackCard key={t.id} track={t} />
        ))}
      </Section>

      <Section title="Trending stories" subtitle="What everyone's listening to">
        {trending.map((t) => (
          <TrackCard key={t.id} track={t} />
        ))}
      </Section>
    </div>
  );
}
