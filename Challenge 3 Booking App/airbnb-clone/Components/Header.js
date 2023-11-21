import Image from "next/image";
import logo from "./Images/Airbnb-logo.jpg";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserIcon,
} from "@heroicons/react/solid";
import { useContext, useEffect, useState } from "react";
import MobileModal from "./MobileModal";
import DesktopViewDrawer from "./DesktopViewDrawer";
import AddDatesComponent from "./AddDatesComponent";
import { BookingContext } from "../contexts/BookingContext";
import { useRouter } from "next/router";
import { searchLocation } from "@/utils/searchLocation";

function Header() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [shouldRender, setShouldRender] = useState(true);
  const [showCalender, setShowCalender] = useState(false);
  useEffect(() => {
    if (!showModal) {
      setShouldRender(true);
    }
  }, [showModal]);

  const {
    setLocation,
    setGuestCount,
    guestCount,
    checkInDate,
    checkOutDate,
    location,
    setLocationId,
    loading,
    setLoading,
  } = useContext(BookingContext);
  function handleOpenModal() {
    setShowModal(true);
    setShouldRender(false);
  }

  function handleCloseModal() {
    setShowModal(false);
  }
  const handleCalender = () => {
    setShowCalender(!showCalender);
  };
  const handleLocationChange = (e) => {
    const location = e.target.value;
    setLocation(location);
  };
  const handleGuestCountChange = (e) => {
    const guestCount = e.target.value;
    setGuestCount(guestCount);
  };

  useEffect(() => {
    async function fetchDestinationId() {
      const params = { query: location };
      if (location !== "") {
        if (location.length > 3) {
          const response = await searchLocation(params);
          if (response.data.length != 0) {
            if (response.data[0].dest_id) {
              setLocationId(response.data[0].dest_id);
              // console.log("Header", response.data[0].dest_id);
            }
          }
        }
      }
    }
    fetchDestinationId();
  }, [location, setLocationId]);

  const search = () => {
    router.push("/search");
  };

  return (
    <>
      <header className="sticky top-0 grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2 bg-white shadow-md p-5 md:px-10 z-50 h-max">
        {/* left */}

        <div
          className="left-nav relative flex items-center h-10 cursor-pointer my-auto "
          onClick={() => router.push("/")}
        >
          <Image
            src={logo}
            alt="airbnb-logo"
            fill
            priority
            style={{ objectFit: "contain", objectPosition: "left" }}
          />
        </div>

        {showModal && (
          <>
            <div className="mobile-view sm:hidden flex  justify-center items-center">
              <MobileModal onClose={handleCloseModal} />
            </div>
            <div className="Desktop-view hidden sm:flex justify-evenly items-center">
              <p className="border-b-2 border-solid border-black p-2 cursor-pointer">
                Stays{" "}
              </p>
              <p className="cursor-pointer">Experiences </p>
              <p className="cursor-pointer">Online Experiences </p>
            </div>
          </>
        )}
        {shouldRender && (
          <>
            <div
              className="middle-nav mx-auto px-4 md:px-0 flex  items-center  justify-between border-2 border-solid md:border-gray-300 rounded-full   md:hover:shadow-md cursor-pointer w-fit "
              onClick={handleOpenModal}
            >
              <p className="px-4 font-medium  md:border-r-2 md:border-solid md:border-gray-300  ">
                {location ? location : "Anywhere"}
              </p>
              <p className="hidden md:inline-flex  px-4 font-medium border-r-2 border-solid border-gray-300 ">
                {checkInDate
                  ? `${checkInDate.substr(0, 5)} to ${checkOutDate.substr(
                      0,
                      5
                    )}`
                  : "Anyweek"}
              </p>
              {/* <p className="hidden px-4 font-light">Any week</p> */}

              <SearchIcon className=" flex justify-end h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
            </div>
          </>
        )}

        <div className="hidden md:flex right-nav  justify-end gap-2 items-center  ">
          <p className="hidden hover:bg-gray-200 p-2 rounded-full xl:inline-flex  font-medium cursor-pointer">
            Airbnb your home
          </p>
          <GlobeAltIcon className="h-10 hover:bg-gray-200 rounded-full p-2 text-gray-600  cursor-pointer" />
          <div className="border-2 border-solid border-gray-300 rounded-full flex items-center hover:shadow-md cursor-pointer p-1 ">
            <MenuIcon className="h-8  p-1 " />
            <UserIcon className="h-6 p-1 bg-black text-white rounded-full " />
          </div>
        </div>
        {showModal && (
          <div className="xl:mx-[60%] my-4 w-[90vw] xl:w-[50vw]  flex border-solid border-gray-200 border-2  text-sm rounded-full justify-between">
            <div className="flex flex-col hover:bg-gray-300 p-2 pl-6 rounded-full w-[30%]   ">
              <p className="font-semibold ">Where</p>
              <input
                type="text"
                className=" outline-none bg-inherit"
                placeholder="Search Destination"
                onChange={handleLocationChange}
              />
            </div>

            <div
              className="flex flex-col hover:bg-gray-300 py-2 px-8 rounded-full cursor-pointer w-[17%]"
              onClick={handleCalender}
            >
              <p className="font-semibold ">Check in</p>
              <p className="text-gray-400 ">{checkInDate}</p>
            </div>
            <div className="flex flex-col hover:bg-gray-300 py-2 px-8 rounded-full cursor-pointer w-[17%]">
              <p className="font-semibold " onClick={handleCalender}>
                Check out
              </p>
              <p className="text-gray-400 ">{checkOutDate}</p>
            </div>
            <div className="flex  hover:bg-gray-300 p-2 pl-6 rounded-full justify-between items-center w-[30%] cursor-pointer">
              <div className="flex flex-col">
                <p className="font-semibold ">Who</p>
                <p className="text-gray-400 ">
                  <input
                    type="number"
                    onChange={handleGuestCountChange}
                    min={1}
                    value={guestCount}
                    className="outline-none bg-inherit text-black"
                  />
                </p>
              </div>
              <div className="border-2 border-solid bg-red-400 p-3 rounded-full hover:bg-red-500">
                <button onClick={search}>
                  <SearchIcon className="h-5 text-white " />
                </button>
              </div>
            </div>
          </div>
        )}

        {showCalender && <AddDatesComponent />}
      </header>
    </>
  );
}

export default Header;
