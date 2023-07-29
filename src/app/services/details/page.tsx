import ServiceList from "./list/ServiceList"
import ServicesNote from "./note/ServicesNote"

const DetailsPage = () => {
  return (
	<div id="container_detail-page">
		<ServiceList />
		<ServiceList  layout="right"/>
		<ServiceList />
		<ServiceList  layout="right"/>
		<ServiceList />
		<ServiceList  layout="right"/>

		<ServicesNote/>
	</div>
  )
}

export default DetailsPage