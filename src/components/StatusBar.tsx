'use client'

import { useResearchStore } from '@/store/useResearchStore'
import { Badge } from '@/components/ui/badge'

export default function StatusBar() {
  const { agentStatuses, events, sources, isRunning } = useResearchStore()

  const activeAgent = Object.entries(agentStatuses).find(([, v]) => v === 'active')?.[0]
  const sourceCount = Object.values(sources).reduce((acc, s) => acc + s.length, 0)
  const eventCount = events.length

  return (
    <div className="flex items-center gap-4 font-mono text-[10px] text-zinc-600">
      <Badge variant={isRunning ? 'indigo' : 'ghost'}>
        {isRunning ? `● ${activeAgent ?? 'running'}` : '○ idle'}
      </Badge>
      <span>{eventCount} events</span>
      <span>{sourceCount} sources</span>
      <span className="ml-auto text-zinc-800">Research Command Center</span>
    </div>
  )
}
