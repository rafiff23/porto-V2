'use client';

import { FaLinkedin, FaGithub, FaTiktok, FaInstagram } from 'react-icons/fa';
import { SiResearchgate } from 'react-icons/si';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function SocialMedia() {
  const socials = [
    { name: 'linkedin', icon: <FaLinkedin size={28} />, url: 'https://www.linkedin.com/in/muhammad-rafif-838938232/' },
    { name: 'github', icon: <FaGithub size={28} />, url: 'https://github.com/rafiff23' },
    { name: 'tiktok', icon: <FaTiktok size={28} />, url: 'https://www.tiktok.com/@rafiff24' },
    { name: 'instagram', icon: <FaInstagram size={28} />, url: 'https://www.instagram.com/rafiff23/' },
    { name: 'researchgate', icon: <SiResearchgate size={28} />, url: 'https://www.researchgate.net/profile/Muhammad-Rafif-13' },
  ];

  const getHoverColor = (name: string) => {
    switch (name) {
      case 'linkedin':
        return 'hover:text-[#0077B5]';
      case 'instagram':
        return 'hover:text-[#E4405F]';
      case 'tiktok':
        return 'hover:text-black';
      case 'researchgate':
        return 'hover:text-[#2fcbab]';
      case 'github':
        return 'hover:text-[#9132ae]';
      default:
        return '';
    }
  };

  // Motion refs
  const containerRef = useRef(null);
  const containerControls = useAnimation();
  const iconControls = useAnimation();
  const inView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (inView) {
      containerControls.start('visible');
      iconControls.start('visible');
    }
  }, [inView, containerControls, iconControls]);

  // Container box animation (from left)
  const containerVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  // Social icons animation (each from right with stagger)
  const iconContainerVariant = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const iconItemVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 2, ease: [0.2, 0.65, 0.3, 0.9] },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      variants={containerVariant}
      initial="hidden"
      animate={containerControls}
      className="w-full max-w-md mx-auto bg-muted border border-border rounded-2xl shadow-md p-6"
    >
      <motion.div
        variants={iconContainerVariant}
        initial="hidden"
        animate={iconControls}
        className="flex gap-6 justify-center items-center"
      >
        {socials.map((social, index) => (
          <motion.a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            variants={iconItemVariant}
            className={`transition-transform duration-200 hover:scale-110 ${getHoverColor(social.name)}`}
          >
            {social.icon}
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
}
