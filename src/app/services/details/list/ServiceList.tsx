
import Image from 'next/image';
import './serviceList.scss'
import { getImageUrlFromRef } from '@/app/db/sanityUtils';
import { PortableText } from '@portabletext/react';

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
	<div className='service-list-container'>
		<div className={`container-clamp service-layout ${layout === 'right' ? 'reverse' : ''}`}>
			<div className="text-part">
				<h2 className='title'>{title ?? 'Talent Creation'}</h2>
				<div className="description">
					<PortableText
						value={paragraph}
					/>
				</div>				
				<div className="notes">
					{/* <div className="service-note">
						<p>This will be for getting your channel up to standards and presented in a professional manner!</p>
					</div> */}
					{notes.map((note,index)=>{
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