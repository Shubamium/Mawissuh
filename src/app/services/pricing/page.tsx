
type Props = {}

import Button from '@/app/components/general/button/button'
import './pricing.scss'
import { FaArrowRight, FaCheck, FaClipboard, FaClipboardCheck, FaPaperPlane } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

const ServicesPricing = (props: Props) => {
  return (
	<div id='container_pricing'>
		<h2 className='panel-header'>Pricing</h2>
		<div className='pricing-panel'>
			<div className="pricing-info">
				<div className="pricing-include">
					<h2 className='header'><FaClipboardCheck/> Includes</h2>
					<div className="service-list">
						<Link className='service' href={'/services/details#talent-creation'}>
							<span>Talent Creation</span>
							<div className="checkmark">
								<FaCheck/>
							</div>
						</Link>
						<Link className='service' href={'/services/details#talent-creation'}>
							<span>Talent Creation</span>
							<div className="checkmark">
								<FaCheck/>
							</div>
						</Link>
						<Link className='service' href={'/services/details#talent-creation'}>
							<span>Talent Creation</span>
							<div className="checkmark">
								<FaCheck/>
							</div>
						</Link>
						<Link className='service' href={'/services/details#talent-creation'}>
							<span>Talent Creation</span>
							<div className="checkmark">
								<FaCheck/>
							</div>
						</Link>
						<Link className='service' href={'/services/details#talent-creation'}>
							<span>Talent Creation</span>
							<div className="checkmark">
								<FaCheck/>
							</div>
						</Link>
						<Link className='service' href={'/services/details#talent-creation'}>
							<span>Talent Creation</span>
							<div className="checkmark">
								<FaCheck/>
							</div>
						</Link>

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
					<p className='price'>$85<span className="price-base">/month</span></p>
				</div>
				<div className="note">
					<p className='warning'>
						*Prices are <b>Firm</b>, <b>Non-Negotiable</b> and <br></br> No Hidden / Additional Fees.
					</p>
					<Button className='hire-btn'>Hire Me <FaPaperPlane/></Button>
				</div>
			</div>
		</div>
	</div>
  )
}

export default ServicesPricing