import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/clothSlice";
import { ToastContainer, toast } from "react-toastify";

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group relative">
      <div className="w-full h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="img"
        />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 text-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-frey-500">{product.oldPrice}</p>
              <p className="font-semibold">{product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} is added`)
              }
              className="absolute z-20 w-[100px] text-grey-500 hover:text-grey-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 "
            >
              add to cart{" "}
              <span>
                <ArrowForwardIcon />
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <p>{product.category}</p>
          <p
            className="justify-end w-28 bg-slate-600 items-center text-white px-2 cursor-pointer"
            onClick={handleDetails}
          >
            View Details
          </p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && (
            <p className="bg-black text-white font-semibold px-6 py-1">Sale</p>
          )}
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

export default ProductsCard;