import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Point, Line, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { profile } from '@/data/profile';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useGpuProfile } from '@/hooks/useGpuProfile';

// Data Pipeline Motif - Node/Edge Stream Graph
const DataPipelineMotif: React.FC<{ opacity: number }> = ({ opacity }) => {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((state) => {
    if (!prefersReducedMotion && groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  const nodes = useMemo(() => {
    const nodePositions: [number, number, number][] = [];
    profile.sceneMap.dataEngineering.slice(0, 6).forEach((_, i) => {
      const angle = (i / 6) * Math.PI * 2;
      const radius = 3 + Math.sin(i) * 0.5;
      nodePositions.push([
        Math.cos(angle) * radius,
        Math.sin(i * 0.5) * 2,
        Math.sin(angle) * radius
      ]);
    });
    return nodePositions;
  }, []);

  const connections = useMemo(() => {
    const lines: [number, number, number][][] = [];
    for (let i = 0; i < nodes.length; i++) {
      const nextIndex = (i + 1) % nodes.length;
      lines.push([nodes[i], nodes[nextIndex]]);
    }
    return lines;
  }, [nodes]);

  return (
    <group ref={groupRef} position={[-4, 0, -2]}>
      {/* Data Nodes */}
      <Points limit={nodes.length}>
        <pointsMaterial 
          size={0.1} 
          color="#14B8A6" 
          transparent 
          opacity={opacity * 0.8}
          sizeAttenuation={false}
        />
        {nodes.map((position, i) => (
          <Point key={i} position={position} />
        ))}
      </Points>
      
      {/* Data Flow Connections */}
      {connections.map((line, i) => (
        <Line
          key={i}
          points={line}
          color="#14B8A6"
          lineWidth={1}
          transparent
          opacity={opacity * 0.3}
        />
      ))}
      
      {/* Flowing Particles */}
      {!prefersReducedMotion && connections.map((line, i) => (
        <FlowingParticle 
          key={i} 
          start={line[0]} 
          end={line[1]} 
          opacity={opacity}
          delay={i * 0.2}
        />
      ))}
    </group>
  );
};

// Neural Systems Motif - Low-poly Neural Sphere
const NeuralSystemMotif: React.FC<{ opacity: number }> = ({ opacity }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((state) => {
    if (!prefersReducedMotion && meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group position={[0, 1, 0]}>
      <Float speed={prefersReducedMotion ? 0 : 1} rotationIntensity={prefersReducedMotion ? 0 : 0.2}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[2, 1]} />
          <meshBasicMaterial 
            color="#7C3AED" 
            wireframe 
            transparent 
            opacity={opacity * 0.6}
          />
        </mesh>
        
        {/* Neural Pulses */}
        {!prefersReducedMotion && (
          <mesh>
            <sphereGeometry args={[2.2, 16, 16]} />
            <meshBasicMaterial 
              color="#7C3AED" 
              transparent 
              opacity={opacity * 0.1}
            />
          </mesh>
        )}
      </Float>
      
      {/* Surrounding Neural Nodes */}
      <Points limit={20}>
        <pointsMaterial 
          size={0.05} 
          color="#7C3AED" 
          transparent 
          opacity={opacity * 0.7}
        />
        {Array.from({ length: 20 }, (_, i) => {
          const angle = (i / 20) * Math.PI * 2;
          const radius = 3.5;
          return (
            <Point 
              key={i} 
              position={[
                Math.cos(angle) * radius,
                Math.sin(i * 0.3) * 1.5,
                Math.sin(angle) * radius
              ]} 
            />
          );
        })}
      </Points>
    </group>
  );
};

// MLOps/CI-CD Motif - Infinity Loop Orbits
const MLOpsMotif: React.FC<{ opacity: number }> = ({ opacity }) => {
  const groupRef = useRef<THREE.Group>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useFrame((state) => {
    if (!prefersReducedMotion && groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.2;
    }
  });

  const infinityPath = useMemo(() => {
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= 64; i++) {
      const t = (i / 64) * Math.PI * 2;
      const scale = 2;
      const x = scale * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t));
      const y = scale * Math.sin(t) * Math.cos(t) / (1 + Math.sin(t) * Math.sin(t));
      points.push(new THREE.Vector3(x, y, 0));
    }
    return points;
  }, []);

  return (
    <group ref={groupRef} position={[4, -1, -1]}>
      {/* Infinity Loop */}
      <Line
        points={infinityPath}
        color="#F59E0B"
        lineWidth={2}
        transparent
        opacity={opacity * 0.5}
      />
      
      {/* Orbiting Pods */}
      {!prefersReducedMotion && (
        <>
          <OrbitingPod path={infinityPath} offset={0} opacity={opacity} />
          <OrbitingPod path={infinityPath} offset={0.33} opacity={opacity} />
          <OrbitingPod path={infinityPath} offset={0.66} opacity={opacity} />
        </>
      )}
    </group>
  );
};

// Helper Components
const FlowingParticle: React.FC<{
  start: [number, number, number];
  end: [number, number, number];
  opacity: number;
  delay: number;
}> = ({ start, end, opacity, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = (Math.sin(state.clock.elapsedTime * 2 + delay) + 1) / 2;
      meshRef.current.position.lerpVectors(
        new THREE.Vector3(...start),
        new THREE.Vector3(...end),
        t
      );
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.02]} />
      <meshBasicMaterial color="#14B8A6" transparent opacity={opacity * 0.8} />
    </mesh>
  );
};

const OrbitingPod: React.FC<{
  path: THREE.Vector3[];
  offset: number;
  opacity: number;
}> = ({ path, offset, opacity }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current && path.length > 0) {
      const t = (state.clock.elapsedTime * 0.5 + offset) % 1;
      const index = Math.floor(t * (path.length - 1));
      const nextIndex = (index + 1) % path.length;
      const localT = (t * (path.length - 1)) % 1;
      
      meshRef.current.position.lerpVectors(path[index], path[nextIndex], localT);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.05]} />
      <meshBasicMaterial color="#F59E0B" transparent opacity={opacity} />
    </mesh>
  );
};

// Main Skillverse Component
const SkillverseScene: React.FC<{ intensity?: number }> = ({ intensity = 0.25 }) => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const gpuProfile = useGpuProfile();

  // Adjust intensity based on GPU capabilities and user preferences
  const effectiveIntensity = prefersReducedMotion ? 0.05 : 
    (gpuProfile.enableHeavyEffects ? intensity : intensity * 0.5);

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 5]} intensity={0.3} />
      
      {/* 3D Skill Motifs */}
      <DataPipelineMotif opacity={effectiveIntensity} />
      <NeuralSystemMotif opacity={effectiveIntensity} />
      <MLOpsMotif opacity={effectiveIntensity} />
    </>
  );
};

// Main Export Component
export const Skillverse: React.FC<{ 
  className?: string; 
  intensity?: number; 
}> = ({ className = '', intensity = 0.25 }) => {
  const gpuProfile = useGpuProfile();
  
  // Fallback for low-tier devices
  if (!gpuProfile.enableHeavyEffects) {
    return (
      <div className={`absolute inset-0 pointer-events-none ${className}`}>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, rgba(20, 184, 166, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 30%, rgba(124, 58, 237, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 60% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)
            `
          }}
        />
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 50 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: gpuProfile.tier === 'high',
          alpha: true,
          powerPreference: 'high-performance'
        }}
      >
        <SkillverseScene intensity={intensity} />
      </Canvas>
    </div>
  );
};