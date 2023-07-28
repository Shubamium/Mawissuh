'use client'
import { SidebarCollapseContext } from '@/app/context/SidebarContext'
import React , { useContext }from 'react'
import Button from '../../general/button/button'

const ButtonSidebarHide = () => {
	const sidebarContext = useContext(SidebarCollapseContext)
	return (
		<Button 
		 	className='sidebar-button_hide'
		 	onClick={()=>{
				sidebarContext.setState(state => false)
			}}>
				Hide Sidebar
		</Button>
	)
}

export default ButtonSidebarHide