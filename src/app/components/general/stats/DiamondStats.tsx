import { BsSuitDiamondFill, BsSuitDiamond } from 'react-icons/bs'
import './diamondStats.scss'
type Props = {
	star:number
	range:number 
	color?:string
}

const DiamondStats = ({star,range,color}: Props) => {
	
	const stars:React.ReactNode[] = []
	for(let i = 1; i <= range; i++){
		stars.push(i <= star ? <span className='filled' key={'diamond-fills-'+ i}><BsSuitDiamondFill/></span> : <span className='empty' key={'diamond-fills-'+ i}><BsSuitDiamond/></span>)
	}	
	
	return (
		<div className='stat-rating' style={{color:color || ''}} >
			{stars}
		</div>
	)
}


export default DiamondStats