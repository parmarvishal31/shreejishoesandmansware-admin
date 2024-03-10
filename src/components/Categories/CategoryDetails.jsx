import React from "react";
import { MdCloudUpload } from "react-icons/md";
import { useParams } from "react-router-dom";
import ToogleBtn from "../../utils/ToogleBtn";
import { FaEdit } from "react-icons/fa";

function CategoryDetails() {
  const { id } = useParams();
  return (
    <div className="text-black">
      <h1>CategoryDetails</h1>
      <div className=" h-full  mt-2 p-2 rounded-md  grid sm:grid-cols-12 sm:gap-4 grid-cols-1">
        <div
          className="sm:col-span-3 h-full flex flex-col justify-center items-center gap-2 max-h-56 col-span-2 p-2 overflow-auto"
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
        >
          {/* icon */}
          <div className="avatar">
            <div className="w-32 rounded-md overflow-hidden">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          {/* btn */}
          <button
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <MdCloudUpload className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            Change Icon
          </button>
        </div>
        <div
          className="mt-1 sm:mt-0 h-fit col-span-9 text-black  p-2 overflow-auto"
          style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
        >
          <div className="flex gap-10  justify-start items-center h-full">
            <div className="flex flex-col">
              <span className="sm:m-2">Name</span>
              <span className="sm:m-2">Total Products </span>
              <span className="sm:m-2">Active </span>
            </div>
            <div className="flex flex-col">
              <span className="sm:m-2">: Shose</span>
              <span className="sm:m-2">: 120</span>
              <span className="sm:m-2 flex gap-2 ">
                <span>:</span> <ToogleBtn />
              </span>
            </div>
          </div>
          {/* save btn */}
          <button
            type="button"
            className="inline-flex items-center mt-4 gap-x-1.5 rounded-md bg-indigo-600 px-2.5 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <FaEdit className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryDetails;
