'use client'

import { useEffect, useRef } from 'react'
import { format } from 'date-fns'
import { useResearchStore } from '@/store/useResearchStore'
import type { EventType, WSEvent } from '@/types/events'

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
    case 'SEARCH_DONE':
      return `Web search complete${subtopic ? ` · ${subtopic}` : ''}`
    case 'RAG_DONE':
      return `Vector search complete${subtopic ? ` · ${subtopic}` : ''}`
    case 'SOURCES_COLLECTED':
      return `Sources collected${subtopic ? ` · ${subtopic}` : ''} — ${data.count ?? 0} results`
    case 'SUMMARY_CHUNK':
      return `Writing summary${subtopic ? ` · ${subtopic}` : ''}...`
    case 'SUMMARY_DONE':
      return `Summary complete${subtopic ? ` · ${subtopic}` : ''}`
    case 'REPORT_CHUNK':
      return `Synthesizing report...`
    case 'REPORT_DONE':
      return `Report ready`
    case 'ERROR':
      return `Error: ${(data.message as string) ?? 'unknown'}`
    default:
      return event
  }
}

function EventDetail({ e }: { e: WSEvent }) {
  switch (e.event) {
    case 'PLAN_CREATED': {
      const subtopics = (e.data.subtopics as string[]) ?? []
      if (!subtopics.length) return null
      return (
        <ul className="mt-0.5 space-y-0.5">
          {subtopics.map((t, i) => (
            <li key={i} className="flex items-start gap-1">
              <span className="text-zinc-600 shrink-0">·</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )
    }
    case 'SEARCH_DONE': {
      const query = e.data.query as string | undefined
      const count = (e.data.results_count ?? e.data.count) as number | undefined
      if (!query && count == null) return null
      return (
        <p>
          {query && <span className="text-zinc-400">"{query}"</span>}
          {count != null && <span className="ml-2">{count} results</span>}
        </p>
      )
    }
    case 'RAG_DONE': {
      const count = (e.data.docs_count ?? e.data.count) as number | undefined
      return count != null ? <p>{count} docs retrieved</p> : null
    }
    case 'SOURCES_COLLECTED': {
      const sources = (e.data.sources as Array<{ title: string; url: string }>) ?? []
      if (!sources.length) return null
      return (
        <ul className="mt-0.5 space-y-0.5">
          {sources.slice(0, 4).map((s, i) => (
            <li key={i} className="flex items-start gap-1 min-w-0">
              <span className="text-zinc-600 shrink-0">·</span>
              <span className="text-zinc-400 truncate">
                {s.title || (() => { try { return new URL(s.url).hostname } catch { return s.url } })()}
              </span>
            </li>
          ))}
          {sources.length > 4 && (
            <li className="text-zinc-600">+{sources.length - 4} more</li>
          )}
        </ul>
      )
    }
    case 'SUMMARY_CHUNK': {
      const chunk = (e.data.chunk as string) ?? ''
      return chunk ? <p className="line-clamp-2 text-zinc-400">{chunk}</p> : null
    }
    case 'REPORT_DONE': {
      const report = (e.data.report as string) ?? ''
      if (!report) return null
      const words = report.trim().split(/\s+/).length
      return <p>{words} words</p>
    }
    case 'ERROR': {
      const msg = e.data.message as string | undefined
      return msg ? <p className="text-red-500/80 wrap-break-word">{msg}</p> : null
    }
    default:
      return null
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
    <div className="h-full overflow-y-auto font-mono text-xs pr-1 divide-y divide-zinc-800/30">
      {filtered.map((e, i) => (
        <div key={i} className="flex gap-2 items-start py-1.5">
          <span className="text-zinc-600 shrink-0 pt-0.5">
            {format(new Date(e.timestamp), 'HH:mm:ss')}
          </span>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className={`${EVENT_COLOR[e.event]} shrink-0`}>●</span>
              <span className="text-zinc-200">{eventLabel(e.event, e.data, e.subtopic)}</span>
              <span className="ml-auto shrink-0 text-[9px] px-1.5 py-0.5 rounded bg-zinc-800/70 text-zinc-500">
                {e.agent}
              </span>
            </div>
            <div className="mt-0.5 ml-3.5 text-[10px] text-zinc-500 leading-relaxed">
              <EventDetail e={e} />
            </div>
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  )
}
