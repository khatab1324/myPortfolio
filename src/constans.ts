import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiVuedotjs,
  SiAngular,
  SiSass,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiDocker,
  //   SiAmazonaws,
  SiGit,
  SiRedux,
  SiBootstrap,
  SiRazer,
  SiCloudinary,
  SiFastify,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FcLinux } from "react-icons/fc";
import { color } from "motion/react";
import trackitImage from "@/images/trackit.png";
import letsventImage from "@/images/letsVent.png";
import cinemaListImage from "@/images/cinemaList.png";
import smallShopify from "@/images/smallShopify.png";
export const navLinks = [
  { name: "Projects", href: "/#projects" },
  { name: "About", href: "/#about" },
  { name: "Contact", href: "/#contact" },
];
export const frontendLogos = [
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "SiRedux", icon: SiRedux, color: "text-purple-600" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-purple-700" },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "SiRedux", icon: SiRedux, color: "text-purple-600" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-purple-700" },
  { name: "React", icon: SiReact, color: "text-blue-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  { name: "SiRedux", icon: SiRedux, color: "text-purple-600" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
  { name: "Cloudinary", icon: SiCloudinary, color: "text-purple-700" },
];
const backendLogos = [
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Python", icon: SiPython, color: "text-blue-400" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "ASP.NET", icon: SiRazer, color: "text-green-600" },
  { name: "Socketdotio", icon: SiSocketdotio, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "C#", icon: TbBrandCSharp, color: "text-purple-500" },
  { name: "fastify", icon: SiFastify, color: "text-gray-500 " },
  { name: "linux", icon: FcLinux, color: "" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Python", icon: SiPython, color: "text-blue-400" },
  { name: "Express", icon: SiExpress, color: "text-gray-300" },
  { name: "ASP.NET", icon: SiRazer, color: "text-green-600" },
  { name: "Socketdotio", icon: SiSocketdotio, color: "text-blue-400" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-500" },
  { name: "Docker", icon: SiDocker, color: "text-blue-400" },
  { name: "Git", icon: SiGit, color: "text-orange-500" },
  { name: "C#", icon: TbBrandCSharp, color: "text-purple-500" },
  { name: "fastify", icon: SiFastify, color: "text-gray-500 " },
  { name: "linux", icon: FcLinux, color: "" },
];

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "URA compiler ", level: 25, color: "bg-blue-600" },
      { name: "TrackIt app", level: 85, color: "bg-yellow-500" },
      {
        name: "The Hard Parts of Asynchronous JavaScript Course",
        level: 35,
        color: "",
      },
    ],
    logos: frontendLogos,
  },
  {
    title: "Backend",
    skills: [
      { name: "URA compiler ", level: 25, color: "bg-blue-600" },
      { name: "TrackIt app", level: 85, color: "bg-yellow-500" },
      {
        name: "The Hard Parts of Asynchronous JavaScript Course",
        level: 35,
        color: "",
      },
    ],
    logos: backendLogos,
  },
];

export const projectsList = [
  {
    title: "TrackIt",
    blurb:
      "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and audio details. Create and save new playlists of recommendations based on your existing playlists.",
    screenshotSrc: trackitImage,
    src: "https://github.com/khatab1324/trackit",
  },
  {
    title: "Let's Vent",
    blurb:
      "A real-time chat application designed for seamless conversations! Engage in instant messaging with friends and colleagues, share media, and create group chats. Built with Next.js, and Socket.io for a smooth and interactive experience.",
    screenshotSrc: letsventImage,
    src: "https://github.com/khatab1324/letsvent",
    isRight: false,
  },
  {
    title: "Cinema List",
    blurb:
      "This app was built to explore and apply concepts in React, Docker, and prisma through a fully functional project, focusing on CRUD operations and user authentication. It allows users to manage a personal movie list, including adding, editing, and deleting movies",
    screenshotSrc: cinemaListImage,
    onCtaClick: () => window.open("https://your-project-url.com", "_blank"),
    src: "https://github.com/khatab1324/CinemaList",
  },
  {
    title: "Small Shopify",
    blurb:
      "A platform where businesses can set up online stores to sell products, manage inventory, and user can create and see other stors and review them. Built with express, bootstrab",
    screenshotSrc: smallShopify,
    onCtaClick: () => window.open("https://your-project-url.com", "_blank"),
    isRight: false,
    src: "https://github.com/khatab1324/smallshopify",
  },
];
