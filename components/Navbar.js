import React, { useState } from "react";

import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineCall } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BiCartAlt } from "react-icons/bi";
import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "../components/config/firebase";
import { useStateValue } from "./StateProvider";

function Navbar() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [showBar, setShowBar] = useState(false);

  const logout = async () => {
    dispatch({
      type: "SET_USER",
      user: null,
    });
    // setUser(null)
    await signOut(auth);
  };

  return (
    <div className="">
      <div className="flex top-0 z-10 w-full justify-between items-center bg-orange-600 text-white">
        <div className="flex items-center text-xs">
          <MdOutlineCall
            size={40}
            className="bg-white p-2 text-black m-4 rounded-full"
          />
          <div className="cursor-pointer hover:text-red-900 space-y-1">
            <p>ORDER NOW</p>
            <p>0123456789</p>
          </div>
        </div>
        <div className="flex gap-8 items-center">
          <Link href="/">
            <p className="cursor-pointer hover:text-red-900">Homepage</p>
          </Link>
          <p className="cursor-pointer hover:text-red-900">Products</p>
          <p className="cursor-pointer hover:text-red-900">Menu</p>
          <p className="cursor-pointer hover:text-red-900 text-4xl font-mono">
            Lama
          </p>
          <p className="cursor-pointer hover:text-red-900">Events</p>
          <p className="cursor-pointer hover:text-red-900">Blog</p>
          <p className="cursor-pointer hover:text-red-900">Contact</p>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2">
            <p className="text-sm hover:text-red-900">Hello, {user}</p>
            <Link href="login">
              <p className="text-sm cursor-pointer hover:text-red-900">Login</p>
            </Link>

            <Link href="signup">
              <p className="text-sm cursor-pointer hover:text-red-900">
                Signup
              </p>
            </Link>
            <p
              onClick={logout}
              className="text-sm cursor-pointer hover:text-red-900"
            >
              Logout
            </p>
          </div>
          <Link href="/order">
            <div className="flex mr-4 relative cursor-pointer">
              <BiCartAlt size={30} className="" />
              {basket.length != 0 && (
                <p className="flex absolute top-[-10px] right-[-10px] w-[20px] h-[20px] rounded-full bg-white text-black font-semibold p-3 items-center justify-center">
                  {basket.length}
                </p>
              )}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
