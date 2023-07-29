'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import './navigation.scss'
import { usePathname} from 'next/navigation'
import { IoMdHome } from 'react-icons/io'
import { FaBriefcase, FaHome} from 'react-icons/fa'
import { LiaScrollSolid} from 'react-icons/lia'
import { RiMagicFill } from 'react-icons/ri'
const Navigation = () => {

	const currentPath = usePathname();
	const linkClass = (path:string) => 'link ' + (currentPath === path ? 'active' : '');
	console.log(currentPath);
	return (
		<nav className='navigation'>
			<Image src={"/static/images/art/icons/badge/badge_gradient.svg"} alt='' width={150} height={150} className='decor_badge'/>
			<ul className='navigation-links'>
				<li className={linkClass('/')}>
					<Link className="nav-link" href={"/"}> <FaHome/> Home </Link>
				</li> 
				<li className={linkClass('/pricing')}>
					<Link className="nav-link" href={"/services/pricing"}> <FaBriefcase /> Services</Link>
				</li>
				<li className={linkClass('/terms')}>
					<Link className="nav-link" href={"/terms"}><LiaScrollSolid/> Terms</Link>
				</li>
				<li className={linkClass('/talents')}>
					<Link className="nav-link" href={"/talents"}><RiMagicFill/>Talents</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navigation