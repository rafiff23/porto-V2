
import { GithubIcon, LinkIcon, ChevronLeft, ChevronRight, Presentation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom-slider.css";

interface ProjectCardProps {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  repo: string;
  projectLink: string;
  presentationLink: string;
}

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full"
    >
      <ChevronRight size={20} />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black text-white p-2 rounded-full"
    >
      <ChevronLeft size={20} />
    </button>
  );
};

export default function ProjectCard({
  title,
  description,
  images,
  tech,
  repo,
  projectLink,
  presentationLink,
}: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
  }, [ctrls, isInView]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "120px",
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-8 flex justify-center">{dots}</div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-zinc-500 slick-dot" />
    ),
    responsive: [
      { breakpoint: 1024, settings: { centerPadding: "80px" } },
      { breakpoint: 768, settings: { centerPadding: "40px" } },
      { breakpoint: 480, settings: { centerPadding: "20px" } },
    ],
  };

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative z-10 w-full rounded-3xl border border-foreground/20 bg-zinc-200 dark:bg-zinc-800 p-6"
    >
      <div className="mb-4 relative pb-4">
        <Slider {...sliderSettings}>
          {images.map((imgSrc, idx) => (
            <div key={idx} className="px-4 pb-4">
              <Image
                src={imgSrc.startsWith("/") ? imgSrc : `/images/projects/${imgSrc}`}
                alt={`${title} image ${idx + 1}`}
                width={800}
                height={450}
                className="object-contain w-full h-auto rounded-xl"
              />
            </div>
          ))}
        </Slider>
      </div>

      <h3 className="text-3xl font-bold text-foreground mb-2">
        <motion.span ref={ref} animate={ctrls} initial="hidden" variants={projectCardTitleAnimation}>
          {title}
        </motion.span>
      </h3>
      <p className="text-sm text-foreground/70">
        <motion.span ref={ref} animate={ctrls} initial="hidden" variants={projectCardDescriptionAnimation}>
          {description}
        </motion.span>
      </p>

      <motion.div ref={ref} animate={ctrls} initial="hidden" variants={projectCardLinksAnimation} className="mb-4 flex items-center gap-4 mt-4">
          {repo && repo !== "#" &&(
            <Link href={repo} target="_blank" aria-label="Open Github Repo" className="rounded-full bg-foreground p-2 hover:bg-foreground/50">
              <GithubIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800" />
            </Link>
          )}

          {projectLink && projectLink !== "#" && (
            <Link 
              href={projectLink} target="_blank" aria-label="Open Live Demo" className="rounded-full bg-foreground p-2 hover:bg-foreground/50">
              <LinkIcon className="h-6 w-6 text-zinc-100 dark:text-zinc-800" />
            </Link>
          )}

          {presentationLink && presentationLink !== "#" && (
            <Link
              href={presentationLink}
              target="_blank"
              aria-label="Open Presentation"
              className="rounded-full bg-foreground p-2 hover:bg-foreground/50"
            >
              <Presentation className="h-6 w-6 text-zinc-100 dark:text-zinc-800" />
            </Link>
          )}

        </motion.div>


      <motion.div ref={ref} animate={ctrls} initial="hidden" variants={projectCardTechAnimation} className="mt-4 flex flex-wrap gap-3">
        {tech.map((item, index) => (
          <span key={index} className="text-xs font-semibold text-foreground/50 bg-foreground/10 px-3 py-1 rounded-full">
            {item}
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
}
