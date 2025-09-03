"use client"

import { motion } from "framer-motion"

type Milestone = {
  title: string
  eta: string
  status: "done" | "in-progress" | "planned"
  desc: string
}

const MILESTONES: Milestone[] = [
  {
    title: "Agent Planner v2",
    eta: "Q3 2025",
    status: "in-progress",
    desc: "Improved decomposition and safety constraints.",
  },
  {
    title: "Closed-loop Remediation",
    eta: "Q4 2025",
    status: "planned",
    desc: "Action validation w/ dynamic policy injection.",
  },
  {
    title: "Knowledge Graph Sync",
    eta: "Q4 2025",
    status: "planned",
    desc: "Topology + CMDB out-of-the-box connectors.",
  },
  {
    title: "Human-in-the-loop Studio",
    eta: "Q1 2026",
    status: "planned",
    desc: "Visual approvals and simulation sandbox.",
  },
  {
    title: "Runbook Marketplace",
    eta: "Q1 2026",
    status: "planned",
    desc: "Prebuilt automations for common incidents.",
  },
]

export function Roadmap() {
  const colorFor = (s: Milestone["status"]) =>
    s === "done"
      ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
      : s === "in-progress"
        ? "bg-blue-500/15 text-blue-400 border-blue-500/30"
        : "bg-amber-500/15 text-amber-400 border-amber-500/30"

  return (
    <div>
      <h2 id="roadmap-title" className="font-sans text-2xl font-semibold text-foreground">
        Future Roadmap
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-black">
        What&apos;s shipping next to deepen automation while maintaining trust.
      </p>

      <ol className="mt-6 space-y-4" aria-label="Product roadmap timeline">
        {MILESTONES.map((m, i) => (
          <motion.li
            key={m.title}
            className="rounded-md border border-border bg-card p-4"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
          >
            <div className="flex flex-wrap items-center gap-2 text-xs text-black">
              <span>{m.eta}</span>
              <span aria-hidden>•</span>
              <span className={`rounded border px-2 py-0.5 ${colorFor(m.status)}`}>{m.status.replace("-", " ")}</span>
            </div>
            <h3 className="mt-1 text-sm font-semibold text-foreground">{m.title}</h3>
            <p className="mt-1 text-sm text-black">{m.desc}</p>
          </motion.li>
        ))}
      </ol>
    </div>
  )
}
