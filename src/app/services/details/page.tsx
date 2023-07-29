import ServiceList from "./list/ServiceList"

const DetailsPage = () => {
  return (
	<div id="container_detail-page">
		<ServiceList />
		<ServiceList  layout="right"/>
		<ServiceList />
		<ServiceList  layout="right"/>
		<ServiceList />
		<ServiceList  layout="right"/>
	</div>
  )
}

export default DetailsPage