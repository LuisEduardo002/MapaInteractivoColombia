import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const comfortaa = Comfortaa({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-comfortaa"
});

export const metadata: Metadata = {
  title: 'Mapa Interactivo Colombiano',
  description: 'Explora la biodiversidad de Colombia a través de un mapa interactivo',
  generator: 'v0.app',
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${comfortaa.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
