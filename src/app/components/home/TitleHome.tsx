import React from 'react'
import Image from 'next/image'
import './homeTitle.scss'


const HomeTitle = () => {
  return (
	<div id="container_home-title">
		<Image className='main-logo' src="/static/images/marilogo.png" alt='main-logo' width='600' height='200'/>
		<h1 className='title'>Magic Academy Instructor <span>-x-</span> Talent Manager</h1>
		<p className='tagline'>Monthly Career Assistance ✧ Transparent Pricing ✧ Versatile Skill Set</p>
		<div className='management-status'>
			<p>Management: <span className="status">Open</span></p>
		</div>
	</div>
  )
}

export default HomeTitle