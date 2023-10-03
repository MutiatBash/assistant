// import React, { useRef, useState } from "react";
// import * as THREE   from "three";
// import { useFrame } from "react-three-fiber";

// export const Assistant = () => {
//   const assistantRef = useRef();

//   useFrame(() => {
//     assistantRef.current.rotation.x += 0.01;
//     assistantRef.current.rotation.y += 0.01;
//   });

//   return (
//     <mesh ref={assistantRef}>
//       <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />{" "}
//       <meshStandardMaterial attach="material" color="blue" />{" "}
//     </mesh>
//   );
// };
