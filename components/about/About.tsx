"use client";

import { useState } from "react";
import AboutGlobeAnimate from "./AboutGlobeAnimate";
import AnimateParagraph from "./AnimateParagraph";
import AnimateTitle from "./AnimateTitle";
// import GithubGraph from "./GithubGraph";
import SocialMedia from "./SocialMedia";
import Image from "next/image";
import { motion } from "framer-motion";

const tech = [
  { id: 1, name: "Python", imageUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968350.png", status: "Advanced" },
  { id: 2, name: "R", imageUrl: "https://cdn-icons-png.flaticon.com/128/2103/2103665.png", status: "Advanced" },
  { id: 3, name: "Google Sheets", imageUrl: "https://cdn-icons-png.flaticon.com/128/2504/2504768.png", status: "Advanced" },
  { id: 4, name: "Excel", imageUrl: "https://cdn-icons-png.flaticon.com/128/732/732220.png", status: "Advanced" },
  { id: 5, name: "Tableau", imageUrl: "https://img.icons8.com/?size=48&id=9Kvi1p1F0tUo&format=png", status: "Advanced" },
  { id: 6, name: "Looker Studio", imageUrl: "https://img.icons8.com/?size=48&id=SruJhzn0nnLl&format=png", status: "Advanced" },
  { id: 7, name: "SQL", imageUrl: "https://cdn-icons-png.flaticon.com/128/2772/2772128.png", status: "Intermediate" },
  { id: 8, name: "HTML", imageUrl: "https://cdn-icons-png.flaticon.com/128/1051/1051277.png", status: "Beginner" },
  { id: 9, name: "C/C++", imageUrl: "https://cdn-icons-png.flaticon.com/128/6132/6132222.png", status: "Beginner" },
  { id: 10, name: "Java", imageUrl: "https://cdn-icons-png.flaticon.com/128/5968/5968282.png", status: "Beginner" },
  { id: 11, name: "CSS", imageUrl: "https://cdn-icons-png.flaticon.com/128/732/732190.png", status: "Beginner" },
  { id: 12, name: "Power BI", imageUrl: "https://img.icons8.com/?size=64&id=70667&format=png", status: "Intermediate" }
];

const tools = [
  { id: 1, name: "Scikit Learn", imageUrl: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg", status: "Machine Learning" },
  { id: 2, name: "Pandas", imageUrl: "https://img.icons8.com/?size=48&id=xSkewUSqtErH&format=png", status: "Data Manipulation" },
  { id: 3, name: "NumPy", imageUrl: "https://img.icons8.com/?size=48&id=aR9CXyMagKIS&format=png", status: "Data Manipulation" },
  { id: 4, name: "Matplotlib", imageUrl: "https://icon.icepanel.io/Technology/svg/Matplotlib.svg", status: "Data Viz" },
  { id: 5, name: "Seaborn", imageUrl: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg", status: "Data Viz" },
  { id: 6, name: "tidyverse", imageUrl: "https://tidyverse.tidyverse.org/logo.png", status: "Data Manipulation" },
  { id: 7, name: "ggplot2", imageUrl: "https://ggplot2.tidyverse.org/logo.png", status: "Data Viz" },
  { id: 8, name: "plotly", imageUrl: "https://avatars.githubusercontent.com/u/5997976?s=280&v=4", status: "Data Viz" },
  { id: 9, name: "lubridate", imageUrl: "https://rstudio.github.io/cheatsheets/html/images/logo-lubridate.png", status: "DateTime Tools" },
  { id: 10, name: "mlr3", imageUrl: "https://mlr3.mlr-org.com/logo.svg", status: "Machine Learning" },
  { id: 11, name: "tensorflow", imageUrl: "https://img.icons8.com/?size=48&id=n3QRpDA7KZ7P&format=png", status: "Machine Learning" },
  { id: 12, name: "keras", imageUrl: "https://icon.icepanel.io/Technology/svg/Keras.svg", status: "Machine Learning" },
  { id: 13, name: "Streamlit", imageUrl: "https://img.icons8.com/?size=48&id=Rffi8qeb2fK5&format=png", status: "App Framework" },
  { id: 14, name: "Shiny", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Shiny_hex_logo.svg/1200px-Shiny_hex_logo.svg.png", status: "Web Visualization" },
  { id: 15, name: "PyTorch", imageUrl: "https://icon.icepanel.io/Technology/svg/PyTorch.svg", status: "Machine Learning" },
  { id: 16, name: "SciPy", imageUrl: "https://scipy.org/images/logo.svg", status: "Scientific Computing" }
];

export default function About() {
  const [activeTab, setActiveTab] = useState("tech");

  const renderSkills = (
    data: { id: number; name: string; imageUrl: string; status: string }[],
    tabKey: string
  ) => (
    <motion.div
      key={tabKey} // trigger ulang animasi tiap tabKey berubah
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-x-3 gap-y-4 w-full"
    >
      {data.map((item) => (
        <div
          key={item.id}
          className="relative group flex flex-col sm:flex-row items-start sm:items-center gap-1 sm:gap-3 border border-zinc-600 p-3 sm:p-4 rounded-lg hover:bg-zinc-800 transition w-full"
        >
          <div className="flex items-center justify-start w-12 h-12">
            <Image
              src={item.imageUrl}
              alt={item.name}
              width={48}
              height={48}
              className="object-contain w-10 h-10 sm:w-12 sm:h-12"
            />
          </div>
          <div className="flex flex-col text-sm sm:text-base">
            <p className="text-white font-medium">{item.name}</p>
            <span className="text-zinc-300 text-xs sm:text-sm block md:block">
              {item.status}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
  

  return (
    <section id="about" className="w-full px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto py-16">
      <div className="mb-10 flex w-full flex-wrap items-center justify-between gap-4">
        <AnimateTitle
          title="About me"
          className="text-left text-[36px] sm:text-[45px] md:text-[60px] lg:text-[80px] font-bold leading-tight"
          wordSpace="mr-[10px]"
          charSpace="mr-[0.01em]"
        />
        <AboutGlobeAnimate />
      </div>

      <div className="text-base sm:text-lg text-white leading-relaxed font-medium space-y-4 mb-10">
        <AnimateParagraph paragraph="Hey there! Hi, I'm Rafif, and I'm a 23-year-old data science explorer." delay={1.5} />
        <AnimateParagraph paragraph="I attended Binus University for my Bachelor of Computer Science and have since taken courses at Purwadhika and Algoritma Data Science School to hone my skills in data science and business intelligence." delay={1.8} />
        <AnimateParagraph paragraph="Strong abilities in data visualization, predictive analytics, modeling, and data-driven decision-making complement my proficiency in R, Python, SQL, and Excel." delay={2} />
        <AnimateParagraph paragraph="To further assist individuals and businesses in obtaining insightful data, I am highly skilled at developing interactive, user-friendly dashboards, improving data processing, and simplifying workflows." delay={2.5} />
      </div>

      <div className="flex flex-wrap mb-6 space-x-4 border-b border-zinc-600 text-white text-sm sm:text-base">
        <button
          onClick={() => setActiveTab("tech")}
          className={`px-4 py-2 rounded-t ${
            activeTab === "tech" ? "bg-zinc-600 text-white font-bold" : "hover:text-zinc-300"
          }`}
        >
          Tech Stack
        </button>
        <button
          onClick={() => setActiveTab("tools")}
          className={`px-4 py-2 rounded-t ${
            activeTab === "tools" ? "bg-zinc-600 text-white font-bold" : "hover:text-zinc-300"
          }`}
        >
          Library
        </button>
      </div>

      {/* <div className="w-full">{activeTab === "tech" ? renderSkills(tech) : renderSkills(tools)}</div> */}
      <div className="w-full">
        {activeTab === "tech"
          ? renderSkills(tech, "tech")
          : renderSkills(tools, "tools")}
      </div>


      <div className="mt-12 flex flex-col gap-6 w-full">
        <SocialMedia />
      </div>
    </section>
  );
}
