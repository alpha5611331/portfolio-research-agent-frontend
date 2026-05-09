'use client'

import { motion } from 'framer-motion'
import { useResearchStore } from '@/store/useResearchStore'
import type { AgentName, AgentStatus } from '@/types/events'

const AGENTS: { name: AgentName; label: string; indent?: boolean }[] = [
  { name: 'planner', label: 'Planner' },
  { name: 'researcher', label: 'Researcher ×N', indent: true },
  { name: 'summarizer', label: 'Summarizer', indent: true },
  { name: 'synthesizer', label: 'Synthesizer' },
]

const STATUS_COLOR: Record<AgentStatus, string> = {
  idle: 'bg-zinc-700',
  active: 'bg-indigo-500',
  done: 'bg-cyan-500',
  error: 'bg-red-500',
}

const STATUS_ICON: Record<AgentStatus, string> = {
  idle: '○',
  active: '●',
  done: '✓',
  error: '✗',
}

export default function AgentTraceTree() {
  const { agentStatuses, subtopics } = useResearchStore()

  return (
    <div className="font-mono text-xs space-y-2">
      <p className="text-zinc-500 uppercase tracking-widest text-[10px] mb-3">Agent Trace</p>
      {AGENTS.map(({ name, label, indent }) => {
        const status = agentStatuses[name]
        return (
          <motion.div
            key={name}
            className={`flex items-center gap-2 ${indent ? 'ml-4' : ''}`}
            animate={{ opacity: status === 'idle' ? 0.4 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className={`w-2 h-2 rounded-full ${STATUS_COLOR[status]}`}
              animate={status === 'active' ? { scale: [1, 1.4, 1] } : { scale: 1 }}
              transition={{ repeat: Infinity, duration: 1 }}
            />
            <span className={status === 'active' ? 'text-indigo-300' : 'text-zinc-400'}>
              {STATUS_ICON[status]} {label}
            </span>
          </motion.div>
        )
      })}
      {subtopics.length > 0 && (
        <div className="mt-3 ml-4 space-y-1">
          <p className="text-zinc-600 text-[10px] uppercase tracking-widest">Subtopics</p>
          {subtopics.map((st, i) => (
            <div key={i} className="text-zinc-500 text-[10px] truncate">
              · {st}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
