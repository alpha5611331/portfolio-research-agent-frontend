'use client'

import { useState } from 'react'
import CommandBar from '@/components/CommandBar'
import ProviderSelector from '@/components/ProviderSelector'
import AgentTraceTree from '@/components/AgentTraceTree'
import LogStream from '@/components/LogStream'
import SourcesPanel from '@/components/SourcesPanel'
import ReportViewer from '@/components/ReportViewer'
import SessionDrawer from '@/components/SessionDrawer'
import StatusBar from '@/components/StatusBar'
import { useResearchStore } from '@/store/useResearchStore'

export default function Home() {
  const [provider, setProvider] = useState('openai')
  const [model, setModel] = useState('gpt-4o-mini')
  const hasReport = useResearchStore((s) => s.reportChunks.length > 0)

  return (
    <div className="grid-bg min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b border-zinc-800/60 bg-black/30 backdrop-blur-sm px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-indigo-400 font-mono text-lg">⬡</span>
          <span className="font-mono text-sm text-zinc-300 tracking-wider">
            RESEARCH COMMAND CENTER
          </span>
        </div>
        <ProviderSelector
          provider={provider}
          model={model}
          onChange={(p, m) => { setProvider(p); setModel(m) }}
        />
      </header>

      {/* Command Bar */}
      <div className="px-6 py-4 border-b border-zinc-800/40 bg-black/20">
        <CommandBar provider={provider} model={model} />
      </div>

      {/* Main 3-column layout */}
      <div className="flex flex-1 divide-x divide-zinc-800/40 overflow-hidden" style={{ minHeight: 0 }}>
        {/* Left: Agent Trace */}
        <div className="w-52 shrink-0 p-4 overflow-y-auto bg-black/10">
          <AgentTraceTree />
        </div>

        {/* Center: Log Stream */}
        <div className="flex-1 p-4 overflow-hidden flex flex-col">
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
            Live Log
          </p>
          <div className="flex-1 overflow-hidden">
            <LogStream />
          </div>
        </div>

        {/* Right: Sources */}
        <div className="w-72 shrink-0 p-4 overflow-hidden flex flex-col">
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
            Sources
          </p>
          <div className="flex-1 overflow-hidden">
            <SourcesPanel />
          </div>
        </div>
      </div>

      {/* Report Panel */}
      {hasReport && (
        <div className="border-t border-zinc-800/40 bg-black/20 px-6 py-4 max-h-[50vh] overflow-y-auto">
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
            Research Report
          </p>
          <ReportViewer />
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-zinc-800/40 bg-black/30 px-6 py-2 space-y-2">
        <SessionDrawer />
        <StatusBar />
      </footer>
    </div>
  )
}
