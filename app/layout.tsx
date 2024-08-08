/* eslint-disable import/order */
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from './utils'

const inter = Inter({ subsets: ['latin'] })


export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
   
      <body
        className={cn(
          'to-white" flex min-h-screen flex-col bg-background bg-gradient-to-b from-blue-50 font-sans antialiased',
          inter.className,
        )}
      >
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  )
}
