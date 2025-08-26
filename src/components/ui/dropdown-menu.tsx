import * as React from "react";
import { cn } from "../../lib/utils";

export function DropdownMenu({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="relative inline-block" onBlur={(e) => {
      // Only close if focus moves outside dropdown
      if (!e.currentTarget.contains(e.relatedTarget as Node)) {
        setIsOpen(false);
      }
    }}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          if (child.type === DropdownMenuTrigger) {
            return React.cloneElement(child as React.ReactElement, {
              onClick: () => setIsOpen(!isOpen),
              'aria-expanded': isOpen
            });
          }
          if (child.type === DropdownMenuContent) {
            return isOpen ? child : null;
          }
        }
        return child;
      })}
    </div>
  );
}

export function DropdownMenuTrigger({ asChild, children, ...props }: { asChild?: boolean; children: React.ReactNode; onClick?: () => void; 'aria-expanded'?: boolean }) {
  return (
    <div role="button" tabIndex={0} {...props}>
      {asChild ? children : <button className="flex items-center justify-center">{children}</button>}
    </div>
  );
}

export function DropdownMenuContent({ align = "start", children }: { align?: "start" | "end"; children: React.ReactNode }) {
  return (
    <div className={cn(
      "absolute z-50 mt-2 w-48 rounded-md bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm",
      "shadow-lg ring-1 ring-black/5 dark:ring-white/10",
      "py-1 focus:outline-none animate-in fade-in duration-200",
      align === "end" ? "right-0" : "left-0"
    )}>
      {children}
    </div>
  );
}

export function DropdownMenuItem({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button 
      className={cn(
        "w-full text-left px-4 py-2 text-sm",
        "hover:bg-slate-100 dark:hover:bg-slate-700/50",
        "focus:bg-slate-100 dark:focus:bg-slate-700/50",
        "outline-none transition-colors flex items-center gap-2"
      )} 
      onClick={onClick}
    >
      {children}
    </button>
  );
}
