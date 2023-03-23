import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";

const Stats = () => {
  const { userDetails } = useContext(UserContext);
  const [userCount, setUserCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    async function fetchStats() {
      const response = await fetch("/api/getStats");
      const data = await response.json();
      setUserCount(data.userCount);
      setOrderCount(data.orderCount);
    }

    fetchStats();
  }, []);
  const router = useRouter();
  useEffect(() => {
    if (userDetails) {
      if (userDetails.email != "admin@admin.admin") {
        router.push("/");
      }
    }
  }, [userDetails, router]);

  return (
    <div className="bg-gray-400 h-[100vh] w-full overflow-y-hidden">
      <div className="bg-gray-400 p-4 flex flex-col mt-8 ">
        <h1 className="text-2xl font-bold mx-auto">Stats </h1>
        <div className="flex border-2 border-solid border-black  bg-white mt-4 w-full lg:w-1/2 mx-auto items-center">
          <div className="border-r-2 border-black border-solid font-semibold p-4 w-1/2">
            Total Users Registered
          </div>
          <div className=" font-semibold p-4 w-1/2 flex justify-center">
            {userCount}
          </div>
        </div>
        <div className="flex border-2 border-solid border-black  bg-white mt-4 w-full lg:w-1/2 mx-auto">
          <div className="border-r-2 border-black border-solid font-semibold p-4 w-1/2">
            Total Order Placed
          </div>
          <div className=" font-semibold p-4 w-1/2 flex justify-center">
            {orderCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
