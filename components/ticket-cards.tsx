"use client"

import { motion } from "framer-motion"
import { AlertTriangle, CheckCircle, Clock, Zap, Users, Shield, TrendingUp, Activity } from "lucide-react"

type TicketType = {
  icon: React.ComponentType<{ size?: number; className?: string }>
  title: string
  description: string
  status: "resolved" | "in-progress" | "pending"
  priority: "high" | "medium" | "low"
  agent: string
  metrics: {
    avgResolution: string
    successRate: string
  }
}

const TICKET_TYPES: TicketType[] = [
  {
    icon: AlertTriangle,
    title: "Incident Response",
    description: "Critical system failures and service disruptions",
    status: "resolved",
    priority: "high",
    agent: "Incident Resolver",
    metrics: {
      avgResolution: "15 min",
      successRate: "98.5%"
    }
  },
  {
    icon: Clock,
    title: "Performance Issues",
    description: "Slow response times and resource bottlenecks",
    status: "in-progress",
    priority: "medium",
    agent: "Performance Analyzer",
    metrics: {
      avgResolution: "45 min",
      successRate: "94.2%"
    }
  },
  {
    icon: Users,
    title: "Access Management",
    description: "User permissions and authentication requests",
    status: "pending",
    priority: "low",
    agent: "Access Controller",
    metrics: {
      avgResolution: "2 hours",
      successRate: "96.8%"
    }
  },
  {
    icon: Shield,
    title: "Security Alerts",
    description: "Threat detection and vulnerability management",
    status: "resolved",
    priority: "high",
    agent: "Security Monitor",
    metrics: {
      avgResolution: "25 min",
      successRate: "99.1%"
    }
  },
  {
    icon: TrendingUp,
    title: "Capacity Planning",
    description: "Resource scaling and infrastructure optimization",
    status: "in-progress",
    priority: "medium",
    agent: "Capacity Planner",
    metrics: {
      avgResolution: "3 hours",
      successRate: "92.7%"
    }
  },
  {
    icon: Activity,
    title: "Monitoring Setup",
    description: "Alert configuration and dashboard creation",
    status: "pending",
    priority: "low",
    agent: "Monitoring Specialist",
    metrics: {
      avgResolution: "4 hours",
      successRate: "89.3%"
    }
  }
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 160, damping: 18 } },
}

const getStatusColor = (status: TicketType["status"]) => {
  switch (status) {
    case "resolved":
      return "bg-emerald-500/15 text-emerald-400 border-emerald-500/30"
    case "in-progress":
      return "bg-blue-500/15 text-blue-400 border-blue-500/30"
    case "pending":
      return "bg-amber-500/15 text-amber-400 border-amber-500/30"
  }
}

const getPriorityColor = (priority: TicketType["priority"]) => {
  switch (priority) {
    case "high":
      return "bg-red-500/15 text-red-400 border-red-500/30"
    case "medium":
      return "bg-yellow-500/15 text-yellow-400 border-yellow-500/30"
    case "low":
      return "bg-green-500/15 text-green-400 border-green-500/30"
  }
}

export function TicketCards() {
  return (
    <div>
      <h2 id="tickets-title" className="font-sans text-2xl font-semibold text-foreground">
        Ticket Resolution Types
      </h2>
      <p className="mt-2 max-w-3xl text-sm text-black">
        Multi-Agent RAG orchestration handles various ticket types with specialized agents and automated workflows.
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {TICKET_TYPES.map((ticket) => (
          <motion.article
            key={ticket.title}
            variants={item}
            className="group relative rounded-xl border border-border bg-card p-6 outline-none transition-all hover:border-primary/40 hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.98 }}
            tabIndex={0}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <ticket.icon size={20} className="text-primary" aria-hidden />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{ticket.title}</h3>
                  <p className="text-sm text-black">{ticket.description}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium ${getStatusColor(ticket.status)}`}>
                {ticket.status === "resolved" && <CheckCircle size={12} aria-hidden />}
                {ticket.status === "in-progress" && <Clock size={12} aria-hidden />}
                {ticket.status === "pending" && <Zap size={12} aria-hidden />}
                {ticket.status.replace("-", " ")}
              </span>
              <span className={`inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                {ticket.priority}
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-black">Agent:</span>
                <span className="font-medium text-foreground">{ticket.agent}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-background p-3 text-center">
                  <p className="text-xs text-black">Avg Resolution</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{ticket.metrics.avgResolution}</p>
                </div>
                <div className="rounded-lg bg-background p-3 text-center">
                  <p className="text-xs text-black">Success Rate</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{ticket.metrics.successRate}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs text-black">
              <span>AI-powered resolution</span>
              <span className="inline-flex items-center gap-1">
                <Zap size={12} aria-hidden />
                Automated
              </span>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
