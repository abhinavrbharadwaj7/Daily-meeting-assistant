import React from "react";
import { Button } from "./button";

export default function AssistantControls() {
  return (
    <div className="mx-auto max-w-5xl w-full rounded-xl bg-[#0b0f23] text-white shadow-lg border border-white/10 p-6">
      <div className="text-lg font-semibold mb-4">Assistant Controls</div>
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        <div className="flex items-center gap-3">
          <span className="font-medium">Assistant</span>
          <Button variant="outline" className="h-8 px-4 bg-white/10 text-white border-white/20">On</Button>
          <Button variant="outline" className="h-8 px-4 bg-white/5 text-white/70 border-white/20">Off</Button>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium">Voice</span>
          <Button variant="outline" className="h-8 px-4 bg-white text-slate-900 border-white/20">Male</Button>
          <Button variant="outline" className="h-8 px-4 bg-white/10 text-white border-white/20">Female</Button>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium">Speed</span>
          <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-28 accent-blue-500" />
        </div>
        <div className="flex items-center gap-3">
          <span className="font-medium">Pitch</span>
          <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-28 accent-blue-500" />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <span className="font-medium">Integrations</span>
          <div className="flex gap-2">
            <Button variant="outline" className="h-8 px-4 bg-white/10 text-white/80 border-white/20">Calendar</Button>
            <Button variant="outline" className="h-8 px-4 bg-white/10 text-white/80 border-white/20">Weather</Button>
            <Button variant="outline" className="h-8 px-4 bg-white/10 text-white/80 border-white/20">Music</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
