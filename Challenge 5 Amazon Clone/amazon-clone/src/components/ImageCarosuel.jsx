import { MenuAlt1Icon, SearchIcon } from "@heroicons/react/solid";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import Image from "next/image";

const ImageCarosuel = () => {
  return (
    <div>
      <div className={`h-[6vh] w-full search-sticky   bg-black lg:hidden `}>
        <div className="bg-white flex h-full rounded-xl w-[95%] mx-auto">
          <input
            type="text"
            name="search-input"
            className="p-2 w-full ml-1 outline-none text-black bg-white rounded-l-full lg:rounded-none"
            placeholder="Search Amazon"
          />
          <button className="search-button bg-yellow-400 p-2.5 px-4 hover:bg-yellow-500 rounded-xl outline-none">
            <SearchIcon className="h-5 text-black  " />
          </button>
        </div>
      </div>
      <div className="catogory flex bg-gray-700 h-[8vh] lg:h-[5vh]  text-white items-center ">
        <div className=" lg:ml-4 border-solid border-2 border-transparent cursor-pointer hover:border-white p-1 lg:p-2 flex items-center">
          <MenuAlt1Icon className="h-5" />
          All
        </div>
        <div className="ml-4 border-solid border-2 p-2 border-transparent cursor-pointer hover:border-white">
          Electronics
        </div>
        <div className="ml-4 border-solid border-2 p-2 cursor-pointer border-transparent hover:border-white">
          Men Clothing
        </div>
        <div className="ml-4 border-solid border-2 p-2 cursor-pointer border-transparent hover:border-white">
          Womens Clothing{" "}
        </div>
      </div>
      <div className=" relative z-[-1]">
        <Carousel autoPlay showThumbs={false}>
          <div className="h-[50vh]   w-full  z-1 relative">
            <Image
              src="https://m.media-amazon.com/images/I/51DWgNo1fdL._SX3000_.jpg"
              alt="none"
              fill
              className="object-fill"
              priority
            />
          </div>
          <div className="h-[50vh] w-full relative">
            <Image
              src="https://m.media-amazon.com/images/I/81Kqplt2UzL._SX3000_.jpg"
              fill
              className="object-fill"
              alt="none"
              priority
            />
          </div>
          <div className="h-[50vh]  w-full relative">
            <Image
              src="https://m.media-amazon.com/images/I/61h3+J34oWL._SX3000_.jpg"
              fill
              className="object-fill"
              alt="none"
              priority
            />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ImageCarosuel;
