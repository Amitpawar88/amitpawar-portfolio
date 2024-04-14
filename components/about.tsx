"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a highly motivated Full Stack Web Developer with a passion for crafting user experience and building scalable web applications. Specializing in the MERN stack (MongoDB, Express.js, React(Next.js), Node.js), I possess strong proficiency in Java, JavaScript. Currently pursuing a B.Tech. in Computer Science and Engineering with a specialization in Artificial Intelligence and Machine Learning, I combine technical expertise with excellent communication skills. I'm deeply passionate about developing innovative solutions, driving me to create numerous projects from scratch. Later on this page, I'll walk you through some of these endeavors.My creative approach to problem-solving enables me to find unique solutions to complex challenges.
      </p>

      <p>
        In summary, I thrive in collaborative environments and am a fast learner with strong problem-solving and time-management skills. I'm actively seeking opportunities to contribute meaningfully to innovative Full-Stack development projects, continuously expanding my skillset and becoming a well-rounded developer.
      </p>
    </motion.section>
  );
}
