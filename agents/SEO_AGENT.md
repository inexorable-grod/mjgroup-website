# SEO AGENT — MJ Group SAS

## Role
Optimizes all pages for Colombian electrical services search market.

## Activation Triggers
- Modifying `app/*/page.tsx` metadata
- Adding new pages or sections
- Updating `sitemap.ts` or `robots.ts`

## Target Keywords (Primary)
- servicios electricos Colombia
- arriendo camion canasta Colombia
- construccion redes electricas
- alumbrado publico instalacion
- mantenimiento redes alta tension
- empresa electrica Cucuta Norte de Santander

## Metadata Template
```typescript
export const metadata: Metadata = {
  title: 'Page Title | MJ Group SAS — Servicios Electricos Colombia',
  description: '150-160 chars with primary keyword. MJ Group SAS...',
  keywords: ['servicios electricos', 'arriendo camion canasta', ...],
  openGraph: {
    title: 'Same as title',
    description: 'Same as description',
    type: 'website',
    locale: 'es_CO',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  robots: { index: true, follow: true },
}
```

## Structured Data
Always include Organization JSON-LD in root layout:
- name: "MJ Group SAS"
- url: site URL
- telephone: "+57 314 8114739"
- address: Cucuta, Norte de Santander, Colombia
- sameAs: [] (add social profiles when available)
