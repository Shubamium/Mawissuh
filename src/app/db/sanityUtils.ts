import SanityClient from "next-sanity-client";
import {createClient} from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const nextSanityClient = new SanityClient({
	projectId:'6kn1yqrj',
	dataset:'local',
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion:'2023-05-03'
})

export const sanityClient = createClient({
	projectId:'6kn1yqrj',
	dataset:'local',
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion:'2023-05-03'
})


const config = {
	next: { revalidate: 5 }
}
export async function getServices() {
	const services = await nextSanityClient.fetch({
		query:`
			*[_type == "services"] | order(_createdAt desc){
				_id,
				title,
				notes,
				paragraph,
				image
			}
		`,
		config
	} 
	)
	
	return services
}
export async function getExperimentalServices() {
	const services:any[] = await nextSanityClient.fetch({
		query:`
		*[_type == "experimental_services"] | order(_createdAt asc){
			_id,
			title,
			description
		}
		`,
		config
	})
	services.forEach((element:{description:string}) => {
		console.log(element.description);
	});
	return services
}

export async function getExperimentalText(){
	const experimental:any[] = await nextSanityClient.fetch({
		query:`
			*[_type == "general" && preset == "main"]{
				text_experimental
			}
		`,
		config
	})
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

export async function getProfile(){
	const profile = await sanityClient.fetch(`
		*[_type == "profile" && preset == "main"]{
			name,
			bio,
			tagline,
			stats,
			achievements,
			achievement_unlocked,
			profile_pic,
			classifications,
			skills
		}
	`)
	console.log(profile);
	return profile[0]
}

export async function getActiveTalents(){
	const talents = await sanityClient.fetch(`
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
	const talents = await sanityClient.fetch(`
		*[_type == "talents" && status == "inactive"]{
			_id,
			name,
			description_short,
			image
		}
	`)
	return talents;
}
export async function getTalent(id:string){
	const talents = await sanityClient.fetch(`
		*[_type == "talents" && _id == "${id}"]{
			name,
			description_full,
			tagline,
			managed_for,
			testimonials,
			traits,
			stats,
			achievements,
			status,
			image
		}
	`)
	return talents[0];
}

const builder = imageUrlBuilder(sanityClient);
export function getImageUrlFromRef(ref:string){
	return builder.image(ref)
}

export function toUpperCase(str:string){
	const all = str.split('');
	all[0] = all[0].toUpperCase();
	return all.join('')
}