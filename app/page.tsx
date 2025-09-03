"use client"

import { useEffect } from "react"
import { Hero } from "@/components/hero"
import { WorkflowViz } from "@/components/workflow-viz"
import { TicketSimulation } from "@/components/ticket-simulation"
import { CapabilityCards } from "@/components/capability-cards"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { TrustVisualization } from "@/components/trust-visualization"
import { TicketCards } from "@/components/ticket-cards"

import { Roadmap } from "@/components/roadmap"
import { DarkModeToggle } from "@/components/dark-mode-toggle"

export default function Page() {
  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "dark") document.documentElement.classList.add("dark")
    if (stored === "light") document.documentElement.classList.remove("dark")
  }, [])

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-6">
          <a
            href="#top"
            className="font-sans text-2xl font-semibold tracking-tight text-primary"
            aria-label="Ticket Pilot — Agent IT Operations"
          >
            Ticket Pilot • Agent IT Ops
          </a>
          <nav aria-label="Primary Navigation">
            <ul className="hidden items-center gap-8 text-base font-medium text-black md:flex">
              <li>
                <a
                  className="rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href="#workflow"
                >
                  Workflow
                </a>
              </li>
              <li>
                <a
                  className="rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href="#simulation"
                >
                  Simulation
                </a>
              </li>
              <li>
                <a
                  className="rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href="#capabilities"
                >
                  Capabilities
                </a>
              </li>
              <li>
                <a
                  className="rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href="#tickets"
                >
                  Tickets
                </a>
              </li>
              <li>
                <a
                  className="rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href="#analytics"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  className="rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href="#trust"
                >
                  Trust
                </a>
              </li>


              <li>
                <a
                  className="rounded hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  href="#roadmap"
                >
                  Roadmap
                </a>
              </li>
            </ul>
          </nav>
          <DarkModeToggle />
        </div>
      </header>

      <section id="top" aria-labelledby="hero-title">
        <Hero />
      </section>

      <section id="workflow" aria-labelledby="workflow-title" className="mx-auto max-w-6xl px-4 py-16">
        <WorkflowViz />
      </section>

      <section id="simulation" aria-labelledby="simulation-title" className="mx-auto max-w-6xl px-4 py-16">
        <TicketSimulation />
      </section>

      <section id="capabilities" aria-labelledby="capabilities-title" className="mx-auto max-w-6xl px-4 py-16">
        <CapabilityCards />
      </section>

      <section id="tickets" aria-labelledby="tickets-title" className="mx-auto max-w-6xl px-4 py-16">
        <TicketCards />
      </section>

      <section id="analytics" aria-labelledby="analytics-title" className="mx-auto max-w-6xl px-4 py-16">
        <AnalyticsDashboard />
      </section>

      <section id="trust" aria-labelledby="trust-title" className="mx-auto max-w-6xl px-4 py-16">
        <TrustVisualization />
      </section>





      <section id="roadmap" aria-labelledby="roadmap-title" className="mx-auto max-w-6xl px-4 py-16">
        <Roadmap />
      </section>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-8 text-sm text-black">
          <p className="text-black">© {new Date().getFullYear()} Ticket Pilot. All rights reserved.</p>
          <a
            href="#top"
            className="rounded text-black hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            Back to top
          </a>
        </div>
      </footer>
    </main>
  )
}
