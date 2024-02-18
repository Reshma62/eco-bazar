"use client";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";
const Topbar = () => {
  const language = ["Ban", "Eng"];
  const currency = ["USD", "BDT", "Euro"];
  return (
    <div className="container flex md:flex-row md:gap-0 gap-5 flex-col justify-between md:items-center text-gray text-xs py-4 border-b border-solid border-gray ">
      <div className="flex gap-2  items-center">
        <CiLocationOn />
        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          {" "}
          <select
            defaultValue={"Eng"}
            className="max-w-xs bg-transparent outline-0"
          >
            {language.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select
            defaultValue={"USD"}
            className="max-w-xs outline-0 bg-transparent"
          >
            {currency.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Link href={"/login"}>SignUp </Link>/{" "}
          <Link href={"/singin"}>SignIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
