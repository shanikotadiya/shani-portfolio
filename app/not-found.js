// app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-6">
      {/* Background Glow */}
      <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl animate-pulse"></div>

      {/* Card */}
      <section className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl shadow-2xl md:p-14">
        <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-cyan-400">
          ERROR 404
        </p>

        <h1 className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500 bg-clip-text text-7xl font-extrabold text-transparent md:text-9xl">
          404
        </h1>

        <h2 className="mt-5 text-3xl font-bold text-white md:text-5xl">
          Oops! Page Not Found
        </h2>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-zinc-400 md:text-base">
          The page you're looking for doesn’t exist, may have been moved, or the
          route is invalid. Let’s get you back to something useful.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:shadow-xl"
          >
            Go Home
          </Link>

          <Link
            href="/projects"
            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-white/10"
          >
            View Projects
          </Link>
        </div>

        <p className="mt-8 text-sm text-zinc-500">
          Crafted with passion by{" "}
          <span className="font-semibold text-cyan-400">Shani Kotadiya</span>
        </p>
      </section>
    </main>
  );
}