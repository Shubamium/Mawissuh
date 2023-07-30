import { BsSuitDiamondFill, BsSuitDiamond } from 'react-icons/bs'
import './diamondStats.scss'
type Props = {
	star:number
	range:number 
}

const DiamondStats = ({star,range}: Props) => {
	
	const stars:React.ReactNode[] = []
	for(let i = 1; i <= range; i++){
		stars.push(i <= star ? <span className='filled'><BsSuitDiamondFill/></span> : <span className='empty'><BsSuitDiamond/></span>)
	}	
	
	return (
		<div className='stat-rating'>
			{stars}
		</div>
	)
}


export default DiamondStats