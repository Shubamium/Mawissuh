"use client"
import Button from '@/app/components/general/button/button'
import ContractModal from '@/app/components/general/modal/ContractModal'
import React, { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'

type Props = {}

function PricingNote({}: Props) {
	const [modal,setModal] = useState(false);
	return (
		<div className="note">
			<p className='warning'>
				*Prices are <b>Firm</b>, <b>Non-Negotiable</b> and <br></br> No Hidden / Additional Fees.
			</p>
			<Button className='hire-btn shadow-solid' onClick={()=>{setModal(true)}}>Hire Me <FaPaperPlane/></Button>
			{modal && <ContractModal onclose={()=>{setModal(false)}}/>}
		</div>
	)
}
export default PricingNote