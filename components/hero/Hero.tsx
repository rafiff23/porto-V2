"use client";

import { motion } from "framer-motion";
import Image from "next/image";
// import HeroText from "./HeroText";
import ParallaxText from "./ParallaxText";
import HeroGraphic from "./HeroGraphic";
import DigitalGlobe from "../DigitalGlobe";

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="relative z-10 flex min-h-screen w-full flex-col items-center justify-start pt-20
    bg-[url('/images/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
      animate="animate"
    >
      {/* ✅ Overlay image di atas segalanya */}
      {/* <Image
        src="/images/hero-overlay.png"
        alt="Hero Overlay"
        fill
        className="absolute top-0 left-0 w-full h-full object-cover z-50 pointer-events-none"
      /> */}

      <HeroGraphic />
      {/* <HeroText /> */}

      {/* ⬇️ Ubah ParallaxText jadi z-10 agar DI BAWAH overlay */}
      <div className="absolute bottom-24 left-0 w-full z-[60] overflow-hidden">
        <div className="mt-24">
          <ParallaxText direction={500} baseVelocity={-1}>
            Data Analyst - Business Analyst
          </ParallaxText>
          <ParallaxText direction={-500} baseVelocity={1}>
            Data Scientist - Machine Learning Engineer
          </ParallaxText>
        </div>
      </div>

      {/* <div className="absolute top-2 left-0 w-full z-[60] overflow-hidden">
        <div className="mt-24">
          <ParallaxText direction={500} baseVelocity={-1}>
            MUHAMMAD RAFIF
          </ParallaxText>
        </div>
      </div> */}

      <div className="absolute top-2 left-0 w-full z-[60] overflow-hidden">
        <div className="mt-24">
          <ParallaxText direction={500} baseVelocity={-1}>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight">
              MUHAMMAD RAFIF
            </span>
          </ParallaxText>
        </div>
      </div>



      {/* ⬇️ Juga turunkan z-index bagian Locate */}
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute left-0 top-[50%] hidden h-[121px] w-[350px] flex-col items-start justify-center rounded-br-full rounded-tr-full bg-zinc-800 px-5 dark:bg-zinc-100 lg:flex z-10"
      >
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          Locate
        </p>
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          in Jakarta
        </p>
        <p className="text-md font-medium text-zinc-200 dark:text-zinc-600">
          DKI Jakarta, Indonesia
        </p>
        <DigitalGlobe className="absolute right-3 top-[10%]" />
      </motion.div>
    </motion.section>
  );
}
