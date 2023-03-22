import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import logo from "../images/nav-logo.png";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/solid";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { UserContext } from "../../context/userContext";

import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { userDetails, setUserDetails, cartItems } = useContext(UserContext);
  const signOutHandler = () => {
    if (userDetails) {
      localStorage.removeItem("userInfo");
      setUserDetails(null);
    } else {
      console.log("Clicked");
      router.push("/signin");
    }
  };

  return (
    <div className="sticky top-0">
      <header className="text-sm md:text-base lg:sticky top-0 ">
        <nav className="bg-black h-[10vh] w-full flex text-white py-2.5 items-center justify-between z-[1000] ">
          <div className="left-nav items-center flex justify-start flex-row-reverse  w-2/5 lg:w-1/5 h-full">
            <div
              className="nav-logo relative w-24 lg:w-32 lg:mr-auto align-middle   flex  justify-start  items-center   h-[10vh]   lg:ml-2  outline-orange-400  border-2 border-solid border-transparent hover:border-white cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image
                src={logo}
                alt="Amazon-logo"
                fill
                className="object-contain   p-2 my-1  outline-orange-400"
              />
            </div>
            <div className="menu-button w-24 lg:hidden ">
              <button onClick={onOpen}>
                <MenuIcon className="h-8 ml-2" />
              </button>
            </div>
          </div>

          <div className="search hidden  lg:flex items-center  w-80  lg:w-4/5  rounded-md outline-orange-400 ">
            <div className=" hidden lg:block ">
              <select
                name="catoragries"
                className="text-black text-center p-2 flex   rounded-l-md border-r-2 border-solid border-gray-400 bg-gray-100 
                    outline-orange-400 "
              >
                <option value="all">All </option>
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>

                <option value="men's clothing">Men clothing</option>
                <option value="women's clothing">Women clothing</option>
              </select>
            </div>
            <div className=" lg:w-[86%]  ">
              <input
                type="text"
                name="search-input"
                className="p-2 w-full outline-orange-400 text-black rounded-l-md lg:rounded-none"
                placeholder="Search Amazon"
              />
            </div>
            <button className="search-button bg-yellow-400 p-2.5 px-4 hover:bg-yellow-500 rounded-r-md outline-orange-400">
              <SearchIcon className="h-5 text-black  " />
            </button>
          </div>
          <div className="right flex   lg:w-2/5 lg:ml-4 h-full  items-center lg:pr-5  ">
            <div className=" flex-row items-center lg:flex-col lg:px-4 py-2 flex border-solid border-2 border-transparent hover:border-white cursor-pointer group">
              <div className="text-sm hidden lg:block relative  ">
                Hello,{userDetails ? userDetails.name : "sign in"}
              </div>
              <div className="hidden absolute text-black top-16 lg:group-hover:flex bg-white h-[100px] w-[150px]  flex-col items-center justify-between">
                <button
                  className="bg-yellow-400 w-5/6 h-2/5 mx-auto mt-2 text-center flex items-center justify-center"
                  onClick={signOutHandler}
                >
                  {userDetails ? "Sign out" : "Sign in"}
                </button>
                {!userDetails && (
                  <>
                    <div className="text-xs mb-2 ">
                      New to Amazon?{" "}
                      <span
                        className="hover:underline"
                        onClick={() => router.push("/signup")}
                      >
                        Start here
                      </span>{" "}
                    </div>
                  </>
                )}
              </div>
              <div
                className="lg:hidden flex items-center justify-end"
                onClick={() => router.push("/signin")}
              >
                Account <UserIcon className="h-8" />
              </div>
              <button className="font-semibold hidden lg:block">
                Account & Lists{" "}
              </button>
            </div>
            <div className=" hidden  lg:flex flex-col px-4 py-2 border-solid border-2 border-transparent hover:border-white cursor-pointer">
              <div className="text-sm">Returns </div>
              <div className="font-semibold"> & Orders </div>
            </div>

            <button
              className="cart   flex justify-end lg:ml-auto cursor-pointer border-2 border-solid border-transparent lg:p-2 hover:border-white "
              onClick={() => router.push("/cart")}
            >
              {" "}
              <ShoppingCartIcon className="h-8 lg:h-10" />
              <div className="   lg:flex items-end font-semibold bg-yellow-400 rounded-full px-2 text-black ">
                {cartItems ? cartItems.length : "cart"}
              </div>{" "}
            </button>
          </div>
        </nav>
      </header>
      {isOpen ? (
        <>
          <Drawer placement="left" onClose={onClose} isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader
                borderBottomWidth="1px"
                className="bg-gray-600 text-white flex flex-col"
              >
                <div className="flex justify-end text-sm items-center">
                  {userDetails ? userDetails.name : "Account"}{" "}
                  <UserIcon className="h-8" />{" "}
                </div>
                <div>
                  <div className="font-bold">Browse</div>
                  <div className="text-3xl">Amazon</div>
                </div>
              </DrawerHeader>
              <DrawerBody>
                <div className="text-2xl font-bold border-b-4 border-gray-300 ">
                  Browse Amazon
                </div>
                <div className="flex flex-col h-2/5 justify-evenly  border-b-4 border-gray-300">
                  <div className="text-xl font-bold pt-4 ">
                    Top Categories for you
                  </div>
                  <div className="text-lg font-semibold">Electronics</div>
                  <div className="text-lg font-semibold">Men Clothing</div>
                  <div className="text-lg font-semibold">Womens Clothing</div>
                </div>
                {userDetails && (
                  <button onClick={signOutHandler}>Log Out</button>
                )}
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
