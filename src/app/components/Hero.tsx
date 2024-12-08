import React from "react";
import car1 from "../../../public/car1.png";
import car2 from "../../../public/car2.png";
import Pick from "../../../public/Pick.png";
import Drop from "../../../public/Drop.png";
import Switch from "../../../public/Switch.png";
import Image from "next/image";

function Hero() {
  return (
    <div className="flex justify-around w-[1440px] h-[360px] bg-slate-50 mx-auto mb-300">
      <div className="w-[640px] h-[360px] bg-blue-300 mt-[32px] ml-[64px text-white flex flex-col pt-[24px] pl-[24px]">
        <div className="w-[284px] h-[224px]">
          <h1 className="text-[32px] pb-4">The Best Platform for Car Rental</h1>
          <p>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="w-[120px] h-[44px] bg-blue-600 gap-[8px] rounded-sm text-center mt-6">
            RentalCar
          </button>
        </div>
        <div className="flex justify-center pb-6">
        <Image
                className="pb-10 "
                src={"/car1.png"}
                alt="pick-Up"
                width={400}
                height={400}
              />
        </div>
        <div className="flex justify-center pb-6">
          {" "}
          
        </div>
      </div>


      <div className="w-[640px] h-[360px] bg-blue-600 mt-[32px] ml-[64px text-white flex flex-col pt-[24px] pl-[24px]">
        <div className="w-[284px] h-[224px]">
          <h1 className="text-[32px] pb-4">The Best Platform for Car Rental</h1>
          <p>
            Ease of doing a car rental safely and reliably. Of course at a low
            price.
          </p>
          <button className="w-[120px] h-[44px] bg-blue-300 gap-[8px] rounded-sm text-center mt-6 mb-10">
            RentalCar
          </button>
        </div>
        <div>
        <div className="flex justify-center pb-6">
        
        <Image
                className="pb-10 "
                src={"/car2.png"}
                alt="pick-Up"
                width={350}
                height={350}
              />
        </div>
        <div>
          {" "}
      
        </div>
        </div>
      </div>
      
    </div>
  );
}

export default Hero;
