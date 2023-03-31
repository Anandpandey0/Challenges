import Header from "../Components/Header";
import { BookingContext } from "../contexts/BookingContext";
import { useContext, useEffect } from "react";
import LogoCarousel from "@/Components/LogoCarousel";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
const Search = ({ data }) => {
  const router = useRouter();
  const { location, checkInDate, checkOutDate, guestCount } =
    useContext(BookingContext);
  useEffect(() => {
    if (!location || !checkInDate || !checkOutDate) {
      router.push("/");
    }
  }, []);

  return (
    <div className="h-full wi-full overflow-x-hidden">
      <Header />
      <LogoCarousel />
      <main>
        <h1 className="font-bold ml-10 md:px-10">
          Over 1,000 homes in {location}
          {console.log(data)}
        </h1>

        <div className="w-[90%]  mx-auto my-8 ">
          <div className="grid lg:grid-cols-4  grid-flow-row gap-6">
            {data.result ? (
              data.result.map((item) => (
                <div
                  className=" h-[82vh] lg:h-[60vh]  flex flex-col rounded-t-xl"
                  key={item.hotel_id}
                >
                  {console.log(item.max_photo_url)}
                  <div className="relative h-full w-full ">
                    <Image
                      // src={item.max_photo_url}
                      src={item.max_photo_url}
                      alt="image"
                      fill
                      className="object-cover rounded-2xl"
                    />
                  </div>
                  <div className="flex flex-col  mt-4">
                    <div className="flex justify-between ">
                      <p className="font-semibold">{item.hotel_name}</p>
                      <p className="flex items-center">
                        <StarIcon className="h-8 text-yellow-400" />{" "}
                        {item.review_score}
                      </p>
                    </div>
                    <div>{item.city}</div>
                    <div>
                      <p className="font-semibold">
                        &#x20AC;{item.min_total_price}/- per night
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Object{console.log(data)}</h1>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};
export const getServerSideProps = async (context) => {
  const RapidAPIKey = process.env.XRapidAPIKey;
  const RapidAPIHost = process.env.XRapidAPIHost;

  const queryParams = new URLSearchParams({
    room_number: "1",
    checkout_date: "2023-08-19",
    dest_type: "city",
    dest_id: "-553173",
    adults_number: "2",
    locale: "en-gb",
    checkin_date: `2023-08-18`,
    order_by: "popularity",
    filter_by_currency: "AED",
    units: "metric",
    page_number: "0",
    children_number: "2",
    include_adjacency: "true",
    categories_filter_ids: "class::2,class::4,free_cancellation::1",
    children_ages: "5,0",
  });
  const url = `https://booking-com.p.rapidapi.com/v1/hotels/search?${queryParams.toString()}`;
  const options = {
    // params: {
    //   room_number: "1",
    //   checkout_date: "2023-08-19",
    //   dest_type: "city",
    //   dest_id: "-553173",
    //   adults_number: "2",
    //   locale: "en-gb",
    //   checkin_date: "2023-08-18",
    //   order_by: "popularity",
    //   filter_by_currency: "AED",
    //   units: "metric",
    //   page_number: "0",
    //   children_number: "2",
    //   include_adjacency: "true",
    //   categories_filter_ids: "class::2,class::4,free_cancellation::1",
    //   children_ages: "5,0",
    // },
    headers: {
      "X-RapidAPI-Key": `f23e72a0e7msh8de41fb4d1b5a75p1114c0jsnefad16cc8a1d`,
      "X-RapidAPI-Host": `booking-com.p.rapidapi.com`,
    },
  };
  try {
    // console.log(cotext);
    const response = await fetch(url, options);
    const data = await response.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: null,
      },
    };
  }
};

export default Search;
