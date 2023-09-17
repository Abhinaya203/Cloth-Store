import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/clothSlice";
import { ToastContainer, toast } from "react-toastify";

const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  // let [baseQty, setBaseQty] = useState(1);
  const Location = useLocation();
  useEffect(() => {
    setDetails(Location.state.item);
  }, [Location]);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[550px] object-cover"
            src={details.image}
            alt="proimg"
          />
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold">{details.title}</h2>
            <div className="flex items-center  gap-4 mt-3">
              <p className="line-through font-base text-grey-500">
                ${details.oldPrice}
              </p>
              <p className="text-2xl font-medium text-frey-900">
                ${details.price}
              </p>
            </div>
          </div>
          <p className="text-base text-grey-500 -mt-3">{details.description}</p>
          <p className="text-base text-grey-500 -mt-3 font-medium capitalize">
            Rating: {details.rating}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: 1,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className="bg-black text-white py-3 px-6"
            >
              Add to Cart
            </button>
          </div>
          <p className="text-base text-grey-500">
            Category:{" "}
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>
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

export default Product;
