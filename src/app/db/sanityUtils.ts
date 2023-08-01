import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
	projectId:'6kn1yqrj',
	dataset:'local',
	useCdn:true,
	apiVersion:'2023-05-03'
})


export async function getServices() {
	const services = await sanityClient.fetch(`
		*[_type == "services"] | order(_createdAt desc){
			_id,
			title,
			notes,
			paragraph,
			image
		}
	`)
	
	return services
}


const builder = imageUrlBuilder(sanityClient);
export function getImageUrlFromRef(ref:string){
	return builder.image(ref)
}