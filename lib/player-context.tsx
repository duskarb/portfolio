"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from "react";
import type { Project } from "@/lib/projects";
import { songs, Song } from "@/lib/songs";

interface PlayerContextType {
    currentProject: Project | null;
    currentSong: Song | null;
    isPlaying: boolean;
    playProject: (project: Project) => void;
    pauseProject: () => void;
    resumeProject: () => void;
    closePlayer: () => void;
    nextSong: () => void;
    prevSong: () => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
    const [currentProject, setCurrentProject] = useState<Project | null>(null);
    const [currentSong, setCurrentSong] = useState<Song | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio();
        audioRef.current.onended = () => {
            nextSong();
        };
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    useEffect(() => {
        if (currentSong && audioRef.current) {
            audioRef.current.src = currentSong.src;
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Playback failed", e));
            }
        }
    }, [currentSong]);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch(e => console.error("Playback failed", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const playProject = useCallback((project: Project) => {
        setCurrentProject(project);
        // Pick a random song or hash based on project id
        const songIndex = Math.abs(project.id.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)) % songs.length;
        setCurrentSong(songs[songIndex]);
        setIsPlaying(true);
    }, []);

    const pauseProject = useCallback(() => {
        setIsPlaying(false);
    }, []);

    const resumeProject = useCallback(() => {
        setIsPlaying(true);
    }, []);

    const closePlayer = useCallback(() => {
        setCurrentProject(null);
        setCurrentSong(null);
        setIsPlaying(false);
        if (audioRef.current) {
            audioRef.current.pause();
        }
    }, []);

    const nextSong = useCallback(() => {
        if (!currentSong) return;
        const currentIndex = songs.findIndex(s => s.src === currentSong.src);
        const nextIndex = (currentIndex + 1) % songs.length;
        setCurrentSong(songs[nextIndex]);
        setIsPlaying(true);
    }, [currentSong]);

    const prevSong = useCallback(() => {
        if (!currentSong) return;
        const currentIndex = songs.findIndex(s => s.src === currentSong.src);
        const prevIndex = (currentIndex - 1 + songs.length) % songs.length;
        setCurrentSong(songs[prevIndex]);
        setIsPlaying(true);
    }, [currentSong]);

    return (
        <PlayerContext.Provider
            value={{
                currentProject,
                currentSong,
                isPlaying,
                playProject,
                pauseProject,
                resumeProject,
                closePlayer,
                nextSong,
                prevSong,
            }}
        >
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    const context = useContext(PlayerContext);
    if (context === undefined) {
        throw new Error("usePlayer must be used within a PlayerProvider");
    }
    return context;
}
