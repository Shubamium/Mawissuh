import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './activeTalentPanel.scss'
import { getImageUrlFromRef } from '@/app/db/sanityUtils'
type Props = {
	name:string,
	description:string,
	image:string,
	id:any,
	delay:number,
}

const decorLeaf = <svg className='decor_leaf' width="278" height="207" viewBox="0 0 278 207" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g id="leaf">
							<path id="right_green" d="M240.283 136.695C212.222 172.859 136.65 167.382 102.372 160.123C111.094 142.575 137.224 108.655 171.964 113.359C206.704 118.062 257.125 83.2313 274.854 62.1994C277.114 73.9817 268.343 100.53 240.283 136.695Z" fill="url(#paint0_linear_31_332)"/>
							<path id="left_green" d="M51.0526 119.936C76.1143 165.495 136.951 168.807 164.237 164.768C156.039 143.288 132.685 100.581 104.86 101.595C77.0355 102.609 38.6442 49.5105 22.9267 22.8347C21.8596 36.219 25.9908 74.3773 51.0526 119.936Z" fill="url(#paint1_linear_31_332)"/>
							<path id="left_grey" d="M62.8692 143.473C102.024 178.86 161.062 163.549 185.686 151.47C170.67 133.69 134.099 100.475 107.946 109.864C81.7929 119.252 27.4159 80.791 3.49659 60.387C6.97304 73.3375 23.7146 108.085 62.8692 143.473Z" fill="#6A6A6A"/>
						</g>
						<defs>
						<linearGradient id="paint0_linear_31_332" x1="324.5" y1="104" x2="190" y2="99.5" gradientUnits="userSpaceOnUse">
						<stop offset="0.0639942" stopColor="#7BFF70"/>
						<stop offset="0.692708" stopColor="#70F6FF"/>
						<stop offset="1" stopColor="#21FFF2"/>
						</linearGradient>
						<linearGradient id="paint1_linear_31_332" x1="38.0178" y1="106.1" x2="144.923" y2="81.3487" gradientUnits="userSpaceOnUse">
						<stop stopColor="#7BFF70"/>
						<stop offset="0.692708" stopColor="#70F6FF"/>
						<stop offset="1" stopColor="#74F9CD"/>
						</linearGradient>
						</defs>
				  </svg>
				  
const ActiveTalentPanel = ({name,description,image,id,delay}: Props) => {
  return (
	<div className='active-talent-panel'>
		<div className="active-talent-panel-body" style={{"--originalDelay":`${delay}ms`} as React.CSSProperties}>
			<div className="talent-pfp">
				<Image className='decor_pfp_spell ignore-mouse' src="/static/images/decor/magic-circle_glow.png" alt='' width="250" height="250"/>
				{decorLeaf}
				<Image className='pfp' src={getImageUrlFromRef(image).url() || ''} alt='talent-pfp' width="250" height="250"/>
				<Image className='decor_star ignore-mouse' src="/static/images/decor/star_center.png" alt=''  width="250" height="250"/>
			</div>
			<div className='talent-info'>
				<h2 className='name'>{name ?? 'Talent Name'}</h2>
				<p className='intro'>{description ?? 'Brief introduction on your experiences working with them'}</p>
			</div>
		</div>
		<div className="active-talent-panel-footer">
			<Link href={`/talent/${id}`}><span>View in Detail <FaArrowRight/> </span></Link>
		</div>
	</div>
  )
}

export default ActiveTalentPanel