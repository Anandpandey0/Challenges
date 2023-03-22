import {
  MinusCircleIcon,
  PlusCircleIcon,
  StarIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import handleAddToCart from "../../utils/addItemsToCart";

const Card = ({
  image,
  rating,
  rateCount,
  category,
  title,
  productDetails,
}) => {
  const router = useRouter();
  const { userDetails, cartItems, setCartItems } = useContext(UserContext);
  const [sessionCartItems, setSessionCartItems] = useState([]);

  async function addToCart(product, quantityToAdd = 1) {
    const userEmail = userDetails.email;
    const index = cartItems.findIndex((item) => item.id === product.id);
    if (index === -1) {
      const updatedCartItems = [
        ...cartItems,
        { ...product, quantity: quantityToAdd },
      ];

      const data = await handleAddToCart(userEmail, updatedCartItems);
      localStorage.setItem("cartItemsInfo", JSON.stringify(data.cartItems));
      const cartItemsInfo = localStorage.getItem("cartItemsInfo");
      setSessionCartItems(JSON.parse(cartItemsInfo));

      setCartItems(updatedCartItems);
    } else {
      const updatedCartItems = [...cartItems];

      updatedCartItems[index].quantity += quantityToAdd;
      // existingCartItems.push(updatedCartItems);
      // localStorage.setItem("cartItems", JSON.stringify(existingCartItems));

      const data = await handleAddToCart(userEmail, updatedCartItems);
      localStorage.setItem("cartItemsInfo", JSON.stringify(data.cartItems));
      const cartItemsInfo = localStorage.getItem("cartItemsInfo");
      setSessionCartItems(JSON.parse(cartItemsInfo));
      setCartItems(updatedCartItems);
    }
  }
  function increaseQuantity(product) {
    addToCart(product, 1);
  }

  function decreaseQuantity(product) {
    const index = cartItems.findIndex((item) => item.id === product.id);
    const updatedCartItems = [...cartItems];
    if (updatedCartItems[index].quantity > 0) {
      addToCart(product, -1);
    }
  }

  return (
    <div className="border-black border-2 border-solid  h-[50vh]  lg:w-full lg:h-[85vh] ">
      <div className="h-4/5  relative flex flex-col">
        <Image src={image} alt="Image" fill className="object-fill" />
      </div>
      <div className="flex items-center justify-between ">
        <div className="text-sm lg:text-base  mt-2 px-4 font-semibold">
          {title.length > 25 ? title.slice(0, 25) + "..." : title}
        </div>
        <div className="flex items-center px-2 ">
          <StarIcon className="h-5" />
          {rating.rate}({rateCount})
        </div>
      </div>

      <div className="category text-sm lg:text-base  mt-2 px-4 ">
        {category.charAt(0).toUpperCase() + category.slice(1)}
      </div>
      <div className="flex justify-between items-center mt-2">
        <button
          className="bg-yellow-400 ml-2 w-1/2"
          onClick={() => addToCart(productDetails)}
        >
          Add to cart
        </button>

        <div className="flex items-center ">
          {cartItems.find((cartItem) => cartItem.title === title)?.quantity >
            0 && (
            <>
              <button onClick={() => increaseQuantity(productDetails)}>
                <PlusCircleIcon className="h-8" />
              </button>
              <p>
                {cartItems.find((cartItem) => cartItem.title === title)
                  ?.quantity || 0}
              </p>
              <button onClick={() => decreaseQuantity(productDetails)}>
                <MinusCircleIcon className="h-8" />
              </button>
            </>
          )}
        </div>
        {/* {console.log(data.cartItems)} */}
      </div>
    </div>
  );
};

export default Card;
