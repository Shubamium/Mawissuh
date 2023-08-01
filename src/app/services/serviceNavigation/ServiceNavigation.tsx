'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import './serviceNavigation.scss'

const ServiceNavigation = () => {

	const pathName = usePathname(); 
	const linkClass = (path:string) => ('/services' + path) === pathName ? 'active' : ''; 

	return (
		<div id="container_service-navigation">
			<Link href={'/services/pricing'} className={`service-navigation-link ${linkClass('/pricing')}`}>
				Pricing
			</Link>
			<Link href={'/services/details'} className={`service-navigation-link ${linkClass('/details')}`}>
				Services
			</Link>
			<Link href={'/services/experimental'} className={`service-navigation-link ${linkClass('/experimental')}`}>
				Experimental
			</Link>
			
		</div>
  )
}

export default ServiceNavigation