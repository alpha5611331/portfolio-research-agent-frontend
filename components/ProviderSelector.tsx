'use client'

interface Props {
  provider: string
  model: string
  onChange: (provider: string, model: string) => void
}

const MODELS: Record<string, { label: string; models: string[] }> = {
  openai: {
    label: 'OpenAI',
    models: ['gpt-4o-mini', 'gpt-4o'],
  },
  groq: {
    label: 'Groq',
    models: ['llama-3.3-70b-versatile', 'llama-3.1-8b-instant'],
  },
}

export default function ProviderSelector({ provider, model, onChange }: Props) {
  function handleProvider(p: string) {
    onChange(p, MODELS[p].models[0])
  }

  return (
    <div className="flex items-center gap-2 font-mono text-xs">
      {Object.entries(MODELS).map(([key, { label }]) => (
        <button
          key={key}
          onClick={() => handleProvider(key)}
          className={`px-3 py-1.5 rounded border transition-colors ${
            provider === key
              ? 'border-indigo-500 bg-indigo-500/20 text-indigo-300'
              : 'border-zinc-700 text-zinc-500 hover:border-zinc-500'
          }`}
        >
          {label}
        </button>
      ))}
      <select
        value={model}
        onChange={(e) => onChange(provider, e.target.value)}
        className="bg-zinc-900 border border-zinc-700 text-zinc-300 rounded px-2 py-1.5 outline-none"
      >
        {MODELS[provider].models.map((m) => (
          <option key={m} value={m}>
            {m}
          </option>
        ))}
      </select>
    </div>
  )
}
