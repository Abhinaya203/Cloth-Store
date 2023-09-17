import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div class="flex flex-wrap">
      <div class="w-full sm:w-1/2 p-4">
        <div className="relative">
          <div className=" flex p-20">
            <img
              className="w-screen"
              src="https://i.pinimg.com/736x/80/1f/41/801f4140da9ff323ad3b49ba6683755d--cali-pixel.jpg"
              alt="ImgOne"
              loading="priority"
            />
          </div>
        </div>
      </div>

      <div class="w-full sm:w-1/2 p-4">
        <div className="relative items-center py-10">
          <div className="  p-20 flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-4">
              <h1 className="text-2xl font-semibold mb-4 text-center py-3">
                Get exclusive deals and prices on latest products. Sale is live
                Now! Hurry Up!
              </h1>
            </div>

            <div className="flex flex-col items-center gap-4">
              <Link to="shop">
                <h1 className="text-2xl bg-[#3c4c60]  text-white py-2 w-80 text-center">
                  Shop Now
                </h1>
              </Link>

              <span className="w-20 h-[3px] bg-black"></span>
              <p className="max-w-[700px] text-grey-600  text-2xl font-semibold mb-4 text-center py-3">
                Grab new deals on featured products
              </p>
              <img
                src="https://assets.kotsovolos.gr/landing-pages/best-deals/best-deals-end.png"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
