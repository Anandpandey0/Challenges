import "@/styles/globals.css";
import { BookingProvider } from "../contexts/BookingContext";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
  return (
    <BookingProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </BookingProvider>
  );
}
