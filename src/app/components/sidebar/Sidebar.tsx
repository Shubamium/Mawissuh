import './sidebar.scss'
import Image from 'next/image'
import Navigation from './navigation/Navigation'
import ButtonSidebarShow from './buttons/ButtonSidebarShow'
import { IoIosMail } from 'react-icons/io' 
import { BsTwitter, BsDiscord } from 'react-icons/bs' 
import SidebarTop from './SidebarTop'

const Sidebar = () => {
	return (
		<header className="sidebar">
			<div className='actions'>
				<SidebarTop/>
				<Navigation/>
				<div className="sidebar-bottom">
					<h2>Contacts✧</h2>
					<div className='sidebar-contacts'>
						<a href="mailto:SheepishMage@gmail.com" target='_blank'><IoIosMail/></a>
						<a href="https://twitter.com/SheepishMage" target='_blank'><BsTwitter/></a>
						<a href="https://discordapp.com/users/675465527744790560" target='_blank'><BsDiscord/></a>
					</div>
					<p className='credits'>website design by <a href="https://twitter.com/Shubamium2" target='_blank'>@shubamium</a></p>
				</div>
			</div>
		 	<div className="image-part">
				<Image src="/static/images/art/chara_portrait.png" alt='Mawissuh Art' className='shadow-center' height="150" width="150"/>
			</div>
			<ButtonSidebarShow/>
		</header>
	)
}

export default Sidebar