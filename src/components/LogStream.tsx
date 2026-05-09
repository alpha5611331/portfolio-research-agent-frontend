import { useEffect, useRef } from 'react'
import { format } from 'date-fns'
import { useResearchStore } from '@/store/useResearchStore'
import type { EventType } from '@/types/events'

const EVENT_COLOR: Record<EventType, string> = {
  PLAN_CREATED: 'text-cyan-400',
  SEARCH_DONE: 'text-blue-400',
  RAG_DONE: 'text-violet-400',
  SOURCES_COLLECTED: 'text-green-400',
  SUMMARY_CHUNK: 'text-yellow-400',
  SUMMARY_DONE: 'text-yellow-300',
  REPORT_CHUNK: 'text-indigo-400',
  REPORT_DONE: 'text-indigo-300',
  ERROR: 'text-red-400',
}

function eventLabel(event: EventType, data: Record<string, unknown>, subtopic?: string): string {
  switch (event) {
    case 'PLAN_CREATED':
      return `Plan created — ${(data.subtopics as string[])?.length ?? 0} subtopics`
    case 'SOURCES_COLLECTED':
      return `Sources collected${subtopic ? ` [${subtopic}]` : ''} — ${data.count ?? 0} results`
    case 'SUMMARY_DONE':
      return `Summary done${subtopic ? ` [${subtopic}]` : ''}`
    case 'REPORT_CHUNK':
      return `Synthesizing report...`
    case 'REPORT_DONE':
      return `Report complete`
    case 'ERROR':
      return `Error: ${data.message ?? 'unknown'}`
    default:
      return event
  }
}

export default function LogStream() {
  const events = useResearchStore((s) => s.events)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [events])

  if (events.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="font-mono text-xs text-zinc-700">Awaiting research query...</p>
      </div>
    )
  }

  const filtered = events.filter((e) => e.event !== 'REPORT_CHUNK')

  return (
    <div className="h-full overflow-y-auto font-mono text-xs space-y-1 pr-1">
      {filtered.map((e, i) => (
        <div key={i} className="flex gap-2 items-start">
          <span className="text-zinc-600 shrink-0">
            {format(new Date(e.timestamp), 'HH:mm:ss')}
          </span>
          <span className={`${EVENT_COLOR[e.event]} shrink-0`}>●</span>
          <span className="text-zinc-300">{eventLabel(e.event, e.data, e.subtopic)}</span>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
