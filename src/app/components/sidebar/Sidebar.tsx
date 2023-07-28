import './sidebar.scss'
import Image from 'next/image'
import Navigation from './navigation/Navigation'
import ButtonSidebarHide from './buttons/ButtonSidebarHide'
import ButtonSidebarShow from './buttons/ButtonSidebarShow'

const Sidebar = () => {
	return (
		<header className="sidebar">
			<div className='actions'>
				<div className="sidebar-top">
					<ButtonSidebarHide/>
					<p>Warning</p>
				</div>
				<Navigation/>
				<div className="sidebar-bottom">
					<p>Contacts</p>
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