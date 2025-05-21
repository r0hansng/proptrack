// ! This is not being used in the app yet. It is a work in progress.

import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="font-sans text-white bg-black">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 md:px-16 bg-gradient-to-br from-[#0f0f0f] to-[#1e1e1e]">
        <h1 className="mb-6 text-5xl font-semibold leading-tight tracking-tight md:text-6xl">
          PropTrack. Clarity in Every Property.
        </h1>
        <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/70">
          A reimagined way to explore and track your real estate investments — sleek, smart, and
          simulation-driven.
        </p>
      </section>

      {/* Our Mission */}
      <section className="bg-[#121212] px-6 md:px-24 py-24 text-center">
        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Why PropTrack Exists</h2>
        <p className="max-w-3xl mx-auto text-lg text-white/70 md:text-xl">
          Real estate can be complex. We built PropTrack to bring simplicity and structure to
          investment tracking. Whether you&apos;re exploring property investments or testing ideas,
          this platform helps you make smarter decisions — no clutter, no distractions.
        </p>
      </section>

      {/* What We Offer */}
      <section className="grid items-center gap-16 px-6 py-24 bg-black md:grid-cols-2 md:px-24">
        <div>
          <h2 className="mb-6 text-3xl font-semibold">What You Can Do</h2>
          <ul className="space-y-4 text-lg list-disc list-inside text-white/70">
            <li>Track simulated property value, rent, and expenses</li>
            <li>Analyze ROI, cashflow, and growth patterns</li>
            <li>Visualize portfolio performance in real time</li>
            <li>Use public APIs for accurate location & market simulation</li>
            <li>Experience a no-login, no-backend, no-bloat simulation</li>
          </ul>
        </div>
        <div className="bg-[#1A1A1A] p-10 rounded-3xl border border-white/10 shadow-xl transition-all hover:scale-[1.02] duration-300">
          <h3 className="mb-4 text-2xl font-medium">Tech That Empowers</h3>
          <div className="space-y-2 text-lg text-white/60">
            <p>
              <strong>Framework:</strong> React.js
            </p>
            <p>
              <strong>Design:</strong> Tailwind CSS
            </p>
            <p>
              <strong>APIs:</strong> LocationIQ, ExchangeRate.host
            </p>
            <p>
              <strong>State:</strong> Context API
            </p>
            <p>
              <strong>Hosting:</strong> Vercel
            </p>
          </div>
        </div>
      </section>

      {/* Visual Break */}
      <section className="bg-[#111111] text-center py-20 px-6">
        <blockquote className="max-w-4xl mx-auto text-2xl italic font-light md:text-3xl text-white/80">
          &rdquo;When we remove complexity, we uncover clarity. PropTrack helps you see real estate
          like never before.&ldquo;
        </blockquote>
      </section>

      {/* The Maker */}
      <section className="px-6 py-24 text-center bg-black md:px-24">
        <h2 className="mb-6 text-3xl font-semibold md:text-4xl">Crafted by Rohan</h2>
        <p className="max-w-3xl mx-auto text-lg text-white/70">
          I&apos;m a Computer Science student at Newton School of Technology, building tools that
          blend thoughtful UI with real-world utility. PropTrack is more than a project — it&apos;s
          an exploration of what great design and technology can do when they meet real estate.
        </p>
      </section>

      {/* Disclaimer */}
      <section className="bg-[#0e0e0e] text-center py-16 px-6">
        <h3 className="mb-2 text-xl font-medium">Disclaimer</h3>
        <p className="max-w-xl mx-auto text-white/60 text-md">
          PropTrack is a frontend-only simulation tool for educational use. No real-time data or
          financial advice is provided. It&apos;s designed to experiment and learn.
        </p>
      </section>

      {/* CTA */}
      <section className="py-24 text-center bg-black">
        <Link
          to="/"
          className="px-8 py-3 text-lg text-black transition duration-300 bg-white rounded-full hover:bg-gray-200"
        >
          Explore the App
        </Link>
      </section>
    </div>
  );
};

export default AboutPage;
