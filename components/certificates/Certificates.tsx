"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimateTitle from "../about/AnimateTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useWindowSize } from "@/hooks/useWindowSize";
import { LinkIcon } from "lucide-react";

const certificates = [
  {
    title: "Business Intelligence",
    provider: "Algoritma Data Science School",
    year: "2023",
    image: "/images/certificate-1.jpg",
    link: "https://example.com/certificate-1",
  },
  {
    title: "Full Stack Data Science",
    provider: "Algoritma Data Science School",
    year: "2022",
    image: "/images/certificate-2.jpg",
    link: "https://example.com/certificate-2",
  },
  {
    title: "Publication Author",
    provider: "ICCSCI",
    year: "2023",
    image: "/images/certificate-3.jpg",
    link: "https://example.com/certificate-3",
  },
  {
    title: "Publication Author",
    provider: "ICICoS",
    year: "2024",
    image: "/images/certificate-4.jpg",
    link: "https://example.com/certificate-4",
  },
];

type CertificateType = {
  title: string;
  provider: string;
  year: string;
  image: string;
  link: string;
};

const Certificates = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateType | null>(null);

  return (
    <section className="py-8 md:py-12 px-4 md:px-10 max-w-7xl mx-auto mb-8 w-full">
      <AnimateTitle
        title="Certificates"
        className="text-left text-[32px] sm:text-[40px] md:text-[56px] lg:text-[72px] font-bold leading-tight mb-8"
        wordSpace="mr-[10px]"
        charSpace="mr-[0.01em]"
      />

      {isMobile ? (
        <div className="w-full overflow-visible">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            spaceBetween={16}
            slidesPerView={"auto"}
            grabCursor={true}
            className="w-full"
          >
            {certificates.map((cert, index) => (
              <SwiperSlide key={index} className="w-full">
                <div
                  className="cursor-pointer border rounded-xl p-4 shadow-md bg-zinc-900 hover:bg-zinc-800 text-white w-full flex flex-col h-auto overflow-hidden"
                  onClick={() => setSelectedCertificate(cert)}
                >
                  <div className="mb-3 w-full relative overflow-hidden">
                    <div className="relative w-full h-[300px] sm:h-[340px] md:h-[360px] lg:h-[400px]">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain rounded-lg pointer-events-none"
                      />
                    </div>
                  </div>
                  <h3 className="text-base font-semibold mb-1">{cert.title}</h3>
                  <p className="text-sm text-gray-300">{cert.provider}</p>
                  <p className="text-sm text-gray-400">{cert.year}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="overflow-x-hidden w-full max-h-[500px]">
          <motion.div
            className="flex gap-6 w-max items-start"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 50,
                ease: "linear",
              },
            }}
          >
            {[...certificates, ...certificates].map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="cursor-pointer min-w-[240px] lg:min-w-[260px] border rounded-2xl p-4 shadow-md bg-zinc-900 hover:bg-zinc-800 text-white flex-shrink-0"
                onClick={() => setSelectedCertificate(cert)}
              >
                <div className="mb-3 w-full relative overflow-hidden">
                  <div className="relative w-full h-[300px] sm:h-[340px] md:h-[360px] lg:h-[250px]">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-contain rounded-lg pointer-events-none"
                    />
                  </div>
                </div>
                <h3 className="text-base font-semibold mb-1">{cert.title}</h3>
                <p className="text-sm text-gray-300">{cert.provider}</p>
                <p className="text-sm text-gray-400">{cert.year}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

      {/* MODAL POPUP */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-[9999] bg-black bg-opacity-80 flex items-center justify-center"
          onClick={() => setSelectedCertificate(null)}
        >
          <div
            className="relative bg-zinc-900 px-4 md:px-6 pt-6 pb-6 rounded-xl max-w-5xl w-[90vw] max-h-[90vh] flex flex-col justify-center items-center overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setSelectedCertificate(null)}
              className="absolute top-4 right-4 bg-black bg-opacity-60 text-white rounded-full p-2 transition hover:bg-opacity-80 hover:scale-110 z-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 pointer-events-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* IMAGE PREVIEW */}
            <div className="w-full h-[60vh] sm:h-[70vh] relative mb-4 overflow-hidden rounded-lg z-40">
              <Image
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                fill
                className="object-contain pointer-events-none"
              />
            </div>

            {/* LINK ICON */}
            <div className="absolute bottom-4 left-4 z-50">
              <a
                href={selectedCertificate.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Certificate Link"
                className="inline-flex items-center justify-center p-2 rounded-full bg-white/10 hover:bg-white/20 transition-transform duration-300 hover:scale-110"
              >
                <LinkIcon className="h-8 w-8 text-white" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
