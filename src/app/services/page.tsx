import { redirect } from 'next/navigation'
import { RedirectType } from 'next/dist/client/components/redirect'


const ServicePage = () => {
	redirect('/services/pricing',RedirectType.replace)
}

export default ServicePage