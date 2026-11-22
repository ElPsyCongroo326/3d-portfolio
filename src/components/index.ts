// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Operations Specialist",
    icon: web,
  },
  {
    title: "Documentation Compliance",
    icon: mobile,
  },
  {
    title: "Workflow Automation",
    icon: backend,
  },
  {
    title: "Front-End Fundamentals",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Operations Representative",
    company_name: "Paragon Outsourcing – Clark, Philippines",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Feb 2026 - Present",
    points: [
      "Process and manage formal legal requests, subpoenas, and notices of deposition under tight operational turnaround times.",
      "Coordinate closely across multiple legal operations teams to clarify missing information and verify data completeness.",
      "Supervise local copy service assets, ensuring exact handling, absolute accuracy, and secure delivery of sensitive case folders.",
    ],
  },
  {
    title: "Operations Representative",
    company_name: "iQor – Clark, Philippines",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2025 - Feb 2026",
    points: [
      "Evaluated and systematically validated consumer profile changes and title documentation under strict internal audit regulations.",
      "Reviewed active customer accounts, financial registries, and balance items to log and eliminate formatting discrepancies.",
      "Maintained high metrics for data accuracy while handling high-volume operational targets inside private databases.",
    ],
  },
  {
    title: "Customer Support Specialist (Multi-Account)",
    company_name: "24-7 Intouch Philippines Inc. – Clark, Philippines",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2023 - Jan 2025",
    points: [
      "Administered concurrent client program tracks, managing shifting service workflows and rigorous turnaround rules independently.",
      "Liaised between commercial property managers and external utility vendors to align logistical onboarding parameters.",
      "Audited background records and paperwork configurations for credit and consumer automotive loan applications.",
    ],
  },
  {
    title: "Customer Service Representative",
    company_name: "Alorica – Ilocos Norte, Philippines",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Feb 2023",
    points: [
      "Answered incoming queue calls, resolving billing inquiries, customer disputes, and tech tracking issues methodically.",
      "Managed file logging systems to chronicle complex case timelines before initiating structural department escalations.",
    ],
  },
] as const;
// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Alexander consistently delivers 100% data accuracy under tight legal and operational deadlines while keeping workflows organized.",
    name: "Operations Team Lead",
    designation: "Supervisor",
    company: "Clark Operations",
    image: user1,
  },
  {
    testimonial:
      "His custom AutoHotkey macros and attention to compliance details significantly reduced formatting errors across our daily audits.",
    name: "Quality Assurance Analyst",
    designation: "QA Specialist",
    company: "Enterprise Support",
    image: user2,
  },
  {
    testimonial:
      "Reliable, detail-oriented, and quick to resolve complex multi-account escalations between property managers and vendors.",
    name: "Program Coordinator",
    designation: "Account Manager",
    company: "Client Services",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Workflow Automation Macros",
    description:
      "Custom AutoHotkey scripts and keyboard hotkeys built to automate repetitive data entry, file logging, and high-volume CRM verification workflows.",
    tags: [
      {
        name: "autohotkey",
        color: "blue-text-gradient",
      },
      {
        name: "automation",
        color: "green-text-gradient",
      },
      {
        name: "productivity",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
  {
    name: "Interactive 3D Portfolio",
    description:
      "Responsive personal portfolio built with React, TypeScript, Tailwind CSS, and Three.js to showcase operations experience and front-end development fundamentals.",
    tags: [
      {
        name: "html5-css3",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/3d-portfolio",
    live_site_link: "https://github.com/3d-portfolio",
  },
  {
    name: "Compliance & Audit Tracker",
    description:
      "Structured front-end layout and validation checklist designed to minimize formatting discrepancies and streamline multi-account documentation reviews.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com",
    live_site_link: "https://github.com",
  },
] as const;

export const SOCIALS = [
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://linkedin.com",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com",
  },
] as const;
