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
  const reset = useResearchStore((s) => s.reset)

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
        ↑ Sessions ({sessions.length})
      </button>

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-end justify-start">
            <div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 16, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative w-120 max-w-[90vw] max-h-[70vh] mb-10 ml-4 bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden flex flex-col shadow-2xl"
            >
              <div className="shrink-0 flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">Session History</span>
                <button
                  onClick={() => setOpen(false)}
                  className="text-zinc-600 hover:text-zinc-300 font-mono text-sm transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="flex-1 overflow-y-auto divide-y divide-zinc-800">
                {sessions.length === 0 && (
                  <p className="font-mono text-xs text-zinc-700 p-4 text-center">No past sessions</p>
                )}
                {sessions.map((s) => (
                  <div
                    key={s.session_id}
                    onClick={() => { reset(); setQuery(s.query); setOpen(false) }}
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
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
