import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaGit,
  FaGithub,
  FaLinux,
  FaDocker,
  FaNetworkWired,
  FaServer,
  FaSass
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiReactquery,
  SiPostman,
  SiGraphql,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export const assets = {
  Profile: "/assets/Profile.jpeg",
  Resume: "/assets/Varun_Yadav_Resume.pdf",
  LeetCode: "/assets/LeetCode_logo.png",
  Gfg: "/assets/Gfg_logo.svg",
  CodingNinjas: "/assets/CodingNinjas_logo.svg",
};

export const Expertise = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Building responsive, modern, and SEO-friendly web applications using React.js, Next.js, SCSS, and JavaScript.",
  },
  {
    icon: FaLaptopCode,
    title: "Full Stack Solutions",
    description:
      "Developing end-to-end scalable applications with MERN stack, APIs, databases, authentication, and business workflows.",
  },
  {
    icon: FaRocket,
    title: "Performance Optimization",
    description:
      "Optimizing speed, SEO, scalability, and user experience for production-grade web platforms.",
  },
  {
    icon: FaRocket,
    title: "AI Integrations",
    description:
      "Integrating AI-powered tools, chat systems, automation workflows, and smart API solutions into modern web applications.",
  },
];

export const skills = [
  // Frontend Skills
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: "Frontend",
    proficiency: 90,
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
  // {
  //   name: "TypeScript",
  //   icon: SiTypescript,
  //   category: "Frontend",
  //   proficiency: 55,
  //   color: "bg-blue-600",
  //   textColor: "text-blue-600",
  // },
  {
    name: "React",
    icon: FaReact,
    category: "Frontend",
    proficiency: 85,
    color: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    category: "Frontend",
    proficiency: 45,
    color: "bg-black",
    textColor: "text-black",
  },
  {
    name: "HTML5",
    icon: FaHtml5,
    category: "Frontend",
    proficiency: 95,
    color: "bg-orange-500",
    textColor: "text-orange-500",
  },
  {
    name: "scss",
    icon: FaSass,
    category: "Frontend",
    proficiency: 90,
    color: "bg-blue-600",
    textColor: "text-blue-600",
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: SiTailwindcss,
  //   category: "Frontend",
  //   proficiency: 90,
  //   color: "bg-teal-500",
  //   textColor: "text-teal-500",
  // },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
    category: "Frontend",
    proficiency: 80,
    color: "bg-purple-600",
    textColor: "text-purple-600",
  },
  {
    name: "Redux",
    icon: SiRedux,
    category: "Frontend",
    proficiency: 75,
    color: "bg-purple-400",
    textColor: "text-purple-400",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    category: "Frontend",
    proficiency: 65,
    color: "bg-red-500",
    textColor: "text-red-500",
  },
  // Backend Skills
  {
    name: "Node.js",
    icon: FaNodeJs,
    category: "Backend",
    proficiency: 80,
    color: "bg-green-600",
    textColor: "text-green-600",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    category: "Backend",
    proficiency: 85,
    color: "bg-gray-700",
    textColor: "text-gray-700",
  },
  // Database Skills
  {
    name: "MongoDB",
    icon: SiMongodb,
    category: "Database",
    proficiency: 85,
    color: "bg-green-500",
    textColor: "text-green-500",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    category: "Database",
    proficiency: 80,
    color: "bg-blue-700",
    textColor: "text-blue-700",
  },
  // Tools
  {
    name: "Git",
    icon: FaGit,
    category: "Tools",
    proficiency: 90,
    color: "bg-orange-600",
    textColor: "text-orange-600",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    category: "Tools",
    proficiency: 95,
    color: "bg-gray-800",
    textColor: "text-gray-800",
  },
  {
    name: "VS Code",
    icon: VscVscode,
    category: "Tools",
    proficiency: 95,
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    name: "GraphQL",
    icon: SiGraphql,
    category: "Tools",
    proficiency: 88,
    color: "bg-pink-600",
    textColor: "text-pink-600",
  },
  // {
  //   name: "IntelliJ IDEA",
  //   icon: SiIntellijidea,
  //   category: "Tools",
  //   proficiency: 85,
  //   color: "bg-purple-600",
  //   textColor: "text-purple-600",
  // },

  // API-related skill
  {
    name: "REST API ",
    icon: FaNetworkWired,
    category: "Tools",
    proficiency: 85,
    color: "bg-green-600",
    textColor: "text-green-600",
  },

  // devops related skill
  {
    name: "Docker",
    icon: FaDocker,
    category: "DevOps",
    proficiency: 80,
    color: "bg-blue-400",
    textColor: "text-blue-400",
  },
  {
    name: "Linux",
    icon: FaLinux,
    category: "DevOps",
    proficiency: 75,
    color: "bg-gray-700",
    textColor: "text-gray-700",
  },
  {
    name: "GitHub Actions",
    icon: FaGithub,
    category: "DevOps",
    proficiency: 82,
    color: "bg-gray-800",
    textColor: "text-gray-800",
  },
  {
    name: "CI/CD",
    icon: FaServer,
    category: "DevOps",
    proficiency: 80,
    color: "bg-cyan-600",
    textColor: "text-cyan-600",
  },
  {
    name: "Cloudflare Tunnel",
    icon: FaServer,
    category: "DevOps",
    proficiency: 75,
    color: "bg-orange-500",
    textColor: "text-orange-500",
  },

  //Automation related skill
  {
    name: "Cron Jobs",
    icon: FaServer,
    category: "Automation",
    proficiency: 85,
    color: "bg-green-600",
    textColor: "text-green-600",
  },
  {
    name: "Workflow Automation",
    icon: FaServer,
    category: "Automation",
    proficiency: 88,
    color: "bg-purple-600",
    textColor: "text-purple-600",
  },
  {
    name: "Marketing Automation",
    icon: FaServer,
    category: "Automation",
    proficiency: 82,
    color: "bg-pink-600",
    textColor: "text-pink-600",
  },

  // integrations related skill
  {
    name: "Payment Gateway",
    icon: FaServer,
    category: "Integrations",
    proficiency: 84,
    color: "bg-yellow-500",
    textColor: "text-yellow-500",
  },
  {
    name: "Webhooks",
    icon: FaServer,
    category: "Integrations",
    proficiency: 82,
    color: "bg-indigo-500",
    textColor: "text-indigo-500",
  },
  {
    name: "Postman",
    icon: SiPostman,
    category: "Tools",
    proficiency: 85,
    color: "bg-orange-500",
    textColor: "text-orange-500",
  },
  {
    name: "GoHighLevel",
    icon: FaServer,
    category: "CRM",
    proficiency: 88,
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  {
    name: "CRM Development",
    icon: FaServer,
    category: "CRM",
    proficiency: 86,
    color: "bg-cyan-500",
    textColor: "text-cyan-500",
  },
  {
    name: "Referral Systems",
    icon: FaServer,
    category: "CRM",
    proficiency: 82,
    color: "bg-emerald-500",
    textColor: "text-emerald-500",
  },
  {
    name: "Booking Systems",
    icon: FaServer,
    category: "CRM",
    proficiency: 80,
    color: "bg-violet-500",
    textColor: "text-violet-500",
  },

  {
    name: "SEO Optimization",
    icon: FaServer,
    category: "SEO",
    proficiency: 82,
    color: "bg-lime-500",
    textColor: "text-lime-500",
  },
  {
    name: "Next.js SSR",
    icon: FaReact,
    category: "SEO",
    proficiency: 88,
    color: "bg-black",
    textColor: "text-white",
  },
  {
    name: "Performance Optimization",
    icon: FaServer,
    category: "SEO",
    proficiency: 84,
    color: "bg-rose-500",
    textColor: "text-rose-500",
  },
];

export const projects = [
  {
    title: "Journey Junction",
    description:
      "AI-powered tourism platform built with the MERN stack. Users can enter source and destination to get travel time, estimated cost, and available transport options using Anthropic AI integration.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MERN Stack",
      "Anthropic API",
      "REST API",
      "Responsive UI",
    ],
    category: "Full Stack",
    githubLink: "#",
    liveLink: "#",
    icon: FaNodeJs,
  },

  {
    title: "Faces Consent Platform",
    description:
      "Digital consent and aesthetics platform with CRM modules, booking links, consent systems, referral tracking, maps integration, SEO improvements, CAPTCHA, and custom workflows.",
    technologies: [
      "Next.js",
      "React.js",
      "Node.js",
      "GraphQL",
      "MySQL",
      "GoHighLevel",
      "CRM",
      "SEO",
    ],
    category: "Full Stack",
    company: "Tech Erudite",
    githubLink: "#",
    liveLink: "#",
    icon: FaNodeJs,
  },

  {
    title: "GoHighLevel CRM Automation Platform",
    description:
      "Developed custom GoHighLevel (GHL) solutions including lead capture workflows, automated follow-ups, booking systems, pipeline management, referral tracking, and third-party integrations for business growth.",
    technologies: [
      "GoHighLevel",
      "CRM",
      "Automation",
      "Webhooks",
      "API Integrations",
      "Lead Management",
      "Booking Systems",
      "Marketing Automation",
    ],
    category: "Full Stack",
    company: "Tech Erudite",
    githubLink: "#",
    liveLink: "#",
    icon: FaNodeJs,
  },

  {
    title: "Payment Integration Module",
    description:
      "Secure payment gateway implementation with webhook handling, transaction status updates, retries, and backend reconciliation flows.",
    technologies: [
      "Node.js",
      "Express.js",
      "REST API",
      "Webhooks",
      "Payment Gateway",
      "MongoDB",
    ],
    category: "Backend",
    company: "Tech Erudite",
    githubLink: "#",
    liveLink: "#",
    icon: FaServer,
  },

  {
    title: "Real-Time Support Chat System",
    description:
      "Live support and internal communication platform using Socket.io with real-time messaging and notification features.",
    technologies: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express.js",
    ],
    category: "Full Stack",
    company: "Tech Erudite",
    githubLink: "#",
    liveLink: "#",
    icon: FaNodeJs,
  },

  {
    title: "Next.js SEO Business Website",
    description:
      "High-performance SEO-friendly business website built using Next.js SSR with responsive UI and optimized page speed.",
    technologies: [
      "Next.js",
      "React.js",
      "SCSS",
      "SSR",
      "SEO",
      "Performance Optimization",
    ],
    category: "Frontend",
    company: "Tech Erudite",
    githubLink: "#",
    liveLink: "#",
    icon: FaLaptopCode,
  },
];
