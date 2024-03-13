"use client";

import { Image } from "@nextui-org/react";
import { useState } from "react";

const CheckOutPage = () => {
  const [selectedPayment, setSelectedPayment] = useState("cashOnDelivery");
  const [isShipping, setIsShipping] = useState(false);
  const maxHeight = isShipping ? "1000px" : "0";
  // Function to handle changes in the selected payment method
  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };
  const handleShiping = (e) => {
    setIsShipping(e.target.checked);
  };
  return (
    <div className="container mt-10">
      <h1 className="text-3xl text-center capitalize font-semibold text-text-color my-6">
        CheckOut
      </h1>
      <form>
        <div className="grid grid-cols-12 gap-6">
          {/* Left side billing info */}
          <div className="col-span-8">
            <h2 className="text-lg  capitalize font-semibold text-text-color mb-5">
              Billing Information
            </h2>

            {/*  Name */}
            <div className="grid grid-cols-3 items-center gap-5">
              <div>
                <label className="block mb-2 text-sm" htmlFor="fname">
                  First name
                </label>
                <input
                  className="w-full border placeholder:text-xs border-solid border-slate-300 py-3 outline-0 px-4 rounded-md"
                  type="text"
                  name=""
                  id="fname"
                  placeholder="Your first name.."
                />
              </div>
              <div>
                <label className="block mb-2 text-sm" htmlFor="lname">
                  Last name
                </label>
                <input
                  className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 px-4 rounded-md outline-0"
                  type="text"
                  name=""
                  id="lname"
                  placeholder="Your last name.."
                />
              </div>
              <div>
                <label className="block mb-2 text-sm" htmlFor="cname">
                  Company Name (optional)
                </label>
                <input
                  className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 outline-0 px-4 rounded-md"
                  type="text"
                  name=""
                  id="cname"
                  placeholder="Company name.."
                />
              </div>
            </div>
            {/*  Street address */}
            <div className="grid grid-cols-1 items-center gap-5 mt-6">
              <div>
                <label className="block mb-2 text-sm" htmlFor="email">
                  Street Address
                </label>
                <input
                  className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 px-4 rounded-md outline-0"
                  type="text"
                  name=""
                  id="email"
                  placeholder="Street Address.."
                />
              </div>
            </div>
            {/*  Country state  and zipcode */}
            <div className="grid grid-cols-2 items-center gap-5 mt-6">
              <div className="flex items-center gap-3">
                <div className="basis-7/12">
                  <label className="block mb-2 text-sm" htmlFor="email">
                    Country / Region
                  </label>
                  <select
                    className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 px-4 rounded-md outline-0"
                    name=""
                    id=""
                  >
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>
                <div className="basis-5/12">
                  <label className="block mb-2 text-sm" htmlFor="email">
                    States
                  </label>
                  <select
                    className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 px-4 rounded-md outline-0"
                    name=""
                    id=""
                  >
                    <option value="usa">USA</option>
                    <option value="canada">Canada</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm" htmlFor="phone">
                  Zip code
                </label>
                <input
                  className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 outline-0 px-4 rounded-md"
                  type="text"
                  name=""
                  id="phone"
                  placeholder="Zip code.."
                />
              </div>
            </div>
            {/*  Email and phone */}
            <div className="grid grid-cols-2 items-center gap-5 mt-6">
              <div>
                <label className="block mb-2 text-sm" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 px-4 rounded-md outline-0"
                  type="text"
                  name=""
                  id="email"
                  placeholder="Email Address.."
                />
              </div>
              <div>
                <label className="block mb-2 text-sm" htmlFor="phone">
                  Phone
                </label>
                <input
                  className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 outline-0 px-4 rounded-md"
                  type="text"
                  name=""
                  id="phone"
                  placeholder="Phone number.."
                />
              </div>
            </div>

            <div className="my-6">
              <input
                onChange={handleShiping}
                type="checkbox"
                name=""
                id="anotherShip"
                className="transition-all duration-300"
              />{" "}
              <label className="ml-2" htmlFor="anotherShip">
                Ship to a different address
              </label>
            </div>
            {/* Different ship */}
            <div
              style={{
                transition:
                  "max-height 300ms ease-in-out, transform 300ms ease-in-out",
                maxHeight: maxHeight,
                overflow: "hidden",
                transform: isShipping ? "rotatex(0deg)" : "rotatex(-90deg)",
                transformOrigin: "top",
              }}
            >
              {/*  Street address */}
              <div className="grid grid-cols-1 items-center gap-5 mt-6">
                <div>
                  <label className="block mb-2 text-sm" htmlFor="email">
                    Street Address
                  </label>
                  <input
                    className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 px-4 rounded-md outline-0"
                    type="text"
                    name=""
                    id="email"
                    placeholder="Street Address.."
                  />
                </div>
              </div>
              {/*  Country state  and zipcode */}
              <div className="grid grid-cols-2 items-center gap-5 mt-6">
                <div className="flex items-center gap-3">
                  <div className="basis-7/12">
                    <label className="block mb-2 text-sm" htmlFor="email">
                      Country / Region
                    </label>
                    <select
                      className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 px-4 rounded-md outline-0"
                      name=""
                      id=""
                    >
                      <option value="usa">USA</option>
                      <option value="canada">Canada</option>
                    </select>
                  </div>
                  <div className="basis-5/12">
                    <label className="block mb-2 text-sm" htmlFor="email">
                      States
                    </label>
                    <select
                      className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 px-4 rounded-md outline-0"
                      name=""
                      id=""
                    >
                      <option value="usa">USA</option>
                      <option value="canada">Canada</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block mb-2 text-sm" htmlFor="phone">
                    Zip code
                  </label>
                  <input
                    className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 outline-0 px-4 rounded-md"
                    type="text"
                    name=""
                    id="phone"
                    placeholder="Zip code.."
                  />
                </div>
              </div>
            </div>

            <div className="my-6 border-t border-solid border-slate-300">
              <h3 className="font-bold text-lg mt-4">Additional Info</h3>
              {/*  Order Notes (Optional) */}
              <div className="grid grid-cols-1 items-center gap-5 mt-6">
                <div>
                  <label className="block mb-2 text-sm" htmlFor="email">
                    Order Notes (Optional)
                  </label>
                  <textarea
                    rows={4}
                    className="w-full placeholder:text-xs border border-solid border-slate-300 py-3 px-4 rounded-md outline-0"
                    type="text"
                    name=""
                    id="email"
                    placeholder="Notes about your order, e.g. special notes for delivery"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          {/* Right side order info */}
          <div className="col-span-4">
            <div className="border border-solid border-slate-300 rounded-xl p-5 ">
              <h1 className="text-xl  capitalize font-semibold text-text-color mb-2">
                Order Summery
              </h1>
              {/* product */}
              <div className="divide-y-1 divide-solid divide-slate-200 space-y-2 ">
                <div className="flex justify-between items-center py-2">
                  <div className="flex gap-2.5 items-center">
                    <Image
                      className="border border-solid border-slate-200 rounded-lg max-w-20 w-full"
                      src="/assets/Shared/Image.png"
                      alt=""
                    />
                    <p>Red Capsicum</p>
                    <p>x 5</p>
                  </div>
                  <p className="text-text-color font-medium">$84.00</p>
                </div>
              </div>
              {/* shiping */}
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
              {/*  payment method */}
              <div>
                <h3 className="text-xl  capitalize font-semibold text-text-color my-6">
                  Payment Method
                </h3>
                <div>
                  <div>
                    <label class="flex items-center gap-2 mb-2" for="paypal">
                      <input
                        checked={selectedPayment === "paypal"}
                        onChange={handlePaymentChange}
                        type="radio"
                        name="paymentMethod"
                        id="paypal"
                        value="paypal"
                        class="grid place-content-center appearance-none bg-transparent border border-solid border-primary translate-y-[-0.075em] rounded-full w-5 h-5 before:shadow-inner before:w-3 before:h-3 before:bg-primary before:rounded-full transition-all duration-250 before:scale-0 checked:before:scale-100 hover:border-green-900 cursor-pointer"
                      />
                      PayPal
                    </label>
                    <label
                      class="flex items-center gap-2 mb-2"
                      for="cashOnDelivery"
                    >
                      <input
                        checked={selectedPayment === "cashOnDelivery"}
                        onChange={handlePaymentChange}
                        type="radio"
                        name="paymentMethod"
                        id="cashOnDelivery"
                        value="cashOnDelivery"
                        class="grid place-content-center appearance-none bg-transparent border border-solid border-primary translate-y-[-0.075em] rounded-full w-5 h-5 before:shadow-inner before:w-3 before:h-3 before:bg-primary before:rounded-full transition-all duration-250 before:scale-0 checked:before:scale-100 hover:border-green-900 cursor-pointer"
                      />
                      Cash on Delivery
                    </label>
                    <label class="flex items-center gap-2 mb-2" for="card">
                      <input
                        checked={selectedPayment === "card"}
                        onChange={handlePaymentChange}
                        type="radio"
                        name="paymentMethod"
                        id="card"
                        value="card"
                        class="grid place-content-center appearance-none bg-transparent border border-solid border-primary translate-y-[-0.075em] rounded-full w-5 h-5 before:shadow-inner before:w-3 before:h-3 before:bg-primary before:rounded-full transition-all duration-250 before:scale-0 checked:before:scale-100 hover:border-green-900 cursor-pointer"
                      />
                      Card
                    </label>
                  </div>
                </div>
              </div>
              {/* order button */}
              <div className="mt-5">
                <button
                  type="button"
                  className="inline-flex items-center gap-x-2 text-sm font-semibold border-transparent text-white bg-primary w-full hover:border-primary hover:bg-transparent hover:text-primary border-2 transition duration-300 justify-center  py-3 rounded-full capitalize "
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckOutPage;
