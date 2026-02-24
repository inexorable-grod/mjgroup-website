'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Spinner } from '@/components/ui/Spinner'
import {
  UsersRound,
  Shield,
  ShieldCheck,
  UserCheck,
  UserX,
  AlertCircle,
  RefreshCw,
} from 'lucide-react'

interface Profile {
  id: string
  full_name: string
  email: string
  role: 'admin' | 'user'
  active: boolean
  created_at: string
  updated_at: string
  avatar_url: string | null
}

export default function UsuariosPage() {
  const [users, setUsers] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [updating, setUpdating] = useState<string | null>(null)

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/admin/users')
      if (!res.ok) throw new Error('Error al cargar usuarios')
      const data = await res.json()
      setUsers(data)
    } catch {
      setError('Error al cargar usuarios')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  const updateUser = async (userId: string, updates: { role?: string; active?: boolean }) => {
    setUpdating(userId)
    try {
      const res = await fetch('/api/admin/users', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, ...updates }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Error al actualizar')
      }
      await fetchUsers()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al actualizar usuario')
    } finally {
      setUpdating(null)
    }
  }

  const toggleRole = (user: Profile) => {
    const newRole = user.role === 'admin' ? 'user' : 'admin'
    updateUser(user.id, { role: newRole })
  }

  const toggleActive = (user: Profile) => {
    updateUser(user.id, { active: !user.active })
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <UsersRound className="h-5 w-5 text-electric-500" />
              Gestión de Usuarios
            </CardTitle>
            <Button
              variant="outline"
              size="sm"
              onClick={fetchUsers}
              disabled={loading}
            >
              <RefreshCw className={`h-4 w-4 mr-2 ${loading ? 'animate-spin' : ''}`} />
              Actualizar
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="flex items-center gap-2 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-sm text-red-400 mb-4">
              <AlertCircle className="h-4 w-4 shrink-0" />
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center py-12">
              <Spinner size="lg" />
            </div>
          ) : users.length === 0 ? (
            <p className="text-center text-[rgb(var(--muted-foreground))] py-12">
              No hay usuarios registrados
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[rgb(var(--border))]">
                    <th className="text-left py-3 px-4 font-medium text-[rgb(var(--muted-foreground))]">Usuario</th>
                    <th className="text-left py-3 px-4 font-medium text-[rgb(var(--muted-foreground))]">Email</th>
                    <th className="text-left py-3 px-4 font-medium text-[rgb(var(--muted-foreground))]">Rol</th>
                    <th className="text-left py-3 px-4 font-medium text-[rgb(var(--muted-foreground))]">Estado</th>
                    <th className="text-left py-3 px-4 font-medium text-[rgb(var(--muted-foreground))]">Registro</th>
                    <th className="text-right py-3 px-4 font-medium text-[rgb(var(--muted-foreground))]">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-[rgb(var(--border))] last:border-0">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 rounded-full bg-electric-500/10 flex items-center justify-center shrink-0">
                            {user.role === 'admin' ? (
                              <ShieldCheck className="h-4 w-4 text-electric-500" />
                            ) : (
                              <UsersRound className="h-4 w-4 text-[rgb(var(--muted-foreground))]" />
                            )}
                          </div>
                          <span className="font-medium">{user.full_name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-[rgb(var(--muted-foreground))]">{user.email}</td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                            user.role === 'admin'
                              ? 'bg-electric-500/10 text-electric-500'
                              : 'bg-[rgb(var(--muted))] text-[rgb(var(--muted-foreground))]'
                          }`}
                        >
                          {user.role === 'admin' ? (
                            <><Shield className="h-3 w-3" /> Admin</>
                          ) : (
                            'Usuario'
                          )}
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${
                            user.active
                              ? 'bg-emerald-500/10 text-emerald-500'
                              : 'bg-red-500/10 text-red-400'
                          }`}
                        >
                          {user.active ? (
                            <><UserCheck className="h-3 w-3" /> Activo</>
                          ) : (
                            <><UserX className="h-3 w-3" /> Inactivo</>
                          )}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-[rgb(var(--muted-foreground))]">
                        {new Date(user.created_at).toLocaleDateString('es-CO')}
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center justify-end gap-2">
                          {updating === user.id ? (
                            <Spinner size="sm" />
                          ) : (
                            <>
                              <button
                                onClick={() => toggleRole(user)}
                                className="px-2 py-1 rounded text-xs font-medium hover:bg-[rgb(var(--muted))] transition-colors"
                                title={user.role === 'admin' ? 'Cambiar a Usuario' : 'Cambiar a Admin'}
                              >
                                {user.role === 'admin' ? 'Hacer Usuario' : 'Hacer Admin'}
                              </button>
                              <button
                                onClick={() => toggleActive(user)}
                                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                                  user.active
                                    ? 'text-red-400 hover:bg-red-500/10'
                                    : 'text-emerald-500 hover:bg-emerald-500/10'
                                }`}
                              >
                                {user.active ? 'Desactivar' : 'Activar'}
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
