'use client'

import { useContext, useState } from 'react'
import { SidebarCollapseContext } from './context/SidebarContext'
import WarningModal from './components/general/modal/WarningModal'
type rootLayoutProps = {
	children: React.ReactNode
}
const MainLayout = ({children} : rootLayoutProps) => {
	const [warningModal,setWarningModal] = useState(true);
	const sidebar = useContext(SidebarCollapseContext);
	return (
		<>
		
			<div id="root-container" className={sidebar.state ? 'visible' : 'hidden' }>
				{children}
			</div>
			<div className="modal-container">
			{warningModal && <WarningModal onClose={()=>{setWarningModal(false)}}/>}
			</div>
		</>
	)
}
export default MainLayout