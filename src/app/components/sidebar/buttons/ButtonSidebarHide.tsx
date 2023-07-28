'use client'
import { SidebarCollapseContext } from '@/app/context/SidebarContext'
import React , { useContext }from 'react'
import Button from '../../general/button/button'
import { BsArrowLeft } from 'react-icons/bs'
const ButtonSidebarHide = () => {
	const sidebarContext = useContext(SidebarCollapseContext)
	return (
		<Button 
		 	className='sidebar-button_hide'
		 	onClick={()=>{
				sidebarContext.setState(state => false)
			}}>
				<BsArrowLeft/> Hide Sidebar
		</Button>
	)
}

export default ButtonSidebarHide