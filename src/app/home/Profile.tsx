
import Image from 'next/image'
import './profile.scss'
import { RiMailFill } from 'react-icons/ri'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import DiamondStats from '../components/general/stats/DiamondStats'
import { getImageUrlFromRef, getProfile } from '../db/sanityUtils'
import { PortableText } from '@portabletext/react'

const Profile = async() => {
	const profile = await getProfile();

	return (
		<div className='container_profile'>
			<div className="main-section">
				<div className="profile-sidebar-container">
					<div className='profile-pic'>
						<Image src={getImageUrlFromRef(profile.profile_pic).url() ?? "/static/images/art/chara_profile.png"} alt='mawissuh pfp' width={300} height={300}/>
					</div>
					<div className="profile-contacts">
						<a href="#" target='_blank'><RiMailFill/> </a>
						<a href="#" target='_blank'><FaTwitter/> </a>
						<a href="#" target='_blank'><FaDiscord/> </a>
					</div>
					<div className="profile-stats">
						<div className="stats-header">
							<h2>Stats</h2>
						</div>
						<div className="stats-body">
							{profile.stats && profile.stats.map((stat:any,index:number)=>{
								return (
									<div className="stat-field" key={'profile-stat-field'+ index}>
										<p>{stat.label}:</p>
										<DiamondStats star={stat.rating} range={6}/>
									</div>
								)
							})}
						
						</div>
					</div>
					<div className="profile-sidebar-extra">

					</div>
				</div>
				<div className="profile-body-container">
					<div className="profile-body-title">
						<div className="main-info">
							<div className="identity">
								<h2 className='pfp-name'>{profile.name ?? 'Marissa🐑🪄'}</h2>
								<p className='sub'>{profile.tagline}</p>
							</div>
							<div className="stat">
								<h2 className='level'><span>Lv.</span>24</h2>
								<p className='exp'><span className='current'>1466</span>/ 2560XP </p>
							</div>
						</div>
						<div className="classifications">
								{profile.classifications && profile.classifications.map(
									(classification:any,index:number)=>{
										<div className="classification" key={'classification' + index}>
											<p>{classification}</p>	
										</div>
									}
								)}
						</div>
					</div>

					<div className="profile-body-bio">
						{profile.bio 
							? (
								<PortableText
									value={profile.bio}
								/>
							)
							: <p>I am Marissa, a dedicated Talent Manager specializing in VTubers and Artists. With my expertise, I can guide you towards achieving remarkable success in your career! Let's embark on this journey together! 🌟</p>
						}
					</div>

					<div className="profile-body-extra">
						<div className="section-left"></div>
						<div className="section-right"></div>
					</div>

					<div className="profile-body-skills">

						{profile.skills && profile.skills.map((skill:any, index:number)=>{
							return (
								<div className="skill" key={'profile-skills'+ index}>
									<div className="icon">
										<Image src={getImageUrlFromRef(skill.icon).url() ?? '/static/images/art/icons/skill/skill_placeholder.png'} alt='skill icon' width={150} height={150} />
									</div>
									<div className="skill-info">
										<div className="skill-header">
											<h2>{skill.title || 'Skill Title'}</h2>
											<p className='tier'>Tier {skill.tier || '4'}</p>
										</div>
										<p>{skill.text || 'Skill description and its effects'}</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
			<div className="achievement-section">
				<div className="achievement-header">
					<h2>Achievements</h2>
					<p className='total'>{profile.achievements.length ?? 6}/{profile.achievement_unlocked} Unlocked</p>
				</div>
				<div className="achievement-list">
					{
						profile.achievements && profile.achievements.map((achievement:any,index:number)=>{
							return (
								<div className="achievement" key={'profile-achievement-' + index}>
									<div className="icon">
										<Image src={getImageUrlFromRef(achievement.icon).url() ?? '/static/images/art/icons/skill/skill_placeholder.png'} alt='skill icon' width={150} height={150} />
									</div>
									<div className="achievement-info">
										<h2>{achievement.title ?? 'Achievement Name'}</h2>
										<p>{achievement.text ?? 'Achievement Info'}</p>
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
		</div>
	)
}

export default Profile