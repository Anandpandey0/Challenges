import {
  MinusCircleIcon,
  PlusCircleIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { UserContext, UserProvider } from "../../context/userContext";
import Card from "./Card";

const Explore = () => {
  const [products, setProducts] = useState([]);
  const { cartItems } = useContext(UserContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className=" grid grid-cols-1   lg:grid-cols-3 h-fit    absolute top-[30rem] lg:top-[25rem] w-[90%] gap-4 gap-y-16  mx-4  lg:mx-14">
      {/* {console.log(cartItems)} */}

      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          image={product.image}
          rating={product.rating.rate}
          rateCount={product.rating.count}
          category={product.category}
          title={product.title}
        />
      ))}
      {console.log(cartItems)}
    </div>
  );
};

export default Explore;
