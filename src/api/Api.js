import axios from "axios";

export async function productsData() {
  // const products = await axios.get(
  //   "https://fakestoreapiserver.reactbd.com/products"
  // );
  //const products = await axios.get("http://localhost:5000/prods");
  const products = await axios.get("https://cloth-products.onrender.com/prods");
  return products;
}
