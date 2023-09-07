'use client'
import { SidebarCollapseContext } from '@/app/context/SidebarContext'
import React , { FC, useContext }from 'react'
import Button from '../../general/button/button'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'


type ButtonSidebarProps = {
	otherDirection:boolean;
}
const ButtonSidebarShow : FC<ButtonSidebarProps> = ({otherDirection}) => {
	const sidebarContext = useContext(SidebarCollapseContext)
	if(sidebarContext.state !== otherDirection) return;
	return (
		<Button 
		 	className={'sidebar-button_show shadow-center' + ` ${otherDirection ?'other' : ''}`}
		 	onClick={()=>{
				if(otherDirection){
					sidebarContext.setState(state => false)
				}else{
					
					sidebarContext.setState(state => true)
				}
			}}>
				{!otherDirection ? <BsArrowRight /> : <BsArrowLeft />} 
		</Button>
	)
}

export default ButtonSidebarShow