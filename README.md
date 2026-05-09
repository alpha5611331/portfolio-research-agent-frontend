# Research Agent — Frontend

React + Vite frontend for the [AI Research Command Center](https://github.com/alpha5611331/portfolio-research-agent).

![Demo](images/demo.gif)

## Repositories

|                 | Link                                                                                                |
| --------------- | --------------------------------------------------------------------------------------------------- |
| Main            | [portfolio-research-agent](https://github.com/alpha5611331/portfolio-research-agent)                   |
| Backend         | [portfolio-research-agent-backend](https://github.com/alpha5611331/portfolio-research-agent-backend)   |
| Frontend (this) | [portfolio-research-agent-frontend](https://github.com/alpha5611331/portfolio-research-agent-frontend) |

## Stack

| Layer      | Technology                  |
| ---------- | --------------------------- |
| Framework  | React 19 + Vite             |
| Language   | TypeScript                  |
| Styling    | Tailwind CSS v4             |
| Animations | Framer Motion               |
| State      | Zustand                     |
| Markdown   | react-markdown + remark-gfm |
| Dates      | date-fns                    |

## Prerequisites

- Node.js 20+
- pnpm

## Setup

```bash
pnpm install
cp .env.example .env.local  # set API URL
```

## Environment Variables

```env
VITE_API_URL=http://localhost:8000
VITE_WS_URL=ws://localhost:8000
```

## Run

```bash
pnpm dev        # dev server → http://localhost:5173
pnpm build      # production build → dist/
pnpm preview    # preview production build
```

## UI Layout

```
┌─────────────────────────────────────────────────────────────────┐
│  HEADER: logo + provider selector (OpenAI / Groq) + model pick  │
├─────────────────────────────────────────────────────────────────┤
│  COMMAND BAR: full-width query input                            │
├──────────────┬──────────────────────────┬───────────────────────┤
│  AGENT TRACE │   LIVE LOG STREAM        │   SOURCES PANEL       │
│  (left 20%)  │   (center 50%)           │   (right 30%)         │
├──────────────┴──────────────────────────┴───────────────────────┤
│  REPORT PANEL (expands on REPORT_DONE)                          │
├─────────────────────────────────────────────────────────────────┤
│  SESSION HISTORY (bottom drawer)                                │
└─────────────────────────────────────────────────────────────────┘
```

## Components

| Component            | Description                                                  |
| -------------------- | ------------------------------------------------------------ |
| `CommandBar`       | Full-width query input with animated placeholder             |
| `ProviderSelector` | OpenAI / Groq + model picker                                 |
| `AgentTraceTree`   | Animated tree: idle → active → done → error per node      |
| `LogStream`        | Auto-scrolling terminal log, color-coded by event type       |
| `SourcesPanel`     | Tabbed by subtopic, source cards with domain badge and score |
| `ReportViewer`     | Streaming markdown renderer, serif font, section anchors     |
| `SessionDrawer`    | Slide-up list of past sessions from `/api/sessions`        |
| `StatusBar`        | Current agent, token count, latency                          |

## State

Zustand store `useResearchStore` holds: `session`, `events[]`, `sources[]`, `reportChunks[]`, `agentStatuses{}`.

## Lint

```bash
pnpm lint
```
