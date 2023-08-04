import Image from "next/image"
import './experimental.scss'
import ExperimentalCustomPanel from "./panel/ExperimentalCustomPanel"
import { PortableText } from '@portabletext/react'
import { getExperimentalServices, getExperimentalText } from "@/app/db/sanityUtils"

const dynamic = 'force-dynamic'
const Experimental = async() => {
	const experimental = await getExperimentalText();
	const services = await getExperimentalServices();
	return (
		<div id="container_experimental">
			<div className="experimental-title-panel">
				<div className="header">
					<h2>Experimental</h2>
					<hr />
					<Image src="/static/images/art/icons/badge/badge_standard.png" alt="" width="50" height="50"/>
				</div>
				<div className="text-part">
					<PortableText
						value={experimental.text_experimental}
					/>
				</div>
				<div className="decor_gear">
					<Image className="gear_l" src={"/static/images/art/decor/gear.png"} width={250} height={250} alt=""/>
					<Image className="gear_r" src={"/static/images/art/decor/gear.png"} width={250} height={250} alt=""/>
				</div>
			</div>

			<div className="experimental-panels">
				{services && services.map(
					(service:any,index:number)=>{
						return (
							<ExperimentalCustomPanel
								key={'exp-serv' + index}
								title={service.title}
								text={service.description}
							/>
						)
					}
				)}
			
			</div>
		</div>
	)
}

export default Experimental