
import Image from 'next/image';
import './serviceList.scss'

type serviceListProp = {
	layout: 'left' | 'right';
	title:string;
	description:string;
}
const ServiceList = ({layout,title,description} : serviceListProp) => {
  return (
	<div className='service-list-container'>
		<div className={`container-clamp service-layout ${layout === 'right' ? 'reverse' : ''}`}>
			<div className="text-part">
				<h2 className='title'>Talent Creation</h2>
				<p className="description">
					Whether you're a freshly debuting VTuber or on your third version of your original character, I'm here to help you with persona development, branding, and channel consistency!
				</p>				
				<div className="notes">
					<div className="service-note">
						<p>This will be for getting your channel up to standards and presented in a professional manner!</p>
					</div>
				</div>
			</div>

			<div className="image-part">
				<Image src="/static/images/art/chibis/creation.png" alt='chibi'  width={300} height={300}/>
			</div>
		</div>
	</div>
  )
}

export default ServiceList