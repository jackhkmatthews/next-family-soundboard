import { RefObject, useEffect, useRef, useState } from "react";

let activeAudioElements: HTMLAudioElement[] = [];

export function useSound(): {
  audioRef: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
  play: () => void;
  pauseAll: () => void;
} {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  function pauseAll() {
    activeAudioElements.forEach((element) => {
      element.pause();
    });
  }

  function play() {
    audioRef.current?.load();
    audioRef.current?.play();
  }

  useEffect(() => {
    const audioElement = audioRef.current;

    function handleStart() {
      if (audioElement) {
        setIsPlaying(true);
        activeAudioElements.push(audioElement);
      }
    }

    audioElement?.addEventListener("play", handleStart);

    return function cleanup() {
      audioElement?.removeEventListener("play", handleStart);
    };
  }, []);

  useEffect(() => {
    const audioElement = audioRef.current;

    function handleStop() {
      setIsPlaying(false);
      activeAudioElements = activeAudioElements.filter(
        (activeElement) => activeElement !== audioElement
      );
    }

    audioElement?.addEventListener("pause", handleStop);

    return function cleanup() {
      audioElement?.removeEventListener("pause", handleStop);
    };
  }, []);

  return { audioRef, isPlaying, pauseAll, play };
}
