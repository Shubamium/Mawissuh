import Image from "next/image"
import './experimental.scss'
import ExperimentalCustomPanel from "./panel/ExperimentalCustomPanel"
import { PortableText } from '@portabletext/react'
import { getExperimentalServices, getExperimentalText } from "@/app/db/sanityUtils"

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
				{/* <ExperimentalCustomPanel title="Experimental Service" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tenetur deserunt enim dicta animi rem architecto libero, dolorem totam, alias odio consequatur eaque, in molestiae est sapiente recusandae doloremque quae."/>
				<ExperimentalCustomPanel title="Experimental Service" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tenetur deserunt enim dicta animi rem architecto libero, dolorem totam, alias odio consequatur eaque, in molestiae est sapiente recusandae doloremque quae."/>
				<ExperimentalCustomPanel title="Experimental Service" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tenetur deserunt enim dicta animi rem architecto libero, dolorem totam, alias odio consequatur eaque, in molestiae est sapiente recusandae doloremque quae."/> */}
			</div>
		</div>
	)
}

export default Experimental