import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { useState } from 'react'

function App() {
  const [toggleSidebar,SetToggleSidebar] = useState(false);
  return (
    <div className='flex'>
      <Dashboard toggleSidebar={toggleSidebar} SetToggleSidebar={SetToggleSidebar}/>
      <Sidebar toggleSidebar={toggleSidebar} />
      
    </div>
  )
}

export default App
