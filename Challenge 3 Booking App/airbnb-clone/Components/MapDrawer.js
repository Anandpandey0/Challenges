import Image from "next/image";
import React from "react";
import mapImage from "./Images/map-1.jpeg";

const MapDrawer = ({ name }) => {
  return (
    <div className="flex flex-col ">
      <div className=" h-[100px] w-[100px] border-2 border-solid border-black rounded-xl relative">
        <Image
          src={mapImage}
          alt="Image"
          fill
          className="object-cover rounded-xl"
        />
      </div>
      <p className="p-2 text-gray-500 font-semibold">{name}</p>
    </div>
  );
};

export default MapDrawer;
