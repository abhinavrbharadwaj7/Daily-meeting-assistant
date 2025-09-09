import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Mic, MessageCircle, BarChart2, Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { cn } from "../../lib/utils";

const nav = [
  { name: "Home", icon: Home, to: "/dashboard" },
  { name: "Voice", icon: Mic, to: "/dashboard/voice-assistant" },
  { name: "Conversations", icon: MessageCircle, to: "/dashboard/conversations" },
  { name: "Analytics", icon: BarChart2, to: "/dashboard/analytics" },
  { name: "Settings", icon: Settings, to: "/dashboard/settings" },
];

export default function BottomNavbar() {
  const location = useLocation();

  return (
    <div className="fixed inset-x-0 bottom-6 flex items-center justify-center z-50">
      <div className="relative flex items-center gap-3 rounded-full bg-white/70 backdrop-blur-xl shadow-lg border border-slate-200/60 px-4 py-2">
        {nav.map((item) => {
          const active = location.pathname.startsWith(item.to);
          const Icon = item.icon;
          return (
            <TooltipProvider key={item.name} delayDuration={150}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    to={item.to}
                    className={cn(
                      "p-2 rounded-full transition-colors",
                      active ? "text-slate-900" : "text-slate-500 hover:text-slate-800"
                    )}
                    aria-label={item.name}
                  >
                    <Icon className="w-6 h-6" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="top">{item.name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
      {/* Small extra square button to the right, as in the mock */}
      <button
        className="ml-3 h-10 w-10 rounded-xl bg-white/80 border border-slate-200/60 shadow-lg grid place-items-center"
        aria-label="extra"
        title="extra"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-red-500" />
      </button>
    </div>
  );
}
