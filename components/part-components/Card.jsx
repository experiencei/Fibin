import Image from "next/image";

export default function Card({title, discount, icon}) {
  return (
    <div className=" flex flex-col justify-center place-items-center w-1/2 p-5 rounded-lg shadow-3xl">
        <div className="w-full flex justify-between">
            <div className="flex flex-col py-3">
                <h3 className="font-medium text-md">{title}</h3>
                <p className="p mt-2 text-sm text-center text-[#ffd900bb] backdrop-blur-xl bg-white/30 rounded capitalize">
                    {discount}
                </p>
            </div>
            <Image src={icon} alt={title} width={50} height={50}/>
        </div>
    </div>
  )
}
