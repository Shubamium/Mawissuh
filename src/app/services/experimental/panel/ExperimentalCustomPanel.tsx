import './experimentalCustomPanel.scss'
import {PortableText} from '@portabletext/react'
type experimentalCustomPanelType = {
	title:string;
	text:any;
}
const ExperimentalCustomPanel = ({title,text}:experimentalCustomPanelType) => {
  return (
	<div className="experimental-custom-panel">
		<h2 className="title">{title || 'Experimental Service Title'}</h2>
		<PortableText
			value={text}
		/>
		{/* <p className="detail">{text || 'Write the detail of this experimental section here!'}</p> */}
	</div>
  )
}

export default ExperimentalCustomPanel