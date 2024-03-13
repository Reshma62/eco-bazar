import { Image } from "@nextui-org/react";

import { TiDeleteOutline } from "react-icons/ti";

const CartPage = () => {
  return (
    <div className="container mt-10">
      <h1 className="text-3xl text-center capitalize font-semibold text-text-color my-6">
        My Shopping Cart
      </h1>
      <div className="grid grid-cols-12 gap-6">
        <div className="flex flex-col col-span-8">
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
                        Product
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
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start  font-medium text-gray-500 uppercase"
                      >
                        Subtotal
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
                        {/* Add to cart button */}
                        <div className="">
                          <div className="border border-slate-400 px-2 py-2 rounded-full flex items-center justify-between ">
                            <button className="text-center bg-[#F2F2F2] w-6 h-6 rounded-full hover:bg-primary hover:text-white transition text-lg font-semibold">
                              +
                            </button>
                            <span>1</span>
                            <button className="text-center bg-[#F2F2F2] hover:bg-primary hover:text-white transition w-6 h-6 rounded-full text-lg font-semibold">
                              -
                            </button>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-start text-sm font-medium ">
                        $70.00
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium ">
                        <TiDeleteOutline
                          size={30}
                          className="text-slate-600 inline-flex items-center  "
                        />
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5} rowSpan={5} className="   px-6 py-3 ">
                        <div className="flex justify-between items-center">
                          {" "}
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold  border border-transparent text-text-color hover:bg-primary bg-slate-100 hover:text-white px-8 py-3 rounded-full capitalize"
                          >
                            Return to shop
                          </button>
                          <button
                            type="button"
                            className="inline-flex items-center gap-x-2 text-sm font-semibold  border border-transparent text-text-color hover:bg-primary hover:text-white bg-slate-100 px-8 py-3 rounded-full capitalize"
                          >
                            Update Cart
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
          <div className="border border-solid border-slate-300 rounded-xl p-5 mt-6">
            <div className="flex gap-6 items-center">
              <h3 className="basis-36">Coupon Code</h3>
              <div className="relative w-full">
                <input
                  className=" w-full  bg-transparent border border-solid border-slate-200 placeholder:text-[#999] rounded-full pl-6 py-[14px] outline-0 text-white"
                  type="text"
                  placeholder="Enter code"
                />
                <button className="bg-[#333333] text-white font-semibold  py-4 px-10 absolute right-0 h-full rounded-full">
                  Apply Coupon
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="border border-solid border-slate-300 rounded-xl p-5 ">
            <h1 className="text-xl  capitalize font-semibold text-text-color my-6">
              Cart Total
            </h1>
            <div className="divide-y-1 divide-solid divide-slate-200 space-y-2 ">
              <div className="flex justify-between items-center py-2">
                <p className="text-[#808080]">Subtotal:</p>
                <p className="text-text-color font-medium">$84.00</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-[#808080]">Shipping:</p>
                <p className="text-text-color font-medium">$84.00</p>
              </div>
              <div className="flex justify-between items-center py-2">
                <p className="text-[#808080]">Total:</p>
                <p className="text-text-color font-medium">$84.00</p>
              </div>
            </div>
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center gap-x-2 text-sm font-semibold border-transparent text-white bg-primary w-full hover:border-primary hover:bg-transparent hover:text-primary border-2 transition duration-300 justify-center  py-3 rounded-full capitalize "
              >
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
