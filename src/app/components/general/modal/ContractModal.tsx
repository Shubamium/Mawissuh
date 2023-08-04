'use client'
import React, { useState } from 'react'
import Modal from '../portal/Modal'
import './contractModal.scss'
import Link from 'next/link'
import Button from '../button/button'
import { FaFeather } from 'react-icons/fa'
import Image from 'next/image'
import { Great_Vibes, } from 'next/font/google'
const tangerine = Great_Vibes({weight:['400'],subsets:['latin']})
import { RiCloseFill  } from 'react-icons/ri'

type Props = {
	onclose: () => void
}

const ContractModal = ({onclose}: Props) => {
	const [contractorName,setContractorName] = useState<string | null>(null);
	
	// useEffect(,[contractorName])
	const getLink = (cN:string | null) => {
		const link = `https://twitter.com/messages/compose?recipient_id=1379171069043564552&text=Hi%2C%20${cN ? `I%27m%20${cN}.%20` : ''}I%27m%20interested%20in%20hiring%20you%20as%20my%20manager.%20Could%20we%20discuss%20further%20details%3F%20%F0%9F%AA%84%F0%9F%8C%9F%20%F0%9F%93%8B`
		return link
	}
	return  (
			<Modal>
				<Button onClick={onclose} className='btn-contract-close'><RiCloseFill/> Close </Button>
				<div className={"contract-modal-panel"}>
					<div className="contract-header">
						<h2>✧ - Contracts of agreement - ✧</h2>
					</div>
					<div className="contract-body">
						<div className="image-part">
							<Image className='spell' src="/static/images/art/decor/magic_circles_2.png" alt="" width={850} height={850}/>
							<Image className='badge' src="/static/images/art/icons/badge/badge_white.png" alt="" width={450} height={450}/>
						</div>
						<p>I will assist you in your content creation, handle your scheduling, organize collabs, provide you support and ensure all your needs and goals are met! </p>
						<p>Please <b>read Terms and Conditions carefully</b> before engaging with my management services! By proceeding with my services, you acknowledge that you have read, understood, and agree to be bound by the <Link href={'/terms'}><u>Terms and Conditions</u></Link>.</p>
						<input onChange={(e)=> setContractorName(e.target.value)} type="text" placeholder='Write your name here' className={"contract-name " + tangerine.className}/>
					</div>
					<div className="contract-footer">
						<a href={getLink(contractorName)} target='_blank'>
							<Button className='btn-send' onClick={onclose}><FaFeather/> Send</Button>
						</a>
					</div>
				</div>
			</Modal>
	) 
}

export default ContractModal