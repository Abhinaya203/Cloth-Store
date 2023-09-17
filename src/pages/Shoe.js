import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import Sproducts from "../components/Sproducts";

const Shoe = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Sproducts products={products} />
    </div>
  );
};
export default Shoe;
