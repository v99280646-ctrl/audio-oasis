import { Link, useRouterState } from "@tanstack/react-router";
import { Play, Pause } from "lucide-react";
import { tracks } from "@/lib/audio-data";
import { useState } from "react";

export function MiniPlayer() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [playing, setPlaying] = useState(true);
  const track = tracks[0];

  if (pathname.startsWith("/player")) return null;

  return (
    <div className="fixed bottom-[90px] inset-x-2 z-30 safe-bottom">
      <Link
        to="/player/$id"
        params={{ id: track.id }}
        className="flex items-center gap-3 p-2 pr-3 rounded-2xl bg-gradient-card border border-border shadow-card backdrop-blur-xl"
      >
        <img
          src={track.cover}
          alt={track.title}
          width={48}
          height={48}
          className="h-12 w-12 rounded-xl object-cover"
        />
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold truncate">{track.title}</p>
          <p className="text-xs text-muted-foreground truncate">{track.author}</p>
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            setPlaying((p) => !p);
          }}
          className="h-10 w-10 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? <Pause className="h-4 w-4" fill="currentColor" /> : <Play className="h-4 w-4 ml-0.5" fill="currentColor" />}
        </button>
      </Link>
    </div>
  );
}
