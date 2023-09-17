import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Products from "../components/Products";
import { useLoaderData } from "react-router-dom";
import Category from "../components/Category";

const Home = () => {
  const [products, setProducts] = useState([]);

  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data.data);
  }, [data]);
  return (
    <div>
      <Banner />
      <Category />

      <Products products={products} />
    </div>
  );
};

export default Home;
