"use client";

import Link from "next/link";
import { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiEyeCloseFill } from "react-icons/ri";
const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  return (
    <section className="container">
      <div className="bg-white w-2/5 mx-auto my-20 shadow-inner border border-solid border-slate-300 rounded-xl px-5 py-4">
        <form className="space-y-4">
          <h1 className="font-semibold text-[32px] text-text-color text-center">
            Sign In
          </h1>
          <div className="relative">
            <input
              type="email"
              className="peer py-3 px-4 ps-11 block w-full bg-gray-100 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none  border border-solid outline-0 border-slate-400"
              placeholder="Enter email"
            />
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
              <MdEmail />
            </div>
          </div>
          <div className="relative">
            <input
              type={`${showPass ? "text" : "password"}`}
              className="peer py-3 px-4 ps-11 block w-full bg-gray-100 outline-0 rounded-lg text-sm focus:border-primary focus:ring-primary disabled:opacity-50 disabled:pointer-events-none  border border-solid border-slate-400"
              placeholder="Enter password"
            />
            <div className="absolute inset-y-0 start-0 flex items-center  ps-4 peer-disabled:opacity-50 ">
              <svg
                className="flex-shrink-0 size-4 text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
                <circle cx="16.5" cy="7.5" r=".5" />
              </svg>
            </div>
            <div className="absolute inset-y-0 end-0 flex items-center  pe-4 peer-disabled:opacity-50 ">
              {showPass ? (
                <BsFillEyeFill onClick={() => setShowPass(!showPass)} />
              ) : (
                <RiEyeCloseFill onClick={() => setShowPass(!showPass)} />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white font-medium hover:bg-transparent hover:text-primary hover:border-primary border-2 border-solid border-transparent transition text-lg bg-primary w-full rounded-full py-3 flex items-center gap-3 justify-center"
          >
            Login
          </button>
          <p className="text-[#808080] text-center py-4">
            Don’t have account?{" "}
            <Link href={"/signup"} className="font-semibold text-text-color">
              {" "}
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
