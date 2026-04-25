import SiteShell from "@/components/SiteShell";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm",
  display: "swap",
});

export const metadata = {
  title: {
    default: "Shani Kotadiya — Full Stack MERN Developer",
    template: "%s · Shani Kotadiya",
  },
  description:
    "Portfolio of Shani Kotadiya — MERN Stack Developer with 3+ years of experience in React.js, Next.js, Node.js, MongoDB, MySQL, CRM systems, automation workflows, and scalable web application development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}