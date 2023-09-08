'use client'
import React, { Dispatch, createContext, useState } from 'react'


type sidebarContextProps = {
	children:React.ReactNode;
}

export const SidebarCollapseContext = createContext<{
	state:boolean,
	setState: Dispatch<React.SetStateAction<boolean>>
}>({state:false,setState:()=>{}});

const SidebarContextProvider = ({children} : sidebarContextProps) => {
	const sidebarCollapse = useState(false)
	return (
		<SidebarCollapseContext.Provider value={{state:sidebarCollapse[0],setState:sidebarCollapse[1]}}>
			{children}
		</SidebarCollapseContext.Provider>
	)
}


export default SidebarContextProvider