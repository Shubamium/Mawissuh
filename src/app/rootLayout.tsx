'use client'

import { useContext } from 'react'
import { SidebarCollapseContext } from './context/SidebarContext'
type rootLayoutProps = {
	children: React.ReactNode
}
const MainLayout = ({children} : rootLayoutProps) => {
	const sidebar = useContext(SidebarCollapseContext);
	return (
		<>
		
			<div id="root-container" className={sidebar.state ? 'visible' : 'hidden' }>
				{children}
				
			</div>
			
		</>
	)
}
export default MainLayout