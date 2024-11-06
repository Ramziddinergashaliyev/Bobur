import React from "react";
import "./blog.scss";
import { useGetProductsQuery } from "../../context/api/productApi";

const Blog = () => {
  const { data } = useGetProductsQuery();
  console.log(data);
  return (
    <div>
      <h1 style={{ color: "white" }}>Blog Ramziddin</h1>
    </div>
  );
};

export default Blog;
