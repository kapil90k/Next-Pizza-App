import React, { useState } from "react";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../components/config/firebase";

function Login() {
  const router = useRouter();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(`Inside handle login ${e}`);
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((auth) => {
        if (auth) {
          router.push("/success");
        }
      })
      .catch((error) => error.message);
  };

  return (
    <div className="">
      <div className="absolute rounded-lg flex flex-col gap-6 bg-red-50 border-green-500 left-[40%] top-[20%] w-[440px] h-auto ">
        <div className="w-full text-center rounded-t-lg text-lg text-white bg-green-400 py-2 font-semibold">
          Sign In Page
        </div>
        <form onSubmit={handleLogin}>
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
              type="email"
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
                  password: e.target.value,
                });
                console.log(`password: ${JSON.stringify(data)}`);
              }}
              type="password"
              placeholder="password"
              className="outline-none bg-transparent"
            ></input>
          </div>
          <button
            type="submit"
            className="bg-slate-200 font-semibold rounded-b-lg py-2  w-full text-center"
          >
            LogIn
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
