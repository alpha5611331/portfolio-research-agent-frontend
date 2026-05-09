import { create } from 'zustand'
import type { WSEvent, Source, AgentName, AgentStatus, SessionSummary } from '@/types/events'

interface ResearchStore {
  sessionId: string | null
  query: string
  events: WSEvent[]
  subtopics: string[]
  sources: Record<string, Source[]>
  reportChunks: string[]
  agentStatuses: Record<AgentName, AgentStatus>
  isRunning: boolean
  sessions: SessionSummary[]

  setQuery: (q: string) => void
  startSession: (sessionId: string, query: string) => void
  addEvent: (e: WSEvent) => void
  setAgentStatus: (agent: AgentName, status: AgentStatus) => void
  setSessions: (sessions: SessionSummary[]) => void
  reset: () => void
}

const DEFAULT_STATUSES: Record<AgentName, AgentStatus> = {
  planner: 'idle',
  researcher: 'idle',
  summarizer: 'idle',
  synthesizer: 'idle',
  orchestrator: 'idle',
}

export const useResearchStore = create<ResearchStore>((set, get) => ({
  sessionId: null,
  query: '',
  events: [],
  subtopics: [],
  sources: {},
  reportChunks: [],
  agentStatuses: { ...DEFAULT_STATUSES },
  isRunning: false,
  sessions: [],

  setQuery: (q) => set({ query: q }),

  startSession: (sessionId, query) =>
    set({
      sessionId,
      query,
      events: [],
      subtopics: [],
      sources: {},
      reportChunks: [],
      agentStatuses: { ...DEFAULT_STATUSES },
      isRunning: true,
    }),

  addEvent: (e) => {
    set((state) => ({ events: [...state.events, e] }))
    const { setAgentStatus } = get()

    switch (e.event) {
      case 'PLAN_CREATED': {
        const subtopics = (e.data.subtopics as string[]) ?? []
        set({ subtopics })
        setAgentStatus('planner', 'done')
        setAgentStatus('researcher', 'active')
        break
      }
      case 'SOURCES_COLLECTED': {
        const subtopic = e.subtopic ?? 'general'
        const sources = (e.data.sources as Source[]) ?? []
        set((state) => ({
          sources: { ...state.sources, [subtopic]: sources },
        }))
        break
      }
      case 'SUMMARY_DONE':
        setAgentStatus('summarizer', 'active')
        break
      case 'REPORT_CHUNK': {
        const chunk = (e.data.chunk as string) ?? ''
        set((state) => ({ reportChunks: [...state.reportChunks, chunk] }))
        setAgentStatus('synthesizer', 'active')
        break
      }
      case 'REPORT_DONE': {
        const report = (e.data.report as string) ?? ''
        set((state) => ({
          reportChunks: state.reportChunks.length === 0 && report ? [report] : state.reportChunks,
          isRunning: false,
        }))
        setAgentStatus('synthesizer', 'done')
        break
      }
      case 'ERROR':
        setAgentStatus(e.agent, 'error')
        set({ isRunning: false })
        break
    }
  },

  setAgentStatus: (agent, status) =>
    set((state) => ({
      agentStatuses: { ...state.agentStatuses, [agent]: status },
    })),

  setSessions: (sessions) => set({ sessions }),

  reset: () =>
    set({
      sessionId: null,
      events: [],
      subtopics: [],
      sources: {},
      reportChunks: [],
      agentStatuses: { ...DEFAULT_STATUSES },
      isRunning: false,
    }),
}))
