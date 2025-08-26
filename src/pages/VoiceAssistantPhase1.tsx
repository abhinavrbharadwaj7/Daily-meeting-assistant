import React from "react";
import Recorder from "../components/Recorder";
import RecordingList from "../components/RecordingList";

interface Recording {
  id: string;
  audioUrl: string;
  transcript: string;
  created: string;
}

export default function VoiceAssistantPhase1() {
  const [recordings, setRecordings] = React.useState<Recording[]>([]);

  // Add new recording to the list
  const handleAddRecording = (recording: Recording) => {
    setRecordings((prev) => [recording, ...prev]);
  };

  // Delete a recording by id
  const handleDeleteRecording = (id: string) => {
    setRecordings((prev) => prev.filter((rec) => rec.id !== id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-blue-400 text-center mb-8">Voice Assistant</h1>
        <Recorder onAddRecording={handleAddRecording} />
        <div className="mt-8">
          <RecordingList recordings={recordings} onDelete={handleDeleteRecording} />
        </div>
      </div>
    </div>
  );
}
