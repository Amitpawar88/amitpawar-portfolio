import React from "react";

import Draft from "@/public/draft.png";
import Dev from "@/public/dev.png";
import Christmas from '@/public/christmas.png'

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Dev Connect",
    description:
      "Connect and collaborate on project with random developers worldwide.",
    tags: ["TypeScript","React", "Next.js", "Tailwind", "Drizzle", "PostgreSQL"],
    imageUrl: Dev,
    link: "https://dev-connect-omega.vercel.app/",
  },
  {
    title: "DraftVistra",
    description:
      "Built a plateform for engineering teams to create documents and diagrams.",
    tags: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind",
      "Prisma",
      "Convex",
    ],
    imageUrl: Draft,
    link: "https://draftvistra.vercel.app/",
  },
  {
    title: "Christmas Landing Page",
    description:
      "A responsive landing page for christmas gifting website.",
    tags: ["HTMl", "SCSS", "JavaScript"],
    imageUrl: Christmas,
    link: "https://amitpawar88.github.io/OCTANET_SEPTEMBER/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Java",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind",
  "SCSS",
  "Prisma",
  "MongoDB",
  "PostgreSQL",
  "SQL",
  "Redux",
  "GraphQL",
  "Express.js",
  "Linux",
  "Docker",
] as const;
