import './globals.scss'

import type { Metadata } from 'next'
import { Fredoka } from 'next/font/google'
import Sidebar from './components/sidebar/Sidebar'
import MainLayout from './rootLayout'
import SidebarContextProvider from './context/SidebarContext'
import Image from 'next/image'
const fredoka = Fredoka({ subsets: ['latin'] })
import SpellDecor from './components/general/decor/SpellDecor'


const title = 'Marimanagement 🐑🪄✨'
const description = "Greetings! I am Marissa, a dedicated Talent Manager specializing in VTubers and Artists. With my expertise, I can guide you towards achieving remarkable success in your career! Let's embark on this journey together! 🌟"
const banner = 'https://i.ibb.co/0VmGkMD/mari-banner.png'
export const metadata: Metadata = {
	title: title,
	icons:{
		icon:'/favicon.png'
	},
	metadataBase: new URL('https://marimanagement.com'),

	openGraph:{
		url:'https://marimanagement.com',
		title:title,
		description:description,
		authors:"shubamium",
		images:[
			banner
		]
	},
		twitter:{
		title:title,
		card:'summary_large_image',
		images:[
			banner
		]
	},
	description: description
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
		<body className={fredoka.className} >
				
				<SidebarContextProvider>
					<MainLayout>
							<Sidebar/>
							<main>
								<SpellDecor/>
								{children}
							</main>
					</MainLayout>
				</SidebarContextProvider>
		</body>
    </html>
  )
}
