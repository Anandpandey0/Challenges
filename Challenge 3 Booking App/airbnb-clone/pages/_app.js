import "@/styles/globals.css";
import { BookingProvider } from "../contexts/BookingContext";

export default function App({ Component, pageProps }) {
  return (
    <BookingProvider>
      <Component {...pageProps} />
    </BookingProvider>
  );
}
