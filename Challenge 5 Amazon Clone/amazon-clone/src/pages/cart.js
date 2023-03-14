import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";

const Cart = () => {
  const router = useRouter();
  const { cartItems, setCartItems, userDetails } = useContext(UserContext);
  useEffect(() => {
    if (!userDetails) {
      router.push("/signin");
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  return (
    <div className="h-[50vh] w-full border-solid border-2 text-white bg-black">
      {cartItems &&
        cartItems.map((item) => (
          <div key={item.title}>
            {item.quantity > 0 && (
              <>
                {" "}
                {item.title} = {item.quantity}
              </>
            )}
          </div>
        ))}
      <div></div>
    </div>
  );
};

export default Cart;
