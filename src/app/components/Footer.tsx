import React from "react";

function Footer() {
  return (
    <div className="pt-30">
      <div className="flex w-[1440px] h-[360px] bg-slate-100 mx-auto">
      <div className="w-1/2">
        <h1 className=" w-[148px] mt-[80px] mx-[60px] text-[#3563E9] font-bold text-[32px] ">
          MORENT
        </h1>
        <p className="flex mx-[60px]">
          Our vision is to provide convenience <br /> and help increase your
          sales business.
        </p>
      </div>

      <div className=" w-1/2 flex justify-start  space-x-20 tracking-widest mt-[80px]">
        <ul className="space-y-6 ">
          <h1 className="font-bold text-2xl">About</h1>
          <li>How it works</li>
          <li>Featured</li>
          <li>Partnership</li>
          <li>Bussiness Relation</li>
        </ul>

        <ul className="space-y-6">
          <h1 className="font-bold text-2xl">Community</h1>
          <li>Events</li>
          <li>Blog</li>
          <li>Podcast</li>
          <li>Invite a friend</li>
        </ul>

        <ul className="space-y-6">
          <h1 className="font-bold text-2xl">Socials</h1>
          <li>Discord</li>
          <li>Instagram</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
      </div>
    </div>
    <div className=" w-[1440px] h-[120px] bg-slate-100 mx-auto">
      <ul className="flex mx-[60px] justify-between">

        <li>©2022 MORENT. All rights reserved</li>
        <li >Privacy & Policy</li>
        <li>Terms & Condition</li>
      </ul>
    </div>
    </div>
  );
}

export default Footer;
