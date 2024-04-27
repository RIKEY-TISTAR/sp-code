import React from 'react'
import { SidebarBooks } from '../SidebarBooks/SidebarBooks'

export const RightsideBar = () => {
  return (
    // <aside className=""></aside>
    <div className='w-full felx flex-col gap-8'>
        <SidebarBooks getBook={''}/>
    </div>
  )
}
