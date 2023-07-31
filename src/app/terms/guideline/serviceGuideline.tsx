
import Image from 'next/image'
import { GiScrollUnfurled} from 'react-icons/gi'
type Props = {}
import './serviceGuideline.scss'

const ServiceGuideline = (props: Props) => {
  return (
	<div className="container_service-guideline">
		<div className="service-clamp">
			<div className="text-part">
				<h2><GiScrollUnfurled/>Services Guideline</h2>
				<p>You are required to provide accurate information whenever asked during initial discussion phase so that I may determine if my services are for you.</p>
				<p>You are required to provide accurate information whenever asked during initial discussion phase so that I may determine if my services are for you.</p>
			</div>

			<div className="img-part">
				<Image src="/static/images/art/chibis/managementTransparent.png" alt='management chibi' width={250} height={250}/>
			</div>
		</div>
	</div>
  )
}

export default ServiceGuideline