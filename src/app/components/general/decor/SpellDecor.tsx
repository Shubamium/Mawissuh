'use client'

import {useContext} from 'react'
import { SidebarCollapseContext } from "@/app/context/SidebarContext"
import Image from 'next/image'

const SpellDecor = () => {
	const sidebarContext = useContext(SidebarCollapseContext)
	return (
			<div className={`decor_spell ${sidebarContext.state ? '' : 'hidden'} `}>
				<video autoPlay loop src="/static/images/decor/magic_circle_animated.mp4" className='top-spell_l' width={300} height={300}/>
				<video autoPlay loop src="/static/images/decor/magic_circle_animated.mp4"  className='top-spell_r' width={300} height={300}/>
				{/* <img src="/static/images/decor/magic_circle_animated.gif" alt="" className='top-spell_r' width={300} height={300}/> */}
			</div>
	)
}

export default SpellDecor