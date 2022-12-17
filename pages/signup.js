import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/config/firebase";
import { useRouter } from "next/router";

function signup() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((cauth) => {
        if (cauth) {
          router.push("/");
        }
      })
      .catch((error) => alert(error.message));
    // Fancy firebase code goes here
  };

  return (
    <div className="">
      <div className="absolute rounded-lg flex flex-col gap-6 bg-red-50 border-green-500 left-[40%] top-[20%] w-[440px] h-auto ">
        <div className="w-full text-center rounded-t-lg text-lg text-white bg-green-400 py-2 font-semibold">
          Sign Up Page
        </div>
        <form onSubmit={handleSignup}>
          <div className="flex py-2  justify-around">
            <label className="text-lg font-semibold">Email</label>
            <input
              onChange={(e) => {
                e.preventDefault();
                setData({
                  ...data,
                  email: e.target.value,
                });
                console.log(`email: ${JSON.stringify(data)}`);
              }}
              type="text"
              placeholder="email"
              className="outline-none bg-transparent"
            ></input>
          </div>
          <div className="flex py-2  justify-around">
            <label className="text-lg font-semibold">Password</label>
            <input
              onChange={(e) => {
                e.preventDefault();
                setData({
                  ...data,
                  email: e.target.value,
                });
                console.log(`email: ${JSON.stringify(data)}`);
              }}
              type="password"
              placeholder="password"
              className="outline-none bg-transparent"
            ></input>
          </div>
          <button className="bg-slate-200 font-semibold rounded-b-lg py-2  w-full text-center">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default signup;
