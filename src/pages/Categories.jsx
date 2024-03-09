import React from "react";
import CategoriesTable from "../components/Categories/CategoriesTable";

function Categories() {
  return (
    <div>
      <div>
        <input
          className="p-0 w-auto ml-8 mb-3 px-4 text-black"
          type="text"
          name=""
          id=""
          placeholder="Search categore.."
        />
      </div>
      <CategoriesTable />
    </div>
  );
}

export default Categories;
