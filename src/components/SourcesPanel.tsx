'use client'

import { useState } from 'react'
import { useResearchStore } from '@/store/useResearchStore'

export default function SourcesPanel() {
  const { sources, subtopics } = useResearchStore()
  const [activeTab, setActiveTab] = useState(0)

  const tabs = subtopics.length > 0 ? subtopics : Object.keys(sources)
  const activeSubtopic = tabs[activeTab]
  const activeSources = activeSubtopic ? (sources[activeSubtopic] ?? []) : []

  if (tabs.length === 0) {
    return (
      <div className="h-full flex items-center justify-center">
        <p className="font-mono text-xs text-zinc-700">Sources will appear here...</p>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col gap-2">
      <div className="flex flex-wrap gap-1 pb-1">
        {tabs.map((t, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`px-2 py-1 rounded font-mono text-[10px] transition-colors ${
              i === activeTab
                ? 'bg-indigo-600/30 border border-indigo-500/50 text-indigo-300'
                : 'border border-zinc-800 text-zinc-600 hover:border-zinc-600'
            }`}
          >
            {t.slice(0, 20)}
          </button>
        ))}
      </div>
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {activeSources.map((src, i) => (
          <div key={i} className="rounded border border-zinc-800 bg-zinc-900/50 p-3 space-y-1">
            <div className="flex items-start justify-between gap-2">
              <p className="font-mono text-xs text-zinc-300 line-clamp-2">{src.title}</p>
              <span className="shrink-0 px-1.5 py-0.5 rounded text-[9px] font-mono bg-zinc-800 text-zinc-500">
                {new URL(src.url).hostname.replace('www.', '')}
              </span>
            </div>
            <p className="font-mono text-[10px] text-zinc-600 line-clamp-3">{src.snippet}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <div className="h-1 w-16 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-500 rounded-full"
                    style={{ width: `${Math.round(src.score * 100)}%` }}
                  />
                </div>
                <span className="font-mono text-[9px] text-zinc-600">
                  {Math.round(src.score * 100)}%
                </span>
              </div>
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[10px] text-indigo-500 hover:text-indigo-400"
              >
                open ↗
              </a>
            </div>
          </div>
        ))}
        {activeSources.length === 0 && (
          <p className="font-mono text-xs text-zinc-700 text-center pt-4">Gathering sources...</p>
        )}
      </div>
    </div>
  )
}
