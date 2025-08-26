import React, { useState, useRef } from "react";
import TranscriptionDisplay from "./TranscriptionDisplay";

const getId = () => Date.now() + Math.random().toString(36).slice(2);

const Recorder = ({ onAddRecording }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [transcript, setTranscript] = useState("");
  const [isTranscribing, setIsTranscribing] = useState(false);
  const recognitionRef = useRef(null);

  // Start recording and speech recognition
  const startRecording = async () => {
    setTranscript("");
    setIsTranscribing(true);
    // Start Speech Recognition
    if ("webkitSpeechRecognition" in window || "SpeechRecognition" in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = "en-US";
      recognition.onresult = (event) => {
        let interim = "";
        let final = "";
        for (let i = 0; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final += event.results[i][0].transcript;
          } else {
            interim += event.results[i][0].transcript;
          }
        }
        setTranscript(final + interim);
      };
      recognition.onerror = () => {};
      recognitionRef.current = recognition;
      recognition.start();
    }
    // Start Audio Recording
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new window.MediaRecorder(stream);
      setMediaRecorder(recorder);
      setAudioChunks([]);
      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) setAudioChunks((prev) => [...prev, e.data]);
      };
      recorder.start();
      setIsRecording(true);
    } catch (err) {
      alert("Microphone access denied or not supported.");
      setIsTranscribing(false);
    }
  };

  // Stop recording and speech recognition
  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      setIsRecording(false);
    }
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsTranscribing(false);
    }
  };

  // Save recording and transcript
  const handleTranscribe = () => {
    if (audioChunks.length === 0) return;
    const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
    const url = URL.createObjectURL(audioBlob);
    onAddRecording({
      id: getId(),
      audioUrl: url,
      transcript: transcript.trim() || "(No transcript)",
      created: new Date().toISOString(),
    });
    setAudioChunks([]);
    setTranscript("");
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-3">
        <button
          className={`px-4 py-2 rounded bg-blue-600 dark:bg-blue-500 text-white font-semibold shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition disabled:opacity-50`}
          onClick={startRecording}
          disabled={isRecording}
        >
          Start Recording
        </button>
        <button
          className={`px-4 py-2 rounded bg-red-600 dark:bg-red-500 text-white font-semibold shadow hover:bg-red-700 dark:hover:bg-red-600 transition disabled:opacity-50`}
          onClick={stopRecording}
          disabled={!isRecording}
        >
          Stop Recording
        </button>
        <button
          className={`px-4 py-2 rounded bg-green-600 dark:bg-green-500 text-white font-semibold shadow hover:bg-green-700 dark:hover:bg-green-600 transition disabled:opacity-50`}
          onClick={handleTranscribe}
          disabled={isRecording || audioChunks.length === 0}
        >
          Transcribe
        </button>
      </div>
      <TranscriptionDisplay transcript={transcript} isTranscribing={isTranscribing} />
    </div>
  );
};

export default Recorder;
