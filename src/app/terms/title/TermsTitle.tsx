import Image from 'next/image'
import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { RiMailFill } from 'react-icons/ri'

import './termsTitle.scss'

type Props = {}
export default function TermsTitle({}: Props) {

  return (
	<div className='container_terms-title'>
		<div className="left-text">
			<div className="left-container">
				<div className="left-clamp">
					<p>By proceeding with my services, you acknowledge that you have read, understood, and <u>agree to be bound</u> by these <b>Terms and Conditions</b>.</p>
				</div>
			</div>
		</div>
		<div className="img-part">
			<Image src="/static/images/art/chara_portrait2.png" alt='mawi art' width="400" height="500"/>
		</div>

		<div className="right-text">
			<div className="right-container">
				<div className="right-clamp">
					<p>
						If you have any questions or concerns, please reach out to me for clarification. 
					</p>

					<div className="terms-title-contacts">
						<a href="mailto:SheepishMage@gmail.com" target='_blank'><RiMailFill/> </a>
						<a href="https://twitter.com/SheepishMage" target='_blank'><FaTwitter/> </a>
						<a href="https://discordapp.com/users/675465527744790560" target='_blank'><FaDiscord/> </a>
					</div>
				</div>
			</div>
		</div>
		
	</div>
  )
}