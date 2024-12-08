import React from "react";
import { IoSearch } from "react-icons/io5";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { FaRegHeart } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";

function Navbar() {
  return (
    <div className="bg-slate-50 w-[1440px] h-[124px] border-[1px] mx-auto flex">
      <div className=" w-[148px] mt-[40px] mx-[60px] text-[#3563E9] font-bold text-[32px] ">
        MORENT
      </div>
      {/* Search div */}
      <div className=" flex h-[44px] mt-[40px] mr-[212px] border-[1px] bg-white justify-items-start items-center text-black rounded-full w-[492px]">
      <FaSearch className="text-3xl"/>
        <input
          className=" flex text-start border-none text-[14px]"
          type="text"
          placeholder="Search something here"
        />
       <HiOutlineAdjustmentsHorizontal className="text-3xl ml-4" />
      </div>

      {/* Right side */}

      <div className="flex justify-end bg-white w-[236px] h-[44px] mt-[40px] ml-[160px] gap-[20px] ">
      <FaRegHeart className="text-4xl"/>
      <IoNotifications className="text-4xl"/>
      <CiSettings className="text-4xl"/>

      <Image

                src={"/dp.png"}
                alt="car1"
                width={50}
                height={50}
              />
      
      </div>
    </div>
  );
}

export default Navbar;
