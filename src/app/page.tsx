import Image from "next/image";
import Hero from "./components/Hero";
import Cars from "./components/Cars";
import MoreCars from "./components/MoreCars"


export default function Home() {
  return (
    <div>
    <Hero/>  
    <Cars/>
    <MoreCars/>
    <div className=" flex justify-center pt-5"><button className='bg-blue-700 h-[50px] w-[155px] text-white rounded-sm font-bold '>Show More Cars</button></div>
    </div>
  );
}
