import React from 'react'
import { FaHome,FaRegFileAlt,FaPoll, FaRegEnvelope,FaCog } from 'react-icons/fa'

function Sidebar(props) {
    return (
        <div className={`bg-gray-800 ${props.toggleSidebar?"w-64":"hidden"} h-full fixed py-2 px-4`}>
            <div className='my-2 mb-4'>
                <h1 className='text-2xl text-white font-bold'>Admin Dashboard</h1>
            </div>
            <hr />
            <ul className='text-white font-bold mt-3'>
                <li className='py-2 mb-2 hover:shadow hover:bg-blue-500 '>
                    <a href='#' className='px-3'>
                        <FaHome className="inline-block mr-2 -mt-2 w-6 h-6"></FaHome>
                        Home
                    </a>
                </li>

                <li className='py-2 mb-2 hover:shadow hover:bg-blue-500 '>
                    <a href='#' className='px-3'>
                        <FaRegFileAlt className="inline-block mr-2 -mt-2 w-6 h-6"></FaRegFileAlt>
                        Blog
                    </a>
                </li>

                <li className='py-2 mb-2 hover:shadow hover:bg-blue-500 '>
                    <a href='#' className='px-3'>
                        <FaPoll className="inline-block mr-2 -mt-2 w-6 h-6"></FaPoll>
                        Reports
                    </a>
                </li>

                <li className='py-2 mb-2 hover:shadow hover:bg-blue-500 '>
                    <a href='#' className='px-3'>
                        <FaRegEnvelope className="inline-block mr-2 -mt-2 w-6 h-6"></FaRegEnvelope>
                        Inbox
                    </a>
                </li>

                <li className='py-2 mb-2 hover:shadow hover:bg-blue-500 '>
                    <a href='#' className='px-3'>
                        <FaCog className="inline-block mr-2 -mt-2 w-6 h-6"></FaCog>
                        Setting
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
