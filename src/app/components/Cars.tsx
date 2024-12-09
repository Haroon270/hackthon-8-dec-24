import React from "react";
import Image from "next/image";
import car1 from "../../../public/car1.png";
import car2 from "../../../public/car2.png";
import car3 from "../../../public/car3.png";
import heart from "../../../public/heart.png";
import Redheart from "../../../public/Redheart.png";
import Spesification from "../../../public/Spesification.png";
import Button from "../Rent/page";
import { FaRegHeart } from "react-icons/fa6";

function Cars() {
  const cardata = [
    {
      carName: "Koenigsegg",
      model: "Sport",
      rate: "$99.00/day",
      carPicture: car1,
      Heart: heart,
    },
    {
      carName: "Nissan GT-R",
      model: "Sport",
      rate: "$80.00/ day",
      carPicture: car2,
      Heart: Redheart,
    },
    {
      carName: "Rolls-Royce",
      model: "Sport",
      rate: "$99.00/day",
      carPicture: car1,
      Heart: heart,
    },
    {
      carName: "Nissan GT-R",
      model: "Sport",
      rate: "$80.00/ day",
      carPicture: car3,
      Heart: Redheart,
    },
  ];
  return (
    <div className="bg-slate-100 flex gap-4 flex-wrap justify-center mt-44 w-[1440px] mx-auto">
      {cardata.map((veh) => {
        return (
          
          <div key={veh.carName}>
            
            <div className="flex flex-col bg-white h-[388px] w-[304px] border-2 my-1  pt-800 ">
              <h1 className=" flex text-[20px] text-black justify-start cursor-pointer w-[156px] h-[48px] mt-3 px-4">
                {" "}
                {veh.carName}
              </h1>
              <h4 className="text-[14px] -my-6 px-4">{veh.model}</h4>

              <FaRegHeart className="ml-64" />
              <Image
                className="pt-20  "
                src={veh.carPicture}
                alt="car1"
                width={500}
                height={500}
              />
              <Image
                className="w-[256px] h-[24px]  ml-4 mt-6"
                src={"/Spesification.png"}
                alt="Spec"
                width={200}
                height={200}
              />
              <h4 className="font-semibold mx-6 justify-between my-10 flex">
                {" "}
                {veh.rate} <Button />
              </h4>
              {/* <button className='bg-blue-700 h-[44px] w-[116px] text-white rounded-sm  '>RentNow</button> */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Cars;
