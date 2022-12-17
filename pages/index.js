import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Login from "./login";
import MyTestCart from "../components/MyTestCart";
import Navbar from "../components/Navbar";
import PizzaSection from "../components/PizzaSection";
import { useStateValue } from "../components/StateProvider";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../components/config/firebase";
import { useEffect } from "react";

export default function Home() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    console.log(`I am on App component!!`);

    onAuthStateChanged(auth, (authUser) => {
      console.log(`The user is: ${JSON.stringify(authUser)}`);
      if (authUser) {
        console.log(`Came in App component to dispatch new user to datalayer`);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        console.log(`Came in App component to signout`);
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [auth]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>

      <main>
        {/* <Login /> */}
        {/* <MyTestCart /> */}
        {/* <Navbar /> */}
        <Hero />
        <PizzaSection />
      </main>

      <footer></footer>
    </div>
  );
}
