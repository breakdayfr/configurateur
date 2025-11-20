'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, Environment } from '@react-three/drei';
import { useConfigurator } from '@/store/useConfigurator';

export default function Experience() {
  const { color } = useConfigurator();

  return (
    <div className="w-full h-screen bg-gray-100">
      <Canvas shadows camera={{ position: [0, 0, 4], fov: 50 }}>
        {/* Environment : Lumière réaliste type "Studio" */}
        <Environment preset="city" />
        
        {/* Stage : Centre automatiquement le modèle et gère les ombres de base */}
        <Stage intensity={0.5} environment="city">
          {/* Placeholder : Une sphère en attendant ton modèle GLB */}
          <mesh>
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={color} roughness={0.1} />
          </mesh>
        </Stage>

        {/* Contrôles caméra */}
        <OrbitControls makeDefault minPolarAngle={0} maxPolarAngle={Math.PI / 1.9} />
      </Canvas>
    </div>
  );
}
