import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "./button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
import { motion } from "framer-motion";

/**
 * HorizontalNavbar - A flowing horizontal navigation bar with glassmorphism effect
 * @param {Object} props
 * @param {Array} props.links - Navigation links with name, icon, and to properties
 * @param {Function} props.onLogout - Function to call when logout is clicked
 * @param {React.ReactNode} props.logoutIcon - Icon for logout button
 */
const VerticalNavbar = ({ links, onLogout, logoutIcon }) => {
  const location = useLocation();

  return (
    <motion.div 
      className="fixed bottom-4 left-1/2 -translate-x-1/2 flex flex-row gap-2 z-50"
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <div className="rounded-full py-2 px-4 bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg dark:bg-slate-900/40 dark:border-slate-700/50">
        <div className="flex flex-row items-center gap-6 relative">
          {/* Flowing highlight background for active item */}
          {links.map((item, index) => {
            const active = location.pathname.startsWith(item.to);
            if (active) {
              return (
                <motion.div
                  key={`highlight-${item.name}`}
                  className="absolute top-0 bottom-0 rounded-full bg-white/40 dark:bg-slate-700/60 backdrop-blur-md z-0 border border-white/50 dark:border-slate-600/50"
                  layoutId="activeBackground"
                  initial={false}
                  animate={{
                    x: index * 56, // Adjust based on icon spacing
                    width: 44,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                  }}
                />
              );
            }
            return null;
          })}

          {/* Navigation items */}
          {links.map((item) => {
            const active = location.pathname.startsWith(item.to);
            const Icon = item.icon;
            
            return (
              <TooltipProvider key={item.name} delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={item.to}
                      className={cn(
                        "relative z-10 p-2 rounded-full transition-all duration-300",
                        "hover:bg-white/30 dark:hover:bg-slate-700/70",
                        "flex items-center justify-center",
                        active ? "text-slate-800 dark:text-white" : "text-slate-600 dark:text-slate-400"
                      )}
                    >
                      <Icon className="w-6 h-6" />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{item.name}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
      </div>

      {/* Logout button */}
      <TooltipProvider delayDuration={200}>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              onClick={onLogout}
              variant="ghost"
              className="rounded-full p-2 w-10 h-10 bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg dark:bg-slate-900/40 dark:border-slate-700/50 hover:bg-red-500/20 dark:hover:bg-red-500/20 text-red-500"
            >
              {logoutIcon}
            </Button>
          </TooltipTrigger>
          <TooltipContent side="top">
            <p>Logout</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
};

// Rename component for clarity while keeping the file name the same
export default VerticalNavbar;
