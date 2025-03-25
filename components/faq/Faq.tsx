"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";
import ContactRounded from "@/components/contact/ContactRounded";
import ContactTitle from "@/components/contact/ContactTitle";

const faqs = [
  {
    question: "What is your educational background?",
    answer:
      "I graduated with a Bachelor's degree in Computer Science from Bina Nusantara University in 2024. I also completed Full-Stack Data Science programs at Purwadhika and Algoritma Data Science School, and a Full-Stack Web Development program at Binar Academy.",
  },
  {
    question: "What tools and platforms are you experienced with?",
    answer:
      "I am proficient with Tableau, Looker Studio, and Canva for data visualization and design. I also frequently use Microsoft Excel and Google Sheets for analysis and automation.",
  },
  {
    question: "Where did you go to high school and junior high school?",
    answer:
      "I graduated from SMA Negeri 21 Jakarta in 2020 and SMP Labschool Jakarta in 2017.",
  },
  {
    question: "What programming languages are you comfortable with?",
    answer:
      "I am proficient in Python, R, and SQL and experienced with Java, C++, HTML, CSS, JavaScript, and Laravel.",
  },
  {
    question: "What kind of work experience do you have?",
    answer: [
      "I have worked in three different companies across various roles:",
      "• Adtree Digital Indonesia — I worked as a Data Analyst, responsible for building campaign dashboards using R Shiny, Tableau, and Looker Studio.",
      "• Parker Russell Indonesia — I was a System Developer & Digital Transformation Lead, building fully automated business tools using AppSheet.",
      "• PT. Mahligai Putra — I developed real-time logistics tracking systems and dashboards using AppSheet.",
      "From these experiences, I’ve become highly efficient in building end-to-end digital solutions and integrating tools into scalable systems.",
    ],
  },
  {
    question: "Have you completed any major projects?",
    answer: [
      "Yes, and two of them have been published in Scopus-indexed conferences:",
      "• Systematic Literature Review on Implementation of Chatbots for Commerce Use, published and presented at ICCSCI 2023.",
      "• Optimizing Concrete Strength Prediction using Random Forest with Hyperparameter Tuning, presented at ICICoS 2024.",
      "I also developed major projects such as Customer Lifetime Value (CLV) Prediction and Sentiment Analysis on IKN.",
    ],
  },
  {
    question: "Where can I view or download your CV?",
    answer: (
      <>
        You can view or download my resume from{" "}
        <a
          href="https://ik.imagekit.io/fcuinpkmj/Resume_Rafif%20(1).pdf?updatedAt=1741938213015"
          className="underline text-blue-600 hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          this link
        </a>
        .
      </>
    ),
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      data-scroll-section
      className="faq-section relative z-0 mt-24 flex min-h-screen w-full flex-col items-center justify-center overflow-x-clip bg-zinc-900 dark:bg-zinc-200 px-4"
    >
      <ContactRounded />
      <ContactTitle title="FAQ" />

      <div className="max-w-4xl mx-auto font-sans mt-8 w-full">
        <h2 className="text-4xl font-bold mb-10 text-center text-zinc-100 dark:text-zinc-800">
          Frequently Asked Questions
        </h2>

        <ul className="space-y-4 border-t border-gray-300">
          {faqs.map((faq, index) => (
            <li
              key={index}
              className="border-b border-gray-300 py-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <span className="font-semibold text-lg text-zinc-100 dark:text-zinc-800">
                  {faq.question}
                </span>
                <Plus
                  className={`h-6 w-6 transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  } text-zinc-100 dark:text-zinc-800`}
                />
              </div>

              {openIndex === index && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    visible: {
                      transition: { staggerChildren: 0.05 },
                    },
                  }}
                  className="mt-3 space-y-2"
                >
                  {Array.isArray(faq.answer) ? (
                    faq.answer.map((line, i) => (
                      <motion.p
                        key={i}
                        className="text-base text-gray-300 dark:text-gray-700 leading-relaxed"
                        variants={{
                          hidden: { opacity: 0, y: 10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                      >
                        {line}
                      </motion.p>
                    ))
                  ) : (
                    <motion.p
                      className="text-base text-gray-300 dark:text-gray-700 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </motion.div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
