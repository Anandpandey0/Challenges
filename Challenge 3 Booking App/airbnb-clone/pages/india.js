import { useEffect } from "react";
import { searchHotels } from "../utils/explore";

export default function India() {
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
      console.log(response);
    }
    fetchStats();
  }, []);

  //   useEffect(() => {
  // async function () => {
  //        await searchHotels(params);
  //         console.log(data);

  //     };
  //   }, []);

  return (
    <div>
      <button>Search</button>
    </div>
  );
}
