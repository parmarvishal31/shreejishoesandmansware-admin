import React from "react";
import Layout from "../components/Layout";
import { Typography } from "@mui/material";
import CategoriesTable from "../components/categories/CategoriesTable";

function Categories() {
  return (
    <Layout title="Categories">
      <hr />
      <div className="mt-4">
        <div className="w-full h-12 bg-slate-300"></div>
        <div>
          <CategoriesTable />
        </div>
      </div>
    </Layout>
  );
}

export default Categories;
