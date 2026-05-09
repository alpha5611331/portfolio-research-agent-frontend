import { useState, useEffect, useRef } from "react"
import { useResearchStore } from "@/store/useResearchStore"
import CommandBar from "@/components/CommandBar"
import AgentTraceTree from "@/components/AgentTraceTree"
import LogStream from "@/components/LogStream"
import SourcesPanel from "@/components/SourcesPanel"
import ReportViewer from "@/components/ReportViewer"
import SessionDrawer from "@/components/SessionDrawer"
import StatusBar from "@/components/StatusBar"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function App() {
  const hasReport = useResearchStore((s) => s.reportChunks.length > 0)
  const isRunning = useResearchStore((s) => s.isRunning)
  const [reportOpen, setReportOpen] = useState(false)
  const prevRunning = useRef(false)

  useEffect(() => {
    if (prevRunning.current && !isRunning && hasReport) {
      const t = setTimeout(() => setReportOpen(true), 2000)
      return () => clearTimeout(t)
    }
    prevRunning.current = isRunning
  }, [isRunning, hasReport])

  return (
    <div
      className="grid-bg flex h-screen flex-col overflow-hidden"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {/* Header */}
      <header className="flex shrink-0 items-center gap-3 border-b border-zinc-800/60 bg-black/30 px-6 py-3 backdrop-blur-sm">
        <span className="text-lg text-indigo-400">⬡</span>
        <span className="font-mono text-sm tracking-wider text-zinc-300">
          RESEARCH COMMAND CENTER
        </span>
      </header>

      {/* Command Bar */}
      <div className="shrink-0 border-b border-zinc-800/40 bg-black/20 px-6 py-4">
        <CommandBar />
      </div>

      {/* Main 3-column layout */}
      <div className="flex min-h-0 flex-1 divide-x divide-zinc-800/40 overflow-hidden">
        {/* Left: Agent Trace */}
        <div className="w-52 shrink-0 overflow-y-auto bg-black/10 p-4">
          <AgentTraceTree />
        </div>

        {/* Center: Log Stream */}
        <div className="flex flex-1 flex-col overflow-hidden p-4">
          <p className="mb-3 font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
            Live Log
          </p>
          <div className="flex-1 overflow-hidden">
            <LogStream />
          </div>
        </div>

        {/* Right: Sources */}
        <div className="flex w-80 shrink-0 flex-col overflow-hidden p-4">
          <p className="mb-3 font-mono text-[10px] tracking-widest text-zinc-600 uppercase">
            Sources
          </p>
          <div className="flex-1 overflow-hidden">
            <SourcesPanel />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="flex shrink-0 items-center gap-4 border-t border-zinc-800/40 bg-black/30 px-6 py-2">
        <SessionDrawer />
        {hasReport && (
          <Button variant="indigo" size="sm" onClick={() => setReportOpen(true)}>
            ↗ View Report
          </Button>
        )}
        <div className="flex-1">
          <StatusBar />
        </div>
      </footer>

      {/* Report Dialog */}
      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent className="flex max-h-[85vh] w-205 max-w-[90vw] flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle>Research Report</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto p-6">
            <ReportViewer />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
