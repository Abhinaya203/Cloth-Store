import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseIcon from "@mui/icons-material/Close";
import {
  decrementQuantity,
  deleteItem,
  incrementQuantity,
  resetCart,
} from "../redux/clothSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const CartItem = () => {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.cloth.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full">
        <h2 className="text-2xl">Shopping Cart</h2>
      </div>
      <div>
        {productData.map((item) => {
          return (
            <div
              key={item._id}
              className=" items-center justify-between gap-6 mt-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5"
            >
              <div className="flex items-center gap-2 ">
                <CloseIcon
                  onClick={() =>
                    dispatch(deleteItem(item._id)) &
                    toast.error(`${item.title} is removed`)
                  }
                  className="text-xl text-grey-600 hover:text-red-600 cursor-pointer duration-300"
                />
                <img
                  className="w-32 h-32 object-cover"
                  src={item.image}
                  alt="cartimg"
                />
              </div>
              <h2 className="w-52">{item.title}</h2>
              <p className="w-10">${item.price}</p>
              <div className="w-52 flex items-center justify-between text-grey-500 gap-4 border p-3">
                <p className="text-sm">Quantity</p>
                <div className="flex items-center gap-4 font font-semibold">
                  <span
                    // setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                    onClick={() =>
                      //   setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                      dispatch(
                        decrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-grey-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    -
                  </span>
                  <span>{item.quantity}</span>
                  <span
                    // onClick={() => setBaseQty(baseQty + 1)}
                    onClick={() =>
                      //   setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)
                      dispatch(
                        incrementQuantity({
                          _id: item._id,
                          title: item.title,
                          image: item.image,
                          price: item.price,
                          quantity: 1,
                          description: item.description,
                        })
                      )
                    }
                    className="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-grey-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                  >
                    +
                  </span>
                </div>
              </div>
              <p className="w-14 px-10">${item.quantity * item.price}</p>
            </div>
          );
        })}
      </div>
      <button
        onClick={() =>
          dispatch(resetCart()) & toast.error("Your Cart is Empty!")
        }
        className="bg-red-500 text-white mt-8 ml-7 py-1 px-6 hover:bg-red-800 duration-300"
      >
        Reset Cart
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-grey-400 hover:text-black duration-300">
          <span>
            {" "}
            <ArrowBackIcon />
          </span>
          go Shopping
        </button>
      </Link>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default CartItem;
