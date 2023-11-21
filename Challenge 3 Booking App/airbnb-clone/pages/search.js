import Header from "../Components/Header";
import { BookingContext } from "../contexts/BookingContext";
import { useContext, useEffect, useState } from "react";
import LogoCarousel from "@/Components/LogoCarousel";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { searchById } from "@/utils/searchById";
import { Skeleton, Stack } from "@chakra-ui/react";
import { searchHotels } from "@/utils/explore";
const currentTimestamp = Date.now();
const currentDate = new Date(currentTimestamp);
const nextDayTimestamp = currentTimestamp + 24 * 60 * 60 * 1000;
const nextDay = new Date(nextDayTimestamp);
const formattedCurrentDate = currentDate.toISOString().split("T")[0];
const formattedNextDay = nextDay.toISOString().split("T")[0];
const Search = ({ data }) => {
  const router = useRouter();
  const { location, checkInDate, checkOutDate, guestCount, locationId } =
    useContext(BookingContext);
  const [hotelData, setHotelData] = useState([]);

  const [hotelCount, setHotelCount] = useState(0);

  useEffect(() => {
    // const params = {
    //   dest_id: `${locationId}`,
    //   search_type: "CITY",
    //   arrival_date: formattedCurrentDate,
    //   departure_date: formattedNextDay,
    //   adults: `${guestCount}`,
    //   children_age: "0,17",
    //   room_qty: 1,
    //   page_number: 1,
    //   languagecode: "en-us",
    //   currency_code: "AED",
    // };
    const params = {
      adults_number: "2",
      dest_id: `${locationId}`,
      locale: "en-gb",
      checkin_date: formattedCurrentDate,
      filter_by_currency: "INR",
      room_number: "1",
      order_by: "popularity",
      units: "metric",
      dest_type: "city",
      checkout_date: formattedNextDay,
      include_adjacency: "true",
      children_number: "2",
      categories_filter_ids: "class::2,class::4,free_cancellation::1",
      children_ages: "5,0",
      page_number: "0",
    };
    async function fetchData() {
      if (locationId && checkInDate && checkOutDate) {
        const response = await searchHotels(params);
        setHotelData(response.result);
        setHotelCount(response.result.length);
      }
    }
    fetchData();
  }, [guestCount, locationId, checkInDate, checkOutDate]);

  return (
    <div className="h-full wi-full overflow-x-hidden">
      <Header />
      <LogoCarousel />
      <main>
        <h1 className="font-bold ml-10 md:px-10">
          Over {hotelCount} homes in {location}
        </h1>

        <div className="w-[90%]  mx-auto my-8 ">
          <div className="grid lg:grid-cols-4  grid-flow-row gap-6">
            {hotelData &&
              hotelData.map((hotel) => (
                <div
                  className=" h-[82vh] lg:h-[60vh]  flex flex-col rounded-t-xl"
                  key={hotel.hotel_id}
                >
                  <div className="relative h-2/3 w-full ">
                    <Image
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
                        {hotel.review_score}({" "}
                        {hotel.review_nr ? `${Math.floor(hotel.review_nr)}` : 0}
                        )
                      </p>
                    </div>
                    <div>{hotel.city}</div>
                    <div>{hotel.address}</div>
                    <div>
                      <p className="font-semibold">
                        {Math.floor(hotel.min_total_price)} {hotel.currencycode}
                        /- per night
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            {!hotelData && <div>No data Found</div>}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Search;
