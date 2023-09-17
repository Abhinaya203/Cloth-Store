import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#3c4c60]  text-white py-20">
      <div className="max-w-screen-xl mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <div className="flex flex-col gap-7">
          <h1 className="text-2xl font-semibold text-white mb-4">
            Cloth-Store
          </h1>

          <div className="flex gap-5 text-lg text-white">
            <TwitterIcon className="hover:text-[#040506]  duration-300 cursor-pointer" />
            <InstagramIcon className="hover:text-[#040506] duration-300 cursor-pointer" />
            <FacebookIcon className="hover:text-[#0a0b0c] duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 ">
            Useful Links
          </h2>
          <div className="flex flex-col gap-2 text-base  ">
            <Link to="/shop">
              <p className="flex items-center gap-3 hover:text-black duration-300 cursor-pointer">
                Shop
              </p>
            </Link>

            <Link to="/cart">
              <p className="flex items-center gap-3 hover:text-black duration-300 cursor-pointer">
                Cart
              </p>
            </Link>
            <Link to="/orders">
              <p className="flex items-center gap-3 hover:text-black duration-300 cursor-pointer">
                Orders
              </p>
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 ">Contact</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Hyderabad, Telangana, India</p>
            <p className="text-white text-sm tracking-wide ">
              clothstore@gmail.com
            </p>
            <p>+91 23462 87766</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
