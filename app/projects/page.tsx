"use client";

import { GithubIcon, LinkIcon, Presentation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

import ProjectTitleAnimate from "@/components/projects/ProjectTitleAnimate";
import ProjectBackButton from "@/components/projects/ProjectBackButton";
import { projects } from "@/lib/projectData";

export default function ProjectsPage() {
  return (
    <section className="bg-white text-black py-20 px-6 w-full">
      <ProjectTitleAnimate />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {projects.map((project, index) => {
          const ref = useRef(null);
          const isInView = useInView(ref, { once: true });
          const controls = useAnimation();

          useEffect(() => {
            if (isInView) {
              controls.start("visible");
            }
          }, [isInView, controls]);

          return (
            <motion.div
              key={index}
              ref={ref}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.6,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  },
                },
              }}
              className="rounded-3xl bg-zinc-900 text-white p-6 shadow-lg flex flex-col"
            >
              <div className="relative mb-4 w-full h-[320px] rounded-xl overflow-hidden">
              {project.images?.[0] && (
                <Image
                  src={
                    project.images[0].startsWith("/")
                      ? project.images[0]
                      : `/images/projects/${project.images[0]}`
                  }
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              )}

              </div>

              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>

              <div className="flex items-center gap-4 mb-4">
                {project.repo && project.repo !== "#" && (
                  <Link
                    href={project.repo}
                    target="_blank"
                    aria-label="Github Repo"
                    className="p-2 bg-white text-black rounded-full hover:opacity-80"
                  >
                    <GithubIcon className="h-5 w-5" />
                  </Link>
                )}
                {project.linkProject && project.linkProject !== "#" && (
                  <Link
                    href={project.linkProject}
                    target="_blank"
                    aria-label="Live Demo"
                    className="p-2 bg-white text-black rounded-full hover:opacity-80"
                  >
                    <LinkIcon className="h-5 w-5" />
                  </Link>
                )}
                {project.presentationLink && project.presentationLink !== "#" && (
                  <Link
                    href={project.presentationLink}
                    target="_blank"
                    aria-label="Presentation"
                    className="p-2 bg-white text-black rounded-full hover:opacity-80"
                  >
                    <Presentation className="h-5 w-5" />
                  </Link>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech?.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-semibold text-foreground/50 bg-foreground/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-16">
        <ProjectBackButton />
      </div>
    </section>
  );
}
