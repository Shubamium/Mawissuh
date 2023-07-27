import Image from 'next/image'
import './sidebar.scss'
import Link from 'next/link'

const Sidebar = () => {
	return (
		<header className="sidebar">
			<div className='actions'>
				<div className="sidebar-top">
					<p>Hide Sidebar</p>
					<p>Warning</p>
				</div>
				<nav className='navigation'>
					<Image src={"/static/images/art/icons/badge/badge_gradient.svg"} alt='' width={150} height={150} className='decor_badge'/>
					<Link className="nav-ling" href={"/"}>Home</Link>
					<Link className="nav-ling" href={"/services/pricing"}>Services</Link>
					<Link className="nav-ling" href={"/services/terms"}>Terms</Link>
					<Link className="nav-ling" href={"/services/talents"}>Talents</Link>
				</nav>
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