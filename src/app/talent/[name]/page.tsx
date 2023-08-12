import { FaDiscord, FaTrophy, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import './talentDetailPanel.scss'
import { RiMailFill } from 'react-icons/ri'
import DiamondStats from '@/app/components/general/stats/DiamondStats'
import Image from 'next/image'
import { getImageUrlFromRef, getTalent, toUpperCase } from '@/app/db/sanityUtils'
import {PortableText} from '@portabletext/react'

import { Fragment } from 'react'
import { redirect } from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'

type talentDetailPanelProps = {
	params:{
		name:string
	}
}
const renderContact = (contact: { type:string,link:string},key:string) =>{
	switch(contact.type){
		case 'discord':
			return (
				<a href={`${contact.link}`} target='_blank' key={key}><FaDiscord/></a>
			)
		case 'email':
			return (
				<a href={`mailto:${contact.link}`} target='_blank' key={key}><RiMailFill/></a>
			)
		case 'twitch':
			return (
				<a href={`${contact.link}`} target='_blank' key={key}><FaTwitch/></a>
			)

		case 'twitter':
			return (
				<a href={`${contact.link}`} target='_blank' key={key}><FaTwitter/></a>
			)
		case 'youtube':
			return (
				<a href={`${contact.link}`} target='_blank' key={key}><FaYoutube/></a>
			)
		default:
			return <Fragment key={key}></Fragment>
	}
}
const TalentDetailPanel = async({params} : talentDetailPanelProps) => {
	const talentName =  params.name
	const talent:any = await getTalent(talentName);

	if(!talent){
		redirect('/talents',RedirectType.replace)
	}
	return (
		<div className='talent-detail-panel'>
			<Image className='decor_talent_edge decor_talent_edge-l' src="/static/images/decor/panel_edge.png" alt='' width={80} height={80}/>
			<Image className='decor_talent_edge decor_talent_edge-r' src="/static/images/decor/panel_edge.png" alt='' width={80} height={80}/>
			<div className="talent-detail-header">
				<div className="talent-pfp">
					<Image className='decor_talent_spell ignore-mouse' src="/static/images/decor/magic-circle_normal.png" alt='' width={1050} height={1050}/>
					<Image className='pfp' src={getImageUrlFromRef(talent.image).url() ?? "https://marimanagement.carrd.co/assets/images/image03.jpg"} alt='talent-pfp' width={250} height={250}/>
				</div>
				<div className="talent-info-container">
					<div className="talent-data">
						<div className="talent-title">
							<h2>{talent.name}</h2>
							<a href="#" target='_blank' className='handle'>{talent.tagline}</a>
						</div>
						<div className="talent-testimonials">
							<p>“{talent.testimonials}”</p>
						</div>
					</div>
					<div className="side-container">
						{
							talent.contacts && (
								<div className="talent-contact">
									{talent.contacts.map((contact:any,index:number)=>{
										return renderContact(contact,`talent-contact-${index}`);
									})}
								</div>
							)
						}
						<div className="talent-status">
							<p>{toUpperCase(talent.status)}</p>
						</div>
					</div>
				</div>
			</div>
			<div className="talent-detail-body">
				<div className="talent-detail-sidebar">
					<div className="talent-detail-sidebar-top">
						<div className="talent-detail-sidebar-panel">
							<h2>Under my management for:</h2>
							<p>{talent.managed_for}</p>
						</div>
						<div className="talent-detail-sidebar-panel">
							<h2>Traits:</h2>
							<p>{talent.traits}</p>
						</div>
					</div>
					{talent.custom_stats && talent.custom_stat && talent.custom_stat.length > 0 && (
						talent.custom_stat.map((customStat:any,index:number)=>{
							return (
								<div className="talent-detail-sidebar-panel" key={'custom-stat'+index}>
									<h2>{customStat.title}:</h2>
									<PortableText
										value={customStat.description}
									/>
								</div>
							)
						})
					)}
					{talent.stats && (
						<div className="talent-detail-sidebar-panel stats">
							{
								talent.stats.map((stat:any,index:number)=>{
									return (
										<div className="stat-fields" key={'talent-detail-stats-'+index}>
											<h2>{stat.label}:</h2>
											<DiamondStats star={stat.rating} range={6}/>
										</div>
									)
								})
							}
						</div>		
					)}
					
				</div>
				<div className="talent-detail-main">
					<div className="talent-description">
						<PortableText
							value={talent.description_full}
						/>
					</div>
					<div className="talent-achievements">
						{
							talent.achievements && talent.achievements.map((achievement:any,index:number)=>{
								return (
									<div className="achievements" key={'talent-detail-achievement-'+index}>
										<div className="icon">
											<FaTrophy/>
										</div>
										<div className="text">
											<p>{achievement}</p>
										</div>
									</div>
								)
							})
						}
						{/* <div className="achievements">
							<div className="icon">
								<FaTrophy/>
							</div>
							<div className="text">
								<p>This talent’s notable achievements.</p>
							</div>
						</div>
						<div className="achievements">
							<div className="icon">
								<FaTrophy/>
							</div>
							<div className="text">
								<p>This talent’s notable achievements.</p>
							</div>
						</div>
						<div className="achievements">
							<div className="icon">
								<FaTrophy/>
							</div>
							<div className="text">
								<p>This talent’s notable achievements.</p>
							</div>
						</div> */}
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default TalentDetailPanel