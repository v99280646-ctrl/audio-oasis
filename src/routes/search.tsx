import { createFileRoute } from "@tanstack/react-router";
import { Search as SearchIcon, X } from "lucide-react";
import { useState } from "react";
import { tracks } from "@/lib/audio-data";
import { TrackRow } from "@/components/TrackRow";

export const Route = createFileRoute("/search")({
  component: Search,
});

const categories = [
  { name: "Stories", color: "from-rose-500 to-orange-500" },
  { name: "Mystery", color: "from-red-600 to-rose-800" },
  { name: "Sci‑Fi", color: "from-indigo-500 to-purple-700" },
  { name: "Learn", color: "from-amber-500 to-orange-600" },
  { name: "Calm", color: "from-teal-500 to-emerald-700" },
  { name: "Mythology", color: "from-emerald-500 to-green-800" },
  { name: "Kids", color: "from-sky-400 to-blue-600" },
  { name: "History", color: "from-stone-500 to-stone-800" },
];

function Search() {
  const [q, setQ] = useState("");
  const results = q
    ? tracks.filter(
        (t) =>
          t.title.toLowerCase().includes(q.toLowerCase()) ||
          t.author.toLowerCase().includes(q.toLowerCase()) ||
          t.category.toLowerCase().includes(q.toLowerCase()),
      )
    : [];

  return (
    <div>
      <header className="px-4 pt-6 pb-3">
        <h1 className="text-2xl font-bold">Search</h1>
        <div className="mt-4 relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Stories, authors, topics"
            className="w-full h-12 pl-10 pr-10 rounded-2xl bg-secondary text-sm outline-none focus:ring-2 focus:ring-primary/50"
          />
          {q && (
            <button
              onClick={() => setQ("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 h-6 w-6 rounded-full bg-muted flex items-center justify-center"
            >
              <X className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      </header>

      {q ? (
        <div className="px-4 mt-2">
          <h2 className="text-sm font-semibold text-muted-foreground mb-1">
            {results.length} result{results.length === 1 ? "" : "s"}
          </h2>
          {results.map((t) => (
            <TrackRow key={t.id} track={t} />
          ))}
        </div>
      ) : (
        <section className="px-4 mt-4">
          <h2 className="text-base font-bold mb-3">Browse all</h2>
          <div className="grid grid-cols-2 gap-3">
            {categories.map((c) => (
              <div
                key={c.name}
                className={`relative overflow-hidden h-24 rounded-2xl p-3 bg-gradient-to-br ${c.color}`}
              >
                <span className="text-sm font-bold text-white drop-shadow">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
