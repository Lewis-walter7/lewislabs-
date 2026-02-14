"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, Stars } from "@react-three/drei";
import { Suspense } from "react";
import FloatingShapes from "./FloatingShapes";

export default function Scene() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none"> {/* z-0 to sit behind text */}
            <Canvas gl={{ antialias: true, alpha: true }} dpr={[1, 1]}>
                <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />

                <ambientLight intensity={0.5} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />

                <Suspense fallback={null}>
                    <FloatingShapes />
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/20 via-transparent to-black pointer-events-none"></div>
        </div>
    );
}
