'use client';
import './sidebar.scss'
import Image from 'next/image'
import Navigation from './navigation/Navigation'
import ButtonSidebarShow from './buttons/ButtonSidebarShow'
import { IoIosMail } from 'react-icons/io' 
import { BsTwitter, BsDiscord } from 'react-icons/bs' 
import SidebarTop from './SidebarTop'
import {useContext, useEffect, useState} from 'react'
import { SidebarCollapseContext } from '@/app/context/SidebarContext';


const Sidebar = () => {
	const [showSidebar,setShowSidebar] = useState(true);
	const {setState} = useContext(SidebarCollapseContext);
	useEffect(()=>{
		const setSidebar = ()=>{
			if(window.innerWidth < 1280){
				setShowSidebar(false)
				setState(false)
			}else{
				setShowSidebar(true)
			}
		}
		window.addEventListener('resize',(e)=>{
			setSidebar()
		})
		setSidebar()
		
	},[setState])
	return (
		<>
			<header className={"sidebar " + `${ showSidebar ? '' : 'hidden'}`}>
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
					<Image src="/static/images/art/chara_portrait.png" alt='Mawissuh Art' className='shadow-center' height="1500" width="1500"/>
				</div>
				<ButtonSidebarShow otherDirection={false}/>
				<ButtonSidebarShow otherDirection={true}/>
			</header>
			<header className={`topbar shadow-solid ${!showSidebar ? 'show':'hidden'}`}>
				<Navigation otherBadge={true}/>
			</header>
		</>
	)
}

export default Sidebar