import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { baseUrl } from './sitemap'
import './global.css'
import Head from 'next/head'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'CRM Developer & Software Developer | Guilherme Salviano',
    template: '%s | CRM Developer & Software Developer | Guilherme Salviano',
  },
  description: 'A CRM Developer with Mid & Senior experience at Enext Consultoria, currently studying Digital Games at Fatec.',
  openGraph: {
    title: 'Guilherme Salviano | CRM Developer & Software Developer',
    description: 'A CRM Developer with Mid & Senior experience at Enext Consultoria, currently studying Digital Games at Fatec.',
    url: baseUrl,
    siteName: 'CRM Developer & Software Developer | Guilherme Salviano',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  other: {
    'application/ld+json': JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'url': 'https://guilhermesalviano.dev',
      'logo': 'https://guilhermesalviano.dev/logo.png'
    })
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guilherme Salviano | CRM Developer & Software Developer',
    description: 'A CRM Developer with Mid & Senior experience at Enext Consultoria, currently studying Digital Games at Fatec.',
    images: `https://guilhermesalviano.dev/logo.png`,
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <Head>
        <meta property="og:title" content="Software Developer | Guilherme Salviano" />
        <meta property="og:description" content="Your description here" />
        <meta property="og:image" content="https://guilhermesalviano.dev/og" />
        <meta property="og:url" content="https://guilhermesalviano.dev" />
        <meta property="og:type" content="website" />
      </Head>
      <body className="antialiased">
        <main>
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  )
}
