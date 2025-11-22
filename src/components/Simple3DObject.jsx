import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls } from '@react-three/drei';

const FloatingShape = () => {
  const meshRef = useRef();

  useFrame((state) => {
    const { clock } = state;
    if (!meshRef.current) return;
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.4;
    meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.4) * 0.3;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.6}>
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.2, 0]} />
        <meshStandardMaterial
          color="#818cf8"
          metalness={0.35}
          roughness={0.2}
          emissive="#3730a3"
          emissiveIntensity={0.35}
        />
      </mesh>
    </Float>
  );
};

const Simple3DObject = () => (
  <div className="h-48 w-48 sm:h-56 sm:w-56">
    <Canvas
      shadows
      camera={{ position: [0, 0, 4], fov: 50 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 4, 2]} intensity={0.9} castShadow />
      <pointLight position={[-4, -2, -8]} intensity={0.3} />
      <FloatingShape />
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.8} />
    </Canvas>
  </div>
);

export default Simple3DObject;
