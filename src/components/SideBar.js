import React from 'react'
import { BsPlus, BsCompassFill, BsDiscord, BsDownload } from 'react-icons/bs'


const SideBar = () => {
    return (
        <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col align-middle items-center gap-2 bg-gray-900 text-white shadow py-2'>
            <SideBarLogo icon={<BsDiscord size={28} />} text='Direct Messages' />
            <hr className='w-[50%] mx-auto bg-gray-800 text-gray-800 h-[2px] border-0 rounder-sm'/>
            <SideBarIcon icon={<BsPlus size={32} />} text='Add a Server' />
            <SideBarIcon icon={<BsCompassFill size={22} />} text='Explore Discoverable Servers' />
            <hr className='w-[50%] mx-auto bg-gray-800 text-gray-800 h-[2px] border-0 rounder-sm' />
            <SideBarIcon icon={<BsDownload size={20} />} text='Download Apps' />
        </div>
    )
}

const SideBarLogo = ({ icon, text }) => {
    return (
        <div className='sidebar-logo group'>
            {icon}
            <span className='sidebar-tooltip group-hover:scale-100'>
                {text}
            </span>
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