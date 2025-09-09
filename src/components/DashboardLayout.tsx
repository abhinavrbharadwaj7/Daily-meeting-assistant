import React from "react";
import { Outlet } from "react-router-dom";
import { Moon, Sun, User, LogOut, Home, BarChart2, Settings, MessageCircle, Mic } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "./ui/dropdown-menu";
import { Switch } from "./ui/switch";
import { useTheme } from "./ui/theme-provider";
import VerticalNavbar from "./ui/VerticalNavbar";
import AssistantControlsDemo from "./AssistantControlsDemo";
import logo from "../assets/logo.svg?url";

const navigationLinks = [
  { name: "Home", icon: Home, to: "/dashboard" },
  { name: "Voice Assistant", icon: Mic, to: "/dashboard/voice-assistant" },
  { name: "Conversations", icon: MessageCircle, to: "/dashboard/conversations" },
  { name: "Analytics", icon: BarChart2, to: "/dashboard/analytics" },
  { name: "Settings", icon: Settings, to: "/dashboard/settings" },
];

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  
  const handleLogout = () => {
    // Implement logout functionality here
    console.log("Logging out");
  };

  return (
    <div className="min-h-screen flex bg-gradient-to-br from-slate-100 to-slate-200 dark:from-[#18181b] dark:to-[#23272f]">
      {/* New Vertical Navigation */}
      <VerticalNavbar 
        links={navigationLinks} 
        onLogout={handleLogout} 
        logoutIcon={<LogOut className="w-5 h-5" />} 
      />
      
      {/* Main Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Nav */}
        <header className="flex items-center justify-between px-8 py-4 bg-white/60 dark:bg-[#18181b]/60 shadow-md backdrop-blur-lg border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Logo" className="h-8 w-8" />
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
        
        {/* Content with increased padding to account for horizontal navbar at bottom */}
        <main className="flex-1 p-6 pb-20 overflow-y-auto">
          {/* Assistant Controls Card */}
          <div className="mb-6">
            <AssistantControlsDemo />
          </div>
          
          {/* Main Content Card */}
          <Card className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-white/30 dark:border-slate-700/50 shadow-lg p-6">
            {children || <Outlet />}
          </Card>
        </main>
      </div>
    </div>
  );
}
