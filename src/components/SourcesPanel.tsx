"use client"

import { useEffect, useState } from "react"
import { useResearchStore } from "@/store/useResearchStore"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export default function SourcesPanel() {
  const { sources, subtopics } = useResearchStore()
  const tabs = subtopics.length > 0 ? subtopics : Object.keys(sources)
  const [activeTab, setActiveTab] = useState<string>("")

  useEffect(() => {
    if (tabs.length > 0 && !tabs.includes(activeTab)) {
      setActiveTab(tabs[0])
    }
  }, [tabs, activeTab])

  if (tabs.length === 0) {
    return (
      <div className="flex h-full items-center justify-center">
        <p className="font-mono text-xs text-zinc-700">Sources will appear here...</p>
      </div>
    )
  }

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex h-full flex-col gap-2">
      <TabsList>
        {tabs.map((t) => (
          <TabsTrigger key={t} value={t}>
            {t.slice(0, 20)}
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((t) => {
        const activeSources = sources[t] ?? []
        return (
          <TabsContent key={t} value={t}>
            <ScrollArea className="h-full">
              <div className="space-y-2 pr-1">
                {activeSources.map((src, i) => (
                  <div
                    key={i}
                    className="space-y-1 rounded border border-zinc-800 bg-zinc-900/50 p-3"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="line-clamp-2 font-mono text-xs text-zinc-300">{src.title}</p>
                      <Badge className="shrink-0">
                        {new URL(src.url).hostname.replace("www.", "")}
                      </Badge>
                    </div>
                    <p className="line-clamp-3 font-mono text-[10px] text-zinc-600">
                      {src.snippet}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <div className="h-1 w-16 overflow-hidden rounded-full bg-zinc-800">
                          <div
                            className="h-full rounded-full bg-indigo-500"
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
                  <p className="pt-4 text-center font-mono text-xs text-zinc-700">
                    Gathering sources...
                  </p>
                )}
              </div>
            </ScrollArea>
          </TabsContent>
        )
      })}
    </Tabs>
  )
}
