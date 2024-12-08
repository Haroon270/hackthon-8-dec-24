import React from "react";
import { IoSearch } from "react-icons/io5";
import { TbAdjustmentsHorizontal } from "react-icons/tb";
import adjustment from "../../../public/filter.png";
import search from "../../../public/search.png";
import heart from "../../../public/heart.png";
import notification from "../../../public/notification.png";
import setting from "../../../public/setting.png";
import dp from "../../../public/dp.png";

function Navbar() {
  return (
    <div className="bg-slate-50 w-[1440px] h-[124px] border-[1px] mx-auto flex">
      <div className=" w-[148px] mt-[40px] mx-[60px] text-[#3563E9] font-bold text-[32px] ">
        MORENT
      </div>
      {/* Search div */}
      <div className=" flex h-[44px] mt-[40px] mr-[212px] border-[1px] bg-white justify-items-start items-center text-black rounded-full w-[492px]">
        <img className="px-6" src="/search.png" alt="Search" />
        <input
          className=" flex text-start border-none text-[14px]"
          type="text"
          placeholder="Search something here"
        />
        <img className=" px-44 " src="/filter.png" alt="setting" />
      </div>

      {/* Right side */}

      <div className="flex justify-end bg-white w-[236px] h-[44px] mt-[40px] ml-[160px] gap-[20px] ">
        <img src="/heart.png" alt="heart" />
        <img src="/notification.png" alt="notification" />
        <img src="/setting.png" alt="setting" />
        <img src="/dp.png" alt="Dp" />
      </div>
    </div>
  );
}

export default Navbar;
