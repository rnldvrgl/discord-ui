import HorizontalDark from "@/components/HorizontalDark";

export default function Home() {
  return (
    <section className="flex items-start h-full w-full ps-[4rem]">
      <div className="flex-col w-[25%]">
        <div className="p-2 bg-[#2B2D31]">
          <button className="bg-gray-900 text-gray-400 text-xs w-full text-left rounded-sm p-2">
            Find or start a conversation
          </button>
        </div>
        <HorizontalDark />
        <div className="p-2 h-full bg-[#2B2D31]">
          
        </div>
      </div>
      <div className="flex-col w-[75%] h-screen bg-[#313338]">

      </div>
    </section>
  )
}
