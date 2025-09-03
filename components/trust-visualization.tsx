"use client"

import { ResponsiveContainer, RadialBarChart, RadialBar, PolarAngleAxis, Tooltip } from "recharts"

const trustData = [
  { name: "Policy Compliance", value: 92, fill: "#10b981" }, // emerald
  { name: "Model Confidence", value: 88, fill: "#06b6d4" }, // cyan
  { name: "Human Oversight", value: 75, fill: "#64748b" }, // slate neutral
]

export function TrustVisualization() {
  return (
    <div>
      {/* theme-aware tokens */}
      <h2 id="trust-title" className="font-sans text-2xl font-semibold text-foreground">
        Confidence & Trust
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-black">
        Transparent controls and metrics ensure trustworthy, auditable automation.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-4">
          {/* theme-aware tokens */}
          <h3 className="text-sm font-semibold text-foreground">Trust Composite Index</h3>
          <div className="mt-3 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart innerRadius="30%" outerRadius="100%" data={trustData} startAngle={90} endAngle={-270}>
                <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    color: "var(--popover-foreground)",
                  }}
                />
                <RadialBar minAngle={15} background clockWise dataKey="value" />
              </RadialBarChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-3 space-y-1 text-sm text-black">
            {trustData.map((d) => (
              <li key={d.name} className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-sm" style={{ backgroundColor: d.fill }} aria-hidden />
                <span className="sr-only">{`${d.name} color indicator`}</span>
                {/* theme-aware tokens */}
                <span className="text-foreground">{d.name}</span>
                <span className="ml-auto font-medium text-primary">{d.value}%</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          {/* theme-aware tokens */}
          <h3 className="text-sm font-semibold text-foreground">Guardrails</h3>
          <ul className="mt-3 space-y-2 text-sm text-black" role="list" aria-label="Trust guardrails">
            <li className="flex items-center justify-between rounded border border-border bg-background p-3">
              <span>RBAC + Just-in-time Approval</span>
              <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-emerald-400">Active</span>
            </li>
            <li className="flex items-center justify-between rounded border border-border bg-background p-3">
              <span>Scoped Credentials & Vault</span>
              <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-emerald-400">Active</span>
            </li>
            <li className="flex items-center justify-between rounded border border-border bg-background p-3">
              <span>Change Windows & Policies</span>
              <span className="rounded-md bg-emerald-500/15 px-2 py-0.5 text-emerald-400">Active</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
