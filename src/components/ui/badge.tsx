import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded px-1.5 py-0.5 font-mono transition-colors',
  {
    variants: {
      variant: {
        default: 'text-[9px] bg-zinc-800/70 text-zinc-500',
        indigo: 'text-[10px] bg-indigo-600/30 border border-indigo-500/50 text-indigo-300',
        cyan: 'text-[10px] bg-cyan-500/10 text-cyan-400',
        red: 'text-[10px] bg-red-500/10 text-red-400',
        ghost: 'text-[10px] text-zinc-700',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}

export { Badge, badgeVariants }
