"use client";

import { Tabs, Tab, Card, CardBody, Image } from "@nextui-org/react";
import { FaCheckCircle } from "react-icons/fa";
import { FaPlay, FaRegStar, FaStar } from "react-icons/fa6";
import Rating from "react-rating";

const InformationTabs = () => {
  return (
    <div className="flex w-full flex-col">
      <Tabs
        classNames={{
          base: "text-center justify-center border-b border-solid border-gray",
          tabList: "pb-0 gap-6",
          cursor: "w-full bg-primary",

          tabContent: "group-data-[selected=true]:text-primary",
          //   tab: "grid grid-cols-4 gap-36",
        }}
        variant="underlined"
        aria-label="Dynamic tabs"
      >
        <Tab className="" title={"Description"}>
          <Card>
            <CardBody className="text-[#808080] flex flex-row gap-32 px-6 py-6">
              <div className="basis-1/2">
                <p>
                  Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet
                  at posuere ac, viverra at mauris. Maecenas tincidunt ligula a
                  sem vestibulum pharetra. Maecenas auctor tortor lacus, nec
                  laoreet nisi porttitor vel. Etiam tincidunt metus vel dui
                  interdum sollicitudin. Mauris sem ante, vestibulum nec orci
                  vitae, aliquam mollis lacus. Sed et condimentum arcu, id
                  molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a
                  convallis. Morbi urna ipsum, placerat quis commodo quis,
                  egestas elementum leo. Donec convallis mollis enim. Aliquam id
                  mi quam. Phasellus nec fringilla elit.
                </p>
                <p>
                  Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
                  dui. Sed iaculis, metus faucibus elementum tincidunt, turpis
                  mi viverra velit, pellentesque tristique neque mi eget nulla.
                  Proin luctus elementum neque et pharetra.{" "}
                </p>
                <div className="flex flex-col gap-4 my-5">
                  <p className="flex gap-3 items-center">
                    {" "}
                    <span>
                      <FaCheckCircle className="text-primary text-2xl" />
                    </span>{" "}
                    100 g of fresh leaves provides.
                  </p>
                  <p className="flex gap-3 items-center">
                    {" "}
                    <span>
                      <FaCheckCircle className="text-primary text-2xl" />
                    </span>{" "}
                    Aliquam ac est at augue volutpat elementum.
                  </p>
                  <p className="flex gap-3 items-center">
                    {" "}
                    <span>
                      <FaCheckCircle className="text-primary text-2xl" />
                    </span>{" "}
                    Quisque nec enim eget sapien molestie.
                  </p>
                  <p className="flex gap-3 items-center">
                    {" "}
                    <span>
                      <FaCheckCircle className="text-primary text-2xl" />
                    </span>{" "}
                    Proin convallis odio volutpat finibus posuere.
                  </p>
                </div>
                <p>
                  Nulla mauris tellus, feugiat quis pharetra sed, gravida ac
                  dui. Sed iaculis, metus faucibus elementum tincidunt, turpis
                  mi viverra velit, pellentesque tristique neque mi eget nulla.
                  Proin luctus elementum neque et pharetra.{" "}
                </p>
              </div>

              <div className="basis-1/2">
                <div className="relative">
                  <Image
                    className="w-full"
                    src="/assets/Products/description.png"
                    alt=""
                  />
                  <div className="absolute w-12 h-12 top-1/2 -translate-x-1/2 left-1/2 right-0 bg-primary  leading-12 flex justify-center items-center rounded-full z-50">
                    <FaPlay className=" text-white text-3xl " />
                  </div>
                </div>
                <div className="border-[#E6E6E6] border-solid border rounded px-5 py-6 mt-6">
                  <div className="flex gap-5">
                    <div className="flex gap-5">
                      <Image src="/assets/Products/price-tag.png" alt="" />
                      <div>
                        <h4 className="font-bold text-sm text-text-color">
                          upto 64% Discount
                        </h4>
                        <p className=" text-xs text-[#808080]">
                          Save your 64% money with us
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-5">
                      <Image src="/assets/Products/leaf.png" alt="" />
                      <div>
                        <h4 className="font-bold text-sm text-text-color">
                          100% Organic
                        </h4>
                        <p className=" text-xs text-[#808080]">
                          100% Organic Vegetables
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab title={"Additional Information"}>
          <Card>
            <CardBody>
              <div className="flex gap-32 px-5 py-6">
                <div className="text-[#808080] basis-1/2">
                  <div className="flex flex-col gap-4">
                    <p className="flex gap-10 text-[#808080]">
                      <span className="font-medium text-text-color max-w-28 w-full ">
                        Weight:
                      </span>
                      03
                    </p>
                    <p className="flex gap-10 text-[#808080]">
                      <span className="font-medium text-text-color  max-w-28 w-full ">
                        Color:
                      </span>
                      Green
                    </p>
                    <p className="flex gap-10 text-[#808080]">
                      <span className="font-medium text-text-color max-w-28 w-full ">
                        Type:
                      </span>
                      Organic
                    </p>
                    <p className="flex gap-10 text-[#808080]">
                      <span className="font-medium text-text-color max-w-28 w-full ">
                        Category:
                      </span>
                      Vegetables
                    </p>
                    <p className="flex gap-10 text-[#808080]">
                      <span className="font-medium text-text-color max-w-28 w-full ">
                        Stock Status:
                      </span>
                      Available (5,413)
                    </p>
                    <p className="flex gap-10 text-[#808080]">
                      <span className="font-medium text-text-color max-w-28 w-full ">
                        Tags:
                      </span>
                      Vegetables, Healthy,
                    </p>
                  </div>
                </div>
                <div className="basis-1/2">
                  <div className="relative">
                    <Image
                      className="w-full"
                      src="/assets/Products/description.png"
                      alt=""
                    />
                    <div className="absolute w-12 h-12 top-1/2 -translate-x-1/2 left-1/2 right-0 bg-primary  leading-12 flex justify-center items-center rounded-full z-50">
                      <FaPlay className=" text-white text-3xl " />
                    </div>
                  </div>
                  <div className="border-[#E6E6E6] border-solid border rounded px-5 py-6 mt-6">
                    <div className="flex gap-5">
                      <div className="flex gap-5">
                        <Image src="/assets/Products/price-tag.png" alt="" />
                        <div>
                          <h4 className="font-bold text-sm text-text-color">
                            upto 64% Discount
                          </h4>
                          <p className=" text-xs text-[#808080]">
                            Save your 64% money with us
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-5">
                        <Image src="/assets/Products/leaf.png" alt="" />
                        <div>
                          <h4 className="font-bold text-sm text-text-color">
                            100% Organic
                          </h4>
                          <p className=" text-xs text-[#808080]">
                            100% Organic Vegetables
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
        <Tab className="" title={"Customer Feedback"}>
          <Card>
            <CardBody>
              <div className="flex gap-36 px-5 py-6">
                <div className="basis-1/2">
                  <div className="border-b border-solid border-slate-300 pb-2 mb-5">
                    <div className="flex gap-3">
                      <Image src="/assets/Products/review.png" alt="" />
                      <div>
                        <h4>Kristin Watson</h4>
                        <Rating
                          className="text-[#FF8A00]"
                          fullSymbol={<FaStar />}
                          emptySymbol={<FaRegStar />}
                          initialRating={5}
                          readonly={true}
                        />
                      </div>
                      <p className="ml-auto text-sm text-[#808080]">
                        2 min ago
                      </p>
                    </div>
                    <p className="text-sm text-[#808080] mt-3">
                      Duis at ullamcorper nulla, eu dictum eros.
                    </p>
                  </div>
                </div>
                <div className="basis-1/2">
                  <form className="space-y-4">
                    <div className="flex items-center">
                      <label
                        className="mr-6 max-w-[100px] w-full inline-block"
                        htmlFor=""
                      >
                        Your Rating:
                      </label>
                      <Rating
                        className="text-[#FF8A00]"
                        fullSymbol={<FaStar />}
                        emptySymbol={<FaRegStar />}
                        initialRating={4.5}
                        onChange={(rate) => alert(rate)}
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        className="mr-6 max-w-[100px] w-full inline-block"
                        htmlFor="name"
                      >
                        Name:
                      </label>
                      <input
                        className="border w-full border-solid border-slate-200 outline-0 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="flex items-center">
                      <label
                        className="mr-6 max-w-[100px] w-full inline-block"
                        htmlFor="name"
                      >
                        Your Review:
                      </label>
                      <textarea
                        className="border w-full border-solid border-slate-200 outline-0 px-4 py-2 rounded-md"
                        type="text"
                        placeholder="Enter your Review"
                        cols={40}
                      ></textarea>
                    </div>
                    <button
                      className="text-white bg-primary rounded-full px-5 py-3 font-bold"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
};

export default InformationTabs;
