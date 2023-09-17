import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import Wproducts from "../components/Wproducts";

const Women = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Wproducts products={products} />
    </div>
  );
};

export default Women;
