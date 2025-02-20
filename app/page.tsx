"use client"

import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Link from "next/link";

export default function Home() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen">
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 3, 6]
        }}
      >
        <Experience />
      </Canvas>
      
      <div className="fixed bottom-0 left-0 p-2">
        <p>Next.js based for Three.js websites</p>
        <p>full stack: Next.js, Typescript, Tailwindcss, Three.js, React Three Fiber</p>
        <p>
          extra packages:
          <Link href='https://www.npmjs.com/package/@react-three/drei' target="_blank"> @react-three/drei</Link>,
          <Link href='https://www.npmjs.com/package/r3f-perf' target="_blank"> r3f-perf</Link>,
          <Link href='https://www.npmjs.com/package/leva' target="_blank"> leva</Link>
        </p>
        
      </div>
    </div>
  );
}