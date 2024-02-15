"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import styles from "./style.module.scss"
import { useMotionValue } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function index() {
  return (
    <div className={styles.main}>
      <Canvas className={styles.canvas}>
        <ambientLight intensity={2}/>
        <directionalLight position={[2, 1, 1]}/>
        <Cube />
      </Canvas>
    </div>
  );
}

function Cube() {

  const mesh = useRef(null);
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0),
  }

  const manageMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = e;
    const x = clientX / (innerWidth + 400);
    const y = clientY / (innerHeight + 400);
    mouse.x.set(x);
    mouse.y.set(y);
  }

  useEffect(() => {
    window.addEventListener("mousemove", manageMouseMove);

    return () => window.removeEventListener("mouse", manageMouseMove)
  }, [])

  return (
      <motion.mesh ref={mesh} rotation-x={mouse.y} rotation-y={mouse.x}>
        <dodecahedronGeometry />
        <meshPhongMaterial color={"orange"} />
      </motion.mesh>
  );
}
