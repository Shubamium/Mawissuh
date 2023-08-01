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

export async function getExperimentalText(){
	const experimental = await sanityClient.fetch(`
		*[_type == "general" && preset == "main"]{
			text_experimental
		}
	`)
	return experimental[0]
}

export async function getPricing(){
	const experimental = await sanityClient.fetch(`
		*[_type == "general" && preset == "main"]{
			pricing
		}
	`)
	return experimental[0]
}

export async function getCommissionStatus(){
	const experimental = await sanityClient.fetch(`
		*[_type == "general" && preset == "main"]{
			text_commission
		}
	`)
	return experimental[0]
}


export async function getActiveTalents(){
	const talents = sanityClient.fetch(`
		*[_type == "talents" && status == "active"]{
			_id,
			name,
			description_short,
			image
		}
	`)
	return talents;
}


export async function getInactiveTalents(){
	const talents = sanityClient.fetch(`
		*[_type == "talents" && status == "inactive"]{
			_id,
			name,
			description_short,
			image
		}
	`)
	return talents;
}

const builder = imageUrlBuilder(sanityClient);
export function getImageUrlFromRef(ref:string){
	return builder.image(ref)
}