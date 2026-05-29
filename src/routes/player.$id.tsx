import { createFileRoute, useNavigate } from "@tanstack/react-router";
import {
  ChevronDown,
  Heart,
  MoreHorizontal,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
} from "lucide-react";
import { useState } from "react";
import { trackById } from "@/lib/audio-data";

export const Route = createFileRoute("/player/$id")({
  component: Player,
});

function Player() {
  const { id } = Route.useParams();
  const navigate = useNavigate();
  const track = trackById(id);
  const [playing, setPlaying] = useState(true);
  const [progress, setProgress] = useState(38);
  const [liked, setLiked] = useState(false);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-player flex flex-col safe-bottom">
      {/* Top bar */}
      <header className="flex items-center justify-between px-4 pt-6 pb-2">
        <button
          onClick={() => navigate({ to: "/" })}
          className="h-10 w-10 rounded-full bg-background/30 flex items-center justify-center"
          aria-label="Close"
        >
          <ChevronDown className="h-5 w-5" />
        </button>
        <div className="text-center">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">Now Playing</p>
          <p className="text-xs font-semibold">{track.category}</p>
        </div>
        <button className="h-10 w-10 rounded-full bg-background/30 flex items-center justify-center">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </header>

      {/* Cover */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="relative w-full aspect-square max-w-sm">
          <div className="absolute inset-0 rounded-3xl bg-gradient-primary blur-3xl opacity-30" />
          <img
            src={track.cover}
            alt={track.title}
            width={800}
            height={800}
            className={`relative h-full w-full object-cover rounded-3xl shadow-glow ${playing ? "animate-spin-slow" : ""}`}
            style={{ animationPlayState: playing ? "running" : "paused" }}
          />
        </div>
      </div>

      {/* Title + actions */}
      <div className="px-6 mt-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h1 className="text-xl font-bold truncate">{track.title}</h1>
            <p className="text-sm text-muted-foreground truncate">{track.author}</p>
          </div>
          <button
            onClick={() => setLiked((l) => !l)}
            aria-label="Like"
            className="h-10 w-10 flex items-center justify-center"
          >
            <Heart
              className={`h-6 w-6 ${liked ? "text-primary" : "text-muted-foreground"}`}
              fill={liked ? "currentColor" : "none"}
            />
          </button>
        </div>

        {/* Progress */}
        <div className="mt-5">
          <input
            type="range"
            min={0}
            max={100}
            value={progress}
            onChange={(e) => setProgress(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <div className="flex justify-between text-[11px] text-muted-foreground mt-1">
            <span>16:24</span>
            <span>{track.duration}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-3 flex items-center justify-between">
          <button aria-label="Shuffle"><Shuffle className="h-5 w-5 text-muted-foreground" /></button>
          <button aria-label="Previous"><SkipBack className="h-7 w-7" fill="currentColor" /></button>
          <button aria-label="Back 15s" className="flex flex-col items-center">
            <Rewind className="h-6 w-6" />
            <span className="text-[9px] -mt-1">15</span>
          </button>
          <button
            onClick={() => setPlaying((p) => !p)}
            className="h-16 w-16 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-glow"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? (
              <Pause className="h-7 w-7" fill="currentColor" />
            ) : (
              <Play className="h-7 w-7 ml-1" fill="currentColor" />
            )}
          </button>
          <button aria-label="Forward 30s" className="flex flex-col items-center">
            <FastForward className="h-6 w-6" />
            <span className="text-[9px] -mt-1">30</span>
          </button>
          <button aria-label="Next"><SkipForward className="h-7 w-7" fill="currentColor" /></button>
          <button aria-label="Repeat"><Repeat className="h-5 w-5 text-muted-foreground" /></button>
        </div>

        <div className="mt-5 mb-6 flex items-center justify-between text-xs text-muted-foreground">
          <button className="px-3 py-1.5 rounded-full bg-secondary font-semibold">1.0x</button>
          <button className="px-3 py-1.5 rounded-full bg-secondary font-semibold">Sleep timer</button>
          <button className="px-3 py-1.5 rounded-full bg-secondary font-semibold">Chapters</button>
        </div>
      </div>
    </div>
  );
}
