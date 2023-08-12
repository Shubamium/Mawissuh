
import Image from 'next/image'
import './talentCard.scss'
import React from 'react'
import { getImageUrlFromRef } from '@/app/db/sanityUtils'

type Props ={
	title: string,
	children:React.ReactNode,
	image: string
}
const TalentCard = (props: Props) => {
  return (
	<div className="talent-card">
		<div className="text-part">
			<h2>{props.title}</h2>
			{props.children}
		</div>
		<div className="img-part">
			{props.image && <Image src={getImageUrlFromRef(props.image).url()} alt='mawissuh chibi' width={450} height={450}/>}
		</div>
	</div>
  )
}

export default TalentCard