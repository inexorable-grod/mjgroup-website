import Link from 'next/link'
import { Zap, Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(var(--background))]">
      <div className="text-center px-4">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-electric-500/10 flex items-center justify-center">
            <Zap className="h-10 w-10 text-electric-500" />
          </div>
        </div>
        <h1 className="display text-6xl mb-4">404</h1>
        <p className="text-xl text-[rgb(var(--muted-foreground))] mb-8">
          Página no encontrada
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-electric-500 text-white font-medium hover:bg-electric-600 transition-colors"
        >
          <Home className="h-4 w-4" />
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
