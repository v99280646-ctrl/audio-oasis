import { createFileRoute } from "@tanstack/react-router";
import { Download, Heart, Clock, ListMusic } from "lucide-react";
import { useState } from "react";
import { tracks } from "@/lib/audio-data";
import { TrackRow } from "@/components/TrackRow";

export const Route = createFileRoute("/library")({
  component: Library,
});

const tabs = ["Recent", "Liked", "Downloads", "Playlists"] as const;

const shortcuts = [
  { icon: Heart, label: "Liked stories", count: "12 audios" },
  { icon: Download, label: "Downloads", count: "5 audios" },
  { icon: Clock, label: "History", count: "Last 30 days" },
  { icon: ListMusic, label: "My playlists", count: "3 playlists" },
];

function Library() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Recent");

  return (
    <div>
      <header className="px-4 pt-6">
        <h1 className="text-2xl font-bold">Your Library</h1>
      </header>

      <div className="px-4 mt-4 flex gap-2 overflow-x-auto scrollbar-hide">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`text-xs font-semibold px-3.5 py-1.5 rounded-full transition-colors ${
              tab === t
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <section className="px-4 mt-5 space-y-2">
        {shortcuts.map(({ icon: Icon, label, count }) => (
          <div
            key={label}
            className="flex items-center gap-3 p-3 rounded-2xl bg-gradient-card border border-border"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center text-primary-foreground">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold">{label}</p>
              <p className="text-xs text-muted-foreground">{count}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="px-4 mt-6">
        <h2 className="text-base font-bold mb-1">Recently played</h2>
        {tracks.map((t) => (
          <TrackRow key={t.id} track={t} />
        ))}
      </section>
    </div>
  );
}
