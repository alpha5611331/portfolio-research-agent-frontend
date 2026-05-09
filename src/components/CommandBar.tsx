'use client'

import { useState, useEffect, useRef } from 'react'
import { useResearchStore } from '@/store/useResearchStore'
import { submitResearch, openWebSocket } from '@/lib/api'
import type { WSEvent } from '@/types/events'

const PLACEHOLDERS = [
  'What is the future of AI agents in healthcare?',
  'How is quantum computing changing cryptography?',
  'What are the economic impacts of renewable energy adoption?',
  'How do large language models reason about code?',
]

export default function CommandBar() {
  const { query, setQuery, startSession, addEvent, isRunning } = useResearchStore()
  const [placeholder, setPlaceholder] = useState(PLACEHOLDERS[0])
  const [error, setError] = useState<string | null>(null)
  const wsRef = useRef<WebSocket | null>(null)
  const phIdx = useRef(0)

  useEffect(() => {
    const id = setInterval(() => {
      phIdx.current = (phIdx.current + 1) % PLACEHOLDERS.length
      setPlaceholder(PLACEHOLDERS[phIdx.current])
    }, 4000)
    return () => clearInterval(id)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!query.trim() || isRunning) return
    setError(null)
    wsRef.current?.close()

    try {
      const { session_id } = await submitResearch(query)
      startSession(session_id, query)

      const ws = openWebSocket(session_id, (data) => {
        addEvent(data as WSEvent)
      })
      wsRef.current = ws
    } catch {
      setError('Failed to connect. Is the backend running?')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="relative flex items-center rounded-lg border border-indigo-500/30 bg-black/40 backdrop-blur-sm focus-within:border-indigo-400/60 transition-colors">
        <span className="pl-4 text-indigo-400 font-mono text-sm select-none">▶</span>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          disabled={isRunning}
          className="flex-1 bg-transparent px-3 py-4 text-white placeholder-zinc-600 font-mono text-sm outline-none disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={isRunning || !query.trim()}
          className="mr-2 px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:cursor-not-allowed text-white font-mono text-xs transition-colors"
        >
          {isRunning ? 'RESEARCHING...' : 'RESEARCH ▶'}
        </button>
      </div>
      {error && <p className="mt-2 text-red-400 font-mono text-xs">{error}</p>}
    </form>
  )
}
