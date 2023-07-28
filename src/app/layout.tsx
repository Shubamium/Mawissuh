import './globals.scss'

import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import Sidebar from './components/sidebar/Sidebar'
import MainLayout from './rootLayout'
import SidebarContextProvider from './context/SidebarContext'
const fredoka = Fredoka({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Marimanagement 🐑🪄✨',
  icons:{
	icon:'/favicon.png'
  },
  description: 'Talent Manager for VTubers. Providing high quality services for all!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
		<body className={fredoka.className}>
				<SidebarContextProvider>
					<MainLayout>
							<Sidebar/>
							<main>
								{children}
							</main>
					</MainLayout>
				</SidebarContextProvider>
		</body>
    </html>
  )
}
