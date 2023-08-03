"use client"
import React,{ useState} from 'react'
import Button from '../general/button/button'
import { PiWarning } from 'react-icons/pi'
import ButtonSidebarHide from './buttons/ButtonSidebarHide'
import WarningModal from '../general/modal/WarningModal'

type Props = {}

const SidebarTop = (props: Props) => {

	const [warningModal,setWarningModal] = useState(true);
	return (
		<div className="sidebar-top">
			<ButtonSidebarHide/>
			<Button className='btn-warning' onClick={()=>{setWarningModal(true)}}><PiWarning/> Note</Button>
			{warningModal && <WarningModal onClose={()=>{setWarningModal(false)}}/>}
		</div>
	)
}

export default SidebarTop