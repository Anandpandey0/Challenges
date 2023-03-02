import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BookingContext } from "../contexts/BookingContext";

const ExplorePanel = () => {
  const { location, guestCount, checkInDate, checkOutDate } =
    useContext(BookingContext);

  return (
    <div className="w-[90%]  mx-auto my-8">
      <div className="grid lg:grid-cols-4  grid-flow-row gap-6">
        <div className="border-2 border-solid border-black h-[82vh] lg:h-[60vh]  flex flex-col rounded-t-xl">
          <div className="relative h-full w-full ">
            <Image
              src="https://a0.muscache.com/im/pictures/e25a9b25-fa98-4160-bfd1-039287bf38b6.jpg?im_w=720"
              alt="image"
              fill
              className="object-cover"
            />
          </div>

          <div>{location}</div>
          <div>{guestCount}</div>
          <div>{checkInDate}</div>
          <div>{checkOutDate}</div>
          <div>Hi</div>
          <div>Hi</div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePanel;
