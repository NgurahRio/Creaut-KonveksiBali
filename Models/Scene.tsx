"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { Model } from "./Models";

export default function Scene() {
    return (
        <Canvas

            shadows
            camera={{
                position: [150, 100, 0],
                fov: 50,
            }}
        >
            <Suspense fallback={null}>
                <ambientLight intensity={1.5} />
                {/* 
                <directionalLight
                    position={[5, 5, 5]}
                    intensity={2}
                    castShadow
                /> */}

                <Model scale={1.5} />

                <Environment preset="studio" />

                <OrbitControls
                    enableZoom={false}
                    minPolarAngle={Math.PI / 2}
                    maxPolarAngle={Math.PI / 2}
                />
            </Suspense>
        </Canvas>
    );
}