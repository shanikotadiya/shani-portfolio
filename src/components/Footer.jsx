"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { siteConfig } from "@/config/site";

const quick = [
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const social = [
  {
    icon: FaGithub,
    href: "https://github.com/shanikotadiya",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/shani-kotadiya-614422204",
    label: "LinkedIn",
  },
  {
    icon: FiMail,
    href: "mailto:shanikotadiya@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/6 bg-zinc-950/80">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <p className="font-(family-name:--font-outfit) text-xl font-semibold text-white">
              {siteConfig.name}
            </p>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-500">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {social.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-lg text-zinc-400 transition-colors hover:border-cyan-500/30 hover:text-cyan-300"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Navigate
            </p>
            <ul className="mt-4 space-y-2">
              {quick.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
              Tech Stack
            </p>
            <p className="mt-4 text-sm leading-relaxed text-zinc-500">
              Built with <span className="text-zinc-300">Next.js</span>,{" "}
              <span className="text-zinc-300">React.js</span>,{" "}
              <span className="text-zinc-300">SCSS</span>,{" "}
              <span className="text-zinc-300">Node.js</span>, and{" "}
              <span className="text-zinc-300">MongoDB</span>. Designed for speed,
              scalability, and SEO performance.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/6 pt-8 text-xs text-zinc-600 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-zinc-600">
            Crafted with passion · Building scalable solutions
          </p>
        </div>
      </div>
    </footer>
  );
}