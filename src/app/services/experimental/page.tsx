import Image from "next/image"
import './experimental.scss'
import ExperimentalCustomPanel from "./panel/ExperimentalCustomPanel"
const Experimental = () => {
  return (
	<div id="container_experimental">
		<div className="experimental-title-panel">
			<div className="header">
				<h2>Experimental</h2>
				<hr />
				<Image src="/static/images/art/icons/badge/badge_standard.png" alt="" width="50" height="50"/>
			</div>
			<div className="text-part">
				<p>
					Write something about this being the experimental sections,
				</p>
			</div>
		</div>

		<div className="experimental-panels">
			<ExperimentalCustomPanel title="Experimental Service" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tenetur deserunt enim dicta animi rem architecto libero, dolorem totam, alias odio consequatur eaque, in molestiae est sapiente recusandae doloremque quae."/>
			<ExperimentalCustomPanel title="Experimental Service" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tenetur deserunt enim dicta animi rem architecto libero, dolorem totam, alias odio consequatur eaque, in molestiae est sapiente recusandae doloremque quae."/>
			<ExperimentalCustomPanel title="Experimental Service" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab tenetur deserunt enim dicta animi rem architecto libero, dolorem totam, alias odio consequatur eaque, in molestiae est sapiente recusandae doloremque quae."/>
		</div>
	</div>
  )
}

export default Experimental