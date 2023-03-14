import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (userInfo) {
      setUserDetails(JSON.parse(userInfo));
    }
  }, []);
  const [cartItems, setCartItems] = useState([]);

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setUserDetails,
        cartItems,
        setCartItems,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
