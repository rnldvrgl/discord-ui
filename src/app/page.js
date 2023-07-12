import HorizontalDark from "@/components/HorizontalDark";
import { BsPlus } from 'react-icons/bs'
import { FriendsIcon, NitroIcon, MessageReqIcon } from "@/components/Icons";

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
          <div className="p-2 flex-grow">
            <CustomButton icon={<FriendsIcon />} text="Friends" />
            <CustomButton icon={<NitroIcon size={22} />} text="Nitro" />
            <CustomButton icon={<MessageReqIcon size={22} />} text="Message Requests" />
            <Category icon={<BsPlus size={22} />} text="Direct Messages" />
            <Contacts icon={<BsPlus size={22} />} name="Direct Messages" />
        </div>

      </div>
      <div className="flex-col w-[70%] h-full bg-[#313338]">
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
    <div className='flex w-full justify-between px-3 mt-3 uppercase items-center text-gray-400'>
      <span className="category-text">
        {text}
      </span>
      {icon}
    </div>
  )
}

const Contacts = ({icon, name}) => {
  return(
    <div className="px-4 flex justify-start items-center gap-4 wi-full text-white">
      {icon}
      {name}
    </div>
  )
}