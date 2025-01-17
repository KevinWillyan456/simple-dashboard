import { cn } from '@/app/_lib/utils'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Sidebar } from './_components/sidebar'
import './globals.css'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Simple Dashboard',
    description: 'Simple Dashboard with Next.js',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="pt-br">
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    geistSans.variable,
                    geistMono.variable,
                )}
            >
                <Sidebar />
                {children}
            </body>
        </html>
    )
}
