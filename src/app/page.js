import HorizontalDark from "@/components/HorizontalDark";
import { BsPlus} from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { FriendsIcon, NitroIcon, MessageReqIcon } from "@/components/Icons";
import Image from "next/image";
Image

export default function Home() {
  return (
    <section className="flex items-start h-screen w-full ps-[4rem]">
      <div className="flex-col w-[30%]  bg-[#2B2D31] h-full">
          <div className="p-2">
            <button className="bg-gray-900 text-gray-400 text-xs w-full text-left rounded-sm p-2">
              Find or start a conversation
            </button>
          </div>
          <HorizontalDark />
          <div className="p-2 flex flex-col flex-grow">
            <CustomButton icon={<FriendsIcon />} text="Friends" />
            <CustomButton icon={<NitroIcon size={22} />} text="Nitro" />
            <CustomButton icon={<MessageReqIcon size={22} />} text="Message Requests" />
          <Category icon={<BsPlus size={22} />} text="Direct Messages" />
<div className="flex flex-col gap-1">
            <Contacts image="artist.png" name="Mark Artist" />
            <Contacts image="coach.png" name="Mark Coach" />
            <Contacts image="cook.png" name="Mark Cook" />
</div>
        </div>

      </div>
      <div className="flex-colborder w-[70%] h-full bg-[#313338]">
        {/* Rest of the content */}
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
    <div className='flex w-full justify-between px-3 mt-3 uppercase items-center text-gray-400 mb-3'>
      <span className="category-text">
        {text}
      </span>
      {icon}
    </div>
  )
}

const Contacts = ({ image, name}) => {
  const imagePath = `/assets/static/avatar/${image}`;
  return(
    <div className="px-2 flex justify-between items-center gap-3 w-full text-white group transition-all duration-200 ease-linear cursor-pointer hover:text-gray-400 hover:bg-[#35373C] py-2 rounded-lg">
      <div className="flex justify-center items-center gap-3">
        <div className="bg-white rounded-full px-2 py-1 relative">
          <Image src={imagePath} alt={name} width={25} height={25} />
          <div className="border-[3px] border-[#7B7E88] bg-[#323338] h-3 w-3  rounded-full absolute bottom-[-1px] right-0 z-10"></div>
          <div className="bg-[#323338] h-5 w-5 rounded-full absolute bottom-[-5px] right-[-4px] "></div>
        </div>
        <span className="text-sm">
          {name}
        </span>
      </div>
      <RxCross2 className="group-hover:scale-100 transition-all duration-100 scale-0"/>
    </div>
  )
}