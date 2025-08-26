import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Moon, Sun, User, Menu, Home, BarChart2, Settings, LogOut, MessageCircle, Mic, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Switch } from "./ui/switch";
import { cn } from "../lib/utils";
import { useTheme } from "./ui/theme-provider";
import logo from "../assets/logo.svg?url";

const sidebarLinks = [
  { name: "Home", icon: Home, to: "/dashboard" },
  { name: "Voice Assistant", icon: Mic, to: "/dashboard/voice-assistant" },
  { name: "Conversations", icon: MessageCircle, to: "/dashboard/conversations" },
  { name: "Analytics", icon: BarChart2, to: "/dashboard/analytics" },
  { name: "Settings", icon: Settings, to: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const [collapsed, setCollapsed] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#18181b] dark:to-[#23272f]">
      {/* Sidebar */}
      <aside className={cn(
        "transition-all duration-300 bg-white/60 dark:bg-[#18181b]/60 shadow-lg backdrop-blur-lg border-r border-slate-200 dark:border-slate-800 flex flex-col",
        collapsed ? "w-16" : "w-64"
      )}>
        <div className="flex items-center justify-between px-4 py-4">
          <Link to="/dashboard" className="flex items-center gap-2">
            <img src={logo} alt="Logo" className="h-8 w-8" />
            {!collapsed && <span className="font-bold text-lg tracking-tight text-slate-800 dark:text-white">Voice Assistant</span>}
          </Link>
          <Button variant="ghost" size="icon" onClick={() => setCollapsed((v) => !v)}>
            {collapsed ? <ChevronRight /> : <ChevronLeft />}
          </Button>
        </div>
        <nav className="flex-1 mt-2">
          {sidebarLinks.map((item) => {
            const active = location.pathname.startsWith(item.to);
            return (
              <Link
                key={item.name}
                to={item.to}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg mx-2 my-1 transition-all hover:bg-slate-200/60 dark:hover:bg-slate-700/60",
                  active && "bg-slate-200/80 dark:bg-slate-700/80 font-semibold"
                )}
              >
                <item.icon className="w-5 h-5" />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            );
          })}
        </nav>
        <div className="mt-auto mb-4 px-4">
          <Button variant="ghost" className="w-full mt-2 flex items-center gap-2 text-red-500">
            <LogOut className="w-4 h-4" />
            {!collapsed && "Logout"}
          </Button>
        </div>
      </aside>
      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Nav */}
        <header className="flex items-center justify-between px-8 py-4 bg-white/60 dark:bg-[#18181b]/60 shadow-md backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <span className="font-bold text-2xl tracking-tight text-slate-900 dark:text-white">Voice Assistant Dashboard</span>
          </div>
          <div className="flex items-center gap-4">
            <Switch
              checked={theme === "dark"}
              onCheckedChange={(v) => setTheme(v ? "dark" : "light")}
              icon={theme === "dark" ? <Moon /> : <Sun />}
              aria-label="Toggle dark mode"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <User className="w-6 h-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        {/* Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {children || <Outlet />}
        </main>
      </div>
    </div>
  );
}
