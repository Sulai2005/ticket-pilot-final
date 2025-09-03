"use client"

import type React from "react"

import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Pause, Play, SkipBack, SkipForward } from "lucide-react"

type TicketStep = {
  id: string
  label: string
  details: string
  kpIs: { mttrMins: number; confidence: number; automation: number }
}

const STEPS: TicketStep[] = [
  {
    id: "new",
    label: "New",
    details: "Ticket created from monitoring alert",
    kpIs: { mttrMins: 120, confidence: 0.55, automation: 0.1 },
  },
  {
    id: "triage",
    label: "Triage",
    details: "Agent classifies and prioritizes",
    kpIs: { mttrMins: 90, confidence: 0.65, automation: 0.25 },
  },
  {
    id: "enrich",
    label: "Enrich",
    details: "Context gathering and topology mapping",
    kpIs: { mttrMins: 70, confidence: 0.72, automation: 0.35 },
  },
  {
    id: "plan",
    label: "Plan",
    details: "Multi-step remediation plan generated",
    kpIs: { mttrMins: 50, confidence: 0.8, automation: 0.5 },
  },
  {
    id: "execute",
    label: "Execute",
    details: "Automations and runbooks applied",
    kpIs: { mttrMins: 25, confidence: 0.88, automation: 0.7 },
  },
  {
    id: "verify",
    label: "Verify",
    details: "Outcome validated & monitoring steady",
    kpIs: { mttrMins: 15, confidence: 0.92, automation: 0.75 },
  },
  {
    id: "resolved",
    label: "Resolved",
    details: "Ticket closed with audit trail",
    kpIs: { mttrMins: 5, confidence: 0.95, automation: 0.8 },
  },
]

export function TicketSimulation() {
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const timerRef = useRef<number | null>(null)

  const step = STEPS[idx]
  const progress = useMemo(() => ((idx + 1) / STEPS.length) * 100, [idx])

  useEffect(() => {
    if (playing) {
      timerRef.current = window.setInterval(() => {
        setIdx((i) => (i < STEPS.length - 1 ? i + 1 : 0))
      }, 1600)
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [playing])

  function handleKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowRight") {
      setIdx((v) => Math.min(STEPS.length - 1, v + 1))
    } else if (e.key === "ArrowLeft") {
      setIdx((v) => Math.max(0, v - 1))
    } else if (e.key.toLowerCase() === " ") {
      e.preventDefault()
      setPlaying((p) => !p)
    }
  }

  return (
    <div aria-labelledby="simulation-title" role="region" tabIndex={0} onKeyDown={handleKeyDown}>
      <h2 id="simulation-title" className="font-sans text-2xl font-semibold text-foreground">
        Interactive Ticket Journey
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-black">
        Step through an end-to-end resolution path. Watch KPIs adapt as the agent progresses.
      </p>

      <div className="mt-6 rounded-md border border-border bg-card p-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-md border border-border bg-background p-2 text-foreground hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Previous step"
              onClick={() => setIdx((v) => Math.max(0, v - 1))}
            >
              <SkipBack size={16} />
            </button>
            <button
              type="button"
              className="rounded-md border border-border bg-background p-2 text-foreground hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label={playing ? "Pause autoplay" : "Play autoplay"}
              onClick={() => setPlaying((p) => !p)}
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
            <button
              type="button"
              className="rounded-md border border-border bg-background p-2 text-foreground hover:bg-accent/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Next step"
              onClick={() => setIdx((v) => Math.min(STEPS.length - 1, v + 1))}
            >
              <SkipForward size={16} />
            </button>
          </div>
          <div className="text-xs text-black">
            Step {idx + 1} of {STEPS.length}
          </div>
        </div>

        <div
          className="mt-4 h-2 w-full rounded bg-border"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
        >
          <motion.div
            className="h-2 rounded bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <div aria-live="polite" className="sr-only">
          {`Current stage: ${step.label}. ${step.details}`}
        </div>

        <div className="mt-3 overflow-x-auto">
          <div className="flex min-w-max items-center gap-2">
            {STEPS.map((s, i) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setIdx(i)}
                className={`rounded-full border px-2.5 py-1 text-xs transition ${
                  i === idx
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-black hover:bg-accent/20"
                }`}
                aria-current={i === idx ? "step" : undefined}
                aria-label={`Go to ${s.label} stage`}
              >
                <span
                  className={`mr-1 inline-block h-1.5 w-1.5 rounded-full ${
                    i === idx ? "bg-primary-foreground" : "bg-black"
                  }`}
                  aria-hidden
                />
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            className="mt-6 grid gap-4 md:grid-cols-3"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <div className="rounded-md border border-border bg-card p-4 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-black">Current Stage</div>
              <div className="mt-1 text-lg font-semibold text-foreground">{step.label}</div>
              <p className="mt-2 text-sm text-black">{step.details}</p>
            </div>
            <KpiCard label="MTTR (mins)" value={step.kpIs.mttrMins.toString()} />
            <KpiCard label="Confidence" value={`${Math.round(step.kpIs.confidence * 100)}%`} />
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <KpiBar label="Automation Level" percent={Math.round(step.kpIs.automation * 100)} />
          <KpiBar label="Change Success" percent={65 + Math.round(step.kpIs.confidence * 20)} />
          <KpiBar label="Noise Reduction" percent={30 + Math.round(step.kpIs.automation * 40)} />
        </div>
      </div>
    </div>
  )
}

function KpiCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md border border-border bg-card p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-black">{label}</div>
      <motion.div
        className="mt-2 text-2xl font-semibold text-primary"
        initial={{ scale: 0.98 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.2 }}
      >
        {value}
      </motion.div>
    </div>
  )
}

function KpiBar({ label, percent }: { label: string; percent: number }) {
  return (
    <div className="rounded-md border border-border bg-card p-4 shadow-sm">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>{label}</span>
        <span className="font-medium text-primary">{percent}%</span>
      </div>
      <div className="mt-2 h-2 w-full rounded bg-border" aria-hidden>
        <motion.div
          className="h-2 rounded bg-primary"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </div>
  )
}
