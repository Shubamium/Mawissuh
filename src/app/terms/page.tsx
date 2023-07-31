import HeaderTitle from "../components/general/HeaderTitleComponent/HeaderTitle"
import PaymentGuideline from "./payment/PaymentGuideline"
import ServiceGuideline from "./service/serviceGuideline"
import TalentAcknowledgement from "./talent/TalentAcknowledgement"
import TermsTitle from "./title/TermsTitle"

type Props = {}

const Terms = (props: Props) => {
  return (
	<div id="container_terms-page">
		<HeaderTitle title="Terms of Services">
				Please read these Terms and Conditions carefully before engaging with my management services! 
		</HeaderTitle>
		<TermsTitle/>
		<ServiceGuideline/>
		<TalentAcknowledgement/>
		<PaymentGuideline/>
	</div>
  )
}

export default Terms