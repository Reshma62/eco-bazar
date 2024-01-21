"use client";
import { CiLocationOn } from "react-icons/ci";
const Topbar = () => {
  const language = ["Ban", "Eng"];
  const currency = ["USD", "BDT", "Euro"];
  return (
    <div className="flex justify-between items-center text-gray text-xs py-4 border-b border-solid border-gray ">
      <div className="flex gap-2  items-center">
        <CiLocationOn />
        <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
      </div>
      <div className="flex gap-5 items-center">
        <div>
          {" "}
          <select defaultValue={"Eng"} className="max-w-xs outline-0">
            {language.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
        <div>
          <select defaultValue={"USD"} className="max-w-xs outline-0">
            {currency.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
