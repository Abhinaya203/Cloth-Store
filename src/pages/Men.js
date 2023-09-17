import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import Mproducts from "../components/Mproducts";

const Men = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Mproducts products={products} />
    </div>
  );
};

export default Men;
