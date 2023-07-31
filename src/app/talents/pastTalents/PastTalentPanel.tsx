import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './pastTalentPanel.scss'

type Props = {}

const PastTalentPanel = (props: Props) => {
  return (
	<div className='past-talent-panel'>
		<div className="past-talent-panel-body">
			<div className="talent-pfp">
				<Image src='https://marimanagement.carrd.co/assets/images/image05.jpg' alt='talent-pfp' width="250" height="250"/>
			</div>
			<div className='talent-info'>
				<h2 className='name'>Talent Name</h2>
				<p className='intro'>Brief introduction on your experiences working with them</p>
			</div>
		</div>
		<div className="past-talent-panel-footer">
			<Link href={`/talent/${'talent-name'}`}><span>View in Detail <FaArrowRight/> </span></Link>
		</div>
	</div>
  )
}

export default PastTalentPanel
