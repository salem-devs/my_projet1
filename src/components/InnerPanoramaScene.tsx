'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from 'react';

function SphereImage({ imagePath }: { imagePath: string }) {
  const texture = useTexture(imagePath);

  return (
    <mesh>
      <sphereGeometry args={[500, 60, 40]} />
      <meshBasicMaterial map={texture} side={THREE.BackSide} />
    </mesh>
  );
}

export default function InnerPanoramaScene({ imagePath }: { imagePath: string }) {
  return (
    <Canvas camera={{ position: [0, 0, 0.1] }}>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.8}
      />
      <Suspense fallback={null}>
        <SphereImage imagePath={imagePath} />
      </Suspense>
    </Canvas>
  );
}