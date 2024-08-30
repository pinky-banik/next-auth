'use client'



import { useSession } from "next-auth/react";
import Image from "next/image";


const ProfileInfo = () => {
  const  {data} = useSession()



  return (
    <div className="flex flex-col items-center py-8 text-center">
      {/* <div className="relative max-h-[180px] max-w-[180px] rounded-full lg:mb-8 h-[100px] w-[100px] bg-orange-600 grid place-items-center text-4xl text-white">
        
      </div> */}
      <Image className="rounded-full " alt="" src={data?.user?.image} width={100} height={100}/>

      <div>
        <h3 className="text-2xl font-semibold lg:text-[28px]">{data?.user?.name}</h3>
        <p className="leading-[231%] lg:text-lg">{data?.user?.email}</p>
      </div>

      <div className="w-3/4 border-b border-[#a4a4a4] py-6 lg:py-4"></div>
    </div>
  );
};

export default ProfileInfo;
