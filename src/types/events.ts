export type EventType =
  | "PLAN_CREATED"
  | "SEARCH_DONE"
  | "SOURCES_COLLECTED"
  | "SUMMARY_CHUNK"
  | "SUMMARY_DONE"
  | "REPORT_CHUNK"
  | "REPORT_DONE"
  | "ERROR"

export type AgentName = "planner" | "researcher" | "summarizer" | "synthesizer" | "orchestrator"
export type AgentStatus = "idle" | "active" | "done" | "error"

export interface WSEvent {
  event: EventType
  session_id: string
  timestamp: string
  agent: AgentName
  subtopic?: string
  data: Record<string, unknown>
}

export interface Source {
  url: string
  title: string
  snippet: string
  score: number
  source?: "tavily"
}

export interface SessionSummary {
  session_id: string
  query: string
  created_at: string
  status: "running" | "done" | "error"
}
