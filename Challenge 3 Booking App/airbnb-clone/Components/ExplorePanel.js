import { searchHotels } from "@/utils/bookingAPI";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { BookingContext } from "../contexts/BookingContext";

const ExplorePanel = () => {
  const { location, guestCount, checkInDate, checkOutDate } =
    useContext(BookingContext);
  const [hotelData, setHotelData] = useState([]);

  useEffect(() => {
    const params = {
      adults_number: "2",
      dest_id: "-2106102",
      locale: "en-gb",
      checkin_date: "2023-09-23",
      filter_by_currency: "AED",
      room_number: "1",
      order_by: "popularity",
      units: "metric",
      dest_type: "city",
      checkout_date: "2023-09-24",
      include_adjacency: "true",
      children_number: "2",
      categories_filter_ids: "class::2,class::4,free_cancellation::1",
      children_ages: "5,0",
      page_number: "0",
    };
    async function fetchStats() {
      const response = await searchHotels(params);
      // console.log(response);
      setHotelData(response.result);
    }
    fetchStats();
  }, []);

  return (
    <div className="w-[90%]  mx-auto my-8">
      <div className="grid lg:grid-cols-4  grid-flow-row gap-6">
        {hotelData.map((hotel) => (
          <div
            className=" h-[82vh] lg:h-[60vh]  flex flex-col rounded-t-xl"
            key={hotel.hotel_id}
          >
            {/* {console.log(item.max_photo_url)} */}
            <div className="relative h-full w-full ">
              <Image
                // src={item.max_photo_url}
                src={hotel.max_photo_url}
                alt="image"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col  mt-4">
              <div className="flex justify-between ">
                <p className="font-semibold">{hotel.hotel_name}</p>
                <p className="flex items-center">
                  <StarIcon className="h-8 text-yellow-400" />{" "}
                  {hotel.review_score}
                </p>
              </div>
              <div>{hotel.city}</div>
              <div>
                <p className="font-semibold">
                  &#x20AC;{hotel.min_total_price}/- per night
                </p>
              </div>
            </div>
          </div>
        ))}
        {/* {console.log(hotelData)} */}
      </div>
    </div>
  );
};

export default ExplorePanel;
