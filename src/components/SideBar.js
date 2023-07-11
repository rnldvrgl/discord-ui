import React from 'react'
import { BsPlus, BsCompassFill, BsDiscord } from 'react-icons/bs'
import { FaFire, FaPoo} from 'react-icons/fa'


const SideBar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow'>
            <SideBarIcon icon={<BsDiscord size={28} />} text='Direct Messages' />
            <SideBarIcon icon={<BsPlus size={32} />} text='Add a Server' />
            <SideBarIcon icon={<BsCompassFill size={24} />} text='Explore Discoverable Servers' />
        </div>
    )
}

const SideBarIcon = ({icon, text}) => {
    return (
        <div className='sidebar-icon group'>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </div>
    )
}

export default SideBar