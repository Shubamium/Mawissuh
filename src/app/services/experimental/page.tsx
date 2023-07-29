import Image from "next/image"
import './experimental.scss'
import ExperimentalCustomPanel from "./panel/experimentalCustomPanel"
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
			<ExperimentalCustomPanel title="Artist Management" text="II willI willI willI willI willI willI will will"/> 
			<ExperimentalCustomPanel title="Title Here" text="II willI willI willI willI willI willI will will"/> 
			<ExperimentalCustomPanel title="Artist Management" text="II willI willI willI willI willI willI will will"/> 
		</div>
	</div>
  )
}

export default Experimental