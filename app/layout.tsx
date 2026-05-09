import type { Metadata } from 'next'
import { JetBrains_Mono, Playfair_Display } from 'next/font/google'
import './globals.css'

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const serif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AI Research Command Center',
  description: 'Multi-agent research system with live streaming',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${mono.variable} ${serif.variable} h-full`}>
      <body className="bg-[#0a0a0f] text-white antialiased min-h-full">{children}</body>
    </html>
  )
}
