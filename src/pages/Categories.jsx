import React, { useEffect } from "react";
import CategoriesTable from "../components/Categories/CategoriesTable";
import { getAllCategories } from "../api/categories";
import { useQuery } from "@tanstack/react-query";
import Infino from "../components/Spinner/Infino";

function Categories() {
  const token = localStorage.getItem("token");
  const getAllCategory = async () => {
    const res = await getAllCategories(token);
    return res.data;
  };
  const {
    isPending,
    error,
    data: categories,
  } = useQuery({
    queryKey: ["Categories"],
    queryFn: getAllCategory,
  });
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
      {isPending ? (
        <div className="w-full mt-10 flex justify-center items-center text-black">
          <Infino />
        </div>
      ) : (
        <CategoriesTable categories={categories.data} />
      )}
    </div>
  );
}

export default Categories;
