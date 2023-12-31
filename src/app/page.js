import HorizontalDark from "@/components/HorizontalDark";
import { BsPlus } from 'react-icons/bs'
import { RxCross2 } from 'react-icons/rx'
import { FriendsIcon, NitroIcon, MessageReqIcon } from "@/components/Icons";
import Image from "next/image";
Image

export default function Home() {
  return (
    <div className="flex ps-[72px]">
      <div className="flex flex-col w-[240px] h-100 overflow-hidden bg-[#2B2D31]">
        <nav>
          <div className="relative z-[2] items-center flex flex-grow-0 flex-shrink-0 basis-0 py-0 px-3 h-[48px] shadow-sm shadow-gray-900">
            <button className="bg-gray-900 text-gray-400 text-xs w-full text-left p-2 w-100 h-[28px] rounded-[4px] text-ellipsis text-[14px]">
              Find or start a conversation
            </button>
          </div>
          <div className="relative min-h-0 flex-grow flex-shrink basis-auto box-border pt-3 overflow-x-hidden overflow-y-scroll">
            <ul className="relative m-0 p-0 list-none h-[1376px] max-h-[800px]">
              <li>
                <CustomButton icon={<FriendsIcon />} text="Friends" />
              </li>
              <li>
                <CustomButton icon={<NitroIcon size={22} />} text="Nitro" />
              </li>
              <li>
                <CustomButton icon={<MessageReqIcon size={22} />} text="Message Requests" />
              </li>
              <h2>
                <Category icon={<BsPlus size={22} />} text="Direct Messages" />
              </h2>
              <li>
                <Contacts image="artist.png" name="Mark Artist" />
              </li>
              <li>
                <Contacts image="coach.png" name="Mark Coach" />
              </li>
              <li>
                <Contacts image="cook.png" name="Mark Cook" />
              </li>
            </ul>
          </div>
        </nav>
        <section>
          <div className="flex ms-[-2px] min-w-[120px] ps-[2px] items-center">
            <ProfileCard image="cook.png" name="Mark Cook" />
          </div>
          <div>

          </div>
        </section>
      </div>
      <main className="w-100 overflow-hidden flex h-full bg-[#313338]">

      </main>
    </div>
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

const Contacts = ({ image, name }) => {
  const imagePath = `/assets/static/avatar/${image}`;
  return (
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
      <RxCross2 className="group-hover:scale-100 transition-all duration-100 scale-0" />
    </div>
  )
}

const ProfileCard = ({ image, name }) => {
  const avatarPath = `/assets/static/avatar/${image}`;
  return (
    <div className="fixed bottom-0 flex bg-lime-600 w-auto">
      <div className="bg-white rounded-full px-2 py-1 relative">
        <Image src={avatarPath} alt={name} width={25} height={25} />
        <div className="border-[3px] border-[#7B7E88] bg-[#323338] h-3 w-3  rounded-full absolute bottom-[-1px] right-0 z-10"></div>
        <div className="bg-[#323338] h-5 w-5 rounded-full absolute bottom-[-5px] right-[-4px] "></div>
      </div>
      <div className="flex flex-col gap-1">
        <span>
          asda
        </span>
        <span>
          Online
        </span>
      </div>
    </div>
  )
}