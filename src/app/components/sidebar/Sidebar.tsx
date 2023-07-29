import './sidebar.scss'
import Image from 'next/image'
import Navigation from './navigation/Navigation'
import ButtonSidebarHide from './buttons/ButtonSidebarHide'
import ButtonSidebarShow from './buttons/ButtonSidebarShow'
import Button from '../general/button/button'
import { PiWarning } from 'react-icons/pi'
import { IoIosMail } from 'react-icons/io' 
import { BsTwitter, BsDiscord } from 'react-icons/bs' 
const Sidebar = () => {
	return (
		<header className="sidebar">
			<div className='actions'>
				<div className="sidebar-top">
					<ButtonSidebarHide/>
					<Button className='btn-warning'><PiWarning/> Note</Button>
				</div>
				<Navigation/>
				<div className="sidebar-bottom">
					<h2>Contacts✧</h2>
					<div className='sidebar-contacts'>
						<a href="mailto:SheepishMage@gmail.com" target='_blank'><IoIosMail/></a>
						<a href="#" target='_blank'><BsTwitter/></a>
						<a href="#" target='_blank'><BsDiscord/></a>
					</div>
					<p className='credits'>website design by <a href="https://twitter.com/Shubamium2">@shubamium</a></p>
				</div>
			</div>
		 	<div className="image-part">
				<Image src="/static/images/art/chara_portrait.png" alt='Mawissuh Art' height="800" width="500"/>
			</div>
			<ButtonSidebarShow/>
		</header>
	)
}

export default Sidebar