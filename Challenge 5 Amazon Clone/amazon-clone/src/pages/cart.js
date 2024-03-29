import Header from "@/components/header";
import {
  CheckCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";
import handleAddToCart from "../../utils/addItemsToCart";

const Cart = () => {
  const router = useRouter();
  const { cartItems, userDetails, filteredCartItems, setCartItems } =
    useContext(UserContext);
  useEffect(() => {
    if (!userDetails) {
      router.push("/signin");
    }
  }, []);

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    for (let i = 0; i < cartItems.length; i++) {
      let itemPrice = cartItems[i].quantity * cartItems[i].price;
      totalPrice += itemPrice;
    }

    return totalPrice;
  };
  const totalPrice = calculateTotalPrice();

  const orderHandler = async () => {
    const userEmail = userDetails.email;
    await handleAddToCart(userEmail, filteredCartItems);
    // console.log(data);
    setCartItems([]);
    router.push("/orders");
    // console.log(data);
  };

  return (
    <div className="bg-gray-300 h-screen">
      <Header />
      {/* {console.log(cartItems)} */}
      <div className="flex w-full flex-col-reverse lg:flex-row  ">
        <div className="lg:w-2/3  h-fit border-1 border-gray-200 bg-white  mt-8 lg:ml-4 p-8 ">
          {/* {console.log(cartItems)} */}
          <h1 className="m-4 text-3xl font-semibold">Shopping Cart </h1>

          {filteredCartItems.map((item) => (
            <>
              <div
                key={item.title}
                className="flex justify-between w-full h-[20vh] mt-8 items-center lg:items-start "
              >
                <div className="flex w-2/3 h-full  items-center lg:items-start  ">
                  <div className="h-full lg:w-1/3 w-2/3 relative">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <div className="ml-2 lg:ml-0">{item.title}</div>
                    <div className="border-2 border-solid border-gray-400 w-fit px-2 ml-2 lg:ml-0">
                      Qty : {item.quantity}
                    </div>
                  </div>
                </div>
                <div className="font-bold ">
                  ` &#8377;` {item.quantity * item.price}
                </div>
              </div>
              <hr className=" mt-2 border-1 boder-solid border-black" />
            </>
          ))}

          <div className="float-right font-semibold hidden lg:block">
            {" "}
            Subtotal ({cartItems.length} item) Total Price :{" "}
            <span className="font-bold"> `&#8377;` {totalPrice}</span>
          </div>
        </div>
        <div className="lg:w-1/4  h-fit border-1 border-gray-200 bg-white mt-8 lg:ml-4 p-8 ">
          <div className="flex items-center ">
            <CheckCircleIcon className="h-[50px]  text-green-800" />
            <div className="text-xs">
              Your order is eligible for FREE Delivery. Select this option at
              checkout. Details
            </div>
          </div>
          <div className=" font-semibold">
            {" "}
            Subtotal ({cartItems.length} item) Total Price :{" "}
            <span className="font-bold"> `&#8377;` {totalPrice}</span>
          </div>
          <button
            className="bg-yellow-400 p-1 text-sm font-semibold mt-2 rounded-xl w-full"
            onClick={orderHandler}
          >
            Proceed to Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
