import React from 'react'
import HeaderTitle from '../components/general/HeaderTitleComponent/HeaderTitle'
import { redirect } from 'next/navigation'

type Props = {}

const TalentPage = (props: Props) => {
  	redirect('/talents');
}

export default TalentPage