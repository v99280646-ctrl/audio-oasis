import { Link } from "@tanstack/react-router";
import { Play } from "lucide-react";
import type { Track } from "@/lib/audio-data";

export function TrackRow({ track }: { track: Track }) {
  return (
    <Link
      to="/player/$id"
      params={{ id: track.id }}
      className="flex items-center gap-3 py-2.5 active:bg-muted/40 rounded-xl px-2 -mx-2 transition-colors"
    >
      <img
        src={track.cover}
        alt={track.title}
        width={56}
        height={56}
        loading="lazy"
        className="h-14 w-14 rounded-xl object-cover shadow-card"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate">{track.title}</p>
        <p className="text-xs text-muted-foreground truncate">
          {track.author} · {track.duration}
        </p>
      </div>
      <button
        className="h-9 w-9 rounded-full bg-secondary text-foreground flex items-center justify-center"
        aria-label="Play"
        onClick={(e) => e.preventDefault()}
      >
        <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
      </button>
    </Link>
  );
}

export function TrackCard({ track }: { track: Track }) {
  return (
    <Link
      to="/player/$id"
      params={{ id: track.id }}
      className="w-36 shrink-0 group"
    >
      <div className="relative overflow-hidden rounded-2xl shadow-card">
        <img
          src={track.cover}
          alt={track.title}
          width={400}
          height={400}
          loading="lazy"
          className="h-36 w-36 object-cover transition-transform group-active:scale-95"
        />
        <div className="absolute bottom-2 right-2 h-9 w-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-glow opacity-95">
          <Play className="h-4 w-4 ml-0.5" fill="currentColor" />
        </div>
      </div>
      <p className="mt-2 text-sm font-semibold truncate">{track.title}</p>
      <p className="text-xs text-muted-foreground truncate">{track.author}</p>
    </Link>
  );
}

export function QuickPickPill({ track }: { track: Track }) {
  return (
    <Link
      to="/player/$id"
      params={{ id: track.id }}
      className="flex items-center gap-2 rounded-xl bg-secondary/70 hover:bg-secondary pr-3 overflow-hidden"
    >
      <img src={track.cover} alt={track.title} width={48} height={48} loading="lazy" className="h-12 w-12 object-cover" />
      <span className="text-xs font-semibold truncate max-w-[110px]">{track.title}</span>
    </Link>
  );
}
