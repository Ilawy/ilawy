import { option } from "motion/react-client";

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Thoughts",
    href: "/t",
  },
  // {
  //   title: "Gallery",
  //   href: "/gallery",
  // },
];

export const education = [
  {
    title: "Faculty of Law",
    description: "Bachelor of Law",
    date: "2019 - 2023",
  },
  {
    title: "Institute of Technology - Open Source Applications Development",
    description: "9-month diploma",
    date: "2024 - 2025",
  },
];

export const workExperience = [
  {
    title: "Technical Sales Advisor",
    company: "2B Egypt",
    date: "2023 - 2024",
  },
  {
    title: "Software Engineer",
    company: "Vodafone Egypt",
    date: "2025 - Present",
  },
];

export const projects = [
  {
    title: "Quotobia",
    description: `A bookstore system built using the MEAN stack.`,
    tags: ["Angular", "Node.js", "MongoDB", "Stripe"],
    options: [
      {
        label: "Source",
        href: "https://github.com/o-some-sad/qutobia",
      },
    ],
  },
  {
    title: "ReactGram",
    description: `A full-featured social media platform built with React and PocketBase.`,
    tags: ["React", "PocketBase", "TypeScript", "TailwindCSS"],
    options: [
      {
        label: "Source",
        href: "https://github.com/ilawy/reactgram",
      },
      {
        label: "Visit",
        href: "https://bondoq.vercel.app",
      },
    ],
  },
  {
    title: "Mind0",
    description: `A personal knowledge management system built with React and PocketBase.`,
    tags: ["React", "PocketBase", "TypeScript", "TailwindCSS"],
  },
];
