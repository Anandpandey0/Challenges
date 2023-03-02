import { LockClosedIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

import { useContext, useState } from "react";
import { BookingContext } from "../contexts/BookingContext";
import AddDatesComponent from "./AddDatesComponent";

import MapDrawer from "./MapDrawer";

function MyModal({ onClose }) {
  const router = useRouter();
  const [showCalender, setshowCalender] = useState(false);
  const {
    checkInDate,
    checkOutDate,

    guestCount,
    setGuestCount,
    setLocation,
    location,
  } = useContext(BookingContext);

  function handleClose() {
    onClose();
  }
  function showDateHandler() {
    setshowCalender(!showCalender);
  }
  const handleGuestCountChange = (e) => {
    const guestCount = e.target.value;
    setGuestCount(guestCount);
  };
  const search = () => {
    router.push({
      pathname: "/search",
    });
    handleClose();
  };

  return (
    <>
      <div className="fixed left-0 w-[100vw] h-[100vh] inset-0 z-50 flex items-center justify-center  bg-opacity-50 transition-opacity ">
        <div className=" rounded-lg w-[100vw] h-[100vh]   py-4 bg-gray-100">
          {showCalender && <AddDatesComponent />}
          <div className="top pl-4 pt-2 flex items-center mt-6 ">
            <button onClick={handleClose}>
              <XIcon className="h-10 p-2 border-2 border-solid border-gray-300 rounded-full" />
            </button>
            <p className="ml-14 font-bold border-b-2 border-solid border-black p-2">
              Stays
            </p>
            <p className="ml-6 text-gray-400 font-bold">Experiences</p>
          </div>
          {}
          <div className="middle border-gray-400 bg-white border-2 border-solid h-1/2 w-[90%] mx-auto my-4 rounded-xl shadow-xl flex-col p-4 ">
            <p className=" text-xl font-bold mb-4">Where to?</p>
            <div className="search-input border-2 border-solid border-gray-300 rounded-xl p-4 flex gap-4 items-center">
              <SearchIcon className="h-5 " />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="text-black font-semibold outline-none "
                placeholder="Search destinations"
              />
            </div>
            <div className="country-cards flex overflow-y-scroll mt-6  gap-2">
              <MapDrawer name="I'm flexible" />
              <MapDrawer name="Europe" />
              <MapDrawer name="United Kingdom" />
              <MapDrawer name="America" />
              <MapDrawer name="India" />
            </div>
          </div>
          <div
            className="mt-4 w-[90%] mx-auto border-solid border-gray-400 shadow-lg p-4 rounded-xl flex items-center justify-between bg-white"
            onClick={showDateHandler}
          >
            <p className="text-gray-400">When</p>
            <p onClick={showDateHandler}>
              {" "}
              {checkInDate
                ? `${checkInDate.substr(0, 5)} to ${checkOutDate.substr(0, 5)}`
                : "Any Dates"}
            </p>
          </div>
          <div className="my-2 w-[90%] mx-auto border-solid border-gray-400 shadow-lg p-4 rounded-xl flex justify-between bg-white">
            <p className="text-gray-400">Who</p>
            <p>
              <input
                type="number"
                onChange={handleGuestCountChange}
                min={1}
                value={guestCount}
                className="outline-none bg-inherit text-black w-4 "
              />
            </p>
          </div>
          <div className="fixed bottom-0 bg-white p-4 w-[100vw] flex justify-between items-center">
            <p className="underline font-bold">Clear All</p>
            <button
              className="flex justify-around items-center gap-2 bg-pink-500 p-2 text-white font-bold px-4 rounded-xl"
              onClick={search}
            >
              {" "}
              <SearchIcon className="h-6" />
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyModal;
