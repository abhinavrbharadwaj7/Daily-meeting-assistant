import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Play, Trash2 } from "lucide-react";

const conversations = [
  { id: 1, query: "What's my next meeting?", response: "Your next meeting is at 2 PM.", time: "2m ago" },
  { id: 2, query: "Play some music", response: "Playing your playlist.", time: "5m ago" },
  { id: 3, query: "Weather today?", response: "It's sunny, 28°C.", time: "10m ago" },
  { id: 4, query: "Remind me to call John", response: "Reminder set for 4 PM.", time: "15m ago" },
  { id: 5, query: "Mute notifications", response: "Notifications muted.", time: "20m ago" },
];

export default function Conversations() {
  return (
    <Card className="glass-card">
      <div className="font-semibold text-lg mb-2">Conversations History</div>
      <CardContent>
        <ul>
          {conversations.map((conv) => (
            <li key={conv.id} className="flex items-center justify-between py-2 border-b last:border-b-0 border-slate-200 dark:border-slate-700">
              <div>
                <div className="font-medium">{conv.query}</div>
                <div className="text-slate-500 text-sm">{conv.response}</div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-400">{conv.time}</span>
                <Button variant="ghost" size="icon"><Play className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon"><Trash2 className="w-4 h-4 text-red-500" /></Button>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
