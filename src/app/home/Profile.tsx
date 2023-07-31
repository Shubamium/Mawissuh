
import Image from 'next/image'
import './profile.scss'
import { RiMailFill } from 'react-icons/ri'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import DiamondStats from '../components/general/stats/DiamondStats'

type Props = {}

const Profile = (props: Props) => {
  return (
	<div className='container_profile'>
		<div className="main-section">
			<div className="profile-sidebar-container">
				<div className='profile-pic'>
					<Image src="/static/images/art/chara_profile.png" alt='mawissuh pfp' width={300} height={300}/>
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
						<div className="stat-field">
							<p>HP:</p>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-field">
							<p>HP:</p>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-field">
							<p>HP:</p>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-field">
							<p>Collaboration:</p>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-field">
							<p>HP:</p>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-field">
							<p>Management:</p>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-field">
							<p>HP:</p>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-field">
							<p>HP:</p>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-field">
							<p>HP:</p>
							<DiamondStats star={4} range={6}/>
						</div>
						<div className="stat-field">
							<p>HP:</p>
							<DiamondStats star={4} range={6}/>
						</div>

					</div>
				</div>
				<div className="profile-sidebar-extra">

				</div>
			</div>
			<div className="profile-body-container">
				<div className="profile-body-title">
					<div className="main-info">
						<div className="identity">
							<h2 className='pfp-name'>Marissa🐑🪄</h2>
							<p className='sub'>role here - class here</p>
						</div>
						<div className="stat">
							<h2 className='level'><span>Lv.</span>24</h2>
							<p className='exp'><span className='current'>1466</span>/ 2560XP </p>
						</div>
					</div>
					<div className="classifications">
							<div className="classification">
								<p>Race Here</p>
							</div>
							<div className="classification">
								<p>Character Classification</p>
							</div>
					</div>
				</div>

				<div className="profile-body-bio">
					<p>I am Marissa, a dedicated Talent Manager specializing in VTubers and Artists. With my expertise, I can guide you towards achieving remarkable success in your career! Let's embark on this journey together! 🌟</p>
				</div>

				<div className="profile-body-extra">
					<div className="section-left"></div>
					<div className="section-right"></div>
				</div>

				<div className="profile-body-skills">
					<div className="skill">
						<div className="icon">
							<Image src='/static/images/art/icons/skill/skill_placeholder.png' alt='skill icon' width={150} height={150} />
						</div>
						<div className="skill-info">
							<div className="skill-header">
								<h2>Skill Name</h2>
								<p className='tier'>Tier 4</p>
							</div>
							<p>Skill description and its effects</p>
						</div>
					</div>
					<div className="skill">
						<div className="icon">
							<Image src='/static/images/art/icons/skill/skill_placeholder.png' alt='skill icon' width={150} height={150} />
						</div>
						<div className="skill-info">
							<div className="skill-header">
								<h2>Skill Name</h2>
								<p className='tier'>Tier 4</p>
							</div>
							<p>Skill description and its effects</p>
						</div>
					</div>
					<div className="skill">
						<div className="icon">
							<Image src='/static/images/art/icons/skill/skill_placeholder.png' alt='skill icon' width={150} height={150} />
						</div>
						<div className="skill-info">
							<div className="skill-header">
								<h2>Skill Name</h2>
								<p className='tier'>Tier 4</p>
							</div>
							<p>Skill description and its effects</p>
						</div>
					</div>
					<div className="skill">
						<div className="icon">
							<Image src='/static/images/art/icons/skill/skill_placeholder.png' alt='skill icon' width={150} height={150} />
						</div>
						<div className="skill-info">
							<div className="skill-header">
								<h2>Skill Name</h2>
								<p className='tier'>Tier 4</p>
							</div>
							<p>Skill description and its effects</p>
						</div>
					</div>
					<div className="skill">
						<div className="icon">
							<Image src='/static/images/art/icons/skill/skill_placeholder.png' alt='skill icon' width={150} height={150} />
						</div>
						<div className="skill-info">
							<div className="skill-header">
								<h2>Skill Name</h2>
								<p className='tier'>Tier 4</p>
							</div>
							<p>Skill description and its effects</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="achievement-section">
			<div className="achievement-header">
				<h2>Achievements</h2>
				<p className='total'>6/30 Unlocked</p>
			</div>
			<div className="achievement-list">
				<div className="achievement">
					<div className="icon">
						<Image src='/static/images/art/icons/skill/skill_placeholder.png' alt='skill icon' width={150} height={150} />
					</div>
					<div className="achievement-info">
						<h2>Achievement Name</h2>
						<p>Achievement Info</p>
					</div>
				</div>
				<div className="achievement">
					<div className="icon">
						<Image src='/static/images/art/icons/skill/skill_placeholder.png' alt='skill icon' width={150} height={150} />
					</div>
					<div className="achievement-info">
						<h2>Achievement Name</h2>
						<p>Achievement Info</p>
					</div>
				</div>
				<div className="achievement">
					<div className="icon">
						<Image src='/static/images/art/icons/skill/skill_placeholder.png' alt='skill icon' width={150} height={150} />
					</div>
					<div className="achievement-info">
						<h2>Achievement Name</h2>
						<p>Achievement Info</p>
					</div>
				</div>
				<div className="achievement">
					<div className="icon">
						<Image src='/static/images/art/icons/skill/skill_placeholder.png' alt='skill icon' width={150} height={150} />
					</div>
					<div className="achievement-info">
						<h2>Achievement Name</h2>
						<p>Achievement Info</p>
					</div>
				</div>
			</div>
		</div>
	</div>
  )
}

export default Profile