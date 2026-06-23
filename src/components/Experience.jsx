"use client";
import { OrbitControls, useFBO } from "@react-three/drei";
import { Canvas, useFrame, extend, createPortal, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import SimulationMaterial from "../shaders/SimulationMaterial";
import vertexShader from "../shaders/vertexShader";
import fragmentShader from "../shaders/fragmentShader";

extend({ SimulationMaterial });

const SIZE = 128;

const FBOParticles = () => {
  const { gl } = useThree();
  const points = useRef();
  const simRef = useRef();
  const scene = useMemo(() => new THREE.Scene(), []);
  const camera = useMemo(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1e-10, 1), []);

  const fboOptions = {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  };
  const fbo1 = useFBO(SIZE, SIZE, fboOptions);
  const fbo2 = useFBO(SIZE, SIZE, fboOptions);
  const current = useRef(fbo1);
  const previous = useRef(fbo2);

  const positions = useMemo(() => new Float32Array([-1,-1,0, 1,-1,0, 1,1,0, -1,-1,0, 1,1,0, -1,1,0]), []);
  const uvs = useMemo(() => new Float32Array([0,0, 1,0, 1,1, 0,0, 1,1, 0,1]), []);

  const particlesPosition = useMemo(() => {
    const arr = new Float32Array(SIZE * SIZE * 3);
    for (let i = 0; i < SIZE * SIZE; i++) {
      arr[i * 3]     = (i % SIZE) / SIZE;
      arr[i * 3 + 1] = Math.floor(i / SIZE) / SIZE;
    }
    return arr;
  }, []);

  const uniforms = useMemo(() => ({ uPositions: { value: null } }), []);

  useFrame(({ clock }) => {
    if (!simRef.current || !points.current?.material) return;

    simRef.current.uniforms.uTime.value = clock.elapsedTime;
    if (simRef.current.uniforms.uTexture)
      simRef.current.uniforms.uTexture.value = previous.current.texture;

    gl.setRenderTarget(current.current);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    points.current.material.uniforms.uPositions.value = current.current.texture;
    [current.current, previous.current] = [previous.current, current.current];
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simRef} args={[SIZE]} />
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" count={6} array={positions} itemSize={3} />
            <bufferAttribute attach="attributes-uv" count={6} array={uvs} itemSize={2} />
          </bufferGeometry>
        </mesh>,
        scene,
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={SIZE * SIZE} array={particlesPosition} itemSize={3} />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
};

const Scene = () => (
  <Canvas
    camera={{ position: [1.5, 1.5, 2.5] }}
    style={{ width: "100%", height: "96vh", animation: "fadeIn 1.2s ease forwards" }}
    gl={{ antialias: false, alpha: true, preserveDrawingBuffer: false }}
  >
    <FBOParticles />
    <OrbitControls autoRotate enableZoom={false} enablePan={false} enableRotate={false} />
  </Canvas>
);

export default Scene;