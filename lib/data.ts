import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Cloud Engineer",
    location: "Stockholm, Sweden",
    description:
      "I worked as a full-stack developer at Epical for three years as a consultant",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2024",
  },
  {
    title: "Computer Science",
    location: "Örebro, Sweden",
    description:
      "",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2020",
  },
] as const;

export const projectsData = [
  {
    title: "Universeum",
    description:
      "Digitalise a science center, bring their at site content to be accessable on the internet",
    tags: ["Angular", "Next.js", "Firebase", "GCP",],
    imageUrl: "",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "GraphQL",
  "Framer Motion",
] as const;