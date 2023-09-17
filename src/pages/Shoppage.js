import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";
import Shop from "../components/Shop";

const Shoppage = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Shop products={products} />
    </div>
  );
};

export default Shoppage;
