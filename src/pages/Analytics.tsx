import React from "react";
import { Card } from "../components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, PieChart as RePieChart, Pie, Cell, BarChart as ReBarChart, Bar } from "recharts";

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

export default function Analytics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
  );
}
