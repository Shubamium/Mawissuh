import { getServices } from "@/app/db/sanityUtils"
import ServiceList from "./list/ServiceList"
import ServicesNote from "./note/ServicesNote"



const DetailsPage = async() => {
	const servicesList = await getServices();
	return (
		<div id="container_detail-page">
			{servicesList.reverse().map(
				(service:any, index:number) => 
					<ServiceList 
						key={`serices-list-${service._id}`} 
						title={service.title}
						image={service.image} 
						paragraph={service.paragraph} 
						layout={index % 2 == 1 ? 'left' : 'right'}  
						notes={service.notes}
					/>
				)
			}
			<ServicesNote/>
		</div>
	)
}

export default DetailsPage