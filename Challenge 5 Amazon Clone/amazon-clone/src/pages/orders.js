import Header from "@/components/header";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import getCartItemsByEmail from "../../utils/orderList";

const Orders = () => {
  const { userDetails, cartItems } = useContext(UserContext);
  const [orderList, setOrderList] = useState([]);
  const [noOrderStatus, setNoOrderStatus] = useState(false);

  const orderListHandler = async () => {
    if (userDetails) {
      const userEmail = userDetails.email;
      const data = await getCartItemsByEmail(userEmail);
      if (data.data.length === 1) {
        setNoOrderStatus(true);
      } else {
        setOrderList(data);
        // return data;
      }
    }

    // setCartItems([]);
    // router.push("/orders");
    // console.log(data);
  };
  // orderListHandler();
  useEffect(() => {
    orderListHandler();
  }, []);

  // orderListHandler();

  return (
    <div className="bg-gray-300 h-screen">
      <Header />

      {/* {console.log(userDetails)} */}
      <div className="flex ">
        <div className="w-full lg:w-4/5  h-fit border-1 border-gray-200 bg-white lg:mt-8 lg:ml-4 lg:p-8 ">
          {/* {console.log(cartItems)} */}
          <h1 className="lg:m-4 m-2 text-3xl font-semibold">Orders Placed </h1>
          {noOrderStatus ? (
            <div className="p-2">No order Placed</div>
          ) : (
            <>
              {orderList.data &&
                orderList.data.map((item) => (
                  <div
                    key={item.title}
                    className="flex justify-between w-full h-[15vh]  p-2 lg:m-4 my-4 lg:my-0 items-center border-2 border-solid border-black"
                  >
                    <div>{item.title}</div>
                    <div>
                      <div>Quantity:{item.quantity}</div>
                      <div>{item.date}</div>
                    </div>
                  </div>
                ))}
            </>
          )}

          {/* {console.log(typeof orderList)} */}
        </div>
      </div>
    </div>
  );
};

export default Orders;
