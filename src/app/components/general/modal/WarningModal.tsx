'use client'
import React, { useState } from 'react'
import Modal from '../portal/Modal'
import './warningModal.scss'
import { PiWarningFill } from 'react-icons/pi'
import Button from '../button/button'
import { BsArrowRight } from 'react-icons/bs'
import { IoMdCheckmark } from 'react-icons/io'
type Props = {
	onClose:()=>void;
}

function WarningModal({onClose}: Props) {
	const [agree,setAgree] = useState(false);
	return (
			<Modal>
				<div className="warning-modal-panel">
					<div className="warning-head">
						<PiWarningFill/>
						<h2> MY SERVICE IS NOT FOR EVERYONE!!!</h2>
					</div>
					<div className="warning-body">
						<p>This service is a luxury and <b>NOT</b> a requirement to be a creator! </p>
						<p>This is an optional clarity of mind as I will assist you in your content creation, handle your scheduling, organize collabs, provide you support and ensure all your needs and goals are met! </p>
						<p>Should this be acceptable then:<br/> <span className='welcome'>Welcome to my site and please look around to your hearts content!</span></p>
						
					</div>
					<div className="warning-footer">
						<p>I understand and wish to proceed </p>
						<div className="checkbox-agree" onClick={()=>{setAgree(prev => !prev)}}>
							{agree && <IoMdCheckmark/>}
						</div>
						<Button className={`btn-close ${agree ? 'visible' : 'hidden'}`} onClick={onClose}>Continue <BsArrowRight/></Button>
					</div>
				</div>
			</Modal>
	)
}

export default WarningModal