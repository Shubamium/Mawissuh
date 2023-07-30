import { FaDiscord, FaTrophy, FaTwitch, FaTwitter, FaYoutube } from 'react-icons/fa'
import './talentDetailPanel.scss'
import { RiMailFill } from 'react-icons/ri'
import DiamondStats from '@/app/components/general/stats/DiamondStats'
import Image from 'next/image'
type talentDetailPanelProps = {
	params:{
		name:string
	}
}
const TalentDetailPanel = ({params} : talentDetailPanelProps) => {
	const talentName =  params.name
	return (
		<div className='talent-detail-panel'>
			<div className="talent-detail-header">
				<div className="talent-pfp">
					<Image src="https://marimanagement.carrd.co/assets/images/image03.jpg" alt='talent-pfp' width={250} height={250}/>
				</div>
				<div className="talent-info-container">
					<div className="talent-data">
						<div className="talent-title">
							<h2>{talentName}</h2>
							<a href="#" target='_blank' className='handle'>Talent's Tagline</a>
						</div>
						<div className="talent-testimonials">
							<p>“ Testimonials, What your client says about your services! ”</p>
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
							<p>Active</p>
						</div>
					</div>
				</div>
			</div>
			<div className="talent-detail-body">
				<div className="talent-detail-sidebar">
					<div className="talent-detail-sidebar-top">
						<div className="talent-detail-sidebar-panel">
							<h2>Under my management for:</h2>
							<p>2 months</p>
						</div>
						<div className="talent-detail-sidebar-panel">
							<h2>Personality Traits:</h2>
							<p>Idol</p>
						</div>
					</div>
					<div className="talent-detail-sidebar-panel stats">
						<div className="stat-fields">
							<h2>Cooperation:</h2>
							<DiamondStats star={2} range={6}/>
						</div>
						<div className="stat-fields">
							<h2>Activeness:</h2>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-fields">
							<h2>Potential:</h2>
							<DiamondStats star={2} range={6}/>
						</div>
						<div className="stat-fields">
							<h2>Cooperation:</h2>
							<DiamondStats star={6} range={6}/>
						</div>
						<div className="stat-fields">
							<h2>Cooperation:</h2>
							<DiamondStats star={1} range={6}/>
						</div>
					</div>		
					
				</div>
				<div className="talent-detail-main">
					<div className="talent-description">
						<p>Write a complete description here, what services you’ve provided for them. Write a complete description here, what services you’ve provided for them. Write a complete description here, what services you’ve provided for them.Write a complete description here, what services you’ve provided for them.</p>
					</div>
					<div className="talent-achievements">
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
						</div>
						<div className="achievements">
							<div className="icon">
								<FaTrophy/>
							</div>
							<div className="text">
								<p>This talent’s notable achievements.</p>
							</div>
						</div>
						
					</div>
				</div>
			</div>
		</div>
	)
}

export default TalentDetailPanel