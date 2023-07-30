import HeaderTitle from "../components/general/HeaderTitleComponent/HeaderTitle"
import ActiveTalentPanel from "./activetalents/ActiveTalentPanel"
import './talentsPage.scss'
const TalentsPage = () => {
  return (
	<div>
		<div id="container_active-talents">
			<HeaderTitle
				title="Active Talents"
			>
				I currently work with a <u>diverse roster</u> of <b>VTuber Talents</b>, each with their own unique genre, target audience, and remarkable achievements. This ranges from engaging gaming content, mesmerizing music creation, High quality Art/Rigging and immersive virtual reality experiences.
			</HeaderTitle>
			<div className="active-talent-lists">
				<ActiveTalentPanel/>
				<ActiveTalentPanel/>
				<ActiveTalentPanel/>
				<ActiveTalentPanel/>
				<ActiveTalentPanel/>
			</div>
		</div>

	</div>
  )
}

export default TalentsPage