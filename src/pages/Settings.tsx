import React from "react";
import { Card, CardContent } from "../components/ui/card";

export default function Settings() {
  return (
    <Card className="glass-card">
      <div className="font-semibold text-lg mb-2">Settings</div>
      <CardContent>
        <div className="mb-4">
          <label className="block font-medium mb-1">Assistant Name</label>
          <input type="text" className="w-full rounded-lg border border-slate-300 px-3 py-2" defaultValue="Voice Assistant" />
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Microphone Permissions</label>
          <select className="w-full rounded-lg border border-slate-300 px-3 py-2">
            <option>Allow</option>
            <option>Deny</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block font-medium mb-1">Integrations</label>
          <div className="flex gap-2">
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">Calendar</button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">Weather</button>
            <button className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg">Music</button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
