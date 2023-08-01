import React from 'react'
import Image from 'next/image'
import './homeTitle.scss'
import { getCommissionStatus } from '@/app/db/sanityUtils'
import { PortableText } from '@portabletext/react'

const HomeTitle = async() => {
	const status = await getCommissionStatus();
	return (
		<div id="container_home-title">
			<Image className='main-logo' src="/static/images/marilogo.png" alt='main-logo' width='600' height='200'/>
			<h1 className='title'>Magic Academy Instructor <span>-x-</span> Talent Manager</h1>
			<p className='tagline'>Monthly Career Assistance ✧ Transparent Pricing ✧ Versatile Skill Set</p>
			<div className='management-status'>
				<PortableText
					value={status.text_commission}
				/>
			</div>
		</div>
	)
}

export default HomeTitle