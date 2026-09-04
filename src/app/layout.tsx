import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { default: 'Smart-tech — Ingeniería e integración', template: '%s | Smart-tech' },
  description: 'Ingeniería, automatización y control para residencias, edificios e industria. Conocé los servicios y las obras de Smart-tech en Uruguay.',
  robots: { index: false, follow: false },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-UY">
      <body>{children}</body>
    </html>
  )
}
