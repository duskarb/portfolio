"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipForward, SkipBack, X, Maximize2 } from "lucide-react";
import { usePlayer } from "@/lib/player-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function NowPlayingBar() {
    const { currentProject, currentSong, isPlaying, pauseProject, resumeProject, closePlayer, nextSong, prevSong } = usePlayer();
    const [isExpanded, setIsExpanded] = useState(false);

    if (!currentProject || !currentSong) return null;

    const togglePlay = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (isPlaying) {
            pauseProject();
        } else {
            resumeProject();
        }
    };

    return (
        <div className="fixed bottom-20 md:bottom-6 left-0 right-0 z-40 px-4 md:px-6 flex justify-center pointer-events-none">
            <motion.div
                initial={{ y: 100, opacity: 0, scale: 0.95 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 100, opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 20, stiffness: 300 }}
                className="pointer-events-auto w-full max-w-3xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 shadow-2xl rounded-2xl p-3 flex items-center gap-4 group hover:bg-white/90 dark:hover:bg-gray-900/90 transition-colors"
                onClick={() => setIsExpanded(true)}
            >
                {/* Thumbnail */}
                <div className="relative h-12 w-12 rounded-lg overflow-hidden shadow-md flex-shrink-0 bg-gray-200 dark:bg-gray-800">
                    <img
                        src={currentProject.thumbnail}
                        alt={currentProject.title}
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0 flex flex-col justify-center cursor-pointer">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 truncate">
                        {currentSong.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {currentSong.artist} — {currentProject.title}
                    </p>
                </div>

                {/* Controls */}
                <div className="flex items-center gap-2 md:gap-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500 hover:text-gray-900 dark:hover:text-white hidden sm:inline-flex"
                        onClick={(e) => {
                            e.stopPropagation();
                            prevSong();
                        }}
                    >
                        <SkipBack className="h-5 w-5 fill-current" />
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-10 w-10 text-gray-900 dark:text-white hover:scale-105 transition-transform"
                        onClick={togglePlay}
                    >
                        {isPlaying ? (
                            <Pause className="h-6 w-6 fill-current" />
                        ) : (
                            <Play className="h-6 w-6 fill-current" />
                        )}
                    </Button>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-500 hover:text-gray-900 dark:hover:text-white hidden sm:inline-flex"
                        onClick={(e) => {
                            e.stopPropagation();
                            nextSong();
                        }}
                    >
                        <SkipForward className="h-5 w-5 fill-current" />
                    </Button>

                    <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 mx-1 hidden sm:block" />

                    <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-gray-900 dark:hover:text-white"
                        onClick={(e) => {
                            e.stopPropagation();
                            closePlayer();
                        }}
                    >
                        <X className="h-4 w-4" />
                    </Button>
                </div>
            </motion.div>
        </div>
    );
}
