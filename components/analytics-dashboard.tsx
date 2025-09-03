"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts"

// 3-5 color palette compliance:
// - Primary: cyan (#06b6d4)
// - Accent: emerald (#10b981)
// - Neutrals: slate (#94a3b8 / grid lines)
// No extra hues beyond cyan/emerald + neutrals.
const colors = {
  primary: "#06b6d4",
  accent: "#10b981",
  neutral: "#94a3b8",
}

// Mock analytics data
const mttrData = [
  { day: "Mon", mttr: 88, auto: 22 },
  { day: "Tue", mttr: 76, auto: 28 },
  { day: "Wed", mttr: 64, auto: 35 },
  { day: "Thu", mttr: 58, auto: 42 },
  { day: "Fri", mttr: 47, auto: 48 },
  { day: "Sat", mttr: 52, auto: 45 },
  { day: "Sun", mttr: 49, auto: 50 },
]

const volumeData = [
  { name: "P1", count: 12 },
  { name: "P2", count: 35 },
  { name: "P3", count: 78 },
  { name: "P4", count: 112 },
]

const categoryData = [
  { name: "Networking", value: 18 },
  { name: "Compute", value: 28 },
  { name: "Storage", value: 20 },
  { name: "SaaS", value: 22 },
  { name: "Security", value: 12 },
]

export function AnalyticsDashboard() {
  return (
    <div>
      <h2 id="analytics-title" className="font-sans text-2xl font-semibold text-foreground">
        Advanced Analytics
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-black">
        Track resolution velocity, automation adoption, and incident distributions.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="rounded-md border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">MTTR & Automation Over Time</h3>
          <div className="mt-3 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mttrData}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke={colors.neutral} />
                <YAxis stroke={colors.neutral} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    color: "var(--popover-foreground)",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="mttr"
                  name="MTTR (mins)"
                  stroke={colors.primary}
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="auto"
                  name="Automation (%)"
                  stroke={colors.accent}
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">Tickets by Priority</h3>
          <div className="mt-3 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={volumeData}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis dataKey="name" stroke={colors.neutral} />
                <YAxis stroke={colors.neutral} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    color: "var(--popover-foreground)",
                  }}
                />
                <Bar dataKey="count" name="Count" fill={colors.primary} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">Incident Categories</h3>
          <div className="mt-3 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    color: "var(--popover-foreground)",
                  }}
                />
                <Pie data={categoryData} dataKey="value" nameKey="name" outerRadius={85} label>
                  {categoryData.map((_, idx) => (
                    <Cell key={idx} fill={[colors.primary, colors.accent, "#334155"][idx % 3]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-md border border-border bg-card p-4">
          <h3 className="text-sm font-semibold text-foreground">Auto-Resolution vs Human Assist</h3>
          <div className="mt-3 h-56">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mttrData}>
                <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
                <XAxis dataKey="day" stroke={colors.neutral} />
                <YAxis stroke={colors.neutral} />
                <Tooltip
                  contentStyle={{
                    background: "var(--popover)",
                    border: "1px solid var(--border)",
                    color: "var(--popover-foreground)",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="auto"
                  name="Automation (%)"
                  stroke={colors.primary}
                  fill={colors.primary}
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
