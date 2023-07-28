'use client'
import { SidebarCollapseContext } from '@/app/context/SidebarContext'
import React , { useContext }from 'react'
import Button from '../../general/button/button'

const ButtonSidebarShow = () => {
	const sidebarContext = useContext(SidebarCollapseContext)
	return (
		<Button 
		 	className='sidebar-button_show'
		 	onClick={()=>{
				sidebarContext.setState(state => !state)
			}}>
				-&gt;
		</Button>
	)
}

export default ButtonSidebarShow