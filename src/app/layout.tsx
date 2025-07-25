import { Inter } from 'next/font/google'
import { Metadata, Viewport } from 'next'

import './globals.css'
import Header from '@/components/layout/header'
import { Providers } from '@/lib/providers'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })

const title = 'Harsh Kumar Verma | Full Stack Developer From New Delhi, India.'
const description = 'A self-taught programmer who specializes in full stack development (Next.js & Node.js), from New Delhi, India.'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'Frontend Developer',
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
  ],
  creator: 'Harsh Kumar Verma',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray text-gray-600 antialiased`}>
        <Providers>
          <Header />
          <main className="flex min-h-screen w-full flex-col">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
