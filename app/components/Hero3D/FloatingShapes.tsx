"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

export default function FloatingShapes() {
    const meshRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        // Slow rotation
        meshRef.current.rotation.x += 0.002;
        meshRef.current.rotation.y += 0.003;

        // Subtle mouse parallax
        const { x, y } = state.pointer;
        meshRef.current.rotation.x += y * 0.0005;
        meshRef.current.rotation.y += x * 0.0005;
    });

    return (
        <group ref={meshRef}>


            <Float speed={2} rotationIntensity={2} floatIntensity={1.5}>
                {/* Secondary Torus - Represents "Infinity/Flow" */}
                <mesh position={[-3, -2, -2]} scale={1.5} rotation={[0.5, 0, 0]}>
                    <torusKnotGeometry args={[0.8, 0.2, 100, 16]} />
                    <MeshTransmissionMaterial
                        backside
                        backsideThickness={2}
                        thickness={1}
                        chromaticAberration={0.5}
                        anisotropy={0.5}
                        color="#0ea5e9"
                        samples={6}
                        resolution={512}
                        background={new THREE.Color("#000000")}
                    />
                </mesh>
            </Float>


        </group>
    );
}
