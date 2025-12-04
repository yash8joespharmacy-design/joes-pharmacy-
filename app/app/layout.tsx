import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joe's Pharmacy - Prescription Refills & Services | Harvest, AL",
  description:
    "Joe's Pharmacy in Harvest, AL offers HIPAA-compliant prescription refills, pharmacist consultations, and medication management. Visit us at 27691 Capshaw Road or call (256) 230-3416.",
  generator: "v0.app",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Joe's Pharmacy",
  },
  formatDetection: {
    telephone: true,
  },
  openGraph: {
    type: "website",
    siteName: "Joe's Pharmacy",
    title: "Joe's Pharmacy - HIPAA-Compliant Prescription Services",
    description: "Secure prescription management, refills, and pharmacist consultations",
  },
  twitter: {
    card: "summary",
    title: "Joe's Pharmacy",
    description: "HIPAA-compliant prescription services in Harvest, AL",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0d9488",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  )
}
