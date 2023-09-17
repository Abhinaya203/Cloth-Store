import React from "react";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Featured Categories</h1>

      <div className="container mx-auto p-4">
        <div className="bg-white p-4">
          <h2 className="text-2xl font-semibold mb-4 text-center py-3">
            Choose a Category
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
            <Link to="/women">
              <div className=" text-center">
                <div className="w-32 h-32 bg-cover bg-center rounded-full mx-auto ">
                  <img
                    src="https://ae01.alicdn.com/kf/HTB1x0oUPVXXXXcKXpXXq6xXFXXXM/NFIVE-Brand-2017-New-Summer-Folk-Style-Slim-Waist-Cotton-Sleeveless-Dress-Fashion-Women-Clothing-Round.jpg"
                    alt="img"
                  />
                </div>

                <p className="mt-2">Women</p>
              </div>
            </Link>
            <Link to="/men">
              <div className="  text-center">
                <div className="w-32 h-30 bg-cover bg-center rounded-full mx-auto ">
                  <img
                    src="https://th.bing.com/th/id/OIP.Cq7PsV_k85LyD6EC7MWfWQHaHa?pid=ImgDet&rs=1"
                    alt="img"
                  />
                </div>
                <p className="mt-2">Men</p>
              </div>
            </Link>
            <Link to="/shoe">
              <div className="text-center">
                <div className="w-32 h-32 bg-cover bg-center rounded-full mx-auto ">
                  <img
                    src="https://m.media-amazon.com/images/I/71+14rdTPlL._UY625_.jpg"
                    alt="img"
                  />
                </div>
                <p className="mt-2">Shoes</p>
              </div>
            </Link>
            <Link to="/jew">
              <div className="  text-center">
                <div className="w-32 h-32 bg-cover bg-center rounded-full mx-auto ">
                  <img
                    src="https://th.bing.com/th/id/OIP.bT6r6Wdmg6HAnSXKNUXfTQHaE8?pid=ImgDet&rs=1"
                    alt="img"
                  />
                </div>
                <p className="mt-2">Jewellery</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
