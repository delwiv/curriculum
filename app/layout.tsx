import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Louis Cathala - Développeur Fullstack',
  description: 'Portfolio de Louis Cathala, développeur fullstack JavaScript avec 11 ans d\'expérience. Node.js, React, Infrastructure et DevOps.',
  openGraph: {
    title: 'Louis Cathala, Développeur Fullstack Node.js · React · Infrastructure',
    description: '11 ans d\'expérience dont 9 en freelance. Produits à fort trafic (Ledger, The Bradery, Oyst), infrastructure AWS et CI/CD.',
    type: 'website',
    locale: 'fr_FR',
    images: [{ url: '/louis-cathala.png', width: 666, height: 582, alt: 'Louis Cathala' }],
  },
  twitter: {
    card: 'summary',
    title: 'Louis Cathala, Développeur Fullstack',
    description: '11 ans d\'expérience, 9 en freelance. Node.js, React, Infrastructure, CI/CD.',
    images: ['/louis-cathala.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var root = document.documentElement;
    if (stored === 'dark') root.classList.add('dark');
    else if (stored === 'light') root.classList.add('light');
  } catch (e) {}
})();
`

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
