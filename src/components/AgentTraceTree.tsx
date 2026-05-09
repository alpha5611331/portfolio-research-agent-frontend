"use client"

import { motion } from "framer-motion"
import { useResearchStore } from "@/store/useResearchStore"
import type { AgentName, AgentStatus } from "@/types/events"
import { Badge } from "@/components/ui/badge"

const AGENTS: { name: AgentName; label: string; indent?: boolean }[] = [
  { name: "planner", label: "Planner" },
  { name: "researcher", label: "Researcher ×N", indent: true },
  { name: "summarizer", label: "Summarizer", indent: true },
  { name: "synthesizer", label: "Synthesizer" },
]

const STATUS_DOT: Record<AgentStatus, string> = {
  idle: "bg-zinc-700",
  active: "bg-indigo-500",
  done: "bg-cyan-500",
  error: "bg-red-500",
}

const BADGE_VARIANT: Record<AgentStatus, "ghost" | "indigo" | "cyan" | "red" | "default"> = {
  idle: "ghost",
  active: "indigo",
  done: "cyan",
  error: "red",
}

const STATUS_ICON: Record<AgentStatus, string> = {
  idle: "○",
  active: "●",
  done: "✓",
  error: "✗",
}

export default function AgentTraceTree() {
  const { agentStatuses, subtopics } = useResearchStore()

  return (
    <div className="space-y-2 font-mono text-xs">
      <p className="mb-3 text-[10px] tracking-widest text-zinc-500 uppercase">Agent Trace</p>
      {AGENTS.map(({ name, label, indent }) => {
        const status = agentStatuses[name]
        return (
          <motion.div
            key={name}
            className={`flex items-center gap-2 ${indent ? "ml-4" : ""}`}
            animate={{ opacity: status === "idle" ? 0.4 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className={`h-2 w-2 shrink-0 rounded-full ${STATUS_DOT[status]}`}
              animate={status === "active" ? { scale: [1, 1.4, 1] } : { scale: 1 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
            <Badge variant={BADGE_VARIANT[status]}>
              {STATUS_ICON[status]} {label}
            </Badge>
          </motion.div>
        )
      })}
      {subtopics.length > 0 && (
        <div className="mt-3 ml-4 space-y-1">
          <p className="text-[10px] tracking-widest text-zinc-600 uppercase">Subtopics</p>
          {subtopics.map((st, i) => (
            <Badge key={i} variant="ghost" className="block truncate text-[10px]">
              · {st}
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
