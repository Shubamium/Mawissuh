
import './pricing.scss'
import { FaArrowRight, FaCheck, FaClipboardCheck, FaPaperPlane } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { getPricing, getServices } from '@/app/db/sanityUtils'
import urlSlug from 'url-slug'
import PricingNote from './client/PricingNote'

const dynamic = 'force-dynamic'
const ServicesPricing = async () => {
	const general = await getPricing();
	const servicesList:any[] = await getServices()
	return (
		<div id='container_pricing'>
			<h2 className='panel-header'>  Pricing</h2>
			<div className='pricing-panel'>
				<div className="pricing-info">
					<div className="pricing-include">
						<h2 className='header'><FaClipboardCheck/> Includes</h2>
						<div className="service-list">
							{servicesList?.map((service:any)=>{
								return (
									<Link className='service' key={service._id} href={`/services/details#${urlSlug(service.title)}`} scroll={true}>
										<span>{service.title ?? 'Talent Creation'}</span>
										<div className="checkmark shadow-md">
											<FaCheck/>
										</div>
									</Link>
								)
							})}
							<div className="service learn-more">
								<Link href={'/services/details#talent-creation'}>More Detail <FaArrowRight/></Link>
							</div>
						</div>
					</div>
					<article className="pricing-text">
						<h2>When requesting my services, you will be provided all offered services upon purchase!</h2>
						<p>Targeted work is available should you not want everything and need specific help! This does not change the price but can improve my focus and time given to the specific task instead!</p>
					</article>
					<div className="decor_chibi">
						<Image className='chibi' src="/static/images/art/chibis/managementTransparent.png" alt='chibi manager' width="300" height="300"/>
					</div>
				</div>
				<div className="pricing-price">
					<div className="pricing">
						<p className='rate'>Fixed Rate-</p>
						<p className='price'>${general.pricing}<span className="price-base">USD/month</span></p>
					</div>
					<PricingNote/>
				</div>

			</div>
		</div>
	)
}

export default ServicesPricing