import type { Metadata } from 'next'
import { Bebas_Neue, DM_Sans, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MJ Group SAS — Servicios y Construcciones Eléctricas Colombia',
    template: '%s | MJ Group SAS',
  },
  description:
    'MJ Group SAS: empresa colombiana especializada en infraestructura eléctrica, alumbrado público, redes de alta tensión y arriendo de flota con camiones canasta certificados ONAC. +7 años de experiencia, +30 contratos ejecutados.',
  keywords: [
    'servicios eléctricos Colombia',
    'arriendo camión canasta Colombia',
    'construcción redes eléctricas',
    'alumbrado público instalación',
    'mantenimiento redes alta tensión',
    'empresa eléctrica Cúcuta',
    'MJ Group SAS',
  ],
  authors: [{ name: 'MJ Group SAS' }],
  openGraph: {
    title: 'MJ Group SAS — Servicios y Construcciones Eléctricas Colombia',
    description:
      'Especialistas en infraestructura eléctrica, alumbrado público y arriendo de flota certificada ONAC.',
    type: 'website',
    locale: 'es_CO',
    siteName: 'MJ Group SAS',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'MJ Group SAS',
              description: 'Servicios y Construcciones Eléctricas',
              url: 'https://www.mjgroupsas.com',
              telephone: '+573148114739',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Cúcuta',
                addressRegion: 'Norte de Santander',
                addressCountry: 'CO',
              },
            }),
          }}
        />
      </head>
      <body
        className={`${bebasNeue.variable} ${dmSans.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
