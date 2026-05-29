import { createFileRoute } from "@tanstack/react-router";
import {
  Settings,
  Bell,
  Download,
  Headphones,
  HelpCircle,
  LogOut,
  ChevronRight,
  Moon,
} from "lucide-react";

export const Route = createFileRoute("/account")({
  component: Account,
});

const items = [
  { icon: Settings, label: "Account settings" },
  { icon: Bell, label: "Notifications" },
  { icon: Download, label: "Download quality" },
  { icon: Headphones, label: "Audio quality" },
  { icon: Moon, label: "Sleep timer" },
  { icon: HelpCircle, label: "Help & support" },
];

function Account() {
  return (
    <div>
      <header className="px-4 pt-6">
        <h1 className="text-2xl font-bold">Account</h1>
      </header>

      <section className="mx-4 mt-5 p-4 rounded-2xl bg-gradient-card border border-border flex items-center gap-3">
        <div className="h-14 w-14 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
          A
        </div>
        <div className="flex-1">
          <p className="text-base font-bold">Aarav Sharma</p>
          <p className="text-xs text-muted-foreground">aarav@audory.app</p>
        </div>
        <button className="text-xs font-semibold text-primary">Edit</button>
      </section>

      <div className="mx-4 mt-4 grid grid-cols-3 rounded-2xl bg-secondary/50 p-3 text-center">
        <div>
          <p className="text-base font-bold">128</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Listened</p>
        </div>
        <div className="border-x border-border">
          <p className="text-base font-bold">42h</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide">This month</p>
        </div>
        <div>
          <p className="text-base font-bold">12</p>
          <p className="text-[10px] text-muted-foreground uppercase tracking-wide">Liked</p>
        </div>
      </div>

      <ul className="mx-4 mt-5 rounded-2xl overflow-hidden border border-border divide-y divide-border bg-card">
        {items.map(({ icon: Icon, label }) => (
          <li key={label}>
            <button className="w-full flex items-center gap-3 px-4 py-3.5 active:bg-muted/40">
              <Icon className="h-5 w-5 text-muted-foreground" />
              <span className="flex-1 text-left text-sm font-medium">{label}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          </li>
        ))}
      </ul>

      <button className="mx-4 mt-5 mb-2 w-[calc(100%-2rem)] flex items-center justify-center gap-2 h-12 rounded-2xl bg-secondary text-destructive font-semibold">
        <LogOut className="h-4 w-4" />
        Log out
      </button>
      <p className="text-center text-[11px] text-muted-foreground mt-2">Audory · v1.0.0</p>
    </div>
  );
}
