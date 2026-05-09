import { useState, useEffect, useRef } from "react";
import { useResearchStore } from "@/store/useResearchStore";
import CommandBar from "@/components/CommandBar";
import AgentTraceTree from "@/components/AgentTraceTree";
import LogStream from "@/components/LogStream";
import SourcesPanel from "@/components/SourcesPanel";
import ReportViewer from "@/components/ReportViewer";
import SessionDrawer from "@/components/SessionDrawer";
import StatusBar from "@/components/StatusBar";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function App() {
  const hasReport = useResearchStore((s) => s.reportChunks.length > 0);
  const isRunning = useResearchStore((s) => s.isRunning);
  const [reportOpen, setReportOpen] = useState(false);
  const prevRunning = useRef(false);

  useEffect(() => {
    if (prevRunning.current && !isRunning && hasReport) {
      const t = setTimeout(() => setReportOpen(true), 2000);
      return () => clearTimeout(t);
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
          <Button
            variant="indigo"
            size="sm"
            onClick={() => setReportOpen(true)}
          >
            ↗ View Report
          </Button>
        )}
        <div className="flex-1">
          <StatusBar />
        </div>
      </footer>

      {/* Report Dialog */}
      <Dialog open={reportOpen} onOpenChange={setReportOpen}>
        <DialogContent className="w-205 max-w-[90vw] max-h-[85vh] flex flex-col overflow-hidden">
          <DialogHeader>
            <DialogTitle>Research Report</DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto p-6">
            <ReportViewer />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
