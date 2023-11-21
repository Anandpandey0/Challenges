import { searchHotels } from "@/utils/explore";
import { Skeleton, Spinner, Stack } from "@chakra-ui/react";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const ExplorePanel = () => {
  const [hotelData, setHotelData] = useState([]);
  const [loading, setLoading] = useState(true);
  const currentTimestamp = Date.now();
  const currentDate = new Date(currentTimestamp);
  const nextDayTimestamp = currentTimestamp + 24 * 60 * 60 * 1000;
  const nextDay = new Date(nextDayTimestamp);
  const formattedCurrentDate = currentDate.toISOString().split("T")[0];
  const formattedNextDay = nextDay.toISOString().split("T")[0];

  useEffect(() => {
    const params = {
      adults_number: "2",
      dest_id: "-2106102",
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
    async function fetchStats() {
      // console.log("Searching");

      const response = await searchHotels(params);
      // console.log(response);
      // console.log(response);
      setLoading(false);
      setHotelData(response.result);
    }
    fetchStats();
  }, [formattedCurrentDate, formattedNextDay]);

  return (
    <div className="w-[90%]  mx-auto my-8">
      <div className="grid lg:grid-cols-4  grid-flow-row gap-6">
        {loading && (
          <>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
            <Stack>
              <Skeleton height="100px" />
              <Skeleton height="100px" />
              <Skeleton height="100px" />
            </Stack>
          </>
        )}

        {hotelData &&
          hotelData.map((hotel) => (
            <div
              className=" h-[82vh] lg:h-[60vh]  flex flex-col rounded-t-xl"
              key={hotel.hotel_id}
            >
              {/* {console.log(item.max_photo_url)} */}
              <div className="relative h-2/3 w-full ">
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
                <div>{hotel.address}</div>
                <div>
                  <p className="font-semibold">
                    {Math.floor(hotel.min_total_price)} {hotel.currencycode}/-
                    per night
                  </p>
                  {/* {console.log(typeof hotel.min_total_price)} */}
                </div>
              </div>
            </div>
          ))}
        {!hotelData && <div> No results found</div>}
      </div>
    </div>
  );
};

export default ExplorePanel;
