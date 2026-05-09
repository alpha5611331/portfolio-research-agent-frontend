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
  idle: "bg-zinc-600",
  active: "bg-indigo-400",
  done: "bg-cyan-400",
  error: "bg-red-500",
}

const STATUS_GLOW: Record<AgentStatus, string> = {
  idle: "",
  active: "shadow-[0_0_8px_2px_rgba(99,102,241,0.5)]",
  done: "shadow-[0_0_6px_1px_rgba(34,211,238,0.4)]",
  error: "shadow-[0_0_6px_1px_rgba(239,68,68,0.4)]",
}

const ROW_BG: Record<AgentStatus, string> = {
  idle: "bg-transparent",
  active: "bg-indigo-950/40 border border-indigo-800/30",
  done: "bg-cyan-950/20 border border-cyan-900/20",
  error: "bg-red-950/30 border border-red-900/30",
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
    <div className="space-y-1 font-mono text-xs">
      <div className="mb-4 flex items-center gap-2">
        <span className="text-indigo-500">◈</span>
        <p className="text-[10px] tracking-widest text-indigo-400/80 uppercase font-semibold">
          Agent Trace
        </p>
      </div>

      {AGENTS.map(({ name, label, indent }) => {
        const status = agentStatuses[name]
        return (
          <motion.div
            key={name}
            className={`flex items-center gap-3 rounded-md px-3 py-2 transition-colors ${indent ? "ml-4" : ""} ${ROW_BG[status]}`}
            animate={{ opacity: status === "idle" ? 0.45 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className={`h-2.5 w-2.5 shrink-0 rounded-full ${STATUS_DOT[status]} ${STATUS_GLOW[status]}`}
              animate={status === "active" ? { scale: [1, 1.5, 1] } : { scale: 1 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
            <Badge variant={BADGE_VARIANT[status]} className="text-[11px]">
              {STATUS_ICON[status]} {label}
            </Badge>
          </motion.div>
        )
      })}

      {subtopics.length > 0 && (
        <div className="mt-4 rounded-md border border-zinc-800/50 bg-zinc-900/40 p-3">
          <div className="mb-2 flex items-center gap-2">
            <span className="text-zinc-500">◇</span>
            <p className="text-[10px] tracking-widest text-zinc-400 uppercase font-semibold">
              Subtopics
            </p>
            <span className="ml-auto rounded bg-zinc-800 px-1.5 py-0.5 text-[9px] text-zinc-400">
              {subtopics.length}
            </span>
          </div>
          <div className="space-y-1">
            {subtopics.map((st, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -4 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-1.5 rounded px-2 py-1 text-[11px] text-zinc-300 hover:bg-zinc-800/50"
              >
                <span className="mt-px shrink-0 text-zinc-600">·</span>
                <span className="leading-tight">{st}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
