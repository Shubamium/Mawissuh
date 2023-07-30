import ServiceList from "./list/ServiceList"
import ServicesNote from "./note/ServicesNote"

const DetailsPage = () => {
  return (
	<div id="container_detail-page">
		<ServiceList layout="left"  />
		<ServiceList  layout="right"/>
		<ServiceList layout="left"  />
		<ServiceList  layout="right"/>
		<ServiceList layout="left"  />
		<ServiceList  layout="right"/>

		<ServicesNote/>
	</div>
  )
}

export default DetailsPage