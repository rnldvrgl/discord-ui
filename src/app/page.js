import HorizontalDark from "@/components/HorizontalDark";
import { BsPeopleFill, BsFillEnvelopeFill, BsPlus } from 'react-icons/bs'
import { BiLogoBlender } from 'react-icons/bi'

export default function Home() {
  return (
    <section className="flex items-start h-full w-full ps-[4rem]">
      <div className="flex-col w-[30%]">
        <div className="p-2 bg-[#2B2D31]">
          <button className="bg-gray-900 text-gray-400 text-xs w-full text-left rounded-sm p-2">
            Find or start a conversation
          </button>
        </div>
        <HorizontalDark />
        <div className="p-2 h-full bg-[#2B2D31]">
          <CustomButton icon={<BsPeopleFill size={22} />} text="Friends" />
          <CustomButton icon={<BiLogoBlender size={22} />} text="Nitro" />
          <CustomButton icon={<BsFillEnvelopeFill size={22} />} text="Message Requests" />
          <Category icon={<BsPlus size={22} />} text="Direct Messages" />
        </div>
      </div>
      <div className="flex-col w-[70%] h-screen bg-[#313338]">

      </div>
    </section>
  )
}

const CustomButton = ({ icon, text }) => {
  return (
    <button className='custom-button'>
      {icon}
      <span className="text-sm">
        {text}
      </span>
    </button>
  )
}

const Category = ({ icon, text }) => {
  return (
    <div className='flex w-full justify-between px-3 mt-3 uppercase items-center text-gray-400'>
      <span className="category-text">
        {text}
      </span>
      {icon}
    </div>
  )
}