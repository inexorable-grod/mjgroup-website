import { cn } from '@/lib/utils'

interface SpinnerProps {
  className?: string
  size?: 'sm' | 'default' | 'lg'
}

export function Spinner({ className, size = 'default' }: SpinnerProps) {
  const sizeClasses = {
    sm: 'h-4 w-4 border-2',
    default: 'h-6 w-6 border-2',
    lg: 'h-10 w-10 border-3',
  }

  return (
    <div
      className={cn(
        'animate-spin rounded-full border-electric-500/30 border-t-electric-500',
        sizeClasses[size],
        className,
      )}
    />
  )
}
