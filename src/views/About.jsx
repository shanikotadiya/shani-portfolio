"use client";

import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaCode,
  FaMedal,
  FaLaptopCode,
  FaBriefcase,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { assets } from "../assets/assets";
import Link from "next/link";
import { SiTryhackme } from "react-icons/si";
import PageHeader from "@/components/ui/PageHeader";

const experiences = [
  {
    title: "Full Stack Development",
    description:
      "Building scalable, high-performance web applications using React.js, Next.js, Node.js, MongoDB, and MySQL with clean architecture.",
    icon: <FaCode />,
    ring: "ring-cyan-500/25",
    iconBg: "bg-cyan-500/10 text-cyan-300",
  },
  {
    title: "CRM & Automation",
    description:
      "Developing CRM systems, GoHighLevel workflows, referral systems, booking modules, and business automation solutions.",
    icon: <FaLaptopCode />,
    ring: "ring-emerald-500/25",
    iconBg: "bg-emerald-500/10 text-emerald-300",
  },
  {
    title: "AI Integrations",
    description:
      "Integrating AI-powered features such as smart assistants, automation tools, and API-based intelligent systems into web platforms.",
    icon: <FaCode />,
    ring: "ring-violet-500/25",
    iconBg: "bg-violet-500/10 text-violet-300",
  },
];

const workExperience = [
  {
    company: "Tech Erudite",
    logo: "../assets/company.png",
    position: "Full Stack MERN Developer",
    duration: "Mar 2023 - Present",
    location: "Ahmedabad, Gujarat, India · On-site / Remote",
    description: [
      "Developing scalable and production-ready web applications using React.js, Next.js, Node.js, and MongoDB.",
      "Built modern frontend interfaces with responsive UI/UX and optimized user experiences.",
      "Created secure REST APIs and GraphQL APIs for complex business workflows and third-party integrations.",
      "Worked extensively on CRM systems, GoHighLevel (GHL) integrations, and custom automation workflows.",
      "Implemented payment gateway integrations with secure webhook handling and transaction flows.",
      "Developed real-time chat/support systems using Socket.io.",
      "Created cron jobs, background services, and process automation systems.",
      "Managed SQL databases using MySQL and Sequelize ORM.",
      "Improved SEO and performance using Next.js SSR / SSG strategies.",
      "Handled deployments using Docker, GitHub Actions, CI/CD pipelines, Linux servers, and Cloudflare Tunnel.",
      "Focused on clean architecture, maintainable code, and long-term scalability.",
    ],
    technologies: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Sequelize",
      "GraphQL",
      "REST APIs",
      "Socket.io",
      "GoHighLevel",
      "Docker",
      "GitHub Actions",
      "CI/CD",
      "Linux",
      "Cloudflare Tunnel",
      "SEO",
      "Cron Jobs",
      "Payment Integration",
      "Git",
      "GitHub",
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Engineering in Artificial Intelligence & Machine Learning",
    institution: "Gujarat Technological University, Ahmedabad",
    year: "2022 - 2025",
    type: "Graduation",
    color: "bg-cyan-500",
    icon: <FaGraduationCap />,
  },
  {
    degree: "Diploma in Computer Engineering",
    institution: "Government Engineering College, GTU, Jamnagar",
    year: "2019 - 2022",
    type: "Diploma",
    color: "bg-emerald-500",
    icon: <FaGraduationCap />,
  },
];
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen pb-12"
    >
      <PageHeader
        eyebrow="Profile"
        title="About"
        description="Background, focus areas, and the path so far — from internships to security research."
        icon={FaCode}
      />

      <div className="surface-card overflow-hidden lg:flex">
        <div className="relative lg:w-1/2">
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 to-violet-600/10" />
          {/* eslint-disable-next-line @next/next/no-img-element -- local public asset */}
          <img
            src={assets.Profile}
            alt="Portrait"
            className="relative h-72 w-full object-cover lg:h-full lg:min-h-105"
          />
        </div>
        <div className="flex flex-col justify-center p-8 lg:w-1/2 lg:p-12">
          <h2 className="font-(family-name:--font-outfit) text-2xl font-bold text-white">
            Hello — I&apos;m Shani Kotadiya
          </h2>
          <p className="mt-4 leading-relaxed text-zinc-400">
            {
              "I'm a passionate Full Stack Developer with a keen interest in DevOps, cloud technologies, and web application security. My journey is driven by a continuous desire to learn and solve complex technological challenges."
            }
          </p>
          <div className="mt-6 flex gap-3">
            {[
              {
                href: "https://github.com/shanikotadiya",
                icon: <FaGithub className="text-xl" />,
                className: "hover:text-white",
              },
              {
                href: "https://www.linkedin.com/in/shani-kotadiya-614422204",
                icon: <FaLinkedin className="text-xl" />,
                className: "hover:text-cyan-300",
              },
            ].map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-zinc-500 transition ${s.className}`}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-400"
            >
              View projects
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-center font-(family-name:--font-outfit) text-2xl font-bold text-white md:text-left">
          Professional focus
        </h3>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className={`surface-card p-6 ring-1 ${exp.ring}`}
            >
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl ${exp.iconBg}`}
              >
                {exp.icon}
              </div>
              <h4 className="font-semibold text-zinc-100">{exp.title}</h4>
              <p className="mt-2 text-sm text-zinc-500">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-center font-(family-name:--font-outfit) text-2xl font-bold text-white md:text-left">
          Experience
        </h3>
        <div className="mt-8 space-y-6">
          {workExperience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="surface-card p-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                {exp.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element -- external employer logos
                  <img
                    src={exp.logo}
                    alt=""
                    className="h-14 w-auto object-contain sm:mr-2"
                  />
                ) : (
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-300">
                    <FaBriefcase />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <h4 className="font-(family-name:--font-outfit) text-lg font-semibold text-white">
                    {exp.position}
                  </h4>
                  <p className="text-sm text-zinc-400">
                    {exp.company} · {exp.duration}
                  </p>
                  <p className="mt-1 text-xs text-zinc-600">{exp.location}</p>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-400">
                    {exp.description.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h3 className="text-center font-(family-name:--font-outfit) text-2xl font-bold text-white md:text-left">
          Education
        </h3>
        <div className="relative mt-10">
          <div className="absolute left-2.75 top-0 hidden h-full w-px bg-linear-to-b from-cyan-500/50 to-transparent md:block" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:items-center"
              >
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-white md:absolute md:left-0 md:translate-x-0 ${edu.color}`}
                >
                  {edu.icon}
                </div>
                <div className="surface-card ml-0 flex-1 p-6 md:ml-12">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="font-semibold text-zinc-100">{edu.degree}</h4>
                    <span className="rounded-full bg-white/6 px-2 py-0.5 text-xs text-zinc-400">
                      {edu.type}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-zinc-500">{edu.institution}</p>
                  <p className="mt-1 text-xs text-zinc-600">{edu.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-20 overflow-hidden rounded-2xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/10 via-zinc-900/80 to-violet-600/10 p-8 text-center sm:p-12"
      >
        <h3 className="font-(family-name:--font-outfit) text-2xl font-bold text-white sm:text-3xl">
          {"Let's Innovate and Secure the Web"}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-sm text-zinc-400 sm:text-base">
          Interested in building robust, secure, and scalable web solutions that
          push the boundaries of technology and innovation?
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-block rounded-xl bg-white px-8 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200"
        >
          Collaborate now
        </Link>
      </motion.div>
    </motion.div>
  );
}
