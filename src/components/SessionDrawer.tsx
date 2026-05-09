'use client'

import { useEffect, useState } from 'react'
import { format } from 'date-fns'
import { useResearchStore } from '@/store/useResearchStore'
import { fetchSessions, deleteSession } from '@/lib/api'
import type { SessionSummary } from '@/types/events'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'

const STATUS_COLOR: Record<string, string> = {
  done: 'text-cyan-500',
  running: 'text-indigo-400',
  error: 'text-red-400',
}

export default function SessionDrawer() {
  const [open, setOpen] = useState(false)
  const [sessions, setSessions] = useState<SessionSummary[]>([])
  const setQuery = useResearchStore((s) => s.setQuery)
  const reset = useResearchStore((s) => s.reset)

  useEffect(() => {
    if (open) {
      fetchSessions().then(setSessions)
    }
  }, [open])

  async function handleDelete(id: string, e: React.MouseEvent) {
    e.stopPropagation()
    await deleteSession(id)
    setSessions((prev) => prev.filter((s) => s.session_id !== id))
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="ghost" size="sm" className="text-[10px] px-0">
          ↑ Sessions ({sessions.length})
        </Button>
      </SheetTrigger>
      <SheetContent
        side="bottom"
        className="left-4 right-auto w-120 max-w-[90vw] max-h-[70vh] mb-10 rounded-xl"
      >
        <SheetHeader>
          <SheetTitle>Session History</SheetTitle>
        </SheetHeader>
        <ScrollArea className="flex-1">
          <div className="divide-y divide-zinc-800">
            {sessions.length === 0 && (
              <p className="font-mono text-xs text-zinc-700 p-4 text-center">No past sessions</p>
            )}
            {sessions.map((s) => (
              <div
                key={s.session_id}
                onClick={() => { reset(); setQuery(s.query); setOpen(false) }}
                className="flex items-center justify-between px-4 py-2.5 hover:bg-zinc-900 cursor-pointer transition-colors"
              >
                <div className="min-w-0">
                  <p className="font-mono text-xs text-zinc-300 truncate">{s.query}</p>
                  <p className="font-mono text-[10px] text-zinc-600">
                    {format(new Date(s.created_at), 'MMM d, HH:mm')} ·{' '}
                    <span className={STATUS_COLOR[s.status] ?? 'text-zinc-600'}>{s.status}</span>
                  </p>
                </div>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={(e) => handleDelete(s.session_id, e)}
                  className="ml-3 size-6 text-xs shrink-0"
                >
                  ✕
                </Button>
              </div>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}
