'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, LogIn, UserPlus } from 'lucide-react'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Flota', href: '#flota' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contratos', href: '#contratos' },
  { label: 'Contacto', href: '#contacto' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'glass shadow-lg' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 2L8 22h10l-4 16 16-22H20l4-14z" fill="#0EA5E9" />
                <path d="M24 2L20 16h10L14 38l4-16H8L24 2z" fill="#F97316" opacity="0.6" />
              </svg>
              <div>
                <span className="font-bold text-lg tracking-tight">
                  MJ <span className="text-electric-500">Group</span> SAS
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-[rgb(var(--muted-foreground))] hover:text-electric-500 transition-colors rounded-lg hover:bg-electric-500/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/login"
              className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-lg border border-[rgb(var(--border))] text-sm font-medium text-[rgb(var(--foreground))] hover:bg-[rgb(var(--muted))] transition-colors"
            >
              <LogIn className="h-4 w-4" />
              Iniciar Sesión
            </Link>
            <Link
              href="/registro"
              className="hidden sm:inline-flex items-center gap-2 h-10 px-4 rounded-lg bg-electric-500 text-white text-sm font-medium hover:bg-electric-600 transition-colors shadow-lg shadow-electric-500/25"
            >
              <UserPlus className="h-4 w-4" />
              Registrarse
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden h-10 w-10 rounded-lg border border-[rgb(var(--border))] flex items-center justify-center"
              aria-label="Menú"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-[rgb(var(--border))]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-sm font-medium text-[rgb(var(--muted-foreground))] hover:text-electric-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 border-t border-[rgb(var(--border))] pt-2 space-y-1">
              <Link
                href="/login"
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-[rgb(var(--muted-foreground))] hover:text-electric-500 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <LogIn className="h-4 w-4" />
                Iniciar Sesión
              </Link>
              <Link
                href="/registro"
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-electric-500"
                onClick={() => setIsOpen(false)}
              >
                <UserPlus className="h-4 w-4" />
                Registrarse
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
