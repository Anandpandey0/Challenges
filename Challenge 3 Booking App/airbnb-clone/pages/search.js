import Header from "../Components/Header";
import { BookingContext } from "../contexts/BookingContext";
import { useContext, useEffect, useState } from "react";
import LogoCarousel from "@/Components/LogoCarousel";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { searchById } from "@/utils/searchById";
import { Skeleton, Stack } from "@chakra-ui/react";
const Search = ({ data }) => {
  const router = useRouter();
  const { location, checkInDate, checkOutDate, guestCount, locationId } =
    useContext(BookingContext);
  const [hotelData, setHotelData] = useState([]);

  const [hotelCount, setHotelCount] = useState(0);

  useEffect(() => {
    const params = {
      adults_number: "2",
      dest_id: locationId,
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
    async function fetchData() {
      const response = await searchById(params);
      if (response.result != undefined) {
        if (response.result.length != 0) {
          setHotelCount(response.result.length);

          setHotelData(response.result);
        }
      }
    }
    fetchData();
  }, [guestCount, locationId]);

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
                  {/* {console.log(hotelData)} */}
                  <div className="relative h-full w-full ">
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
                        {hotel.review_score}
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
