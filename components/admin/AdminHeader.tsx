'use client'

import { useState, useRef, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { User, LogOut, ChevronDown } from 'lucide-react'

const pageTitles: Record<string, string> = {
  '/admin/dashboard': 'Dashboard',
  '/admin/contratos': 'Contratos',
  '/admin/flota': 'Flota',
  '/admin/clientes': 'Clientes',
  '/admin/usuarios': 'Usuarios',
  '/admin/configuracion': 'Configuración',
}

export function AdminHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const title = pageTitles[pathname] ?? 'Admin'
  const [open, setOpen] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const supabase = createClient()
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        setUserEmail(user.email ?? '')
        setUserName(user.user_metadata?.full_name ?? 'Admin')
      }
    })
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <header className="h-16 border-b border-[rgb(var(--border))] bg-[rgb(var(--card))] flex items-center justify-between px-6">
      <div>
        <h1 className="text-lg font-semibold">{title}</h1>
      </div>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <div ref={menuRef} className="relative pl-3 border-l border-[rgb(var(--border))]">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-[rgb(var(--muted))] transition-colors"
          >
            <div className="h-8 w-8 rounded-full bg-electric-500/10 flex items-center justify-center">
              <User className="h-4 w-4 text-electric-500" />
            </div>
            <span className="text-sm font-medium hidden sm:block">{userName}</span>
            <ChevronDown className={`h-4 w-4 text-[rgb(var(--muted-foreground))] transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>

          {open && (
            <div className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] shadow-lg py-1 z-50">
              <div className="px-4 py-2 border-b border-[rgb(var(--border))]">
                <p className="text-sm font-medium">{userName}</p>
                <p className="text-xs text-[rgb(var(--muted-foreground))]">{userEmail}</p>
              </div>
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 transition-colors"
              >
                <LogOut className="h-4 w-4" />
                Cerrar Sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
