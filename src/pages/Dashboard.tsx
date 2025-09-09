import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mic, Play, Trash2, UserCheck, Timer, BarChart2, PieChart, Users, Zap } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Pie, PieChart as RePieChart, Cell, Bar, BarChart as ReBarChart } from "recharts";
import AssistantControls from "../components/ui/AssistantControls";

const overviewStats = [
  { label: "Total Queries", value: 1240, icon: BarChart2 },
  { label: "Active Users", value: 87, icon: Users },
  { label: "Success Rate", value: "98%", icon: UserCheck },
  { label: "Avg. Response Time", value: "1.2s", icon: Timer },
];

const recentConversations = [
  { id: 1, query: "What's my next meeting?", response: "Your next meeting is at 2 PM.", time: "2m ago" },
  { id: 2, query: "Play some music", response: "Playing your playlist.", time: "5m ago" },
  { id: 3, query: "Weather today?", response: "It's sunny, 28°C.", time: "10m ago" },
  { id: 4, query: "Remind me to call John", response: "Reminder set for 4 PM.", time: "15m ago" },
  { id: 5, query: "Mute notifications", response: "Notifications muted.", time: "20m ago" },
];

const lineData = [
  { day: "Mon", queries: 120 },
  { day: "Tue", queries: 180 },
  { day: "Wed", queries: 150 },
  { day: "Thu", queries: 200 },
  { day: "Fri", queries: 170 },
  { day: "Sat", queries: 90 },
  { day: "Sun", queries: 80 },
];

const pieData = [
  { name: "Reminders", value: 400 },
  { name: "Music", value: 300 },
  { name: "Weather", value: 300 },
  { name: "Calendar", value: 200 },
];
const COLORS = ["#2563EB", "#22d3ee", "#fbbf24", "#f87171"];

const barData = [
  { feature: "Reminders", uses: 120 },
  { feature: "Music", uses: 98 },
  { feature: "Weather", uses: 86 },
  { feature: "Calendar", uses: 99 },
];

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
      {/* Assistant Controls (top centered) */}
      <div className="col-span-1 md:col-span-2 xl:col-span-4 flex justify-center">
        <AssistantControls />
      </div>
      {/* Overview Cards */}
      {overviewStats.map((stat) => (
        <Card key={stat.label} className="glass-card flex items-center gap-4">
          <div className="p-3 rounded-full bg-blue-100 text-blue-700">
            <stat.icon className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-slate-500 text-sm">{stat.label}</div>
          </div>
        </Card>
      ))}
      {/* Conversations History */}
      <div className="col-span-1 md:col-span-2 xl:col-span-4">
        <Card className="glass-card">
          <div className="flex justify-between items-center mb-2">
            <div className="font-semibold text-lg">Conversations History</div>
            <Button variant="ghost" className="text-blue-600">View All</Button>
          </div>
          <CardContent>
            <ul>
              {recentConversations.map((conv) => (
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
      </div>
      {/* Analytics Section */}
      <div className="col-span-1 md:col-span-2 xl:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card col-span-2">
          <div className="font-semibold mb-2">Queries Per Day</div>
          <ResponsiveContainer width="100%" height={180}>
            <LineChart data={lineData}>
              <XAxis dataKey="day" stroke="#888" />
              <YAxis hide />
              <Tooltip />
              <Line type="monotone" dataKey="queries" stroke="#2563EB" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
        <Card className="glass-card">
          <div className="font-semibold mb-2">Command Categories</div>
          <ResponsiveContainer width="100%" height={180}>
            <RePieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60} label>
                {pieData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx % COLORS.length]} />
                ))}
              </Pie>
            </RePieChart>
          </ResponsiveContainer>
        </Card>
        <Card className="glass-card">
          <div className="font-semibold mb-2">Most Used Features</div>
          <ResponsiveContainer width="100%" height={180}>
            <ReBarChart data={barData} layout="vertical">
              <XAxis type="number" hide />
              <YAxis dataKey="feature" type="category" width={80} />
              <Bar dataKey="uses" fill="#2563EB" barSize={18} />
            </ReBarChart>
          </ResponsiveContainer>
        </Card>
      </div>
      {/* Assistant Control Section */}
      <div className="col-span-1 md:col-span-2 xl:col-span-2">
        <Card className="glass-card">
          <div className="font-semibold text-lg mb-2">Assistant Controls</div>
          <CardContent className="flex flex-col md:flex-row gap-6">
            <div className="flex items-center gap-4">
              <span className="font-medium">Assistant</span>
              <Button variant="outline" className="bg-green-100 text-green-700">On</Button>
              <Button variant="outline" className="bg-red-100 text-red-700">Off</Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">Voice</span>
              <Button variant="outline">Male</Button>
              <Button variant="outline">Female</Button>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">Speed</span>
              <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-24 accent-blue-600" />
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">Pitch</span>
              <input type="range" min="0.5" max="2" step="0.1" defaultValue="1" className="w-24 accent-blue-600" />
            </div>
            <div className="flex items-center gap-4">
              <span className="font-medium">Integrations</span>
              <Button variant="outline">Calendar</Button>
              <Button variant="outline">Weather</Button>
              <Button variant="outline">Music</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
