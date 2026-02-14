"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";

interface SliderProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export default function Slider({ beforeImage, afterImage, beforeLabel = "Before", afterLabel = "After" }: SliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (containerRef.current) {
            const rect = containerRef.current.getBoundingClientRect();
            const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
            const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
            setSliderPosition(percent);
        }
    }, []);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (isDragging) handleMove(e.clientX);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (isDragging) handleMove(e.touches[0].clientX);
        };

        const handleWindowMouseUp = () => setIsDragging(false);

        if (isDragging) {
            window.addEventListener("mousemove", handleMouseMove);
            window.addEventListener("touchmove", handleTouchMove);
            window.addEventListener("mouseup", handleWindowMouseUp);
            window.addEventListener("touchend", handleWindowMouseUp);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("mouseup", handleWindowMouseUp);
            window.removeEventListener("touchend", handleWindowMouseUp);
        };
    }, [isDragging, handleMove]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-video rounded-3xl overflow-hidden cursor-ew-resize select-none border border-white/10 group bg-black"
            onMouseDown={handleMouseDown}
            onTouchStart={handleMouseDown}
            onClick={(e) => handleMove(e.clientX)}
        >
            {/* After Image (Background) */}
            <Image
                src={afterImage}
                alt="After Optimization"
                fill
                className="object-cover"
                draggable={false}
            />
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-green-400 border border-white/10 z-10">
                {afterLabel}
            </div>

            {/* Before Image (Foreground - Clipped) */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{ width: `${sliderPosition}%` }}
            >
                <Image
                    src={beforeImage}
                    alt="Before Optimization"
                    fill
                    className="object-cover"
                    draggable={false}
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-red-400 border border-white/10 z-10">
                    {beforeLabel}
                </div>
            </div>

            {/* Slider Handle */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 flex items-center justify-center -ml-0.5 group-hover:scale-110 transition-transform"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                </div>
            </div>
        </div>
    );
}
