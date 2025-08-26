import React from "react";

const TranscriptionDisplay = ({ transcript, isTranscribing }) => (
  <div className="w-full min-h-[48px] p-3 border rounded bg-gray-50 dark:bg-slate-800/50 text-gray-800 dark:text-white">
    <span className="font-semibold text-gray-600 dark:text-gray-300">Live Transcript:</span>
    <div className="mt-1 text-base min-h-[24px]">
      {isTranscribing ? (
        <span className="animate-pulse text-blue-700 dark:text-blue-400">{transcript || "Listening..."}</span>
      ) : (
        <span>{transcript || <span className="text-gray-400 dark:text-gray-500">No transcript yet.</span>}</span>
      )}
    </div>
  </div>
);

export default TranscriptionDisplay;
