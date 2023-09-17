import React from "react";
import ProductsCard from "./ProductsCard";

const Mproducts = ({ products }) => {
  const highrated = products.filter(
    (product) =>
      product.category === "male" ||
      product.category === "Male" ||
      product.category === "men"
  );
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold text-center">Latest Men!</h1>
      </div>
      <div className="max-w-screen-xl mx-auto py-10  gap-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {highrated.map((item) => (
          <ProductsCard key={item._id} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Mproducts;
