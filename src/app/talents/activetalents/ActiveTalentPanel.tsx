import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './activeTalentPanel.scss'
type Props = {}

const ActiveTalentPanel = (props: Props) => {
  return (
	<div className='active-talent-panel'>
		<div className="active-talent-panel-body">
			<div className="talent-pfp">
				<Image src='https://marimanagement.carrd.co/assets/images/image05.jpg' alt='talent-pfp' width="250" height="250"/>
			</div>
			<div className='talent-info'>
				<h2 className='name'>Talent Name</h2>
				<p className='intro'>Brief introduction on your experiences working with them</p>
			</div>
		</div>
		<div className="active-talent-panel-footer">
			<Link href={`/talent/${2}`}><span>View in Detail <FaArrowRight/> </span></Link>
		</div>
	</div>
  )
}

export default ActiveTalentPanel