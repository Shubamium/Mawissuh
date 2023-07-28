'use client'
import { SidebarCollapseContext } from '@/app/context/SidebarContext'
import React , { useContext }from 'react'
import Button from '../../general/button/button'
import {BsArrowRight} from 'react-icons/bs'
const ButtonSidebarShow = () => {
	const sidebarContext = useContext(SidebarCollapseContext)
	return (
		<Button 
		 	className='sidebar-button_show'
		 	onClick={()=>{
				sidebarContext.setState(state => !state)
			}}>
				<BsArrowRight/>
		</Button>
	)
}

export default ButtonSidebarShow