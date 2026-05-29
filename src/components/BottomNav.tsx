import { Link, useRouterState } from "@tanstack/react-router";
import { Home, Search, Library, Crown, User } from "lucide-react";

const items = [
  { to: "/", label: "Home", icon: Home },
  { to: "/search", label: "Search", icon: Search },
  { to: "/library", label: "Library", icon: Library },
  { to: "/premium", label: "Premium", icon: Crown },
  { to: "/account", label: "Account", icon: User },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  // Hide on player screen
  if (pathname.startsWith("/player")) return null;

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 safe-bottom border-t border-border bg-background/85 backdrop-blur-xl">
      <ul className="flex items-stretch justify-around px-2 pt-1.5 pb-2">
        {items.map(({ to, label, icon: Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <li key={to} className="flex-1">
              <Link
                to={to}
                className="flex flex-col items-center gap-0.5 py-1.5 rounded-xl transition-colors"
              >
                <Icon
                  className={`h-[22px] w-[22px] transition-colors ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                  strokeWidth={active ? 2.4 : 2}
                />
                <span
                  className={`text-[10px] font-medium tracking-wide ${
                    active ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
