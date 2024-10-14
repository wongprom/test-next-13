"use client";
import { useEffect, useRef, useState } from "react";
import {
  PlayIcon,
  PauseIcon,
  SpeakerWaveIcon,
} from "@heroicons/react/24/outline";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.1);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // Sätt volymen på audio-elementet till 25% vid initiering
    }
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-transparent p-2">
      <audio ref={audioRef} src="/sounds/death-note-theme.mp3" loop />
      <button
        onClick={togglePlayPause}
        className="text-red-500 hover:text-red-700"
      >
        {isPlaying ? (
          <PauseIcon className="h-10 w-10" />
        ) : (
          <PlayIcon className="h-10 w-10" />
        )}
      </button>
      <div className="flex items-center space-x-2">
        <SpeakerWaveIcon className="h-6 w-6 text-gray-500" />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="volume-slider"
        />
      </div>
    </div>
  );
};

export default AudioPlayer;
