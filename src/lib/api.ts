const API = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'
const WS = import.meta.env.VITE_WS_URL ?? 'ws://localhost:8000'

export async function submitResearch(query: string) {
  const res = await fetch(`${API}/api/research`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  })
  if (!res.ok) throw new Error('Failed to start research')
  return res.json() as Promise<{ session_id: string }>
}

export function openWebSocket(sessionId: string, onMessage: (data: unknown) => void): WebSocket {
  const ws = new WebSocket(`${WS}/ws/${sessionId}`)
  ws.onmessage = (e) => {
    try {
      onMessage(JSON.parse(e.data))
    } catch {
      /* ignore parse errors */
    }
  }
  return ws
}

export async function fetchSessions() {
  const res = await fetch(`${API}/api/sessions`)
  if (!res.ok) return []
  return res.json()
}

export async function deleteSession(id: string) {
  await fetch(`${API}/api/sessions/${id}`, { method: 'DELETE' })
}
