import React, { useState } from 'react';
import AssistantControls from './ui/AssistantControls';

const AssistantControlsDemo = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [voiceType, setVoiceType] = useState("female");
  const [speed, setSpeed] = useState(50);
  const [pitch, setPitch] = useState(50);
  const [activeIntegrations, setActiveIntegrations] = useState(["Calendar"]);

  const handleToggleIntegration = (integration) => {
    setActiveIntegrations(prev => 
      prev.includes(integration) 
        ? prev.filter(i => i !== integration)
        : [...prev, integration]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <AssistantControls
        isEnabled={isEnabled}
        onToggleAssistant={setIsEnabled}
        voiceType={voiceType}
        onVoiceTypeChange={setVoiceType}
        speed={speed}
        onSpeedChange={setSpeed}
        pitch={pitch}
        onPitchChange={setPitch}
        integrations={["Calendar", "Weather", "Music"]}
        onToggleIntegration={handleToggleIntegration}
      />
    </div>
  );
};

export default AssistantControlsDemo;
