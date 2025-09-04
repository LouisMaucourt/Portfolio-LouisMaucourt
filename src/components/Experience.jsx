"use client";
import { OrbitControls, useFBO } from "@react-three/drei";
import {
  Canvas,
  useFrame,
  extend,
  createPortal,
  useThree,
} from "@react-three/fiber";
import { useMemo, useRef, useEffect } from "react";
import * as THREE from "three";

import SimulationMaterial from "../shaders/SimulationMaterial";

import vertexShader from "../shaders/vertexShader";
import fragmentShader from "../shaders/fragmentShader";

extend({ SimulationMaterial: SimulationMaterial });

const FBOParticles = () => {
  const size = 128;
  const { gl } = useThree();

  const points = useRef();
  const simulationMaterialRef = useRef();

  // Create persistent scene and camera for FBO rendering
  const scene = useMemo(() => new THREE.Scene(), []);
  const orthoCamera = useMemo(
    () => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1),
    [],
  );

  const positions = useMemo(
    () =>
      new Float32Array([
        -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
      ]),
    [],
  );

  const uvs = useMemo(
    () =>
      new Float32Array([
        0,
        0, // bottom-left
        1,
        0, // bottom-right
        1,
        1, // top-right
        0,
        0, // bottom-left
        1,
        1, // top-right
        0,
        1, // top-left
      ]),
    [],
  );

  // Create two render targets for ping-pong rendering
  const renderTarget1 = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  const renderTarget2 = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  // Track current render targets
  const currentTarget = useRef(renderTarget1);
  const previousTarget = useRef(renderTarget2);

 const particlesPosition = useMemo(() => {
  const length = size * size;
  const particles = new Float32Array(length * 3);
  for (let i = 0; i < length; i++) {
    let i3 = i * 3;
    particles[i3 + 0] = (i % size) / size;
    particles[i3 + 1] = i / size / size;
    particles[i3 + 2] = 0;
  }
  return particles;
}, []);

  const uniforms = useMemo(
    () => ({
      uPositions: {
        value: null,
      },
    }),
    [],
  );

  // Initialize the FBO with initial particle positions
useEffect(() => {
  if (simulationMaterialRef.current) {
    // Render initial state to both targets
    gl.setRenderTarget(renderTarget1);
    gl.clear();
    gl.render(scene, orthoCamera);

    gl.setRenderTarget(renderTarget2);
    gl.clear();
    gl.render(scene, orthoCamera);

    gl.setRenderTarget(null);
  }
}, [gl, scene, orthoCamera, renderTarget1, renderTarget2]);

  useFrame((state) => {
    const { clock } = state;

    if (simulationMaterialRef.current && points.current?.material) {
      // Update simulation material uniforms
      simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;

      // Pass previous frame's result as input to simulation
      if (simulationMaterialRef.current.uniforms.uTexture) {
        simulationMaterialRef.current.uniforms.uTexture.value =
          previousTarget.current.texture;
      }

      // Render simulation to current target
      gl.setRenderTarget(currentTarget.current);
      gl.clear();
      gl.render(scene, orthoCamera);
      gl.setRenderTarget(null);

      // Update particle material with new positions
      points.current.material.uniforms.uPositions.value =
        currentTarget.current.texture;

      // Swap render targets for ping-pong
      const temp = currentTarget.current;
      currentTarget.current = previousTarget.current;
      previousTarget.current = temp;
    }
  });

  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              count={uvs.length / 2}
              array={uvs}
              itemSize={2}
            />
          </bufferGeometry>
        </mesh>,
        scene,
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
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

const Scene = () => {
  return (
    <Canvas
      camera={{ position: [1.5, 1.5, 2.5] }}
      style={{
        width: "100%",
        height: "96vh",
        display: "block",
      }}
      gl={{
        antialias: false,
        alpha: true,
        preserveDrawingBuffer: false,
      }}
    >
      {/* <ambientLight intensity={0.1} /> */}
      <FBOParticles />
      <OrbitControls
        autoRotate
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
};

export default Scene;