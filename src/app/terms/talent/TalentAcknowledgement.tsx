import React from 'react'
import { FaHandshake } from 'react-icons/fa'
import './talentAcknowledgement.scss'
import TalentCard from './card/TalentCard'
import { getTermsTalent } from '@/app/db/sanityUtils'
import { PortableText } from '@portabletext/react'
type Props = {}

const TalentAcknowledgement = async(props: Props) => {

	const termsAcknowledge: any[] = await getTermsTalent();
  return (
	<div className="container_talent-acknowledgement">

		<h2 className='title'><FaHandshake/> Talent Acknowledgement</h2>
		<div className="card-container">
			{termsAcknowledge && termsAcknowledge.map((terms:any,index:number)=>{
				return(
					<TalentCard title={terms.title} image={terms.image} key={terms._id} >
						<PortableText
							value={terms.description}
						/>
					</TalentCard>
				)
			})}
			{/* <TalentCard title="Tailored Service" image="/static/images/art/chibis/managementTransparent.png">
				<p>I will provide specialized services that cater specifically to your needs. You may request specific services be focused, but do note that at this time: 2 August 2023, There is NO price changes! </p>
				<p>There are plans for that in the future so keep an eye out for it!</p>
			</TalentCard>
			<TalentCard title="Compliances" image="/static/images/art/chibis/techsupportTransparent.png">
				<p>If you decide not to comply, you acknowledge you will be permanently blacklisted within my network of creators. </p>
				<p>Should this be required to go public, I will readily present evidence with your identity uncensored to alert all creators. </p>
				<p>Consequently, any future collaborations between anyone I am involved now or in the future with will be permanently revoked.</p>
			</TalentCard>
			<TalentCard title="Content Rights" image="/static/images/art/chibis/collabTransparent.png">
				<p>The talent will always retain all rights to their original content and intellectual property when in service with me. </p>
				<p>However, I am allowed to use our work for service representation and website display.</p>
			</TalentCard> */}
		</div>
	</div>
  )
}

export default TalentAcknowledgement