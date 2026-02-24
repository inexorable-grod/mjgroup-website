import { Sidebar } from '@/components/admin/Sidebar'
import { AdminHeader } from '@/components/admin/AdminHeader'

export const metadata = {
  title: 'Admin',
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[rgb(var(--background))]">
      <Sidebar />
      <div className="lg:pl-60">
        <AdminHeader />
        <main className="p-6">{children}</main>
      </div>
    </div>
  )
}
