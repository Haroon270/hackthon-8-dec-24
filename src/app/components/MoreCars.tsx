import React from "react";
import carA from "../../../public/carA.png";
import carB from "../../../public/carB.png";
import carC from "../../../public/carC.png";
import carD from "../../../public/carD.png";
import carE from "../../../public/carE.png";
import carF from "../../../public/carF.png";
import carG from "../../../public/carG.png";
import Redheart from "../../../public/Redheart.png";
import Image from "next/image";
import Button from "../Rent/page";
import { FaRegHeart } from "react-icons/fa6";

function MoreCars() {
  const cars = [
    {
      carName: "New Rush",
      model: "Sport",
      rate: "$78.00/day",
      carPicture: carA,
      Heart: Redheart,
    },
    {
      carName: "CR - V",
      model: "Sport",
      rate: "$80.00/ day",
      carPicture: carB,
      Heart: Redheart,
    },
    {
      carName: "New Terios",
      model: "Sport",
      rate: "$76.00/day",
      carPicture: carC,
      Heart: Redheart,
    },
    {
      carName: "CR - V",
      model: "Sport",
      rate: "$80.00/ day",
      carPicture: carD,
      Heart: Redheart,
    },
    {
      carName: "M Exclusice",
      model: "Sport",
      rate: "$74.00/day",
      carPicture: carE,
      Heart: Redheart,
    },
    {
      carName: "MG ZS",
      model: "Sport",
      rate: "$78.00/day",
      carPicture: carF,
      Heart: Redheart,
    },
    {
      carName: "M Exclusice",
      model: "Sport",
      rate: "$76.00/day",
      carPicture: carG,
      Heart: Redheart,
    },
      {
      carName: "MG ZS",
      model: "Sport",
      rate: "$78.00/day",
      carPicture: carF,
      Heart: Redheart,
    },
  ];
  return (
    <div className="bg-slate-50 flex gap-4 flex-wrap justify-center mt-20 items-center">
      <p></p>
      {cars.map((vehi) => {
        return (
          <div key={vehi.carName}>
            <div className="flex flex-col bg-white h-[388px] w-[314px] border-2 my-1  pt-800 ">
              <h1 className=" flex text-[20px] text-black justify-start cursor-pointer w-[156px] h-[48px] mt-2 px-2">
                {" "}
                {vehi.carName}
              </h1>
              <h4 className="text-[14px] -my-2 px-4">{vehi.model}</h4>

              <FaRegHeart className="ml-64" />

              <Image
                className="pt-20  "
                src={vehi.carPicture}
                alt="carA"
                width={500}
                height={500}
              />
              <Image
                className="w-[256px] h-[24px]  ml-4 mt-6"
                src={"/Spesification.png"}
                alt="Spec"
                width={500}
                height={500}
              />

              <h4 className="font-semibold mx-6 justify-between my-5 flex">
                {" "}
                {vehi.rate} <Button />
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MoreCars;
