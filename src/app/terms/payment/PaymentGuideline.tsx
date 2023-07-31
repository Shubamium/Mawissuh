import { FaCoins, FaMoneyBill } from "react-icons/fa"

type Props = {}
import './paymentGuideline.scss'
import Image from "next/image"
import { BiBlock } from 'react-icons/bi'
import {FaHandshake} from 'react-icons/fa'

import './paymentGuideline.scss'

const PaymentGuideline = (props: Props) => {
  return (
	<div className="container_payment-guideline">
		<h2 className='title'><FaCoins/> Talent Acknowledgement</h2>
		<div className="payment-panel">
			<div className="payment-clamp">
				<div className="img-part">
					<Image src="/static/images/art/chibis/analyticsTransparent.png" alt="mawissuh chibi" width={400} height={400}/>
				</div>
				<div className="guideline-list">
					<div className="guideline">
						<div className="icon">
							<BiBlock/>
						</div>
						<div className="guideline-text">
							<p>You acknowledge that the agreed-upon payment for the services is non-refundable! </p>
						</div>
					</div>
					<div className="guideline">
						<div className="icon">
							<FaHandshake/>
						</div>
						<div className="guideline-text">
							<p>The payment terms, including monthly rate and method of payment, will be agreed upon before work is started.</p>
						</div>
					</div>
					<div className="guideline">
						<div className="icon">
							<FaMoneyBill/>
						</div>
						<div className="guideline-text">
							<p>I only accept payment full upfront based on what is the current rate.</p>
						</div>
					</div>
				</div>
				
			</div>
		</div>
	</div>
  )
}

export default PaymentGuideline