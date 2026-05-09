"use client"

import { useResearchStore } from "@/store/useResearchStore"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { motion, AnimatePresence } from "framer-motion"
import { Button, buttonVariants } from "@/components/ui/button"

export default function ReportViewer() {
  const { reportChunks, events } = useResearchStore()
  const report = reportChunks.join("")
  const isDone = events.some((e) => e.event === "REPORT_DONE")

  if (!report) {
    return (
      <div className="flex h-32 items-center justify-center">
        <p className="font-mono text-xs text-zinc-700">Report will appear here when ready...</p>
      </div>
    )
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border border-zinc-800 bg-zinc-900/30 p-6"
      >
        {isDone && (
          <div className="mb-4 flex gap-3 border-b border-zinc-800 pb-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigator.clipboard.writeText(report)}
            >
              Copy
            </Button>
            <a
              href={`data:text/markdown;charset=utf-8,${encodeURIComponent(report)}`}
              download="research-report.md"
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              Export MD
            </a>
          </div>
        )}
        <div className="prose prose-invert prose-sm max-w-none font-serif">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{report}</ReactMarkdown>
        </div>
        {!isDone && <span className="ml-0.5 inline-block h-4 w-1.5 animate-pulse bg-indigo-500" />}
      </motion.div>
    </AnimatePresence>
  )
}
