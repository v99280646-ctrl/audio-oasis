import c1 from "@/assets/cover-1.jpg";
import c2 from "@/assets/cover-2.jpg";
import c3 from "@/assets/cover-3.jpg";
import c4 from "@/assets/cover-4.jpg";
import c5 from "@/assets/cover-5.jpg";
import c6 from "@/assets/cover-6.jpg";

export type Track = {
  id: string;
  title: string;
  author: string;
  cover: string;
  duration: string;
  category: string;
  plays?: string;
};

export const tracks: Track[] = [
  { id: "1", title: "Whispers of the Pine", author: "Eara B. Moon", cover: c1, duration: "42:18", category: "Story", plays: "1.2M" },
  { id: "2", title: "Echoes Beyond Orion", author: "Saul Evren", cover: c2, duration: "1:12:04", category: "Sci‑Fi", plays: "890K" },
  { id: "3", title: "The Crimson Case", author: "Dally Rhe", cover: c3, duration: "55:31", category: "Mystery", plays: "2.1M" },
  { id: "4", title: "Summit of the Self", author: "K. Sonberg", cover: c4, duration: "28:47", category: "Learn", plays: "640K" },
  { id: "5", title: "The Lantern Temple", author: "A. Toren", cover: c5, duration: "1:02:55", category: "Mythology", plays: "1.5M" },
  { id: "6", title: "Late Night Library", author: "Marin Kale", cover: c6, duration: "38:09", category: "Calm", plays: "470K" },
];

export const trackById = (id: string) => tracks.find((t) => t.id === id) ?? tracks[0];
