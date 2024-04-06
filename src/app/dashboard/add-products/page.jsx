"use client";

import { Image, Button } from "@nextui-org/react";
import JoditEditor from "jodit-pro-react";
import { useRef, useState } from "react";

const AddProducts = () => {
  const [tags, setTags] = useState([]);
  const [content, setContent] = useState("");
  const [userInput, setUserInput] = useState("");

  // Handle input onChange

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };
  const editor = useRef(null);
  const config = {
    readonly: false,
    showToolbar: true,
    toolbarButtonSize: "small",
  };
  console.log(content);

  const handleAddTag = (newTag) => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
    }
  };

  const handleRemoveTag = (tag) => setTags(tags.filter((t) => t !== tag));
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission or new line creation

      handleAddTag(userInput);
      setUserInput(""); // Clear the input after adding a tag
    }
  };
  console.log(tags);
  return (
    <div className="max-w-7xl ">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl text-[#495057] font-semibold mb-5">
          Add New Product
        </h2>
        <Button color="primary">Publish</Button>
      </div>

      <form>
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
            <div className="bg-white border-primary/50 border-solid border rounded-lg py-5">
              <p className="text-[#495057] font-medium px-5 border-b border-solid border-slate-300 pb-5 mb-5 text-lg">
                Basic Info
              </p>
              <div className="px-5">
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-normal text-gray-700 mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                    type="text"
                    name=""
                    id=""
                    placeholder="Type here.."
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-normal text-gray-700 mb-2"
                  >
                    Product description
                  </label>
                  <JoditEditor
                    className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                    ref={editor}
                    value={content}
                    config={config}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    // onChange={(newContent) => setContent(newContent)}
                  />
                  {/* <input
                    className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                    type="text"
                    name=""
                    id=""
                    placeholder="Type here.."
                  /> */}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="mb-4">
                    <label
                      htmlFor="productName"
                      className="block text-sm font-normal text-gray-700 mb-2"
                    >
                      Regular Price
                    </label>
                    <input
                      className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                      type="text"
                      name=""
                      id=""
                      placeholder="Type here.."
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="productName"
                      className="block text-sm font-normal text-gray-700 mb-2"
                    >
                      Promotional price
                    </label>
                    <input
                      className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                      type="text"
                      name=""
                      id=""
                      placeholder="Type here.."
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="productName"
                      className="block text-sm font-normal text-gray-700 mb-2"
                    >
                      Currency
                    </label>
                    <select
                      className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                      defaultValue={"select your currency"}
                      name=""
                      id=""
                    >
                      <option value="bdt">BDT</option>
                      <option value="usd">USD</option>
                      <option value="eur">EUR</option>
                    </select>
                    {/* <input
                      className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                      type="text"
                      name=""
                      id=""
                      placeholder="Type here.."
                    /> */}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-normal text-gray-700 mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                    type="text"
                    name=""
                    id=""
                    placeholder="Type here.."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 overflow-hidden">
            {/* Media */}
            <div className="bg-white border-primary/50 border-solid border rounded-lg py-5">
              <p className="text-[#495057] font-medium px-5 border-b border-solid border-slate-300 pb-5 mb-5 text-lg">
                Media
              </p>
              <div className="flex justify-center items-center">
                <Image
                  height={100}
                  width={100}
                  src="/assets/Dashboard/upload.svg"
                  alt="Upload Image"
                  className="mx-auto"
                />
              </div>
              <div className="mx-8">
                <input
                  className="py-3  rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary px-8"
                  type="file"
                />
              </div>
            </div>
            {/* Organization */}
            <div className="bg-white mt-10 border-primary/50 border-solid border rounded-lg py-5">
              <p className="text-[#495057] font-medium px-5 border-b border-solid border-slate-300 pb-5 mb-5 text-lg">
                Organization
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2  gap-6 px-5">
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-normal text-gray-700 mb-2"
                  >
                    Category
                  </label>
                  <select
                    className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                    defaultValue={"select your currency"}
                    name=""
                    id=""
                  >
                    <option value="bdt">BDT</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="productName"
                    className="block text-sm font-normal text-gray-700 mb-2"
                  >
                    Sub Category
                  </label>
                  <select
                    className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                    defaultValue={"select your currency"}
                    name=""
                    id=""
                  >
                    <option value="bdt">BDT</option>
                    <option value="usd">USD</option>
                    <option value="eur">EUR</option>
                  </select>
                </div>
              </div>
              <div className="px-5">
                <label
                  htmlFor="productName"
                  className="block text-sm font-normal text-gray-700 mb-2"
                >
                  Tags
                </label>
                <input
                  name="keyword_tags"
                  type="text"
                  placeholder="add your tags"
                  className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                  onKeyDown={handleKeyPress}
                  onChange={handleInputChange}
                  value={userInput}
                />
                <div className="flex flex-row flex-wrap mt-4">
                  {tags.map((tag, index) => (
                    <span
                      key={`${index}-${tag}`}
                      className="inline-flex items-start justify-start px-3 py-2 rounded-[32px] text-xs shadow-sm font-medium bg-primary/10 text-primary mr-2"
                    >
                      {tag}
                      <button
                        className="ml-2 hover:text-blue-500"
                        onClick={() => handleRemoveTag(tag)}
                        title={`Remove ${tag}`}
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProducts;
