"use client"

import { motion } from "framer-motion"
import { Sparkles, ArrowRight } from "lucide-react"

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export function Hero() {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className="relative overflow-hidden bg-background"
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="mx-auto max-w-4xl text-center px-4 py-20 md:py-28">
        <motion.h1
          id="hero-title"
          className="text-pretty font-sans text-4xl font-semibold leading-tight text-foreground md:text-6xl lg:text-7xl text-center"
          style={{ width: '70%', marginLeft: '15%' }}
          variants={item}
        >
          Multi-Agentic Orchestration for IT Operations
        </motion.h1>

        <motion.div
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary"
          variants={item}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Sparkles size={16} aria-hidden />
          <span className="leading-none">Multi‑Agent RAG Orchestration</span>
        </motion.div>

        <motion.p className="mt-6 max-w-3xl mx-auto text-balance text-black md:text-xl lg:text-2xl" variants={item}>
          Accelerate mean time to resolution, increase transparency, and automate incident workflows with trustworthy
          Multi‑Agent RAG orchestration that learns and adapts.
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap items-center justify-center gap-4" variants={item}>
          <a
            href="#simulation"
            aria-label="Run an interactive ticket simulation"
            className="inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg hover:shadow-xl"
          >
            Run a Ticket Simulation
            <ArrowRight size={18} aria-hidden />
          </a>
          <a
            href="#analytics"
            aria-label="View analytics"
            className="inline-flex items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary shadow-lg hover:shadow-xl"
          >
            View Analytics
          </a>
        </motion.div>

        <motion.div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3 max-w-4xl mx-auto" variants={item}>
          <div className="rounded-xl border border-border bg-card p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <p className="text-sm text-black mb-2">Avg MTTR</p>
              <p className="text-2xl font-bold text-foreground">&gt; 42%</p>
              <p className="text-xs text-black mt-1">Improvement</p>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <p className="text-sm text-black mb-2">First-contact Resolution</p>
              <p className="text-2xl font-bold text-foreground">&gt; 23%</p>
              <p className="text-xs text-black mt-1">Improvement</p>
              </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center">
              <p className="text-sm text-black mb-2">Confidence Scores</p>
              <p className="text-2xl font-bold text-foreground">&gt; 0.92</p>
              <p className="text-xs text-black mt-1">Accuracy</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* light, subtle background grid */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-border" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </motion.section>
  )
}
