import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { VRButton } from 'three/examples/jsm/webxr/VRButton';

function Cube() {
  const mesh = useRef();

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={[0, 1, -1]}>
      <boxGeometry args={[0.2, 0.2, 0.2]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

export default function App() {
  return (
    <div>
      <Canvas
        onCreated={({ gl }) => {
          gl.xr.enabled = true;
          document.body.appendChild(VRButton.createButton(gl));
        }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Cube />
      </Canvas>
    </div>
  );
}
