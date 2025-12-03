import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points, Preload } from '@react-three/drei';
import { useReducedMotion } from 'framer-motion';

const generatePositions = (count, radius) => {
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const r = radius * Math.cbrt(Math.random());
    const sinPhi = Math.sin(phi);
    const index = i * 3;
    positions[index] = r * sinPhi * Math.cos(theta);
    positions[index + 1] = r * Math.cos(phi);
    positions[index + 2] = r * sinPhi * Math.sin(theta);
  }
  return positions;
};

const ParticleField = ({ count = 1800, radius = 6, animate }) => {
  const groupRef = useRef(null);
  const positions = useMemo(() => generatePositions(count, radius), [count, radius]);

  useFrame((_, delta) => {
    if (!animate || !groupRef.current) {
      return;
    }
    groupRef.current.rotation.y += delta * 0.05;
    groupRef.current.rotation.x += delta * 0.015;
  });

  return (
    <group ref={groupRef} rotation={[0, 0, 0]}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#94a3ff"
          size={0.045}
          sizeAttenuation
          depthWrite={false}
          opacity={0.4}
        />
      </Points>
    </group>
  );
};

const BackgroundParticles = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 9], fov: 55 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
        frameloop={reduceMotion ? 'demand' : 'always'}
      >
        <ambientLight intensity={0.25} />
        <ParticleField animate={!reduceMotion} />
        <Preload all />
      </Canvas>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.12),transparent_65%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/18 to-slate-950/55" />
    </div>
  );
};

export default BackgroundParticles;
