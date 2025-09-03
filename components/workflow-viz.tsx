"use client"

import type React from "react"

import { useState, useCallback, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

type Stage = {
  id: string
  label: string
  description: string
}

const STAGES: Stage[] = [
  { id: "ingest", label: "Ingest", description: "Collect events, tickets, alerts" },
  { id: "classify", label: "Classify", description: "Intent & priority" },
  { id: "enrich", label: "Enrich", description: "Context, topology, dependencies" },
  { id: "plan", label: "Plan", description: "Multi-step reasoning" },
  { id: "act", label: "Act", description: "Runbooks & automations" },
  { id: "verify", label: "Verify", description: "Validate outcomes" },
  { id: "learn", label: "Learn", description: "Feedback & continuous improvement" },
]

const RAG_STAGE_IDS = new Set(["classify", "enrich", "plan", "act", "verify", "learn"])

export function WorkflowViz() {

  // professional stepper state
  const [activeIdx, setActiveIdx] = useState(0)
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([])
  const total = STAGES.length

  const progress = total > 1 ? Math.round((activeIdx / (total - 1)) * 100) : 0
  const nextStep = useCallback(() => setActiveIdx((i) => Math.min(i + 1, total - 1)), [total])
  const prevStep = useCallback(() => setActiveIdx((i) => Math.max(i - 1, 0)), [total])

  useEffect(() => {
    // keep index in range if stages change
    if (activeIdx < 0) setActiveIdx(0)
    if (activeIdx > total - 1) setActiveIdx(total - 1)
  }, [activeIdx, total])

  const onKeyNav = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault()
        setActiveIdx((i) => Math.min(i + 1, total - 1))
        return
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault()
        setActiveIdx((i) => Math.max(i - 1, 0))
        return
      }
      if (e.key === "Home") {
        e.preventDefault()
        setActiveIdx(0)
        return
      }
      if (e.key === "End") {
        e.preventDefault()
        setActiveIdx(total - 1)
        return
      }
    },
    [total],
  )

  const active = STAGES[activeIdx]

  useEffect(() => {
    document.addEventListener("keydown", onKeyNav)
    return () => {
      document.removeEventListener("keydown", onKeyNav)
    }
  }, [onKeyNav])

  useEffect(() => {
    if (tabsRef.current[activeIdx]) {
      tabsRef.current[activeIdx]?.focus()
    }
  }, [activeIdx])

  return (
    <div aria-labelledby="workflow-title">
      <h2 id="workflow-title" className="font-sans text-2xl font-semibold text-foreground">
        Ticket Resolution Workflow
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-black">
        Visualizing Multi‑Agent RAG orchestrating the ticket lifecycle from ingestion to learning. Select a step to view
        details and responsibilities.
      </p>
      <div className="mt-3 flex items-center gap-3 text-xs">
        <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-primary">
          <Sparkles size={12} aria-hidden />
          RAG Agent
        </span>
                                        <span className="inline-flex items-center gap-1 rounded-full border border-border bg-accent/20 px-2 py-0.5 text-black">
          System
        </span>
      </div>

      {/* Stepper & Details */}
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left: Vertical stepper */}
        <div
          role="tablist"
          aria-label="Ticket resolution steps"
          className="relative rounded-lg border border-border bg-card p-4 lg:col-span-4"
          onKeyDown={onKeyNav}
        >
          {/* vertical rail */}
          <div aria-hidden className="pointer-events-none absolute left-[22px] top-4 bottom-4 w-px bg-border" />

          <ol className="space-y-2">
            {STAGES.map((s, idx) => {
              const isActive = idx === activeIdx
              const tabId = `workflow-tab-${s.id}`
              const panelId = `workflow-panel-${s.id}`
              return (
                <li key={s.id} className="relative">
                  <button
                    ref={(el) => (tabsRef.current[idx] = el)}
                    id={tabId}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={panelId}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIdx(idx)}
                    className={[
                      "group flex w-full items-start gap-3 rounded-lg border border-transparent px-3 py-3 text-left transition",
                      isActive ? "bg-primary/5 ring-1 ring-primary/40" : "hover:bg-muted/40 focus-visible:bg-muted/40",
                    ].join(" ")}
                  >
                    {/* index + marker */}
                    <span className="relative mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-border bg-background text-[11px] font-medium text-black">
                      {String(idx + 1).padStart(2, "0")}
                      {/* active halo */}
                      <span
                        aria-hidden
                        className={[
                          "pointer-events-none absolute -inset-1 rounded-full transition",
                          isActive ? "ring-2 ring-primary/50" : "ring-0",
                        ].join(" ")}
                      />
                    </span>

                    <span className="flex min-w-0 flex-col">
                      <span className="flex items-center gap-2">
                        <span
                          className={["text-sm font-semibold", isActive ? "text-foreground" : "text-foreground"].join(
                            " ",
                          )}
                        >
                          {s.label}
                        </span>
                        {RAG_STAGE_IDS.has(s.id) ? (
                          <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                            <Sparkles size={10} aria-hidden />
                            RAG
                          </span>
                        ) : (
                          <span className="rounded-full border border-border bg-accent/20 px-2 py-0.5 text-[10px] text-black">
                            System
                          </span>
                        )}
                      </span>
                      <span className="mt-0.5 line-clamp-2 text-xs text-black">{s.description}</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>

          {/* SR-only live announcement */}
          <div aria-live="polite" className="sr-only">
            {`Stage ${activeIdx + 1} of ${total}: ${active.label}. ${active.description}`}
          </div>
        </div>

        {/* Right: Details panel */}
        <div className="lg:col-span-8 rounded-lg border border-border bg-card p-6">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            role="tabpanel"
            id={`workflow-panel-${active.id}`}
            aria-labelledby={`workflow-tab-${active.id}`}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold text-foreground">{active.label}</h3>
                <p className="mt-2 text-base text-black">{active.description}</p>
              </div>
              {RAG_STAGE_IDS.has(active.id) ? (
                <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <Sparkles size={14} aria-hidden />
                  RAG Agent
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-border bg-accent/20 px-3 py-1 text-sm text-black">
                  System
                </span>
              )}
            </div>

            <div className="mt-6">
              <div className="flex items-center justify-between text-sm text-black">
                <span>
                  Step {activeIdx + 1} of {total}
                </span>
                <span>{progress}%</span>
              </div>
              <div className="mt-2 h-2 rounded-full bg-muted">
                <div className="h-2 rounded-full bg-primary transition-all duration-300" style={{ width: `${progress}%` }} aria-hidden />
              </div>
            </div>

            {/* Key responsibilities */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border bg-background p-4">
                <h4 className="text-sm font-medium text-foreground">Inputs</h4>
                <p className="mt-2 text-sm text-black">
                  Tickets, signals, and context relevant to the {active.label.toLowerCase()} stage.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <h4 className="text-sm font-medium text-foreground">Outputs</h4>
                <p className="mt-2 text-sm text-black">
                  Structured data and actions produced by {active.label.toLowerCase()} for the next step.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <h4 className="text-sm font-medium text-foreground">Success Criteria</h4>
                <p className="mt-2 text-sm text-black">
                  Clear, verifiable checkpoints ensuring this stage advances resolution efficiently.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-4">
                <h4 className="text-sm font-medium text-foreground">Observability</h4>
                <p className="mt-2 text-sm text-black">
                  Metrics, logs, and traces used to validate outcomes at this step.
                </p>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={prevStep}
                disabled={activeIdx === 0}
                className="rounded-lg border border-border bg-background px-4 py-2 text-sm font-medium text-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-accent/20 transition-colors"
                aria-label="Previous step"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={nextStep}
                disabled={activeIdx === total - 1}
                className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:opacity-90 transition-opacity"
                aria-label="Next step"
              >
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
