import Image from "next/image"
import './servicesNote.scss'

const ServicesNote = () => {
  return (
	<div className="services-note">
		<div className="text-part">
			<p>Please remember that the specific services and support I offer <u>may vary depending on your needs</u> and goals as we discuss what you need. </p>
			<p>It’s <b>essential</b> we maintain open communication early on so that I may understand your vision and adapt my approach according to ensure your success!</p>
		</div>
		<div className="image-part">
			<div className="bg"></div>
			<Image src="/static/images/art/chibis/techsupportTransparent.png" width="300" height="300" alt="chibi"/>
		</div>
	</div>
  )
}

export default ServicesNote