import React from "react";
import Recorder from "./components/Recorder";
import RecordingList from "./components/RecordingList";
import "./index.css";

function App() {
  const [recordings, setRecordings] = React.useState([]);

  // Add new recording to the list
  const handleAddRecording = (recording) => {
    setRecordings((prev) => [recording, ...prev]);
  };

  // Delete a recording by id
  const handleDeleteRecording = (id) => {
    setRecordings((prev) => prev.filter((rec) => rec.id !== id));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-xl p-6 bg-white rounded-xl shadow-lg flex flex-col gap-6">
        <h1 className="text-2xl font-bold text-center mb-2">Voice Assistant - Phase 1</h1>
        <Recorder onAddRecording={handleAddRecording} />
        <RecordingList recordings={recordings} onDelete={handleDeleteRecording} />
      </div>
    </div>
  );
}

export default App;
