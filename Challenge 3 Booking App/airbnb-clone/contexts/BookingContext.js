import { createContext, useEffect, useState } from "react";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [guestCount, setGuestCount] = useState("1");
  const [locationId, setLocationId] = useState("");

  return (
    <BookingContext.Provider
      value={{
        location,
        setLocation,
        checkInDate,
        checkOutDate,
        setCheckOutDate,
        setCheckInDate,
        guestCount,
        setGuestCount,
        locationId,
        setLocationId,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
