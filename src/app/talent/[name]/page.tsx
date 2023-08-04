import { FaDiscord, FaTrophy, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import './talentDetailPanel.scss'
import { RiMailFill } from 'react-icons/ri'
import DiamondStats from '@/app/components/general/stats/DiamondStats'
import Image from 'next/image'
import { getImageUrlFromRef, getTalent, toUpperCase } from '@/app/db/sanityUtils'
import {PortableText} from '@portabletext/react'

type talentDetailPanelProps = {
	params:{
		name:string
	}
}
const TalentDetailPanel = async({params} : talentDetailPanelProps) => {
	const talentName =  params.name
	const talent:any = await getTalent(talentName);
	return (
		<div className='talent-detail-panel'>
			<div className="talent-detail-header">
				<div className="talent-pfp">
					<Image src={getImageUrlFromRef(talent.image).url() ?? "https://marimanagement.carrd.co/assets/images/image03.jpg"} alt='talent-pfp' width={250} height={250}/>
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
						<div className="talent-contact">
							<a href="#"><FaTwitch/></a>
							<a href="#"><FaTwitter/></a>
							<a href="#"><RiMailFill/></a>
							<a href="#"><FaDiscord/></a>
							<a href="#"><FaYoutube/></a>
						</div>
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
					<div className="talent-detail-sidebar-panel stats">
						{
							talent.stats && talent.stats.map((stat:any,index:number)=>{
								return (
									<div className="stat-fields" key={'talent-detail-stats-'+index}>
										<h2>{stat.label}:</h2>
										<DiamondStats star={stat.rating} range={6}/>
									</div>
								)
							})
						}
					</div>		
					
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