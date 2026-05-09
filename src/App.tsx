import { useState, useEffect, useRef } from "react";
import { useResearchStore } from "@/store/useResearchStore";
import CommandBar from "@/components/CommandBar";
import AgentTraceTree from "@/components/AgentTraceTree";
import LogStream from "@/components/LogStream";
import SourcesPanel from "@/components/SourcesPanel";
import ReportViewer from "@/components/ReportViewer";
import SessionDrawer from "@/components/SessionDrawer";
import StatusBar from "@/components/StatusBar";

export default function App() {
  const hasReport = useResearchStore((s) => s.reportChunks.length > 0);
  const isRunning = useResearchStore((s) => s.isRunning);
  const [reportOpen, setReportOpen] = useState(false);
  const prevRunning = useRef(false);

  useEffect(() => {
    if (prevRunning.current && !isRunning && hasReport) {
      setReportOpen(true);
    }
    prevRunning.current = isRunning;
  }, [isRunning, hasReport]);

  return (
    <div
      className="grid-bg h-screen overflow-hidden flex flex-col"
      style={{ fontFamily: "var(--font-mono)" }}
    >
      {/* Header */}
      <header className="shrink-0 border-b border-zinc-800/60 bg-black/30 backdrop-blur-sm px-6 py-3 flex items-center gap-3">
        <span className="text-indigo-400 text-lg">⬡</span>
        <span className="font-mono text-sm text-zinc-300 tracking-wider">
          RESEARCH COMMAND CENTER
        </span>
      </header>

      {/* Command Bar */}
      <div className="shrink-0 px-6 py-4 border-b border-zinc-800/40 bg-black/20">
        <CommandBar />
      </div>

      {/* Main 3-column layout */}
      <div className="flex flex-1 min-h-0 divide-x divide-zinc-800/40 overflow-hidden">
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
        <div className="w-80 shrink-0 p-4 overflow-hidden flex flex-col">
          <p className="font-mono text-[10px] text-zinc-600 uppercase tracking-widest mb-3">
            Sources
          </p>
          <div className="flex-1 overflow-hidden">
            <SourcesPanel />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="shrink-0 border-t border-zinc-800/40 bg-black/30 px-6 py-2 flex items-center gap-4">
        <SessionDrawer />
        {hasReport && (
          <button
            onClick={() => setReportOpen(true)}
            className="font-mono text-xs text-indigo-400 hover:text-indigo-300 border border-indigo-900/50 hover:border-indigo-700 px-3 py-1 rounded transition-colors"
          >
            ↗ View Report
          </button>
        )}
        <div className="flex-1">
          <StatusBar />
        </div>
      </footer>

      {/* Report Dialog */}
      {reportOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setReportOpen(false)}
          />
          <div className="relative w-205 max-w-[90vw] max-h-[85vh] bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden flex flex-col shadow-2xl">
            <div className="shrink-0 flex items-center justify-between px-6 py-3 border-b border-zinc-800">
              <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                Research Report
              </span>
              <button
                onClick={() => setReportOpen(false)}
                className="text-zinc-600 hover:text-zinc-300 font-mono text-sm transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <ReportViewer />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
