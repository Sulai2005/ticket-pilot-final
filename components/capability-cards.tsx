"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Activity, BellRing, Cloud, LifeBuoy, Workflow, GitBranch, Sparkles, Cable } from "lucide-react"



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 18 } },
}

export function CapabilityCards() {
  return (
    <section aria-labelledby="capabilities-title" className="relative">
      <h2 id="capabilities-title" className="font-sans text-2xl font-semibold text-foreground text-balance">
        Capabilities
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-black text-pretty">
        Connect your observability, incident response, cloud, and ITSM tools through a Multi‑Agent RAG Router and
        specialized agents.
      </p>

      <div className="relative mt-6">
        <svg
          className="pointer-events-none absolute inset-0 hidden h-full w-full sm:block"
          viewBox="0 0 1200 420"
          role="presentation"
          aria-hidden
        >
          <defs>
            <marker id="arrow" markerWidth="6" markerHeight="6" refX="5" refY="3" orient="auto">
              <path d="M0,0 L0,6 L6,3 z" className="fill-border" />
            </marker>
          </defs>
          {/* Left column (x≈180) -> Middle column (x≈600) */}
          <line x1="180" y1="80" x2="600" y2="140" strokeWidth="2" className="stroke-border" markerEnd="url(#arrow)" />
          <line x1="180" y1="200" x2="600" y2="160" strokeWidth="2" className="stroke-border" markerEnd="url(#arrow)" />
          <line x1="180" y1="320" x2="600" y2="180" strokeWidth="2" className="stroke-border" markerEnd="url(#arrow)" />
          {/* Right column (x≈1000) <- Middle column (x≈600) */}
          <line
            x1="600"
            y1="180"
            x2="1000"
            y2="120"
            strokeWidth="2"
            className="stroke-border"
            markerEnd="url(#arrow)"
          />
          <line
            x1="600"
            y1="200"
            x2="1000"
            y2="240"
            strokeWidth="2"
            className="stroke-border"
            markerEnd="url(#arrow)"
          />
          <line
            x1="600"
            y1="220"
            x2="1000"
            y2="360"
            strokeWidth="2"
            className="stroke-border"
            markerEnd="url(#arrow)"
          />
        </svg>

        <motion.div
          role="list"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {/* Left Column */}
          <motion.article
            role="listitem"
            variants={item}
            className="group relative rounded-md border border-border bg-card p-4 outline-none transition hover:border-primary/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
            aria-label="Observability integrations: Datadog, New Relic, Grafana"
          >
            <div className="flex items-center gap-2">
              <Activity size={18} className="text-primary" aria-hidden />
              <h3 className="text-sm font-semibold text-foreground">Observability</h3>
            </div>
            <p className="mt-1 text-sm text-black">Metrics, logs, and traces at scale.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-black">
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Datadog</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">New Relic</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Grafana</span>
            </div>
          </motion.article>

          <motion.article
            role="listitem"
            variants={item}
            className="group relative rounded-md border border-border bg-card p-4 outline-none transition hover:border-primary/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
            aria-label="Incident Response integrations: PagerDuty, Opsgenie, Slack"
          >
            <div className="flex items-center gap-2">
              <BellRing size={18} className="text-primary" aria-hidden />
              <h3 className="text-sm font-semibold text-foreground">Incident Response</h3>
            </div>
            <p className="mt-1 text-sm text-black">On‑call, paging, and war rooms.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-black">
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">PagerDuty</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Opsgenie</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Slack</span>
            </div>
          </motion.article>

          <motion.article
            role="listitem"
            variants={item}
            className="group relative rounded-md border border-border bg-card p-4 outline-none transition hover:border-primary/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
            aria-label="Cloud providers: AWS, GCP, Azure"
          >
            <div className="flex items-center gap-2">
              <Cloud size={18} className="text-primary" aria-hidden />
              <h3 className="text-sm font-semibold text-foreground">Cloud</h3>
            </div>
            <p className="mt-1 text-sm text-black">Infra, services, and deployments.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-black">
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">AWS</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">GCP</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Azure</span>
            </div>
          </motion.article>

          {/* Middle Column */}
          <motion.article
            role="listitem"
            variants={item}
            className="group relative rounded-md border border-border bg-card p-4 outline-none transition hover:border-primary/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
            aria-label="Multi-Agent RAG Router and Agents"
          >
            <div className="flex items-center gap-2">
              <Workflow size={18} className="text-primary" aria-hidden />
              <h3 className="text-sm font-semibold text-foreground">Multi‑Agent RAG Router</h3>
            </div>
            <p className="mt-1 text-sm text-black">
              Classifies tickets, retrieves knowledge, and orchestrates agents.
            </p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-black">
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Triager</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Resolver</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Comms</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Auditor</span>
            </div>
          </motion.article>

          <motion.article
            role="listitem"
            variants={item}
            className="group relative rounded-md border border-border bg-card p-4 outline-none transition hover:border-primary/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
            aria-label="ITSM systems: Jira Service Management, ServiceNow"
          >
            <div className="flex items-center gap-2">
              <LifeBuoy size={18} className="text-primary" aria-hidden />
              <h3 className="text-sm font-semibold text-foreground">ITSM</h3>
            </div>
            <p className="mt-1 text-sm text-black">Ticket systems and workflows.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-black">
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Jira SM</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">ServiceNow</span>
            </div>
          </motion.article>

          {/* Right Column */}
          <motion.article
            role="listitem"
            variants={item}
            className="group relative rounded-md border border-border bg-card p-4 outline-none transition hover:border-primary/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
            aria-label="Developer tools and automation: GitHub, Terraform, custom APIs"
          >
            <div className="flex items-center gap-2">
              <GitBranch size={18} className="text-primary" aria-hidden />
              <h3 className="text-sm font-semibold text-foreground">Dev & Automation</h3>
            </div>
            <p className="mt-1 text-sm text-black">SCM, infra‑as‑code, and custom tools.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-black">
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">GitHub</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Terraform</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Custom APIs</span>
            </div>
          </motion.article>

          <motion.article
            role="listitem"
            variants={item}
            className="group relative rounded-md border border-border bg-card p-4 outline-none transition hover:border-primary/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
            aria-label="Outcomes and metrics: MTTR, FCR"
          >
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-primary" aria-hidden />
              <h3 className="text-sm font-semibold text-foreground">Outcomes</h3>
            </div>
            <p className="mt-1 text-sm text-black">Resolved tickets with explainability and metrics.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-black">
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">MTTR</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">FCR</span>
            </div>
          </motion.article>

          {/* Optional: Tools card retained for parity with earlier content */}
          <motion.article
            role="listitem"
            variants={item}
            className="group relative rounded-md border border-border bg-card p-4 outline-none transition hover:border-primary/40 hover:shadow-md focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
            aria-label="Approvals and audit"
          >
            <div className="flex items-center gap-2">
              <Cable size={18} className="text-primary" aria-hidden />
              <h3 className="text-sm font-semibold text-foreground">Controls</h3>
            </div>
            <p className="mt-1 text-sm text-black">Approvals, guardrails, and audit trails.</p>
            <div className="mt-2 flex flex-wrap gap-2 text-xs text-black">
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Approvals</span>
              <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5">Audit</span>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  )
}
