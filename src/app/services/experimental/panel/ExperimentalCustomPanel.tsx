import './experimentalCustomPanel.scss'

type experimentalCustomPanelType = {
	title:string;
	text:string;
}
const ExperimentalCustomPanel = ({title,text}:experimentalCustomPanelType) => {
  return (
	<div className="experimental-custom-panel">
		<h2 className="title">{title || 'Experimental Service Title'}</h2>
		<p className="detail">{text || 'Write the detail of this experimental section here!'}</p>
	</div>
  )
}

export default ExperimentalCustomPanel