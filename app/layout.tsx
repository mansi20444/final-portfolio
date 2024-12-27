import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mansi Sharma - Full Stack Developer',
  description: 'Portfolio of Mansi Sharma, a passionate full stack developer specializing in React, Node.js, and AI/ML',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem themes={['light', 'dark', 'blue', 'green', 'purple']}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

