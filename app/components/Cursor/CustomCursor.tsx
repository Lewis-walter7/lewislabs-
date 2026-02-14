"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);

    // Track mouse position
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over interactive element
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.hasAttribute('data-magnetic') ||
                target.closest('[data-magnetic]') !== null;

            setIsHovering(isInteractive);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Hide cursor on mobile/touch devices
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window);
    }, []);

    if (isTouchDevice) {
        return null;
    }

    return (
        <>
            {/* Main cursor */}
            <motion.div
                ref={cursorRef}
                className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999]"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                <div
                    className="w-8 h-8 rounded-full border-2 border-white"
                    style={{
                        mixBlendMode: 'difference',
                    }}
                />
            </motion.div>

            {/* Trailing dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x - 2,
                    y: mousePosition.y - 2,
                    opacity: isHovering ? 0 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
            >
                <div
                    className="w-1 h-1 rounded-full bg-white"
                    style={{
                        mixBlendMode: 'difference',
                    }}
                />
            </motion.div>
        </>
    );
}
