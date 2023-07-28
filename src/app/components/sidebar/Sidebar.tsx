import Image from 'next/image'
import './sidebar.scss'
import Link from 'next/link'
import Navigation from './navigation/Navigation'

const Sidebar = () => {
	return (
		<header className="sidebar">
			<div className='actions'>
				<div className="sidebar-top">
					<p>Hide Sidebar</p>
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
		</header>
	)
}

export default Sidebar