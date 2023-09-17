import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import Jrpoducts from "../components/Jrpoducts";

const Jew = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Jrpoducts products={products} />
    </div>
  );
};

export default Jew;
