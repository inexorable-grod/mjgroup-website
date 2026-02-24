'use client'

import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import {
  LayoutDashboard,
  FileText,
  Truck,
  Users,
  UsersRound,
  Settings,
  LogOut,
  Zap,
  ChevronLeft,
  Menu,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { useState } from 'react'

const navItems = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Contratos', href: '/admin/contratos', icon: FileText },
  { label: 'Flota', href: '/admin/flota', icon: Truck },
  { label: 'Clientes', href: '/admin/clientes', icon: Users },
  { label: 'Usuarios', href: '/admin/usuarios', icon: UsersRound },
  { label: 'Configuración', href: '/admin/configuracion', icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [collapsed, setCollapsed] = useState(false)

  const handleSignOut = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="lg:hidden fixed top-4 left-4 z-50 h-10 w-10 rounded-lg bg-[rgb(var(--card))] border border-[rgb(var(--border))] flex items-center justify-center"
        aria-label="Toggle sidebar"
      >
        <Menu className="h-5 w-5" />
      </button>

      <aside
        className={cn(
          'fixed top-0 left-0 h-full bg-[rgb(var(--card))] border-r border-[rgb(var(--border))] z-40 transition-all duration-300 flex flex-col',
          collapsed ? 'w-16' : 'w-60',
          'max-lg:hidden',
        )}
      >
        {/* Logo area */}
        <div className="h-16 flex items-center gap-2 px-4 border-b border-[rgb(var(--border))]">
          <Zap className="h-6 w-6 text-electric-500 shrink-0" />
          {!collapsed && (
            <div>
              <span className="font-bold text-sm">MJ Group</span>
              <span className="text-xs text-[rgb(var(--muted-foreground))] block">Panel Admin</span>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto h-6 w-6 rounded flex items-center justify-center hover:bg-[rgb(var(--muted))] transition-colors"
          >
            <ChevronLeft className={cn('h-4 w-4 transition-transform', collapsed && 'rotate-180')} />
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 py-4 px-2 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  isActive
                    ? 'bg-electric-500/10 text-electric-500'
                    : 'text-[rgb(var(--muted-foreground))] hover:text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))]',
                )}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                {!collapsed && item.label}
              </Link>
            )
          })}
        </nav>

        {/* Sign out */}
        <div className="p-2 border-t border-[rgb(var(--border))]">
          <button
            onClick={handleSignOut}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors w-full"
          >
            <LogOut className="h-5 w-5 shrink-0" />
            {!collapsed && 'Cerrar Sesión'}
          </button>
        </div>
      </aside>
    </>
  )
}
