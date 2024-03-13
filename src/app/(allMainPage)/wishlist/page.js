import { Image } from "@nextui-org/react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";

const WishListsPage = () => {
  return (
    <div className="container mt-10">
      <h1 className="text-3xl text-center capitalize font-semibold text-text-color my-6">
        My WishLists
      </h1>
      <div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden border border-solid border-slate-300 rounded-2xl">
                <table className="min-w-full divide-y divide-slate-300 ">
                  <thead>
                    <tr className="uppercase text-base font-medium">
                      <th
                        scope="col"
                        className="px-6 py-3 text-start  font-medium text-gray-500 uppercase"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start font-medium text-gray-500 uppercase"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start  font-medium text-gray-500 uppercase"
                      >
                        stock status
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-end  font-medium text-gray-500 uppercase"
                      ></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700 ">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
                        <div className="flex gap-5 items-center">
                          <Image
                            className="border border-solid border-slate-200 rounded-lg max-w-20 w-full"
                            src="/assets/Shared/Image.png"
                            alt=""
                          />
                          <p>Red Capsicum</p>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        <span> $14.99</span>{" "}
                        <span className="line-through text-slate-400">
                          $20.99
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
                        <button className="text-primary bg-primary/20 px-2 py-1 rounded-md">
                          in stock
                        </button>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium ">
                        <button
                          type="button"
                          className="inline-flex items-center gap-x-2 text-sm font-semibold  border border-transparent text-white bg-primary px-8 py-3 rounded-full capitalize"
                        >
                          Add to cart
                        </button>
                        <TiDeleteOutline
                          size={30}
                          className="text-slate-600 inline-flex items-center ml-4  "
                        />
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <div className="flex items-center gap-2 px-6 py-3 ">
                      <p className="capitalize">share item:</p>
                      <div className="flex items-center ">
                        <div className="bg-transparent hover:bg-primary rounded-full p-3 hover:text-white duration-400 transition-all cursor-pointer text-[#4D4D4D]">
                          <FaFacebookF />
                        </div>
                        <div className="bg-transparent hover:bg-primary rounded-full p-3 hover:text-white duration-400 transition-all cursor-pointer text-[#4D4D4D]">
                          <FaTwitter />
                        </div>
                        <div className="bg-transparent hover:bg-primary rounded-full p-3 hover:text-white duration-400 transition-all cursor-pointer text-[#4D4D4D]">
                          <FaPinterest />
                        </div>
                        <div className="bg-transparent hover:bg-primary rounded-full p-3 hover:text-white duration-400 transition-all cursor-pointer text-[#4D4D4D]">
                          <FaInstagram />
                        </div>
                      </div>
                    </div>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishListsPage;
