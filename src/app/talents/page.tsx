import HeaderTitle from "../components/general/HeaderTitleComponent/HeaderTitle"
import { getActiveTalents, getInactiveTalents } from "../db/sanityUtils"
import ActiveTalentPanel from "./activetalents/ActiveTalentPanel"
import PastTalentPanel from "./pastTalents/PastTalentPanel"
import './talentsPage.scss'
const TalentsPage = async() => {

	const activeTalents:any[] = await getActiveTalents();
	const inActiveTalents:any[] = await getInactiveTalents();
	return (
		<div>
			<div id="container_active-talents">
				<HeaderTitle
					title="Active Talents"
				>
					I currently work with a <u>diverse roster</u> of <b>VTuber Talents</b>, each with their own unique genre, target audience, and remarkable achievements. This ranges from engaging gaming content, mesmerizing music creation, High quality Art/Rigging and immersive virtual reality experiences.
				</HeaderTitle>
				<div className="active-talent-lists">
					{activeTalents.map(
						(talent:any,index:number)=>{
							return (
								<ActiveTalentPanel 
									key={talent._id}
									id={talent._id} 
									name={talent.name}
									description={talent.description_short} 
									image={talent.image}
									delay={index*700}
								/>
							)
						}
					)}
				</div>
			</div>

			<div id="container_past-talents">
				<HeaderTitle 
					title="Past Talents"
				>
					I respect the privacy and confidentiality of my talents. There is no sharing of sensitive information or violation of any non-disclosure agreements. Any information provided is approved by the talent for public view.  This section provides general information and positive experiences I've had working with them!
				</HeaderTitle>
				<div className="past-talent-lists">
					{inActiveTalents.map(
						(talent:any)=>{
							return ( 
								<PastTalentPanel 
									key={talent._id} 
									id={talent._id}
									name={talent.name}
									description={talent.description_short}
									image={talent.image}
								/>
							)
						}
					)}
				</div>
			</div>
		</div>
	)
}

export default TalentsPage