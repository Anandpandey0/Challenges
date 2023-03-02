import React, { useContext, useEffect, useRef } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange, DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import { useState } from "react";
import { BookingContext } from "../contexts/BookingContext";

const AddDatesComponent = () => {
  const { checkInDate, checkOutDate, setCheckInDate, setCheckOutDate } =
    useContext(BookingContext);
  const [show, setShow] = useState(true);
  const [dateRange, setDateRange] = useState({
    startDate: checkInDate ? checkInDate : new Date(),
    endDate: checkOutDate ? checkOutDate : new Date(),
    key: "selection",
  });
  const formatDate = (date) => {
    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const year = date.getFullYear().toString().substr(-2);
    return `${day}-${month}-${year}`;
  };

  const handleDateRangeChange = (ranges) => {
    setDateRange(ranges.selection);
    setCheckInDate(formatDate(ranges.selection.startDate));
    setCheckOutDate(formatDate(ranges.selection.endDate));
    // setCheckOutDate(ranges.selection.endDate);
  };

  return (
    <>
      {show ? (
        <div className="fixed inset-0 md:top-1/4 w-[100vw] z-[999999] bg-gray-500 bg-opacity-75 flex justify-center items-center">
          <div className=" rounded-lg  h-full w-full mt-[50%] md:mt-0 md:ml-[30%]">
            <div className="p-4 z-100 ">
              {/* <DateRangePicker
              ranges={[dateRange]}
              editableDateInputs={true}
              minDate={new Date()}
              rangeColors={["#FD5B61"]}
              onChange={handleDateRangeChange}
              format="dd-MM-yy"
            /> */}
              <DateRange
                editableDateInputs={true}
                minDate={new Date()}
                format="dd-MM-yy"
                onChange={handleDateRangeChange}
                moveRangeOnFirstSelection={false}
                ranges={[dateRange]}
                rangeColors={["#FD5B61"]}
              />
              <div className="flex p-2 justify-between md:w-[25vw] bg-white">
                <button
                  className="px-6 rounded-full py-2 bg-red-400"
                  onClick={() => setShow(!show)}
                >
                  Cancel
                </button>
                <button
                  className="px-6 rounded-full py-2 bg-red-400"
                  onClick={() => setShow(!show)}
                >
                  Sumit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AddDatesComponent;
