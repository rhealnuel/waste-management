import React from 'react'
import Sidebar from './Sidebar'
import Tables from './Tables'

const Dashboardpage = () => {
  return (
    <div className='w-[100vw] flex gap-6 h-[fit] overflow-x-hidden'>

        <Sidebar/>
        <Tables/>
    </div>
  )
}

export default Dashboardpage