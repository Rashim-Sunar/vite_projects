import React from 'react'
import { FaBars, FaSearch, FaBell, FaUserCircle } from 'react-icons/fa'

function Navbar(props) {
    const {toggleSidebar,SetToggleSidebar}=props;
    return (
        <nav className={`flex justify-between ${toggleSidebar?"ml-64":""} bg-gray-800 px-4 py-3 `}>
            <div className='flex items-center text-xl'>
                <FaBars className='text-white me-4 cursor-pointer' onClick={()=>{SetToggleSidebar(!toggleSidebar)}}></FaBars>
                <span className='text-white font-semibold'>E-commerce</span>
            </div>

            <div className='flex items-center gap-x-5'>
                <div className="relative md:w-64">
                    <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
                        <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch /></button>
                    </span>
                    <input type="text" className='w-full px-4 py-1 pl-12 shadow outline-none rounded hidden md:block' />
                </div>

                <div className="text-white">
                    <FaBell className='w-6 h-6'></FaBell>
                </div>

                <div className="relative">
                    <button className='text-white group' >
                        <FaUserCircle className='w-6 h-6 mt-1' />
                        <div className="z-10 hidden bg-white absolute rounded-lg shadow w-32  top-full right-0 group-focus:block">
                            <ul className='text-gray-950 text-sm py-3 h'>
                                <li><a href='#'>Profile</a></li>
                                <li><a href='#'>Setting</a></li>
                                <li><a href='#'>Logout</a></li>
                            </ul>
                        </div>
                    </button>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
