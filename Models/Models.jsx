"use client";

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Model(props) {
  const { nodes, materials } = useGLTF("/t-shirt.glb");

  const groupRef = useRef();

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    groupRef.current.rotation.y += delta * 0.5;
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.AM_102_035_003_AM_102_035_002_0.geometry}
        material={materials.AM_102_035_002}
      />
    </group>
  );
}

useGLTF.preload("/t-shirt.glb");