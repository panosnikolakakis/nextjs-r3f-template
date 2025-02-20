import { Html, OrbitControls } from "@react-three/drei"

export default function Experience() {
  return (
    <>
      <OrbitControls />

      <directionalLight position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial color="#C2A734" />
        <Html
          position={[-0.5, 0, 0.5]}
          className="font-mono absolute bg-[#00000088] text-white p-[15px] whitespace-nowrap rounded-[30px] select-none"        
          center
        >
          Next.js, typescript, tailwindcss, R3F
        </Html>
      </mesh>
    </>
  )
}