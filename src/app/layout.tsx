import './globals.scss'

import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import Sidebar from './components/sidebar/Sidebar'
const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Site name',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fredoka.className} id="layout">
		<Sidebar/>
		<main>
			{children}
		</main>
	  </body>
    </html>
  )
}
