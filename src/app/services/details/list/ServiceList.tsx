
import Image from 'next/image';
import './serviceList.scss'
import { getImageUrlFromRef } from '@/app/db/sanityUtils';
import { PortableText } from '@portabletext/react';
import urlSlug from 'url-slug'
type serviceListProp = {
	layout?: 'left' | 'right';
	title:string;
	image: string;
	paragraph: any;
	notes:{
		note:string,
		bgColor:{
			hex:string
		}
	}[],
}
const ServiceList = ({layout,title,paragraph,image,notes} : serviceListProp) => {
  return (
	<div className='service-list-container' id={urlSlug(title)}>
		<div className={`container-clamp service-layout ${layout === 'right' ? 'reverse' : ''}`}>
			<div className="text-part">
				<h2 className='title'>{title ?? 'Talent Creation'}</h2>
				<div className="description">
					<PortableText
						value={paragraph}
					/>
				</div>				
				<div className="notes">
					{notes?.map((note,index)=>{
						return <div className='service-note' key={`service-notes-${index}`} style={{backgroundColor:note.bgColor.hex}}>
							<p>{note.note}</p>
						</div>
					})}
				</div>
			</div>

			<div className="image-part">
				<Image src={getImageUrlFromRef(image).url()} alt='chibi'  width={300} height={300}/>
			</div>
		</div>
	</div>
  )
}

export default ServiceList