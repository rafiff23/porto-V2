"use client";

import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";
import { Suspense } from "react";

export default function HeroGraphic() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
    >
      <Canvas
        className="h-1/2 w-1/2 cursor-grab"
        camera={{ fov: 40, position: [0, 0, 5] }}
        gl={{ antialias: true }}
      >
        <Suspense fallback={null}>
          {/* PixelatedSphere removed */}
        </Suspense>
      </Canvas>
    </motion.div>
  );
}