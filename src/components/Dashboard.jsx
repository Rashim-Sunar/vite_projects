import React from 'react'
import Navbar from './Navbar'

function Dashboard(props) {
    const {toggleSidebar,SetToggleSidebar}=props;
  return (
    <div className="w-full">
       <Navbar toggleSidebar={toggleSidebar} SetToggleSidebar={SetToggleSidebar}/>
    </div>
  )
}

export default Dashboard
