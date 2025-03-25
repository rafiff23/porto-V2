"use client";

import About from "@/components/about/About";
import Hero from "@/components/hero/Hero";
import Nav from "@/components/navbar/Nav";
import Preload from "@/components/preload/Preload";
import Projects from "@/components/projects/Projects";
import FAQ from "@/components/faq/Faq";
import Contact from "@/components/contact/Contact";
import Certificates from "@/components/certificates/Certificates";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [loadingPreloader, setLoadingPreloader] = useState<boolean>(false);
  const [endedLoading, setEndedLoading] = useState<boolean>(false);

  useEffect(() => {
    const body = document.querySelector("body");

    const hasVisited = sessionStorage.getItem("hasVisited");

    if (!hasVisited) {
      setLoadingPreloader(true);
      sessionStorage.setItem("hasVisited", "true");

      body?.classList.add("overflow-hidden");

      setTimeout(() => {
        setLoadingPreloader(false);
      }, 4000);
      setTimeout(() => {
        setEndedLoading(true);
      }, 3000);
    } else {
      setLoadingPreloader(false);
      body?.classList.remove("overflow-hidden");
    }
  }, []);

  if (loadingPreloader) {
    return (
      <AnimatePresence mode="wait" initial={true}>
        <Preload endedLoading={endedLoading} />
      </AnimatePresence>
    );
  }

  return (
    <>
      <Nav />
      <main data-scroll-container className="flex flex-col items-center">
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <FAQ />
        <div className="w-full h-24 bg-zinc-900 dark:bg-zinc-100"></div>
        <Contact />
      </main>
    </>
  );
}
