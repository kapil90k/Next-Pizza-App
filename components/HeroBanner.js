import Image from "next/image";
import React from "react";
function HeroBanner({ id, image }) {
  return (
    <div>
      <div className="relative w-full h-[750px]">
        <div className="">
          <Image src={image} className="object-cover" layout="fill" />
        </div>
        <div className="absolute bg-black/40 top-0 bottom-0 left-0 right-0"></div>
        <div className="absolute flex flex-col items-center text-white left-[10%] top-[30%] font-bold">
          <p className="text-2xl">Hot & Spicy</p>
          <p className="text-8xl underline">PIZZA</p>
          <div className="flex flex-col items-center mt-5">
            <p className="text-2xl underline ">50% OFF</p>
            <p className="text-2xl underline ">ORDER NOW</p>
            <p className="text-2xl ">LAMA DEV</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;
