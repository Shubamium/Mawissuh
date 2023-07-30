import React from 'react'
import HeaderTitle from '../components/general/HeaderTitleComponent/HeaderTitle'
import Button from '../components/general/button/button'
import { FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

import './talentLayout.scss'
type Props = {
	children:React.ReactNode
}

const TalentPageLayout = (props: Props) => {
  return (
	<div id='container_talent-detail'>
		<HeaderTitle title='Talent Info'>
			I respect the privacy and confidentiality of my talents. I avoid sharing any sensitive information or violating any non-disclosure agreements. This page focuses on presenting the general information and positive experiences I had working with time!
		</HeaderTitle>
		<Link href={'/talents'}>
			<Button className='btn-talent-back'> <FaArrowLeft/> Back to Talent List</Button>
		</Link>
		{props.children}
	</div>
  )
}

export default TalentPageLayout