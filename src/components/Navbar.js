import React from "react";
import NavLogo from "../Assests/logo-icon.png";

const Navbar = () => {
  return (
    <div className="flex justify-between pt-[19px] px-[39px]">
      <div className="flex gap-2 items-center">
        <img src={NavLogo} alt="" />
        <h3 className="text-[#5D2C02] font-bold">
          Fitness <span className="text-black">Hub</span>
        </h3>
      </div>
      <div className="flex items-center justify-center gap-[29px]">
        <ul className="flex gap-[29px] font-bold">
          <li>
            {" "}
            <a href="#"> Home</a>
          </li>
          <li>
            {" "}
            <a href="#"> Features</a>
          </li>
          <li>
            {" "}
            <a href="#"> How it works</a>
          </li>
          <li>
            {" "}
            <a href="#"> About Us</a>
          </li>
          <li>
            {" "}
            <a href="#"> Testimonial</a>
          </li>
          <li>
            {" "}
            <a href="#"> Blog</a>
          </li>
        </ul>
        <button className=" bg-[#FF7917] text-white rounded-[30px]   w-[126px] h-[38px] ">
          {" "}
          Get the App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
