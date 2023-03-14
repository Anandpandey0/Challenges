import { ChakraProvider } from "@chakra-ui/react";
import styles from "../styles/globals.css";
import { UserProvider } from "../../context/userContext";

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </UserProvider>
  );
}
