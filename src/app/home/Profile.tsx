
import Image from 'next/image'
import './profile.scss'
import { RiMailFill } from 'react-icons/ri'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import DiamondStats from '../components/general/stats/DiamondStats'
import { getImageUrlFromRef, getProfile } from '../db/sanityUtils'
import { PortableText } from '@portabletext/react'

const Profile = async() => {
	const profile:any = await getProfile();
	console.log(profile.classifications);

	const calculateExp = ()=>{
		const date1 = new Date('31 Oct 1998')
		const date2 = new Date();
		const difference = date1.getTime() - date2.getTime();

		let totalDays = Math.ceil(difference / (1000 * 3600 * 24));

		const year = Math.abs(totalDays/365);
		const level = Math.floor(year);
		let totalExp = level * 2400;
		const exp = year - level;
		const currentExp = Math.floor(totalExp * exp)
		const percentage = ((currentExp / totalExp) * 1000/10).toFixed(1);
		return {exp:currentExp,level:level,totalExp,percentage};
	}

	const levelData = calculateExp()
	return (
		<div className='container_profile shadow-md' id='profile'>
			<div className="main-section">
				<Image className='decor_star-r' src={'/static/images/decor/star_gold.svg'} alt='' width={250} height={250}/>
				<Image className='decor_star-l' src={'/static/images/decor/star_gold.svg'} alt='' width={250} height={250}/>
				<Image className='decor_profile-panel-spell' src={'/static/images/decor/magic_circle_animated.gif'} alt='' width={550} height={550}/>
				<div className="profile-sidebar-container">
					<div className='profile-pic'>
						<Image  src={getImageUrlFromRef(profile.profile_pic).url() ?? "/static/images/art/chara_profile.png"} alt='mawissuh pfp' className='pfp shadow-solid' width={300} height={300}/>
						<Image className='decor_profile-badge' src={'/static/images/art/icons/badge/badge_bg.png'} alt='' width={50} height={50}/>
					</div>
					<div className="profile-contacts">
						<a href="mailto:SheepishMage@gmail.com" target='_blank'><RiMailFill/> </a>
						<a href="https://twitter.com/SheepishMage" target='_blank'><FaTwitter/> </a>
						<a href="https://discordapp.com/users/675465527744790560" target='_blank'><FaDiscord/> </a>
					</div>
					<div className="profile-stats shadow-solid">
						<div className="stats-header">
							<h2>Stats</h2>
						</div>
						<div className="stats-body">
							{profile.stats && profile.stats.map((stat:any,index:number)=>{
								return (
									<div className="stat-field" key={'profile-stat-field'+ index}>
										<p color='#9cbad0'>{stat.label}:</p>
										<DiamondStats color='#9cbad0' star={stat.rating} range={6}/>
									</div>
								)
							})}
						
						</div>
					</div>
					{/* <div className="profile-sidebar-extra shadow-solid">

					</div> */}
				</div>
				<div className="profile-body-container">
					<div className="profile-body-title">
						<div className="main-info">
							<div className="identity shadow-solid">
								<h2 className='pfp-name'>{profile.name ?? 'Marissa🐑🪄'}</h2>
								<p className='sub'>{profile.tagline}</p>
								
							</div>
							<div className="stat">
								<h2 className='level shadow-solid'><span>Lv.</span>{levelData.level}</h2>
								<p className='exp'><span className='current'>{levelData.exp}</span> / {levelData.totalExp}EXP </p>
								<p className='exp'> {levelData.percentage}% </p>
							</div>
						</div>								
						<div className="classifications">
								{profile?.classifications?.map(
									(classification:any,index:number)=>{
										return (
											<div className="classification shadow-solid" key={'classification' + index}>
												<p>{classification}</p>	
											</div>
										)
									}
								)}
						</div>
					</div>

					<div className="profile-body-bio shadow-solid">
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

					<div className="profile-body-skills shadow-md">

						{profile.skills && profile.skills.map((skill:any, index:number)=>{
							return (
								<div className="skill" key={'profile-skills'+ index}>
									<div className="icon ">
										<Image src={getImageUrlFromRef(skill.icon).url() ?? '/static/images/art/icons/skill/skill_placeholder.png'} alt='skill icon' width={150} height={150} className='shadow-solid'/>
									</div>
									<div className="skill-info shadow-solid">
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
			<div className="achievement-section shadow-md">
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
										<Image className='shadow-solid' src={getImageUrlFromRef(achievement.icon).url() ?? '/static/images/art/icons/skill/skill_placeholder.png'} alt='skill icon' width={150} height={150} />
									</div>
									<div className="achievement-info shadow-solid">
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