import Image from "next/image";
import { Button } from "@nextui-org/react";
const AddCategory = () => {
  return (
    <div className="max-w-7xl ">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-3xl text-[#495057] font-semibold mb-5">
          Add New Category
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
                    htmlFor="categoryName"
                    className="block text-sm font-normal text-gray-700 mb-2"
                  >
                    Category Name
                  </label>
                  <input
                    className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                    type="text"
                    name=""
                    id=""
                    placeholder="Type here.."
                  />
                </div>
                <label
                  htmlFor="categoryName"
                  className="block text-sm font-normal text-gray-700 mb-2"
                >
                  Select Parent Category
                </label>
                <select
                  className="py-3 px-5 rounded-md border-solid border-slate-100 bg-slate-200 w-full  outline-1 outline-primary focus:border-primary"
                  defaultValue={"select Parent Category"}
                  name=""
                  id=""
                >
                  <option value="bdt">BDT</option>
                  <option value="usd">USD</option>
                  <option value="eur">EUR</option>
                </select>
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCategory;
