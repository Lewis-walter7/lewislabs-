"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [cursorMode, setCursorMode] = useState<string>('default');
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

            // Detect cursor mode
            const mode = target.getAttribute('data-cursor') ||
                target.closest('[data-cursor]')?.getAttribute('data-cursor');
            setCursorMode(mode || 'default');
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

    const getCursorLabel = () => {
        switch (cursorMode) {
            case 'view': return 'VIEW';
            case 'plus': return '+';
            case 'play': return 'PLAY';
            case 'send': return 'SEND';
            default: return '';
        }
    };

    return (
        <>
            {/* Main cursor */}
            <motion.div
                ref={cursorRef}
                className="custom-cursor fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
                style={{
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <motion.div
                    className={`rounded-full border border-white flex items-center justify-center transition-all duration-300 ${cursorMode !== 'default' ? 'w-16 h-16 bg-white' : 'w-8 h-8'
                        }`}
                    animate={{
                        width: cursorMode !== 'default' ? 80 : 32,
                        height: cursorMode !== 'default' ? 80 : 32,
                    }}
                    style={{
                        mixBlendMode: cursorMode !== 'default' ? 'normal' : 'difference',
                    }}
                >
                    {cursorMode !== 'default' && (
                        <span className="text-black text-[10px] font-black tracking-widest">
                            {getCursorLabel()}
                        </span>
                    )}
                </motion.div>
            </motion.div>

            {/* Trailing dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998]"
                animate={{
                    x: mousePosition.x,
                    y: mousePosition.y,
                    opacity: isHovering || cursorMode !== 'default' ? 0 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.1,
                }}
                style={{
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            >
                <div
                    className="w-1.5 h-1.5 rounded-full bg-white"
                    style={{
                        mixBlendMode: 'difference',
                    }}
                />
            </motion.div>
        </>
    );
}
