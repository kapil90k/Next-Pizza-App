import Navbar from "../components/Navbar";
import "../styles/globals.css";

import { StateProvider } from "../components/StateProvider";
import reducer, { initialState } from "../components/reducer";
import { useRouter } from "next/router";
import PizzaCard from "../components/PizzaCard";

const noAuthRequired = ["/", "/login", "/signup"];
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Navbar />
      <Component {...pageProps} />
      {/* {noAuthRequired.includes(router.pathname) ? (
        <Component {...pageProps} />
      ) : (
        <ProtectedRoute>
          <Component {...pageProps} />
        </ProtectedRoute>
      )} */}
    </StateProvider>
  );
}

export default MyApp;
