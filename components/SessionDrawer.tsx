'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import { useResearchStore } from '@/store/useResearchStore'
import { fetchSessions, deleteSession } from '@/lib/api'
import type { SessionSummary } from '@/types/events'

export default function SessionDrawer() {
  const [open, setOpen] = useState(false)
  const [sessions, setSessions] = useState<SessionSummary[]>([])
  const setQuery = useResearchStore((s) => s.setQuery)

  async function load() {
    const data = await fetchSessions()
    setSessions(data)
  }

  useEffect(() => {
    if (open) load()
  }, [open])

  async function handleDelete(id: string, e: React.MouseEvent) {
    e.stopPropagation()
    await deleteSession(id)
    setSessions((prev) => prev.filter((s) => s.session_id !== id))
  }

  const STATUS_COLOR: Record<string, string> = {
    done: 'text-cyan-500',
    running: 'text-indigo-400',
    error: 'text-red-400',
  }

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        className="font-mono text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
      >
        {open ? '▼' : '▲'} Session History ({sessions.length})
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-2 rounded-lg border border-zinc-800 bg-zinc-950 divide-y divide-zinc-800 max-h-64 overflow-y-auto">
              {sessions.length === 0 && (
                <p className="font-mono text-xs text-zinc-700 p-4 text-center">No past sessions</p>
              )}
              {sessions.map((s) => (
                <div
                  key={s.session_id}
                  onClick={() => setQuery(s.query)}
                  className="flex items-center justify-between px-4 py-2.5 hover:bg-zinc-900 cursor-pointer transition-colors"
                >
                  <div className="min-w-0">
                    <p className="font-mono text-xs text-zinc-300 truncate">{s.query}</p>
                    <p className="font-mono text-[10px] text-zinc-600">
                      {format(new Date(s.created_at), 'MMM d, HH:mm')} ·{' '}
                      <span className={STATUS_COLOR[s.status] ?? 'text-zinc-600'}>{s.status}</span>
                    </p>
                  </div>
                  <button
                    onClick={(e) => handleDelete(s.session_id, e)}
                    className="ml-3 text-zinc-700 hover:text-red-500 font-mono text-xs transition-colors"
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
