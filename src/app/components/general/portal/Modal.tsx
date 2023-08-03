'use client'
import React, { useEffect, useState } from 'react'
import { createPortal } from 'react-dom';
import './modal.scss'

type Props = {
	children:React.ReactNode;
}


const Modal = ({children}: Props) => {
	const [mounted,setMounted] = useState(false);
	useEffect(()=>{
		setMounted(true);
		const root = document.getElementById('page-container');
		if(root){
			root.style.overflow = 'hidden';
		}
		return ()=>{
			if(root) root.style.overflow = 'initial';
			setMounted(false)
		}
	},[])
	const render = (
		<div className='modal'>
			{children}
		</div>
	)
	return mounted ? createPortal(render,document.getElementById('modal-container') as Element) : null
}

export default Modal