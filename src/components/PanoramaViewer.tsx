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

export default function PanoramaViewer({ imagePath }: { imagePath: string }) {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 0.1] }}>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableDamping 
          autoRotate 
          autoRotateSpeed={0.8} 
          rotateSpeed={-0.4} 
        />
        <Suspense fallback={null}>
          <SphereImage imagePath={imagePath} />
        </Suspense>
      </Canvas>
    </div>
  );
}
