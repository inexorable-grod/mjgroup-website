import { Zap, Mail, Phone, MapPin } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--card))]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-electric-500" />
              <span className="font-bold text-lg">
                MJ <span className="text-electric-500">Group</span> SAS
              </span>
            </div>
            <p className="text-sm text-[rgb(var(--muted-foreground))] max-w-xs">
              Servicios y Construcciones Eléctricas. Innovamos para garantizar el éxito en las operaciones de nuestros clientes.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm text-[rgb(var(--muted-foreground))]">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-electric-500 shrink-0" />
                Cúcuta, Norte de Santander, Colombia
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-electric-500 shrink-0" />
                +57 314 8114739
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-electric-500 shrink-0" />
                mj.groupcolombia@gmail.com
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-[rgb(var(--muted-foreground))]">
              <li><a href="#servicios" className="hover:text-electric-500 transition-colors">Infraestructura Eléctrica</a></li>
              <li><a href="#servicios" className="hover:text-electric-500 transition-colors">Servicios Especializados</a></li>
              <li><a href="#flota" className="hover:text-electric-500 transition-colors">Arriendo de Flota</a></li>
              <li><a href="#contacto" className="hover:text-electric-500 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[rgb(var(--border))] flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[rgb(var(--muted-foreground))]">
          <p>&copy; {new Date().getFullYear()} MJ Group SAS. Todos los derechos reservados.</p>
          <p>NIT: 901.256.128-9 · Cúcuta, Colombia</p>
        </div>
      </div>
    </footer>
  )
}
