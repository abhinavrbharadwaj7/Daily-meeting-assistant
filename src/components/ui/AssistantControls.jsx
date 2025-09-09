import React from "react";
import { Slider } from "./slider";
import { Button } from "./button";
import { cn } from "../../lib/utils";

/**
 * AssistantControls - A component for controlling voice assistant settings
 * @param {Object} props
 * @param {boolean} props.isEnabled - Whether the assistant is enabled
 * @param {function} props.onToggleAssistant - Function to toggle assistant on/off
 * @param {string} props.voiceType - Current voice type (male/female)
 * @param {function} props.onVoiceTypeChange - Function to change voice type
 * @param {number} props.speed - Speech speed value (0-100)
 * @param {function} props.onSpeedChange - Function to change speech speed
 * @param {number} props.pitch - Speech pitch value (0-100)
 * @param {function} props.onPitchChange - Function to change speech pitch
 * @param {Array} props.integrations - Available integrations
 * @param {function} props.onToggleIntegration - Function to toggle an integration
 */
const AssistantControls = ({
  isEnabled = true,
  onToggleAssistant,
  voiceType = "female",
  onVoiceTypeChange,
  speed = 50,
  onSpeedChange,
  pitch = 50,
  onPitchChange,
  integrations = ["Calendar", "Weather", "Music"],
  onToggleIntegration,
}) => {
  return (
    <div className="bg-[#06071A] rounded-xl p-6 w-full shadow-lg">
      <h2 className="text-white text-xl font-semibold mb-4">Assistant Controls</h2>
      
      <div className="flex flex-wrap items-center gap-4 md:gap-6">
        {/* Assistant on/off control */}
        <div className="flex items-center gap-3 mr-4">
          <span className="text-white font-medium">Assistant</span>
          <div className="flex gap-1">
            <Button 
              size="sm"
              variant={isEnabled ? "default" : "outline"}
              className={cn(
                "rounded-md px-4 py-1 text-sm", 
                isEnabled ? "bg-[#1e2130] text-white" : "bg-transparent text-slate-400 border-[#1e2130]"
              )}
              onClick={() => onToggleAssistant(true)}
            >
              On
            </Button>
            <Button 
              size="sm"
              variant={!isEnabled ? "default" : "outline"}
              className={cn(
                "rounded-md px-4 py-1 text-sm", 
                !isEnabled ? "bg-[#1e2130] text-white" : "bg-transparent text-slate-400 border-[#1e2130]"
              )}
              onClick={() => onToggleAssistant(false)}
            >
              Off
            </Button>
          </div>
        </div>
        
        {/* Voice type control */}
        <div className="flex items-center gap-3 mr-5">
          <span className="text-white font-medium">Voice</span>
          <div className="flex gap-1">
            <Button 
              size="sm"
              variant={voiceType === "male" ? "default" : "outline"}
              className={cn(
                "rounded-md px-4 py-1 text-sm", 
                voiceType === "male" ? "bg-[#1e2130] text-white" : "bg-transparent text-slate-400 border-[#1e2130]"
              )}
              onClick={() => onVoiceTypeChange("male")}
            >
              Male
            </Button>
            <Button 
              size="sm"
              variant={voiceType === "female" ? "default" : "outline"}
              className={cn(
                "rounded-md px-4 py-1 text-sm", 
                voiceType === "female" ? "bg-[#1e2130] text-white" : "bg-transparent text-slate-400 border-[#1e2130]"
              )}
              onClick={() => onVoiceTypeChange("female")}
            >
              Female
            </Button>
          </div>
        </div>
        
        {/* Speed control */}
        <div className="flex items-center gap-3 mr-5">
          <span className="text-white font-medium">Speed</span>
          <Slider 
            value={[speed]}
            min={0}
            max={100}
            step={1}
            className="w-28 md:w-32"
            onValueChange={(value) => onSpeedChange(value[0])}
          />
        </div>
        
        {/* Pitch control */}
        <div className="flex items-center gap-3 mr-5">
          <span className="text-white font-medium">Pitch</span>
          <Slider 
            value={[pitch]}
            min={0}
            max={100}
            step={1}
            className="w-28 md:w-32"
            onValueChange={(value) => onPitchChange(value[0])}
          />
        </div>
        
        {/* Integrations */}
        <div className="flex items-center gap-2 ml-auto">
          <span className="text-white font-medium mr-2">Integrations</span>
          <div className="flex gap-2">
            {integrations.map((integration) => (
              <Button
                key={integration}
                size="sm"
                variant="outline"
                className="rounded-md px-4 py-1 text-sm bg-transparent text-slate-300 border-[#1e2130] hover:bg-[#1e2130] hover:text-white"
                onClick={() => onToggleIntegration?.(integration)}
              >
                {integration}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssistantControls;
