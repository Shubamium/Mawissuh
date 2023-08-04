import Image from 'next/image';
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
		
	</div>
  )
}

export default ExperimentalCustomPanel