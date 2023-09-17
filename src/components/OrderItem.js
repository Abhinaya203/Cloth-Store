import React from "react";

const OrderItem = ({ items }) => {
  return (
    //console.log(items)
    <div>
      {items.map((item) => {
        return (
          <div
            key={item._id}
            className="flex items-center justify-between gap-6 mt-6 border-red-500"
          >
            <div className="flex items-center gap-2 ">
              <img
                className="w-32 h-32 object-cover"
                src={item.image}
                alt="cartimg"
              />
            </div>
            <h2 className="w-52">{item.title}</h2>
            {/* <p className="w-10">${item.price}</p> */}

            <p className="w-14">${item.quantity * item.price}</p>
          </div>
        );
      })}
      ,
    </div>
  );
};

export default OrderItem;
