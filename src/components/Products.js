import React from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  //console.log(products);
  const highrated = products.filter((product) => product.rating > 4.8);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-center">Featured Products</h1>
      </div>
      <div className="max-w-screen-xl mx-auto py-10  gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {highrated.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
