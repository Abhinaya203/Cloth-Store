import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { productsData } from "./api/Api";
import Product from "./components/Product";
import Orders from "./pages/Orders";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Login from "./pages/Login";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Jew from "./pages/Jew";
import Shoe from "./pages/Shoe";
import Shoppage from "./pages/Shoppage";

// const Loader=productsData;
const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/women",
        element: <Women />,
        loader: productsData,
      },
      {
        path: "/men",
        element: <Men />,
        loader: productsData,
      },
      {
        path: "/jew",
        element: <Jew />,
        loader: productsData,
      },
      {
        path: "/shoe",
        element: <Shoe />,
        loader: productsData,
      },
      {
        path: "/shop",
        element: <Shoppage />,
        loader: productsData,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
