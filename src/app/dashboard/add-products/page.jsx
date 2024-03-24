const AddProducts = () => {
  return (
    <div className="max-w-6xl ">
      <h2 className="text-3xl text-[#495057] font-semibold mb-5">
        Add New Product
      </h2>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <div className="bg-white border-primary/50 border-solid border rounded-lg py-5">
            <p className="text-[#495057] font-medium px-5 border-b border-solid border-slate-300 pb-5 mb-5 text-lg">
              Basic Info
            </p>
            <div className="px-5">
              <form>
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
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <div className="bg-white">
            <p>Media</p>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
