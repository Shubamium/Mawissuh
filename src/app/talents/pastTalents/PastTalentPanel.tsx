import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import './pastTalentPanel.scss'
import { getImageUrlFromRef } from '@/app/db/sanityUtils'

type Props = {
	name:string,
	description:string,
	image:string
	id:any
}

const PastTalentPanel = ({name,description,image,id}: Props) => {
  return (
	<div className='past-talent-panel'>
		<div className="past-talent-panel-body">
			<div className="talent-pfp">
				<Image src={getImageUrlFromRef(image).url() || ''} alt='talent-pfp' width="250" height="250"/>
			</div>
			<div className='talent-info'>
				<h2 className='name'>{name ?? 'Talent Name'}</h2>
				<p className='intro'>{description ?? 'Brief introduction on your experiences working with them'}</p>
			</div>
		</div>
		<div className="past-talent-panel-footer">
			<Link href={`/talent/${id}`}><span>View in Detail <FaArrowRight/> </span></Link>
		</div>
	</div>
  )
}

export default PastTalentPanel
