import * as React from "react";
import { cn } from "../../lib/utils";

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  icon?: React.ReactNode;
}

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, onCheckedChange, icon, className, ...props }, ref) => (
    <label className={cn("inline-flex items-center cursor-pointer", className)}>
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={e => onCheckedChange?.(e.target.checked)}
        ref={ref}
        {...props}
      />
      <span className="w-10 h-6 flex items-center bg-slate-200 dark:bg-slate-700 rounded-full p-1 duration-300 peer-checked:bg-blue-600">
        <span className={cn("bg-white dark:bg-[#23272f] w-4 h-4 rounded-full shadow-md transform duration-300", checked ? "translate-x-4" : "")}>{icon}</span>
      </span>
    </label>
  )
);
Switch.displayName = "Switch";
