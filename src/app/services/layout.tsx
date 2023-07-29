import React, { ReactNode } from 'react'
import HeaderTitle from '../components/general/headerTitle/headerTitle'
import ServiceNavigation from './pricing/serviceNavigation/ServiceNavigation';

type Props = {
	children:ReactNode;
}

const ServicePageLayout = ({children}: Props) => {
  return (
	<div id="container_price-page">
		<HeaderTitle title='Services'>
			I offer a comprehensive suite of services tailored for <b>VTubers</b> and <b>content creators</b> to elevate their online presence. My range of support includes talent creation, channel management, collaboration opportunities, technical assistance, analytics, and personal development. 
		</HeaderTitle>
		<ServiceNavigation/>
		{children}
	</div>	
  )
}

export default ServicePageLayout