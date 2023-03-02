import Image from "next/image";
import logo from "./Images/amazon-logo.png";
import { GoSearch } from "react-icons/go";
import { SlBasket } from "react-icons/sl";
import { IoIosMenu } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-[100vw] ">
      {/* upper nav */}
      <div className="flex items-center bg-amazon_blue flex-grow text-white justify-evenly text-xs sm:text-sm  ">
        <div className=" flex items-center flex-grow sm:flex-grow-0 object-contain h-10 sm:h-15  w-2 sm:w-20  ">
          <Image
            src={logo}
            sizes="
            (max-width: 640px) 50px,
              (min-width: 768px) 80px,
              50px

            "
            alt="amazon-logo"
            className="cursor-pointer object-contain h-[100%] w-[100%] mt-3   "
          />
        </div>
        <div className=" search hidden sm:flex w-3/5  ml-5  items-center align-middle  ">
          <input
            type="text"
            className="w-full p-1.5  outline-none border-none rounded-l-md "
          />
          <button className="search-icon h-9  bg-yellow-500 w-10 flex items-center justify-center  rounded-r-md hover:bg-yellow-600 ">
            <GoSearch color="black" />
          </button>
        </div>
        <div className="sign-in-options flex flex-col hover:underline cursor-pointer mr-2 sm:mr-0">
          <p>Sign In</p>
          <p className="font-bold">Accounts & Lists</p>
        </div>

        <div className="return-options flex flex-col hover:underline cursor-pointer mr-2 sm:mr-0 ">
          <p>Return </p>
          <p className="font-bold"> & Orders</p>
        </div>
        <div className="basket flex items-center relative cursor-pointer">
          <SlBasket className="h-12 cursor-pointer" size="25px" />
          <p className="ml-2 sm:ml-4  font-bold hover:underline">Basket</p>
          <p className="absolute top-1 left-5 p-0.3 w-4 text-center bg-yellow-500 rounded-lg text-black">
            0
          </p>
        </div>
      </div>
      {/* lower nav */}
      <div className="lower-nav h-[5vh] flex items-center bg-amazon_blue-light text-white text-xs sm:text-sm align-middle text-center ">
        <ul className="flex ml-4">
          <li className="flex items-center hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer">
            <IoIosMenu size="18px" />
            All
          </li>
          <li className="hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2 text-center ">
            Fresh
          </li>
          <li className="hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2 ">
            Amazon miniTv
          </li>
          <li className="hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2">
            Amazon Pay
          </li>

          <li className="hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2">
            Gift Cards
          </li>
          <li className="hidden sm:block hover:border-solid hover:border-2 hover:border-white p-1 cursor-pointer ml-2">
            Buy Again
          </li>
          <li className="hidden sm:block hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2">
            Gift Ideas
          </li>
          <li className="hidden sm:block hover:border-solid hover:border-2 hover:border-white p-1 cursor-pointer ml-2">
            Health,Household & Personal Care
          </li>
          <li className="hidden sm:block hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2">
            Amazon Basics
          </li>
          <li className="hidden sm:block hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2">
            Home Improvement
          </li>
          <li className="hidden sm:block hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2">
            Coupons
          </li>
          <li className="hidden sm:block hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2">
            Baby
          </li>
          <li className="hidden sm:block hover:border-solid hover:border-2 hover:border-white p-1  cursor-pointer ml-2">
            Suscribe & Save
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
