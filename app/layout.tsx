import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://flowmetrics.com'),
  title: {
    default: 'FlowMetrics – Real-Time Analytics for Growing Businesses',
    template: '%s | FlowMetrics',
  },
  description:
    'Simple, powerful analytics dashboard for small and medium businesses. Get real-time insights without enterprise complexity.',
  keywords: [
    'analytics dashboard',
    'business intelligence',
    'real-time analytics',
    'SMB analytics',
    'data visualization',
    'business metrics',
  ],
  authors: [{ name: 'FlowMetrics' }],
  creator: 'FlowMetrics',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'FlowMetrics',
    title: 'FlowMetrics – Real-Time Analytics for Growing Businesses',
    description:
      'Simple, powerful analytics dashboard for small and medium businesses.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlowMetrics Dashboard Preview',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'FlowMetrics – Real-Time Analytics for Growing Businesses',
    description:
      'Simple, powerful analytics dashboard for small and medium businesses.',
    images: ['/og-image.png'],
    creator: '@flowmetrics',
  },

  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans bg-white text-gray-900 antialiased">
        {children}

        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXX');
          `}
        </Script>
      </body>
    </html>
  )
}
