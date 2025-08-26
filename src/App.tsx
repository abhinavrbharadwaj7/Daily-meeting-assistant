import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Conversations from "./pages/Conversations";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import VoiceAssistantPhase1 from "./pages/VoiceAssistantPhase1";
import { ThemeProvider } from "./components/ui/theme-provider";

import "./index.css";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="conversations" element={<Conversations />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="settings" element={<Settings />} />
            <Route path="voice-assistant" element={<VoiceAssistantPhase1 />} />
          </Route>
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
