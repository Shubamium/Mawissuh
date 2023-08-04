import React from 'react'
import Image from 'next/image'
import './homeTitle.scss'
import { getCommissionStatus } from '@/app/db/sanityUtils'
import { PortableText } from '@portabletext/react'

const HomeTitle = async() => {
	const status:any = await getCommissionStatus();
	return (
		<div id="container_home-title">
			<div className="decor_star">
				<svg className='stars_l' width="191" height="187" viewBox="0 0 191 187" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="stars_l">
						<path id="star_bottom" d="M65.6045 167.037L83.0072 162.402L94.6566 176.136L90.0212 158.733L103.755 147.084L86.3528 151.719L74.7034 137.985L79.3388 155.388L65.6045 167.037Z" fill="#68A9C2" fillOpacity="0.36"/>
						<path id="star_middle" d="M9.10185 83.2246L31.675 96.232L31.8707 122.284L44.8781 99.7108L70.93 99.5151L48.3569 86.5076L48.1611 60.4558L35.1537 83.0289L9.10185 83.2246Z" fill="#C4D9E2"/>
						<path id="star_top" d="M95.8773 64.6721L127.919 70.5813L149.058 95.3759L154.967 63.3339L179.762 42.1954L147.72 36.2862L126.581 11.4916L120.672 43.5336L95.8773 64.6721Z" fill="#C7DCE0"/>
					</g>
				</svg>
				<svg className='stars_r' width="255" height="244" viewBox="0 0 255 244" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g id="stars_r">
						<path id="star_bottom" d="M163.543 216.482L139.181 209.993L122.872 229.22L129.362 204.858L110.135 188.55L134.497 195.039L150.805 175.812L144.316 200.174L163.543 216.482Z" fill="#E5E9D7"/>
							<path id="star_middle" d="M242.641 99.1527L211.041 117.362L210.767 153.832L192.558 122.232L156.087 121.958L187.688 103.749L187.962 67.2783L206.171 98.8787L242.641 99.1527Z" fill="#E9ECD9"/>
								<g id="moon">
									<path id="moon-center" fillRule="evenodd" clipRule="evenodd" d="M67.7925 9.50267C51.052 20.0722 44.0221 41.5404 52.1113 60.2911C60.2005 79.0418 80.641 88.659 99.8165 83.734C95.0225 90.3526 88.4391 95.8061 80.3906 99.2783C56.5565 109.561 28.8998 98.5746 18.6176 74.7406C8.33539 50.9065 19.3213 23.2498 43.1554 12.9676C51.2039 9.49538 59.6884 8.44849 67.7925 9.50267Z" fill="#C1D4C0" fillOpacity="0.72"/>
								<g id="Group 127">
								<path id="moon-star" d="M78.8631 39.3174C79.0371 37.7815 80.8135 37.0152 82.0502 37.9425L85.1376 40.2575C85.2673 40.3547 85.4083 40.4359 85.5576 40.4991L90.0706 42.41C91.0557 42.8271 91.5381 43.9454 91.1656 44.9482L89.4589 49.5423C89.4025 49.6943 89.3647 49.8525 89.3464 50.0136L88.912 53.848C88.7379 55.3839 86.9616 56.1502 85.7248 55.2229L82.6375 52.9079C82.5078 52.8107 82.3667 52.7295 82.2175 52.6663L77.7044 50.7554C76.7194 50.3383 76.2369 49.22 76.6094 48.2172L78.3161 43.6231C78.3726 43.4711 78.4104 43.3129 78.4286 43.1518L78.8631 39.3174Z" fill="#C1D4C0" fillOpacity="0.72"/>
							</g>
						</g>
					</g>
				</svg>
			</div>
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