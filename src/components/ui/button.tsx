import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded font-mono text-xs transition-colors disabled:pointer-events-none disabled:opacity-40 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-indigo-600 text-white hover:bg-indigo-500',
        outline: 'border border-zinc-800 text-zinc-500 hover:text-zinc-300 hover:border-zinc-600 bg-transparent',
        ghost: 'text-zinc-600 hover:text-zinc-300 bg-transparent',
        destructive: 'text-zinc-700 hover:text-red-500 bg-transparent',
        indigo: 'border border-indigo-900/50 hover:border-indigo-700 text-indigo-400 hover:text-indigo-300 bg-transparent',
      },
      size: {
        default: 'px-4 py-2',
        sm: 'px-3 py-1.5',
        xs: 'px-2 py-1',
        icon: 'size-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
)
Button.displayName = 'Button'

export { Button, buttonVariants }
