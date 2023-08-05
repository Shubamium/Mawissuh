import Image from "next/image"
import './servicesNote.scss'

const ServicesNote = () => {
  return (
	<div className="services-note">
		<div className="text-part">
			<p>Please remember that the specific services and support I offer <u>may vary depending on your needs</u> and goals as we discuss what you need. </p>
			<p>It’s <b>essential</b> we maintain open communication early on so that I may understand your vision and adapt my approach according to ensure your success!</p>
			<svg className="decor_dialogue" xmlns="http://www.w3.org/2000/svg" width="91" height="60" viewBox="0 0 91 60" fill="none">
				<path d="M90.0531 47.2623C71.2628 54.185 28.6734 10.377 26.1245 4.39762L0.132812 0.801758C6.30373 12.3031 21.882 38.818 34.8278 52.8667C47.7735 66.9155 77.0387 54.9841 90.0531 47.2623Z" fill="#DDCFC9"/>
			</svg>
		
		</div>
		<div className="image-part">
			<div className="bg"></div>
			<Image src="/static/images/art/chibis/techsupportTransparent.png" width="300" height="300" alt="chibi"/>
		</div>
	</div>
  )
}

export default ServicesNote