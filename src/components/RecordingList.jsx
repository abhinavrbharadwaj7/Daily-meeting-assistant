import React from "react";

const RecordingList = ({ recordings, onDelete }) => (
  <div className="w-full">
    <h2 className="text-lg font-semibold mb-2 dark:text-white">Saved Recordings</h2>
    {recordings.length === 0 ? (
      <div className="text-gray-400 dark:text-gray-500 text-center">No recordings yet.</div>
    ) : (
      <ul className="flex flex-col gap-4">
        {recordings.map((rec) => (
          <li key={rec.id} className="flex flex-col md:flex-row md:items-center justify-between p-3 border rounded bg-gray-50 dark:bg-slate-800/50 dark:border-slate-700">
            <div className="flex-1 flex flex-col gap-1">
              <audio controls src={rec.audioUrl} className="w-full max-w-xs" />
              <div className="text-sm text-gray-700 dark:text-gray-200 mt-1">
                <span className="font-medium">Transcript:</span> {rec.transcript}
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{new Date(rec.created).toLocaleString()}</div>
            </div>
            <button
              className="mt-2 md:mt-0 md:ml-4 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
              onClick={() => onDelete(rec.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default RecordingList;
