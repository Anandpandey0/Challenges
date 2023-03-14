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

const Card = ({ image, rating, rateCount, category, title }) => {
  const [quantity, setQuantity] = useState(0);
  const router = useRouter();
  const { cartItems, setCartItems, userDetails } = useContext(UserContext);
  const addToCart = (title, quantity) => {
    if (!userDetails) {
      router.push("/signin");
    }
    const existingCartItem = cartItems.find((item) => item.title === title);

    if (existingCartItem) {
      const updatedCartItems = cartItems.map((item) => {
        if (item.title === title) {
          return { ...item, quantity: quantity };
        } else {
          return item;
        }
      });

      setCartItems(updatedCartItems);
    } else {
      const newCartItem = { title, quantity };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const userEmail = userDetails.email;

  const addQuantityHandler = () => {
    setQuantity(quantity + 1);
  };
  const removeQuantityHandler = () => {
    setQuantity(quantity - 1);
    // addToCart(title, quantity);
  };

  async function addItemsToCart(cartItems, userEmail) {
    for (const item of cartItems) {
      try {
        await postToCart({ userEmail, cartItems: [item] });
        console.log(`${item.title} added to cart`);
      } catch (error) {
        console.log(error);
      }
    }
  }
  async function handleAddToCart() {
    await addItemsToCart(cartItems, userEmail);
  }
  //   addToCart();
  useEffect(() => {
    addToCart(title, quantity);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [quantity]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
      // handleAddToCart(userEmail, storedCartItems);
      addItemsToCart(cartItems, userEmail);
    }
  }, []);

  return (
    <div className="border-black border-2 border-solid  h-[50vh]  lg:w-full lg:h-[85vh] ">
      {/* {console.log(userEmail)} */}
      {/* {cartItems && console.log(cartItems.length)} */}
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
          onClick={addQuantityHandler}
        >
          Add to cart
        </button>

        <div className="flex items-center ">
          <button onClick={addQuantityHandler}>
            <PlusCircleIcon className="h-8" />
          </button>
          <p>
            {cartItems.find((cartItem) => cartItem.title === title)?.quantity ||
              0}
          </p>
          <button onClick={removeQuantityHandler}>
            <MinusCircleIcon className="h-8" />
          </button>
        </div>

        {/* {console.log(cartItems)} */}
      </div>
    </div>
  );
};

export default Card;
