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
	return services as any;
}

export async function getExperimentalServices() {
	const services = await nextSanityClient.fetch({
		query:`
		*[_type == "experimental_services"] | order(_createdAt asc){
			_id,
			title,
			description
		}
		`,
		config
	})
	return services as any
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
	return experimental[0] as any
}

export async function getPricing(){
	const query = `
		*[_type == "general" && preset == "main"]{
			pricing
		}
	`
	const pricing:any[] = await nextSanityClient.fetch({
		query,config
	})
	return pricing[0] as any
}

export async function getCommissionStatus(){
	const query = `
		*[_type == "general" && preset == "main"]{
			text_commission
		}
	`
	const commStatus:any[] = await nextSanityClient.fetch({
		query,config
	})
	return commStatus[0] as any;
}

export async function getProfile(){
	const query =`
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
	`
	const profile:any[] = await nextSanityClient.fetch({
		query,config
	})
	return profile[0] as any
}

export async function getActiveTalents(){
	const query = `
		*[_type == "talents" && status == "active"]{
			_id,
			name,
			description_short,
			image
		}
	`
	const talents = await nextSanityClient.fetch({
		query,config
	})
	return talents as any;
}


export async function getInactiveTalents(){
	const query = `
		*[_type == "talents" && status == "inactive"]{
			_id,
			name,
			description_short,
			image
		}
	`
	const talents = await nextSanityClient.fetch({
		query,config
	})
	return talents as any;
}

export async function getTalent(id:string){
	const query = `
		*[_type == "talents" && _id == "${id}"]{
			name,
			description_full,
			tagline,
			managed_for,
			testimonials,
			traits,
			stats,
			custom_stats,
			custom_stat,
			achievements,
			status,
			contacts,
			image,
			video,
			color_schemes,
			color_scheme
		}
	`
	const talents: any[] = await nextSanityClient.fetch({
		query,config
	})
	return talents[0] as any;
}
export async function getTermsTalent(){
	const query = `
		*[_type == "terms_talent"]{
			_id,
			title,
			description,
			image
		}
	`
	const talents = await nextSanityClient.fetch({
		query,config
	})
	return talents as any;
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