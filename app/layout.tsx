import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'A.D. Business Vision — Build what matters next',
  description: 'A practical growth studio for ambitious founders building clearer brands, sharper campaigns, and companies ready for what is next.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
