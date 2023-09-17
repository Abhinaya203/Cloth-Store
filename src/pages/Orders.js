import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import OrderItem from "../components/OrderItem";

const Orders = () => {
  //const dispatch = useDispatch();

  const orderData = useSelector((state) => state.cloth.orderData);
  console.log(orderData);
  return (
    <div className="max-w-screen-xl mx-auto py-20 flex">
      <div className="w-2/3 pr-10">
        <div className="w-full">
          <h2 className="text-2xl">Your Orders</h2>
        </div>
        <div className="max-w-screen-xl mx-auto py-20">
          {orderData.map((items) => {
            return <OrderItem items={items} />;
          })}
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
    </div>
  );
};
export default Orders;
