
import './globals.css'
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar';
import { DialogCmdk } from '@/components/dialog-cmdk';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Truth ai fitness',
  description: 'Truth ai fitness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <DialogCmdk />
          <main className="my-8 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">{children}</div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
