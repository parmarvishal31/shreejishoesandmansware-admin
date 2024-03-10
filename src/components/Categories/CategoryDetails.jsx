import React from "react";
import { useParams } from "react-router-dom";

function CategoryDetails() {
  const a = useParams();
  console.log("a: ", a);
  return <div>CategoryDetails</div>;
}

export default CategoryDetails;
